# AGENTS.md

## Project

This is the Mon Amie Burger website, a Vite-powered static restaurant ordering/menu site. The main app files are `index.html`, `style.css`, `main.js`, `manifest.json`, and `sw.js`.

## Commands

- Install dependencies: `npm install`
- Start dev server: `npm run dev -- --host 127.0.0.1`
- Build: `npm run build`
- Preview build: `npm run preview -- --host 127.0.0.1`

## Working Rules

- Inspect the existing structure before changing files.
- Keep changes focused on the user's request.
- Preserve menu items, prices, category names, phone numbers, addresses, legal text, links, and order behavior unless the user explicitly asks to change them.
- Prefer the existing HTML, CSS, and JavaScript patterns over introducing new frameworks or dependencies.
- Ask before adding production dependencies.
- Do not remove service worker, manifest, SEO, analytics, icons, CSP, or structured data unless the task specifically requires it.
- Turkish, English, or German short prompts should be interpreted in the context of this restaurant website.

## Design Rules

- Use mobile-first responsive design.
- Keep both desktop and mobile layouts intact.
- Match the current Mon Amie Burger brand and visual style unless the user asks for a redesign.
- Avoid overlap, clipping, accidental horizontal scroll, layout shift, unreadable text, and tiny tap targets.
- For cart, menu, category navigation, language controls, and order actions, prioritize quick mobile use.
- Keep typography readable and spacing practical for restaurant menu browsing.

## Content Protection

- Do not change prices unless explicitly requested.
- Do not change menu data, image mappings, translations, WhatsApp order formatting, delivery rules, or legal pages unless required by the task.
- Do not replace real menu images with unrelated decorative imagery.
- Legal pages such as `impressum.html` and `datenschutz.html` should only be edited for requested legal/content updates.

## Common Short Prompts

- "Ana sayfayi premium yap" means improve the home page visual polish while preserving content and functionality.
- "Mobil sepeti duzelt" means inspect the cart UI on an iPhone-sized viewport and fix overflow, clipping, tap target, sticky-position, or layout issues.
- "Menuyu guzellestir" means improve menu readability, spacing, hierarchy, images, and responsive behavior without changing prices or menu items.
- "SEO ekle" means improve title, description, Open Graph metadata, structured data, and heading structure without keyword stuffing.
- "Siparis akisini duzelt" means check cart, quantity controls, totals, delivery options, and WhatsApp message output.

## Verification

- Run `npm run build` after code changes when feasible.
- For visual/layout changes, start the dev server and verify desktop and mobile viewports.
- For mobile work, check an iPhone-sized viewport around 390px wide.
- Check for horizontal scrolling, clipped sticky controls, broken cart/order behavior, and unreadable menu cards.
- Summarize files changed, verification performed, and any remaining risks.
