# AGENTS.md

## Project

This is the Mon Amie Burger website, a Vite-powered static restaurant ordering/menu site. The main app files are `index.html`, `style.css`, `main.js`, `manifest.json`, and `sw.js`.

## Commands

- Install dependencies: `npm install`
- Start dev server: `npm run dev -- --host 127.0.0.1`
- Build: `npm run build`
- Preview build: `npm run preview -- --host 127.0.0.1`
- Ad-hoc checks: `test.js` (jsdom) and `test-puppeteer.js` (headless browser) are
  standalone scripts run with `node`; `npm test` is not wired up.

## Deployment

- Currently deployed via **GitHub Pages** with a custom domain — the root `CNAME`
  file controls it. Never modify or delete `CNAME` without asking.
- Pages serves the repo root (`index.html`, `main.js`, ...) directly. `dist/` is
  gitignored local build output (CI only runs `npm run build`); never commit it.
- A migration to **Cloudflare Pages** is planned (see the vault runbook). The
  domain carries live IONOS e-mail — MX/SPF/DMARC records must be migrated
  before any nameserver switch. Do not start this migration as a side effect
  of another task.

## Working Rules

- Preserve menu items, prices, category names, phone numbers, addresses, legal text, links, and order behavior unless the user explicitly asks to change them.
- Prefer the existing HTML, CSS, and JavaScript patterns over introducing new frameworks or dependencies.
- Ask before adding production dependencies.
- Do not remove service worker, manifest, SEO, analytics, icons, CSP, or structured data unless the task specifically requires it.

## Design Rules

- Use mobile-first responsive design.
- Match the current Mon Amie Burger brand and visual style unless the user asks for a redesign.
- Avoid overlap, clipping, accidental horizontal scroll, layout shift, unreadable text, and tiny tap targets.
- For cart, menu, category navigation, language controls, and order actions, prioritize quick mobile use.

## Content Protection

- Do not change prices unless explicitly requested.
- Do not change menu data, image mappings, translations, WhatsApp order formatting, delivery rules, or legal pages unless required by the task.
- Do not replace real menu images with unrelated decorative imagery.
- Legal pages such as `impressum.html` and `datenschutz.html` should only be edited for requested legal/content updates.

## Definition of Done (extends the global default)

- Gates: `npm run build` after code changes; `node test.js` / `node test-puppeteer.js` where they apply (`npm test` is not wired).
- Visual/device proof: `npm run dev -- --host 127.0.0.1` at a 390px viewport (and desktop) for cart, menu and layout changes; check horizontal scroll, clipped sticky controls, broken cart/order behavior; screenshot path in the report.
- Merge: squash PR against `main`.
- Deploy: merge to `main`; GitHub Pages serves the repo root (no `dist/`). Bump the `?v=` query on the `main.js`/`style.css` tags in `index.html` when they change.
- Live check: `curl -sI` on the domain in `CNAME` returns 200 and the changed page shows the change.
- User-only steps (report, do not attempt): prices, menu items, legal pages, WhatsApp order format, and the Cloudflare Pages migration (roadmap, not part of any task unless asked).

## Agent loop

- Menu data, translations, delivery rules and legal pages are out of scope unless the task names them (Content Protection above); the reviewer blocks on accidental edits there.
- A change to `main.js` or `style.css` without a bumped `?v=` in `index.html` is incomplete.

<!-- harness:shared v3 - source ~/.claude/templates/AGENTS-agent-loop.md; edit there -->

## Agent behaviour (shared)

- The main session orchestrates: it reads git, this file, state/plan files and agent
  reports; source, diffs, test output and data are read by subagents.
- Every dispatch names its model: Explore/haiku locate, worker/sonnet mechanical edit,
  worker/opus judgement or risk, reviewer/opus verdicts. Never fable as a subagent.
- Leave no artefacts: scratch output goes to the session scratchpad, not the repo root;
  delete or gitignore anything untracked you created before reporting DONE.
- Visual work (UI repos): the brief lists VISUAL ACCEPTANCE criteria and a
  "must not change" list; the reviewer compares before/after screenshots at
  the viewport or device this file's Definition of Done names, and the live URL
  or device after deploy. Two fixes on one subject = stop, re-scope.

<!-- /harness:shared -->
