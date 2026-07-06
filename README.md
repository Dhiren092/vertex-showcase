# Vertex Experience — Showcase

A portfolio showcase for [vertexexperience.com](https://www.vertexexperience.com/),
built as static HTML/CSS/JS (no build step) so it can be uploaded to the same host
as the main site.

Design language matched to the main site: Albert Sans headings, Inter body,
teal accent `#38aba7`, and the site's pill CTA with the circular fill hover
animation. The top nav mirrors vertexexperience.com with an added "Showcase" link.

## Experience

Two categories, chosen with the filter chips:

- **UI/UX design** — a single cover; clicking it opens a full-screen **lightbox**
  that browses the whole curated image sequence (left/right arrows, keyboard,
  swipe; Esc or backdrop to close).
- **Branding design** — a grid of branding projects (KEV Car Rental, MauStudy,
  NoirLab, PowerTune, Reconnect). Clicking a project opens a lightbox with only
  that project's images, in file-name order.

## Structure

```
showcase/
├── index.html          # entry page
├── css/showcase.css    # all styles
├── js/grid.js          # cover / branding grid + lightbox logic
├── fonts/              # self-hosted Albert Sans (same file as main site)
└── images/
    ├── v2/             # UI/UX design sequence (Frame 4 … Frame 59)
    └── branding/       # one folder per branding project
```

### Editing content

- **UI/UX sequence** and **branding covers/order** are defined at the top of
  [`showcase/js/grid.js`](showcase/js/grid.js) (the `UI_COVER`, `UIUX_SLIDES`
  loop, and the `BRANDING` array). Drop images into the matching `images/`
  folder and update those entries.

## Run locally

```bash
npx http-server -p 8471 -c-1 .
# then open http://localhost:8471/showcase/
```

## Deploy

Upload the `showcase/` folder to the web root next to the existing site files →
live at `vertexexperience.com/showcase/`. Add a "Showcase" link to the main nav.
