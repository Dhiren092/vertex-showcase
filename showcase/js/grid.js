/* Renders the shot grid and wires up filtering + search.

   Every image of every project is a tile in the grid, sorted by
   project category (Web design → Mobile application → Branding →
   Others), keeping each project's images in order. */

(function () {
  const grid = document.getElementById("grid");
  const filters = document.getElementById("filters");
  const searchInput = document.getElementById("search-input");

  const CATEGORY_ORDER = ["Web design", "Mobile application", "Branding", "Others"];

  /* Flatten PROJECTS into one tile per image, grouped by category. */
  const TILES = [];
  CATEGORY_ORDER.forEach(function (cat) {
    PROJECTS.filter(function (p) {
      return p.category === cat;
    }).forEach(function (p) {
      p.images.forEach(function (src) {
        TILES.push({ src: src, project: p });
      });
    });
  });

  let activeFilter = "Web design";
  let query = "";

  function render() {
    const q = query.trim().toLowerCase();
    const visible = TILES.filter(function (t) {
      /* While searching, look across every category, not just the active chip. */
      if (q) {
        return (
          t.project.title.toLowerCase().includes(q) ||
          t.project.tags.join(" ").toLowerCase().includes(q)
        );
      }
      return t.project.category === activeFilter;
    });

    grid.innerHTML = visible.length
      ? visible.map(function (t) { return renderCard(t.project, t.src); }).join("")
      : '<p class="empty-state">No projects match your search — try another keyword or category.</p>';
  }

  filters.addEventListener("click", function (e) {
    const chip = e.target.closest(".chip");
    if (!chip) return;
    activeFilter = chip.dataset.filter;
    filters.querySelectorAll(".chip").forEach(function (c) {
      c.classList.toggle("is-active", c === chip);
    });
    render();
  });

  if (searchInput) {
    searchInput.addEventListener("input", function () {
      query = searchInput.value;
      render();
    });
  }

  render();
})();
