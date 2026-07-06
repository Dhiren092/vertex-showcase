/* Renders the shot detail page from the ?p=<slug> URL parameter.

   The clicked project appears first, then every other project of the
   SAME category follows below it — title, images, title, images —
   one continuous scroll. Other categories stay out of the page. */

(function () {
  const page = document.getElementById("shot-page");
  const slug = new URLSearchParams(window.location.search).get("p");
  const project = PROJECTS.find(function (p) {
    return p.slug === slug;
  });

  if (!project) {
    window.location.replace("index.html");
    return;
  }

  document.title = project.title + " | Vertex Experience";

  const cfg = SHOWCASE_CONFIG;

  /* Clicked project first, then the rest of its category in order. */
  const ordered = [project].concat(
    PROJECTS.filter(function (p) {
      return p.slug !== project.slug && p.category === project.category;
    })
  );

  function renderSection(p, index) {
    const heading =
      index === 0
        ? '<h1 class="shot-title">' + escapeHtml(p.title) + "</h1>"
        : '<h2 class="shot-title">' + escapeHtml(p.title) + "</h2>";

    const media =
      '<div class="shot-media">' +
      p.images
        .map(function (src, i) {
          return (
            '<img src="' + escapeHtml(src) + '" alt="' + escapeHtml(p.title) +
            " — image " + (i + 1) + '"' +
            (index === 0 && i === 0 ? "" : ' loading="lazy"') + ">"
          );
        })
        .join("") +
      "</div>";

    return '<section class="shot-section" id="' + escapeHtml(p.slug) + '">' + heading + media + "</section>";
  }

  const authorBlock =
    '<div class="author-block">' +
    '<div class="author-block-divider">' +
    '<img class="avatar avatar-lg" src="' + AVATAR_SVG + '" alt="">' +
    "</div>" +
    '<div class="author-block-name">' + escapeHtml(cfg.authorName) + "</div>" +
    '<p class="author-block-tagline">' + escapeHtml(cfg.tagline) + "</p>" +
    '<a class="btn-cta" href="' + cfg.contactUrl + '"><span>Get in touch</span></a>' +
    "</div>";

  page.innerHTML = ordered.map(renderSection).join("") + authorBlock;
})();
