# DevOps-Portfolio

| **Licence**  | [![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)  |
|---|---|
| **Deploy status**  |  [![Netlify Status](https://api.netlify.com/api/v1/badges/d0268492-3c13-4c56-aa3d-6c40adadfd0f/deploy-status)](https://app.netlify.com/sites/adityagundecha/deploys) |

The personal portfolio site for **Aditya Gundecha**, Lead Senior DevOps Engineer. A fast, minimalist single-page site built with [Astro](https://astro.build/).

## Tech

- **Astro** — static-site generator, ships zero JS by default
- Dark-first design with a light-mode toggle (CSS custom properties)
- Self-hosted fonts via `@fontsource` (Space Grotesk, Inter, JetBrains Mono)
- Deployed to [Netlify](https://www.netlify.com/)

## Getting Started

```bash
npm install      # install dependencies
npm run dev      # local dev server at http://localhost:4321
npm run build    # production build into ./dist
npm run preview  # preview the production build locally
```

### Prerequisites

- Node.js 22+
- VS Code (or any editor)

## Content

Site content lives as structured data in `src/data/`:

- `site.ts` — name, title, tagline, contact links, about
- `experience.ts` — career timeline
- `projects.ts` — flagship project case studies
- `skills.ts` — competencies and technical toolkit

Edit these files to update the site — no markup changes needed. The headshot and CV live in `public/`.

## Project Docs

- `CONTEXT.md` — domain glossary
- `docs/adr/` — architecture decision records
- `docs/agents/` — agent/issue-tracker conventions

## Deployment

Pushes to `master` trigger a GitHub Actions workflow that pings a Netlify build
webhook; Netlify builds with `npm run build` (see `netlify.toml`) and publishes
`dist/`.

## Author

**Aditya Gundecha**

## License

Licensed under the Apache 2.0 License.
