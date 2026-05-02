# Resume Portfolio — Rey Joel L. Matugas

Personal resume/portfolio site for Rey Joel L. Matugas, Senior Full Stack Engineer. Built with React 18, Vite 6, and Tailwind CSS v4.

## Tech Stack

- **React 18** — UI
- **Vite 6** — build tool and dev server
- **Tailwind CSS v4** — styling (config via `src/index.css` `@theme {}` block, no `tailwind.config.js`)
- **Vitest** + **Testing Library** — unit tests

## Getting Started

```bash
npm install
npm run dev       # http://localhost:5173
```

## Commands

| Command | Description |
|---|---|
| `npm run dev` | Start dev server |
| `npm run build` | Production build → `dist/` |
| `npm run preview` | Preview production build locally |
| `npm test` | Run all tests |

## Project Structure

```
src/
  data.js          # All resume content (single source of truth)
  App.jsx          # Root component, section layout
  index.css        # Tailwind theme tokens and custom utilities
  components/      # Page sections: TopBar, Hero, About, Experience, Skills, Projects, Contact
  ui/              # Reusable primitives: Row, DRow, Stat, InfoCard, SectionHeader
  hooks/
    useTime.js     # Live clock (Asia/Manila timezone)
```

All resume content lives in `src/data.js`. To update content, edit only that file.

## Deployment

Deployed to Vercel. `vercel.json` sets `"framework": "vite"` with an SPA rewrite rule. Vercel runs `npm run build` automatically on push.
