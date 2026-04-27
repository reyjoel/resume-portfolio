# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # start dev server at http://localhost:5173
npm run build      # production build → dist/
npm run preview    # preview production build locally
npm test           # run all tests (Vitest)
npx vitest run src/hooks/useTime.test.js   # run a single test file
npx vitest run --reporter=verbose          # run all tests with full output
```

## Architecture

Single-page React 18 app built with Vite 6 and Tailwind CSS v4. No router — one page, six anchor-linked sections.

**Data flow:** All resume content is in `src/data.js` as a single `DATA` export. Every component imports only what it needs from `DATA`. To update resume content, edit only `src/data.js`.

**Component layers:**
- `src/components/` — page sections (TopBar, Hero, About, Experience, Skills, Projects, Contact). One file per section; each is a named export.
- `src/ui/` — reusable primitives used across sections: `Row` / `DRow` (key-value rows for light/dark backgrounds), `Stat` (numeric card), `InfoCard` (bordered card with title slot), `SectionHeader` (eyebrow + h2 + optional blurb).
- `src/hooks/useTime.js` — exports `useTime()` (live clock, updates every second) and `formatPHTime(d)` (formats a Date to HH:MM in Asia/Manila). Used by TopBar and Contact.

**Tailwind v4:** No `tailwind.config.js`. All design tokens live in the `@theme {}` block in `src/index.css`. Custom token names: `bg-ink`, `text-muted`, `text-accent`, `bg-surface`, `border-border`, `shadow-card`, `font-mono`, etc. Custom utilities (`.link-underline`, `.dot`, `.num-tabular`) are in `@layer utilities` in the same file.

**Key class name:** The accent-soft color is `bg-accent-soft` / `border-accent-soft` (kebab-case, matching the CSS variable `--color-accent-soft`). Do not use the old `bg-accentSoft` form.

## Adding a new section

1. Create `src/components/MySection.jsx` with a named export `export function MySection()`
2. Give the root element a unique `id` (e.g., `id="my-section"`)
3. Import and render it in `src/App.jsx`
4. Add a nav link in `src/components/TopBar.jsx`
5. Add any new data fields to `src/data.js`

## Testing

Tests use Vitest + `@testing-library/react`. Setup file: `src/test-setup.js` (imports `@testing-library/jest-dom`). Tests live next to the files they test (`useTime.test.js`, `App.test.jsx`). Vitest config is co-located in `vite.config.js` under the `test` key.

## Deployment

Deploy to Vercel. `vercel.json` sets `"framework": "vite"` and includes an SPA rewrite rule so direct URL hits resolve to `index.html`. Vercel will run `npm run build` automatically.
