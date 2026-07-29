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
    if depth >= 4:
        return type(value).__name__
    if isinstance(value, dict):
        return {key: data_shape(item, depth + 1) for key, item in value.items()}
    if isinstance(value, list):
        return {
            "type": "list",
            "length": len(value),
            "sample": data_shape(value[0], depth + 1) if value else None,
        }
    return type(value).__name__


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
    return "<!-- wp:html -->\n" + wordpress_css + style + main + "\n<!-- /wp:html -->"


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
            elementor[str(page_id)] = data_shape(document)
        except Exception as error:
            elementor[str(page_id)] = {"error": str(error)}
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
            },
            ensure_ascii=False,
            indent=2,
        )
    )


def apply(session):
    nonce = api_nonce(session)
    headers = {"X-WP-Nonce": nonce, "Content-Type": "application/json"}
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
    public = session.get(f"{BASE}/?modern-home-check=20260729", timeout=60)
    public_ok = (
        public.status_code == 200
        and 'class="ma-home"' in public.text
        and "Heiß. Kross." in public.text
        and "https://mon-amie-burger.de/" in public.text
    )
    if not public_ok:
        rollback(session)
        raise RuntimeError("Public verification failed; original homepage restored")
    print(
        json.dumps(
            {
                "published": True,
                "page_id": page_id,
                "front_page": page_id,
                "public_verified": True,
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
