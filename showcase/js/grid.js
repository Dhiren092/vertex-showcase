/* V2 — Two modes driven by the filter chips:

   • "UI/UX design"  → one big cover; clicking it opens a lightbox that
                       browses the whole curated Frame 4–59 sequence.
   • "Branding design" → a grid of branding projects (one card each);
                       clicking a project opens a lightbox with only
                       that project's images, in file-name order.

   To edit branding: drop images in images/branding/<Project>/ and add
   an entry to BRANDING below (cover + images in the order you want). */

(function () {
  const UI_COVER = "images/v2/Frame 4.jpg";

  /* Branding projects — each opens its own lightbox. */
  const BRANDING = [
    {
      title: "KEV Car Rental",
      dir: "images/branding/Kev Car Rental/",
      cover: "Kev 4.jpg",
      images: ["Kev 2.jpg", "Kev 3.jpg", "Kev 4.jpg", "Kev 5.jpg"],
    },
    {
      title: "MauStudy",
      dir: "images/branding/MauStudy/",
      cover: "Mau Study 0.jpg",
      images: ["Mau Study 0.jpg", "Mau Study 1.jpg", "Mau Study 2.jpg", "Mau Study 3.jpg", "Mau Study 4.jpg"],
    },
    {
      title: "NoirLab",
      dir: "images/branding/NoirLab/",
      cover: "1.jpg",
      images: ["1.jpg", "2.jpg", "3.jpg", "4.jpg"],
    },
    {
      title: "PowerTune",
      dir: "images/branding/PowerTune/",
      cover: "1 (6915b1).jpg",
      images: ["1 (6915b1).jpg", "2 (6915b1).jpg"],
    },
    {
      title: "Reconnect",
      dir: "images/branding/Reconnect/",
      cover: "Reconnect 1.jpg",
      images: ["Reconnect 1.jpg", "Reconnect 2.jpg", "Reconnect 3.jpg", "Reconnect 4.jpg"],
    },
  ];

  /* Expand each branding project's paths + build its slide list. */
  BRANDING.forEach(function (p) {
    p.coverSrc = p.dir + p.cover;
    p.slides = p.images.map(function (f) {
      return { src: p.dir + f, title: p.title };
    });
  });

  /* Curated UI/UX sequence: Frame 4 (cover) → Frame 59, name order.
     Frame 34 doesn't exist; Frame 60 is deliberately left out. */
  const UIUX_SLIDES = [];
  for (let n = 4; n <= 59; n++) {
    if (n === 34) continue;
    UIUX_SLIDES.push({ src: "images/v2/Frame " + n + ".jpg", title: "UI/UX design" });
  }

  const filters = document.getElementById("filters");
  const cover = document.getElementById("cover");
  const coverStage = document.getElementById("cover-stage");
  const coverImg = document.getElementById("cover-img");
  const coverCaption = document.getElementById("cover-caption");
  const brandGrid = document.getElementById("brand-grid");

  let activeCategory = "UI/UX design";

  function renderBrandCard(p, i) {
    return (
      '<article class="shot-card">' +
      '<button class="shot-thumb" type="button" data-brand="' + i + '" aria-label="Open ' + p.title + '">' +
      '<img src="' + p.coverSrc + '" alt="' + p.title + '" loading="lazy">' +
      "</button>" +
      '<div class="shot-card-titlelink">' +
      '<h3 class="shot-card-title">' + p.title + " — " + p.images.length + " shots</h3>" +
      "</div></article>"
    );
  }

  function setCategory(cat) {
    activeCategory = cat;
    filters.querySelectorAll(".chip").forEach(function (c) {
      c.classList.toggle("is-active", c.dataset.filter === cat);
    });

    if (cat === "Branding design") {
      cover.hidden = true;
      brandGrid.hidden = false;
      if (!brandGrid.dataset.rendered) {
        brandGrid.innerHTML = BRANDING.map(renderBrandCard).join("");
        brandGrid.dataset.rendered = "1";
      }
    } else {
      brandGrid.hidden = true;
      cover.hidden = false;
      coverImg.src = UI_COVER;
      coverImg.alt = cat + " — cover";
      coverCaption.textContent = cat + " — " + UIUX_SLIDES.length + " shots";
    }
  }

  filters.addEventListener("click", function (e) {
    const chip = e.target.closest(".chip");
    if (chip) setCategory(chip.dataset.filter);
  });

  setCategory(activeCategory);

  /* Preload covers once idle so switching chips is instant. */
  window.addEventListener("load", function () {
    new Image().src = UI_COVER;
    BRANDING.forEach(function (p) { new Image().src = p.coverSrc; });
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

  function open(list, startIndex) {
    if (!list || !list.length) return;
    slides = list;
    show(startIndex || 0);
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

  /* UI/UX cover → whole curated sequence. */
  coverStage.addEventListener("click", function () {
    if (activeCategory !== "Branding design") open(UIUX_SLIDES, 0);
  });

  /* Branding card → that project's images from the first, name order.
     (The cover is only the grid thumbnail.) */
  brandGrid.addEventListener("click", function (e) {
    const btn = e.target.closest("[data-brand]");
    if (!btn) return;
    open(BRANDING[+btn.dataset.brand].slides, 0);
  });

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
