# Handoff — Portfolio (Computer Science Engineer)

Written 2026‑10‑17, content retargeted to computer science 2026‑10‑21. Read this first if
you are picking the project up (human or model).

## 1. What this is

A single-page portfolio for a computer science engineer, built to match a supplied dark
editorial mock (heavy condensed display type, photograph bleeding into the headline,
bordered panels, uppercase micro-labels). It is a React SPA plus a small contact API.

Content model: the hero headline is "COMPUTER / SCIENCE / ENGINEER" (three lines, read
from `site.headline`), the featured projects are engineering case studies, the skills
panel lists full-stack/backend/database/cloud/testing/performance, and the tools grid is
the developer stack (React, TypeScript, Next.js, Node.js, Python, PostgreSQL, Docker,
AWS, Git). All of it is copy in `frontend/src/data/site.ts`.

Requirement that shaped the layout: **the design must stretch from one edge of the
browser to the other** — there is no fixed-width container anywhere.

## 2. Current status

Done and verified:

| Area | State |
| --- | --- |
| Hero (eyebrow, three-line headline, portrait, CTAs, availability note, stats bar) | ✅ matches mock |
| Featured Work (3 cards, CSS mockups, hover, detail dialog) | ✅ |
| Core Capabilities + Tools + Certifications | ✅ two-column panel grid |
| Engineering Process (5 steps with dashed connectors) | ✅ |
| Closing CTA panel + footer | ✅ |
| Contact dialog → Express API → stored enquiry | ✅ tested end to end |
| Mobile layout (390 px) | ✅ checked |
| `npm run lint`, `npm run build` | ✅ pass (2 Fast-Refresh warnings only) |

Not done yet (deliberately out of scope so far):

- `public/resume.pdf` does not exist, so **Download resume** is a dead link.
- Project cards open a detail **dialog**; there are no `/work/:slug` pages.
- Images in `public/images/` are placeholder stock photos (portrait + chrome abstract).
- No tests (no unit, no e2e) and no CI.
- No SMTP provider is configured, so enquiries are written to
  `backend/data/messages.jsonl` and not emailed.
- No analytics, sitemap, robots.txt, favicon variants or OG image.
- The npm registry packages were installed but `frontend/node_modules` is gitignored —
  a fresh clone needs `npm install` in both folders.

## 3. How to run

```bash
# backend
cd backend && npm install && npm run dev     # http://localhost:4001

# frontend (separate terminal)
cd frontend && npm install && npm run dev    # http://localhost:5173
```

Vite proxies `/api` → `localhost:4001`, so the form works in dev with no env setup.

## 4. Architecture

### Layout rule (important)

`container-page` in `frontend/src/index.css` is the only layout primitive:

```css
@utility container-page {
  width: 100%;
  padding-inline: clamp(1.25rem, 5vw, 6rem);
}
```

Full width, no `max-width`, `margin-inline: auto` removed. Padding scales with the
viewport the way the mock's margins do. Every section uses it.

Two things scale with the viewport to keep the full-bleed composition intact:

- the hero headline — `clamp(4.2rem, 12vw, 12.5rem)`,
- the hero portrait — `w-[51%]`, `h-[clamp(520px,52vw,1000px)]`.

Feature cards keep the mock's wide proportions: `aspect-[4/5] sm:aspect-[7/6]`.

### Frontend

| File | Responsibility |
| --- | --- |
| `src/App.tsx` | page composition + skip link |
| `src/components/site-header.tsx` | sticky header, mobile full-screen menu |
| `src/components/sections/hero.tsx` | headline, portrait (nested edge masks), stats |
| `src/components/sections/featured-work.tsx` | 3-up card grid + project dialog |
| `src/components/sections/capabilities.tsx` | capabilities, tools, certifications, process |
| `src/components/sections/contact-cta.tsx` | closing CTA panel |
| `src/components/mockups.tsx` | Finance / Brand / Wellness card artwork, pure CSS + one image |
| `src/components/contact-dialog.tsx` | shadcn Dialog + form states (idle/sending/sent/error) |
| `src/components/reveal.tsx` | `Reveal` scroll animation, `useScrolled`, `SectionLabel` |
| `src/components/icons.tsx` | monogram, arrows, sparkle, custom brand marks |
| `src/lib/api.ts` | `sendContactMessage()` POST `/api/contact` |
| `src/data/site.ts` | every string on the page |

### Design system

Defined once in `frontend/src/index.css` under `@theme` (Tailwind v4 — there is **no**
`tailwind.config.js`): fonts (`--font-display` Anton, `--font-serif` Instrument Serif,
`--font-sans` Inter), surfaces (`page`, `surface`, `surface-2`, `surface-3`), lines, and
`cream` / `mist` / `mist-dim` text tones. Fonts are self-hosted in `public/fonts` via
`@font-face`.

Custom utilities: `container-page`, `eyebrow`, `label-xs`, `grain` (page-wide film
grain), `rule-fade`, `link-underline`, `text-outline`.

Interaction budget: one entrance animation per viewport (`Reveal`), hover states only,
and everything collapses under `prefers-reduced-motion`.

### Backend

`backend/src/server.js`, plain Express 5, no database:

- `GET /api/health` → `{ ok, emailDelivery: 'smtp' | 'stored-only' }`
- `POST /api/contact` → validates (`name` 2–80, RFC-ish email, `message` 10–2000,
  `projectType` allow-list), rate limits 5 requests / 10 min / IP, appends the submission
  as one JSON line to `backend/data/messages.jsonl`, then emails it if SMTP is configured.
- CORS allows only `ALLOWED_ORIGIN` (default the Vite dev origin); body limit 24 kb;
  JSON parse errors return 400; `SERVE_STATIC=true` serves `frontend/dist` with an SPA
  fallback for self-hosting.

Env vars are documented in `backend/.env.example`. Copy to `.env` (gitignored).

### Contact flow

`contact-dialog.tsx` → `lib/api.ts` → `POST /api/contact` → validation → JSONL file →
optional SMTP. The dialog has four states and shows server validation messages instead of
guessing, so a rejected form never looks like a success.

Contact details live in `site.ts` and are shown in the closing panel: both addresses
(`email`, `emailAlt`), the phone as a `tel:` link, and the location as plain text. The
dialog's "or email" line uses the primary address. The project-type allow-list is
`Full-stack build | Front-end work | Backend / API | Other` and must stay in sync between
`site.ts`/`contact-dialog.tsx` and `PROJECT_TYPES` in `backend/src/server.js`.

## 5. Verified during the handoff session

- `cd frontend && npm run lint` → 0 errors (2 Fast-Refresh warnings, expected for
  shadcn/ui + hook co-exports).
- `cd frontend && npm run build` → `tsc -b` clean, 2 407 modules, ~473 kB JS / 57 kB CSS.
- `curl http://localhost:4001/api/health` → `{"ok":true,"emailDelivery":"stored-only"}`.
- Valid POST → `201 {"ok":true,…}` and the line appears in `messages.jsonl`;
  invalid POST → `422` with per-field errors.
- Browser: submitted the dialog with real input, saw the "Message sent." state, and
  confirmed the stored record contained the same name/email/message.
- Browser: 1440 px and 390 px widths, plus the project detail dialog; console clean
  (only the Vite dev connection logs).

Re-verify after any change with those four steps — lint, build, POST the API, and look at
the page at both widths.

## 6. Gotchas discovered the hard way

- `lucide-react` v1 **removed brand icons**. LinkedIn/Behance/Instagram/Dribbble are
  hand-drawn SVGs in `src/components/icons.tsx`; do not re-add those imports.
- TypeScript 6 deprecates `baseUrl`. The `@/*` alias in `tsconfig.app.json` relies on
  `paths` alone, resolved relative to the tsconfig.
- Vite 8 warns about `__dirname` in `vite.config.ts`; it uses `import.meta.dirname`.
- An empty `PORT` environment variable makes `Number(process.env.PORT)` equal `0`; the
  server reads `Number(process.env.PORT) || 4001` on purpose.
- `backend/data/`, `frontend/dist/`, `.env*` and the dev logs are gitignored — never
  commit enquiries, secrets or build output.
- The reference mock is a full-page screenshot of a ~1440 px design; multiply its pixel
  measurements by ≈1.95 to compare against this build.

## 7. Suggested next steps

1. Replace the placeholder images and drop in `public/resume.pdf`.
2. Configure SMTP (`CONTACT_TO` + `SMTP_*`) so enquiries reach an inbox, or swap the
   transport for a transactional email API.
3. Add `/work/:slug` case-study routes with real content instead of one dialog.
4. Add SEO/social extras: `robots.txt`, `sitemap.xml`, OG image, per-route meta.
5. Add tests: unit tests for `validate()`/rate limiting, and one Playwright flow for the
   contact form.
6. Deployment: static host for `frontend/dist` + the API as a small server, or
   `SERVE_STATIC=true` on one host.
