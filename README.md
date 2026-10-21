# Portfolio — Computer Science Engineer

A dark, editorial portfolio site for a computer science engineer (React + Tailwind CSS
v4 + shadcn/ui) with an Express contact API. The layout is full-bleed: it spans the entire browser width with fluid
padding and type instead of sitting inside a fixed max-width container.

![stack](https://img.shields.io/badge/React-19-149eca) ![stack](https://img.shields.io/badge/Tailwind-v4-38bdf8) ![stack](https://img.shields.io/badge/Express-5-000000)

## Structure

```
.
├── frontend/                 # React + Vite + Tailwind v4 + shadcn/ui
│   ├── public/
│   │   ├── fonts/            # self-hosted Anton, Instrument Serif, Inter
│   │   ├── images/           # portrait.jpg, chrome.jpg (placeholder art)
│   │   └── favicon.svg
│   └── src/
│       ├── components/
│       │   ├── sections/     # hero, featured-work, capabilities, contact-cta
│       │   ├── ui/           # shadcn/ui primitives (button, dialog, input, …)
│       │   ├── contact-dialog.tsx
│       │   ├── icons.tsx     # monogram, arrows, sparkle, brand marks
│       │   ├── mockups.tsx   # CSS project visuals
│       │   ├── reveal.tsx    # scroll reveal + shared bits
│       │   └── site-header.tsx, site-footer.tsx
│       ├── data/site.ts      # ALL copy lives here
│       ├── lib/api.ts        # contact API client
│       └── index.css         # design tokens (@theme), fonts, utilities
└── backend/                  # Express contact API (Node 20+)
    ├── src/server.js
    └── .env.example
```

## Quick start

Two terminals (Node 20+ required):

```bash
# 1 — contact API on http://localhost:4001
cd backend
npm install
cp .env.example .env          # optional: fill in SMTP settings
npm run dev

# 2 — frontend on http://localhost:5173
cd frontend
npm install
npm run dev
```

Vite proxies `/api/*` to `http://localhost:4001`, so the contact form works in dev
without any extra configuration.

## Scripts

| Location   | Command           | Does                                  |
| ---------- | ----------------- | ------------------------------------- |
| `frontend` | `npm run dev`     | Vite dev server with HMR               |
| `frontend` | `npm run build`   | `tsc -b` typecheck + production build  |
| `frontend` | `npm run lint`    | oxlint                                 |
| `frontend` | `npm run preview` | Serve the production build             |
| `backend`  | `npm run dev`     | Express API with `--watch`             |
| `backend`  | `npm start`       | Express API                            |

## Editing the content

Almost everything visible on the page comes from
[`frontend/src/data/site.ts`](frontend/src/data/site.ts) — name, monogram, nav, eyebrow,
the hero headline lines, stats, projects, capabilities, tools, certifications, process
steps, CTA copy, socials and contact details. Change the values there; no component edits
are needed.

Contact details already point at the owner:

- `email` — nihas.n2026@vitstudent.ac.in, `emailAlt` — nihasraihan8@gmail.com (both shown
  in the closing panel, the primary is used by the contact dialog),
- `phone` — +91 9400503008, `location` — Vellore, Tamil Nadu, India.

Still placeholders, replace before going live:

- `public/images/chrome.jpg` (abstract stock placeholder used by the branding card and the
  closing panel),
- `public/resume.pdf` (the "Download resume" link currently points at a file that is not
  in the repo yet),
- `name`, `monogram` and the social links in `site.ts`.

`public/images/portrait.jpg` is the owner's real portrait. Its framing is tuned in
`components/sections/hero.tsx` (object position, top/bottom masks, fade below chest);
swapping the photo means re-tuning those values.

## Deployment

`frontend` builds to static files (`npm run build` → `frontend/dist`) and can be hosted
anywhere. The backend can also serve them: build the frontend, set `SERVE_STATIC=true`
and the Express app serves `frontend/dist` with an SPA fallback. Without SMTP configured,
enquiries are persisted to `backend/data/messages.jsonl`.

## More docs

- [`HANDOFF.md`](HANDOFF.md) — current state, architecture and next steps
- [`AGENTS.md`](AGENTS.md) — instructions for AI agents or new contributors
