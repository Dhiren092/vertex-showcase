/* V2 — One cover image per category; clicking it opens a lightbox
   that browses EVERY image of that category's projects in order.

   To change a category's cover, edit the COVERS map below —
   any image path works. */

(function () {
  const COVERS = {
    "UI/UX design": "images/v2/Frame 4.jpg",
    "Branding design": "images/showcase/branding/Kev 4.jpg",
  };

  const CATEGORIES = Object.keys(COVERS);

  const filters = document.getElementById("filters");
  const coverStage = document.getElementById("cover-stage");
  const coverImg = document.getElementById("cover-img");
  const coverCaption = document.getElementById("cover-caption");

  /* Per category: flat slide list [{src, title}] in project order. */
  const SLIDES = {};
  const PROJECT_COUNT = {};
  CATEGORIES.forEach(function (cat) {
    SLIDES[cat] = [];
    PROJECT_COUNT[cat] = 0;
    PROJECTS.forEach(function (p) {
      if (p.category !== cat) return;
      PROJECT_COUNT[cat]++;
      p.images.forEach(function (src) {
        SLIDES[cat].push({ src: src, title: p.title });
      });
    });
  });

  /* UI/UX design (web + mobile work merged) uses the curated
     images/v2 sequence in file-name order: Frame 4 (the cover)
     through Frame 59. Frame 34 doesn't exist and Frame 60 is
     deliberately left out. */
  SLIDES["UI/UX design"] = [];
  for (let n = 4; n <= 59; n++) {
    if (n === 34) continue;
    SLIDES["UI/UX design"].push({
      src: "images/v2/Frame " + n + ".jpg",
      title: "UI/UX design",
    });
  }
  PROJECT_COUNT["UI/UX design"] = null; /* curated sequence — no project split */

  let activeCategory = "UI/UX design";

  function setCategory(cat) {
    activeCategory = cat;
    coverImg.src = COVERS[cat];
    coverImg.alt = cat + " — cover";
    coverCaption.textContent =
      cat + " — " +
      (PROJECT_COUNT[cat] ? PROJECT_COUNT[cat] + " projects · " : "") +
      SLIDES[cat].length + " shots";
    filters.querySelectorAll(".chip").forEach(function (c) {
      c.classList.toggle("is-active", c.dataset.filter === cat);
    });
  }

  filters.addEventListener("click", function (e) {
    const chip = e.target.closest(".chip");
    if (chip) setCategory(chip.dataset.filter);
  });

  setCategory(activeCategory);

  /* Preload the other covers once idle so switching chips is instant. */
  window.addEventListener("load", function () {
    CATEGORIES.forEach(function (cat) {
      new Image().src = COVERS[cat];
    });
  });

  /* ---------- Lightbox ---------- */

  const lb = document.createElement("div");
  lb.className = "lightbox";
  lb.hidden = true;
  lb.innerHTML =
    '<button class="lightbox-btn lightbox-close" aria-label="Close">' +
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg>' +
    "</button>" +
    '<button class="lightbox-btn lightbox-prev" aria-label="Previous image">' +
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 5l-7 7 7 7"/></svg>' +
    "</button>" +
    '<figure class="lightbox-stage"><img class="lightbox-img" alt=""></figure>' +
    '<button class="lightbox-btn lightbox-next" aria-label="Next image">' +
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 5l7 7-7 7"/></svg>' +
    "</button>" +
    '<div class="lightbox-caption"><span class="lightbox-title"></span><span class="lightbox-count"></span></div>';
  document.body.appendChild(lb);

  const lbImg = lb.querySelector(".lightbox-img");
  const lbTitle = lb.querySelector(".lightbox-title");
  const lbCount = lb.querySelector(".lightbox-count");

  let slides = [];
  let index = 0;

  function show(i) {
    const total = slides.length;
    index = ((i % total) + total) % total;
    const slide = slides[index];
    lbImg.src = slide.src;
    lbImg.alt = slide.title + " — image " + (index + 1);
    lbTitle.textContent = slide.title;
    lbCount.textContent = (index + 1) + " / " + total;
    /* Preload neighbours so the arrows feel instant. */
    [index + 1, index - 1].forEach(function (n) {
      new Image().src = slides[((n % total) + total) % total].src;
    });
  }

  function open() {
    slides = SLIDES[activeCategory];
    if (!slides.length) return;
    show(0);
    lb.hidden = false;
    document.body.classList.add("lightbox-open");
  }

  function close() {
    lb.hidden = true;
    lbImg.src = "";
    document.body.classList.remove("lightbox-open");
  }

  function step(dir) {
    show(index + dir);
  }

  coverStage.addEventListener("click", open);

  lb.querySelector(".lightbox-close").addEventListener("click", close);
  lb.querySelector(".lightbox-prev").addEventListener("click", function () { step(-1); });
  lb.querySelector(".lightbox-next").addEventListener("click", function () { step(1); });

  /* Click on the dark backdrop (not the image or buttons) closes. */
  lb.addEventListener("click", function (e) {
    if (e.target === lb || e.target.classList.contains("lightbox-stage")) close();
  });

  document.addEventListener("keydown", function (e) {
    if (lb.hidden) return;
    if (e.key === "Escape") close();
    else if (e.key === "ArrowLeft") step(-1);
    else if (e.key === "ArrowRight") step(1);
  });

  /* Basic swipe support. */
  let touchX = null;
  lb.addEventListener("touchstart", function (e) {
    touchX = e.touches[0].clientX;
  }, { passive: true });
  lb.addEventListener("touchend", function (e) {
    if (touchX === null) return;
    const dx = e.changedTouches[0].clientX - touchX;
    if (Math.abs(dx) > 40) step(dx < 0 ? 1 : -1);
    touchX = null;
  }, { passive: true });
})();
