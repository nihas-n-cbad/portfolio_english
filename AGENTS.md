# Repo instructions

Read [`HANDOFF.md`](HANDOFF.md) for architecture, decisions, verified checks and known
gaps. This file is the short rulebook for changing the code.

## Layout & stack

- `frontend/` — React 19 + Vite 8 + Tailwind CSS v4 + shadcn/ui (Radix). TypeScript is
  strict; import via the `@/` alias (`@/components/...`, `@/lib/utils`).
- `backend/` — Express 5 API, ESM JavaScript (`src/server.js`), no database.
- Styling is Tailwind v4: tokens live in `frontend/src/index.css` under `@theme`. There is
  no `tailwind.config.js`; do not add one.

## Non-negotiables

1. **Full-bleed layout.** The design must span the whole browser width. Wrap every page
   section in `container-page` and never give it (or add equivalents of) a fixed
   `max-width`. Padding is `clamp(1.25rem, 5vw, 6rem)` — leave it fluid.
2. **Copy lives in `frontend/src/data/site.ts`.** Add or change content there, not inline
   in components, so the owner can edit one file.
3. **Use existing primitives.** shadcn/ui components are in `src/components/ui/`;
   compose them (add more with `npx shadcn@latest add <name>` matching
   `components.json`) instead of hand-rolling dialogs/inputs.
4. **Only the tokens that exist.** Use `cream`, `mist`, `mist-dim`, `page`, `surface*`,
   `line` and the display/serif/sans font stacks rather than new hex colours. The palette
   is deliberately near-monochrome.
5. **Motion is restrained.** One reveal per viewport, short hovers, and honour
   `prefers-reduced-motion` (the `Reveal` component already does).
6. **Accessibility stays.** Keep the skip link, visible focus ring, `aria-label`s on
   icon-only controls, and real buttons/links for interactive things (the project-card
   click target is an absolutely-positioned `<button>` with a descriptive label).
7. **Never commit** `.env*`, `backend/data/`, `node_modules/`, `dist/` or the dev logs.

## Commands

```bash
cd frontend && npm run dev       # 5173
cd backend  && npm run dev       # 4001
cd frontend && npm run lint      # oxlint  (must be 0 errors)
cd frontend && npm run build     # tsc -b + vite build (must pass)
```

## Definition of done

- `npm run lint` and `npm run build` pass in `frontend/`.
- The contact form still submits against the running backend
  (`POST http://localhost:4001/api/contact` returns `201` and a line lands in
  `backend/data/messages.jsonl`).
- The page has been looked at in a browser at ~1440 px **and** ~390 px, scrolled through
  every section, with the console checked for errors.

## Adding a section

1. Create `frontend/src/components/sections/<name>.tsx` exporting one component.
2. Start with `<section id="…" className="container-page pt-20 md:pt-24">`.
3. Use `SectionLabel` + `Reveal` from `@/components/reveal` for consistency.
4. Put any new strings in `src/data/site.ts`.
5. Add the section to `App.tsx` in reading order and to the nav in `site.ts` if it needs
   an anchor.

## Things that look like bugs but are not

- Brand icons in the footer are hand-drawn SVGs (`components/icons.tsx`) because
  lucide-react v1 dropped brand marks.
- `Number(process.env.PORT) || 4001` guards against a blank/`0` `PORT` variable.
- `tsconfig.app.json` has no `baseUrl`; TypeScript 6 deprecates it.
- The three project visuals are CSS mockups (`components/mockups.tsx`), not screenshots.
- The hero headline size/leading is tuned for the three short lines in `site.headline`
  ("Computer" / "Science" / "Engineer"). Longer or many more lines need their own tuning
  in `hero.tsx`; the mobile leading is deliberately looser than the desktop one.
