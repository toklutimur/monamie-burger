#!/usr/bin/env python3
import argparse
import html
import json
import os
import re
import sys
from pathlib import Path

import requests

BASE = "https://mon-amie-chicken.de"

CREDENTIALS = [
    (os.environ["WP_USER"], os.environ["WP_PASS"]),
]


def login():
    for username, password in CREDENTIALS:
        session = requests.Session()
        session.headers.update(
            {
                "User-Agent": "Mozilla/5.0 (WordPress design maintenance)",
                "Referer": f"{BASE}/wp-login.php",
            }
        )
        session.get(f"{BASE}/wp-login.php", timeout=30)
        session.post(
            f"{BASE}/wp-login.php",
            data={
                "log": username,
                "pwd": password,
                "wp-submit": "Log In",
                "redirect_to": f"{BASE}/wp-admin/",
                "testcookie": "1",
            },
            timeout=30,
            allow_redirects=False,
        )
        if any(
            cookie.name.startswith("wordpress_logged_in_")
            for cookie in session.cookies
        ):
            return session
    raise RuntimeError("WordPress login failed")


def api_nonce(session):
    response = session.get(f"{BASE}/wp-admin/", timeout=30)
    response.raise_for_status()
    patterns = [
        r'wpApiSettings\s*=\s*(\{.*?\});',
        r'"nonce"\s*:\s*"([a-zA-Z0-9]+)"',
    ]
    match = re.search(patterns[0], response.text, flags=re.S)
    if match:
        return json.loads(match.group(1))["nonce"]
    match = re.search(patterns[1], response.text)
    if match:
        return match.group(1)
    raise RuntimeError("REST API nonce not found")


def elementor_nonce(session, post_id):
    response = session.get(
        f"{BASE}/wp-admin/post.php",
        params={"post": post_id, "action": "elementor"},
        timeout=60,
    )
    response.raise_for_status()
    match = re.search(
        r'elementorCommonConfig\s*=\s*(\{.*?\});',
        response.text,
        flags=re.S,
    )
    if match:
        return json.loads(match.group(1))["ajax"]["nonce"]
    match = re.search(
        r'"ajax"\s*:\s*\{[^{}]*"nonce"\s*:\s*"([^"]+)"',
        response.text,
    )
    if match:
        return match.group(1)
    raise RuntimeError(f"Elementor nonce not found for page {post_id}")


def elementor_document(session, post_id):
    nonce = elementor_nonce(session, post_id)
    response = session.post(
        f"{BASE}/wp-admin/admin-ajax.php",
        data={
            "action": "elementor_ajax",
            "_nonce": nonce,
            "editor_post_id": str(post_id),
            "actions": json.dumps(
                {
                    "document": {
                        "action": "get_document_config",
                        "data": {"id": post_id},
                    }
                }
            ),
        },
        timeout=60,
    )
    response.raise_for_status()
    return nonce, response.json()


def data_shape(value, depth=0):
    if depth >= 8:
        return type(value).__name__
    if isinstance(value, dict):
        items = list(value.items())
        shaped = {
            key: data_shape(item, depth + 1)
            for key, item in items[:40]
        }
        if len(items) > 40:
            shaped["__remaining_keys__"] = len(items) - 40
        return shaped
    if isinstance(value, list):
        return {
            "type": "list",
            "length": len(value),
            "sample": data_shape(value[0], depth + 1) if value else None,
        }
    return type(value).__name__


def element_paths(value, path="$"):
    found = []
    if isinstance(value, dict):
        for key, item in value.items():
            child_path = f"{path}.{key}"
            if key == "elements":
                found.append(
                    {
                        "path": child_path,
                        "type": type(item).__name__,
                        "length": len(item) if isinstance(item, list) else None,
                        "sample_keys": list(item[0].keys())
                        if isinstance(item, list) and item and isinstance(item[0], dict)
                        else [],
                    }
                )
            found.extend(element_paths(item, child_path))
    elif isinstance(value, list):
        for index, item in enumerate(value[:6]):
            found.extend(element_paths(item, f"{path}[{index}]"))
    return found


def page_content():
    source = Path(__file__).with_name("monamie-wp-home-preview.html").read_text()
    style = re.search(r"(<style>.*?</style>)", source, flags=re.S).group(1)
    main = re.search(r"(<main class=\"ma-home\">.*?</main>)", source, flags=re.S).group(1)

    # The mock header belongs only to the local preview; these selectors style
    # the real Astra header and page shell in WordPress.
    wordpress_css = """
<style>
body.page-template-default { background: #f8f8f5; }
body.page-template-default .site-content > .ast-container {
  display: block; max-width: none; padding: 0; width: 100%;
}
body.page-template-default .content-area { width: 100%; margin: 0; }
body.page-template-default article { padding: 0 !important; }
body.page-template-default .entry-header { display: none; }
body.page-template-default .entry-content { margin: 0; }
.ast-primary-header-bar {
  background: rgba(255,255,255,.96);
  border-bottom: 1px solid #e8e5df;
  min-height: 86px;
}
.site-header { position: sticky; top: 0; z-index: 999; }
.site-header .custom-logo-link img { width: 190px; max-height: 70px; object-fit: contain; }
.main-header-menu > .menu-item > .menu-link {
  color: #111827; font-size: 13px; font-weight: 800; padding: 0 18px;
}
.main-header-menu > .menu-item > .menu-link:hover,
.main-header-menu > .current-menu-item > .menu-link { color: #f05a24; }
.main-header-menu > .menu-item:nth-child(2) > .menu-link {
  background: #111827; color: #fff; border-radius: 999px;
  height: 46px; margin-left: 8px; padding: 0 24px;
}
.site-footer, .site-below-footer-wrap {
  background: #111827 !important; color: #c4cad3;
}
.site-footer a { color: #fff; }
#cookie-law-info-bar {
  border-radius: 18px !important; box-shadow: 0 22px 70px rgba(17,24,39,.25) !important;
}
#cookie_action_close_header {
  background: #f05a24 !important; border-radius: 999px !important;
}
.joinchat__button { background: #25d366 !important; box-shadow: 0 10px 25px rgba(37,211,102,.28) !important; }
@media (max-width: 921px) {
  .ast-primary-header-bar { min-height: 72px; }
  .site-header .custom-logo-link img { width: 132px; max-height: 56px; }
  .ast-mobile-header-wrap .ast-primary-header-bar { padding: 0 12px; }
  .ast-button-wrap .menu-toggle.main-header-menu-toggle {
    color: #111827; border-radius: 12px; background: #f5efe6;
  }
}
</style>
"""
    return (
        "<!-- wp:html -->\n"
        + wordpress_css
        + style
        + main
        + site_enhancements()
        + "\n<!-- /wp:html -->"
    )


def html_asset(name):
    return Path(__file__).with_name(name).read_text() + site_enhancements()


def site_enhancements():
    return """
<style>
.site-footer{display:none!important}
.ma-custom-footer,.ma-custom-footer *{box-sizing:border-box}
.ma-custom-footer{background:#111827;color:#fff;font-family:Manrope,Arial,sans-serif;padding:64px 20px 26px}
.ma-custom-footer__inner{width:min(1240px,100%);margin:0 auto}
.ma-custom-footer__top{display:grid;grid-template-columns:1.1fr .8fr 1fr;gap:55px;padding-bottom:46px}
.ma-custom-footer__brand img{width:190px;max-height:76px;object-fit:contain;filter:brightness(0) invert(1)}
.ma-custom-footer__brand p{max-width:360px;margin:18px 0 0;color:#9ca3af;font-size:13px;line-height:1.8}
.ma-custom-footer__title{display:block;margin-bottom:18px;color:#f05a24;font-size:10px;font-weight:900;letter-spacing:.15em;text-transform:uppercase}
.ma-custom-footer__links{display:grid;gap:12px}
.ma-custom-footer__links a,.ma-custom-footer__contact a{color:#fff!important;text-decoration:none;font-size:14px;font-weight:700}
.ma-custom-footer__links a:hover,.ma-custom-footer__contact a:hover{color:#ff8b62!important}
.ma-custom-footer__contact p{margin:0 0 12px;color:#c4cad3;font-size:13px;line-height:1.7}
.ma-custom-footer__bottom{border-top:1px solid rgba(255,255,255,.1);padding-top:24px;display:flex;justify-content:space-between;gap:20px;color:#737c8c;font-size:11px}
@media(max-width:760px){
 .ma-custom-footer{padding:48px 24px 22px}.ma-custom-footer__top{grid-template-columns:1fr;gap:34px;padding-bottom:38px}
 .ma-custom-footer__brand img{width:155px}.ma-custom-footer__bottom{flex-direction:column}
}
</style>
<footer class="ma-custom-footer">
  <div class="ma-custom-footer__inner">
    <div class="ma-custom-footer__top">
      <div class="ma-custom-footer__brand">
        <img src="https://mon-amie-chicken.de/wp-content/uploads/2023/11/logo.png" alt="Mon Amie Chicken">
        <p>Burger, knuspriges Chicken und Grill-Spezialitäten – täglich frisch im Herzen von Clausthal-Zellerfeld.</p>
      </div>
      <div>
        <span class="ma-custom-footer__title">Navigation</span>
        <nav class="ma-custom-footer__links" aria-label="Footer Navigation">
          <a href="https://mon-amie-chicken.de/">Home</a>
          <a href="https://mon-amie-burger.de/">Speisekarte</a>
          <a href="https://mon-amie-chicken.de/about-us/">Über Uns</a>
          <a href="https://mon-amie-chicken.de/contact-us/">Kontakt</a>
        </nav>
      </div>
      <div class="ma-custom-footer__contact">
        <span class="ma-custom-footer__title">Besuche uns</span>
        <p>Adolph-Roemer-Straße 9<br>38678 Clausthal-Zellerfeld</p>
        <p>Täglich 11:30–22:00 Uhr</p>
        <a href="tel:+4915253415522">+49 1525 3415522</a>
      </div>
    </div>
    <div class="ma-custom-footer__bottom"><span>© 2026 Mon Amie Chicken</span><span>Frisch zubereitet. Persönlich serviert.</span></div>
  </div>
</footer>
<script>
document.addEventListener('DOMContentLoaded',function(){
  var chat=document.querySelector('.joinchat');
  var touched=false;
  if(!chat)return;
  var button=chat.querySelector('.joinchat__button');
  if(button)button.addEventListener('click',function(){touched=true;},{capture:true});
  window.setTimeout(function(){
    if(!touched)chat.classList.remove('joinchat--chatbox');
  },1800);
});
</script>
"""


def elementor_elements(markup, prefix):
    return [
        {
            "id": f"{prefix}sec",
            "elType": "section",
            "settings": {
                "layout": "full_width",
                "stretch_section": "section-stretched",
                "content_width": {"unit": "px", "size": 1600, "sizes": []},
                "gap": "no",
            },
            "elements": [
                {
                    "id": f"{prefix}col",
                    "elType": "column",
                    "settings": {"_column_size": 100, "_inline_size": None},
                    "elements": [
                        {
                            "id": f"{prefix}html",
                            "elType": "widget",
                            "widgetType": "html",
                            "settings": {"html": markup},
                            "elements": [],
                        }
                    ],
                    "isInner": False,
                }
            ],
            "isInner": False,
        }
    ]


def save_elementor(session, post_id, elements):
    nonce = elementor_nonce(session, post_id)
    response = session.post(
        f"{BASE}/wp-admin/admin-ajax.php",
        data={
            "action": "elementor_ajax",
            "_nonce": nonce,
            "editor_post_id": str(post_id),
            "actions": json.dumps(
                {
                    "save": {
                        "action": "save_builder",
                        "data": {
                            "status": "publish",
                            "elements": elements,
                            "settings": {},
                        },
                    }
                }
            ),
        },
        timeout=90,
    )
    response.raise_for_status()
    body = response.json()
    saved = body.get("data", {}).get("responses", {}).get("save", {})
    if not saved.get("success"):
        raise RuntimeError(f"Elementor save failed for page {post_id}: {saved}")
    return body


def current_elementor_elements(session, post_id):
    _, document = elementor_document(session, post_id)
    response = document.get("data", {}).get("responses", {}).get("document", {})
    if not response.get("success"):
        raise RuntimeError(f"Could not back up Elementor page {post_id}")
    return response.get("data", {}).get("elements", [])


def update_page_metadata(session, headers, post_id, title, excerpt):
    response = session.post(
        f"{BASE}/wp-json/wp/v2/pages/{post_id}",
        headers=headers,
        data=json.dumps({"title": title, "excerpt": excerpt}),
        timeout=60,
    )
    response.raise_for_status()


def update_navigation(session, headers):
    response = session.get(
        f"{BASE}/wp-json/wp/v2/menu-items",
        params={"per_page": 100, "context": "edit"},
        headers=headers,
        timeout=30,
    )
    if response.status_code != 200:
        return []
    updated = []
    for item in response.json():
        url = item.get("url", "").rstrip("/")
        title = html.unescape(item.get("title", {}).get("rendered", ""))
        desired = None
        if url.endswith("/contact-us"):
            desired = "Kontakt"
        elif url.endswith("/about-us"):
            desired = "Über Uns"
        if desired and title != desired:
            saved = session.post(
                f"{BASE}/wp-json/wp/v2/menu-items/{item['id']}",
                headers=headers,
                data=json.dumps({"title": desired}),
                timeout=30,
            )
            saved.raise_for_status()
            updated.append({"id": item["id"], "title": desired})
    return updated


def inspect(session):
    nonce = api_nonce(session)
    headers = {"X-WP-Nonce": nonce}
    me = session.get(f"{BASE}/wp-json/wp/v2/users/me", headers=headers, timeout=30)
    pages = session.get(
        f"{BASE}/wp-json/wp/v2/pages",
        params={"per_page": 100, "context": "edit"},
        headers=headers,
        timeout=30,
    )
    elementor = {}
    for page_id in (531, 533, 537):
        try:
            _, document = elementor_document(session, page_id)
            response = document.get("data", {}).get("responses", {}).get("document", {})
            response_data = response.get("data", {})
            elementor[str(page_id)] = {
                "success": response.get("success"),
                "code": response.get("code"),
                "response_data_keys": list(response_data.keys())
                if isinstance(response_data, dict)
                else [],
                "root_elements": len(response_data.get("elements", []))
                if isinstance(response_data, dict)
                else 0,
            }
        except Exception as error:
            elementor[str(page_id)] = {"error": str(error)}
    public_pages = {}
    anonymous = requests.Session()
    anonymous.headers.update(
        {"User-Agent": "Mozilla/5.0 (Mon Amie public design verification)"}
    )
    for path, marker in {
        "/": 'class="ma-home"',
        "/about-us/": 'class="ma-about"',
        "/contact-us/": 'class="ma-contact"',
    }.items():
        response = anonymous.get(
            f"{BASE}{path}?public-check=202607291845",
            timeout=60,
        )
        public_pages[path] = {
            "status": response.status_code,
            "new_design": marker in response.text,
            "cache": {
                key: value
                for key, value in response.headers.items()
                if "cache" in key.lower() or key.lower() in {"age", "server"}
            },
        }
    print(
        json.dumps(
            {
                "authenticated": me.status_code == 200,
                "can_edit": bool(me.json().get("capabilities", {}).get("edit_pages"))
                if me.status_code == 200
                else False,
                "pages": [
                    {
                        "id": page["id"],
                        "slug": page["slug"],
                        "status": page["status"],
                        "title": html.unescape(page["title"]["rendered"]),
                    }
                    for page in pages.json()
                ]
                if pages.status_code == 200
                else [],
                "elementor": elementor,
                "public_pages": public_pages,
            },
            ensure_ascii=False,
            indent=2,
        )
    )


def apply(session):
    nonce = api_nonce(session)
    headers = {"X-WP-Nonce": nonce, "Content-Type": "application/json"}
    original_front_page = 531
    original_elementor = {
        533: current_elementor_elements(session, 533),
        537: current_elementor_elements(session, 537),
    }
    changed_elementor = []
    pages = session.get(
        f"{BASE}/wp-json/wp/v2/pages",
        params={"slug": "home-modern", "context": "edit"},
        headers=headers,
        timeout=30,
    )
    pages.raise_for_status()
    payload = {
        "title": "Mon Amie Chicken – Burger, Chicken & Grill",
        "slug": "home-modern",
        "status": "publish",
        "content": page_content(),
        "excerpt": "Burger, knuspriges Chicken und Grill-Spezialitäten in Clausthal-Zellerfeld – frisch zubereitet, zur Abholung oder Lieferung.",
        "template": "",
    }
    if pages.json():
        page_id = pages.json()[0]["id"]
        response = session.post(
            f"{BASE}/wp-json/wp/v2/pages/{page_id}",
            headers=headers,
            data=json.dumps(payload),
            timeout=60,
        )
    else:
        response = session.post(
            f"{BASE}/wp-json/wp/v2/pages",
            headers=headers,
            data=json.dumps(payload),
            timeout=60,
        )
    response.raise_for_status()
    page_id = response.json()["id"]

    try:
        save_elementor(
            session,
            533,
            elementor_elements(
                html_asset("monamie-wp-about.html"),
                "maab",
            ),
        )
        changed_elementor.append(533)
        save_elementor(
            session,
            537,
            elementor_elements(
                html_asset("monamie-wp-contact.html"),
                "maco",
            ),
        )
        changed_elementor.append(537)
        update_page_metadata(
            session,
            headers,
            533,
            "Über Uns",
            "Seit 2020 ist Mon Amie das familiengeführte Restaurant für Burger, Chicken und Grill-Spezialitäten in Clausthal-Zellerfeld.",
        )
        update_page_metadata(
            session,
            headers,
            537,
            "Kontakt",
            "Adresse, Telefonnummer und Öffnungszeiten von Mon Amie Chicken in Clausthal-Zellerfeld.",
        )
        navigation = update_navigation(session, headers)
        save = session.post(
            f"{BASE}/wp-json/wp/v2/settings",
            headers=headers,
            data=json.dumps(
                {
                    "show_on_front": "page",
                    "page_on_front": page_id,
                    "page_for_posts": 0,
                }
            ),
            timeout=60,
        )
        save.raise_for_status()
        checks = {
            "/": ('class="ma-home"', "Heiß. Kross."),
            "/about-us/": ('class="ma-about"', "Seit 2020."),
            "/contact-us/": ('class="ma-contact"', "Komm vorbei."),
        }
        verified = {}
        anonymous = requests.Session()
        anonymous.headers.update(
            {"User-Agent": "Mozilla/5.0 (Mon Amie public design verification)"}
        )
        for path, markers in checks.items():
            public = anonymous.get(
                f"{BASE}{path}?design-check=202607291850",
                timeout=60,
            )
            verified[path] = (
                public.status_code == 200
                and all(marker in public.text for marker in markers)
                and "https://mon-amie-burger.de/" in public.text
                and 'class="ma-custom-footer"' in public.text
            )
        if not all(verified.values()):
            raise RuntimeError(f"Public verification failed: {verified}")
    except Exception:
        for post_id in reversed(changed_elementor):
            save_elementor(session, post_id, original_elementor[post_id])
        nonce = api_nonce(session)
        session.post(
            f"{BASE}/wp-json/wp/v2/settings",
            headers={"X-WP-Nonce": nonce, "Content-Type": "application/json"},
            data=json.dumps(
                {
                    "show_on_front": "page",
                    "page_on_front": original_front_page,
                    "page_for_posts": 0,
                }
            ),
            timeout=60,
        ).raise_for_status()
        raise
    print(
        json.dumps(
            {
                "published": True,
                "page_id": page_id,
                "front_page": page_id,
                "elementor_pages": [533, 537],
                "navigation_updated": navigation,
                "public_verified": verified,
            }
        )
    )


def rollback(session):
    nonce = api_nonce(session)
    response = session.post(
        f"{BASE}/wp-json/wp/v2/settings",
        headers={"X-WP-Nonce": nonce, "Content-Type": "application/json"},
        data=json.dumps(
            {
                "show_on_front": "page",
                "page_on_front": 531,
                "page_for_posts": 0,
            }
        ),
        timeout=60,
    )
    response.raise_for_status()
    print(json.dumps({"rolled_back": True, "front_page": 531}))


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("action", choices=["inspect", "apply", "rollback"])
    args = parser.parse_args()
    session = login()
    if args.action == "inspect":
        inspect(session)
    elif args.action == "apply":
        apply(session)
    else:
        rollback(session)


if __name__ == "__main__":
    try:
        main()
    except Exception as error:
        print(f"ERROR: {error}", file=sys.stderr)
        raise
