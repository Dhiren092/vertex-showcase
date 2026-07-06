# Vertex Experience — Showcase

A Dribbble-style portfolio showcase for [vertexexperience.com](https://www.vertexexperience.com/),
built as static HTML/CSS/JS (no build step) so it can be uploaded to the same host as the main site.

Design language matched to the main site: Albert Sans headings, Inter body,
teal accent `#38aba7`, and the site's pill CTA with the circular fill hover animation.

## Two versions

| Folder | Experience |
|--------|-----------|
| [`showcase/`](showcase/) | **V1** — Dribbble-style grid of every shot (sorted by category) → click a shot to open a full scroll of that category's projects. |
| [`showcase-v2/`](showcase-v2/) | **V2** — Single cover per category (UI/UX design · Branding design). Click the cover to open a full-screen **lightbox** with left/right navigation through the whole category. Site nav mirrors vertexexperience.com with a "Showcase" link. |

## Structure (per version)

```
index.html          # entry page
css/showcase.css     # all styles
js/projects.js       # project data (single source of truth)
js/grid.js           # grid / cover + lightbox logic
fonts/               # self-hosted Albert Sans (same file as main site)
images/              # project images
```

## Run locally

```bash
npx http-server -p 8471 -c-1 .
# then open http://localhost:8471/showcase/  or  /showcase-v2/
```

## Deploy

Upload the `showcase/` (and/or `showcase-v2/`) folder to the web root next to the
existing site files → live at `vertexexperience.com/showcase/`. Add a "Showcase"
link to the main nav.
