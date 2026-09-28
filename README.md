# Mon Amie Burger

Vite-powered static restaurant ordering/menu website for Mon Amie Burger.

## Stack

Vite, vanilla HTML/CSS/JS. Ad-hoc checks: `test.js` (jsdom) and
`test-puppeteer.js` (headless browser) — `npm test` itself is not wired up.

## Run

- `npm install`
- `npm run dev -- --host 127.0.0.1` — local dev server
- `npm run build` — production build (commit the resulting `dist/`)

## Deploy

GitHub Pages serves the committed `dist/`, via the custom domain in `CNAME`
(`mon-amie-burger.de`). A migration to Cloudflare Pages is planned but not
started.

## Structure

Main app files: `index.html`, `style.css`, `main.js`, `manifest.json`, `sw.js`;
menu content under `menus/`.
