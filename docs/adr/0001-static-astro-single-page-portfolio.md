# Rebuild the portfolio as a static Astro single-page site

The original site was a heavyweight jQuery/Bootstrap theme (~30 vendor JS libraries — revolution-slider, owl-carousel, cubeportfolio, mojs — plus LESS and a PHP mail script) that worked against the goal of a minimalist, fast, polished portfolio. We decided to delete it and rebuild from scratch as a single-page static site built with **Astro**, deployed on Netlify.

Astro was chosen over plain hand-written HTML/CSS (which tangles content with layout as it grows) and over Next.js/React (a heavier runtime that contradicts the minimalist, zero-JS-by-default aim). Astro ships no JavaScript by default, keeps content in data/Markdown separate from layout, and deploys to Netlify with no config — the best fit for a content-driven portfolio.

## Consequences

- Content is modelled as structured data (Experience, Project, Achievement, Competency — see `CONTEXT.md`) rather than hand-edited markup.
- The dead Universal Analytics tag and the non-functional `mail.php` form are dropped; contact is via direct email/LinkedIn links.
- Swapping away from Astro later would mean re-templating the whole site, hence this record.
