/* ============================================================
   Vertex Experience — Showcase data
   ------------------------------------------------------------
   This file is the single source of truth for the showcase.
   To add a project:
     1. Drop its images into  showcase/images/showcase/<folder>/
     2. Add one object to the PROJECTS array below.
   The grid page and the detail page both render from this
   array — no HTML editing needed.

   Fields:
     slug      unique id, used in the URL (shot.html?p=<slug>)
     title     project title (grid card + detail page heading)
     category  one of the filter chips: "Web design",
               "Mobile application", "Branding", "Others"
               (add new chips in index.html)
     cover     grid thumbnail
     images    images stacked on the detail page, in order
     tags      keywords used by the search bar (not displayed)
   ============================================================ */

const IMG = "images/showcase/";

const PROJECTS = [
  {
    slug: "maustudy-website",
    title: "MauStudy – Study Abroad Platform Website",
    category: "Web design",
    cover: IMG + "website/Frame 7.jpg",
    images: [
      IMG + "website/Frame 7.jpg",
      IMG + "website/Frame 6.jpg",
      IMG + "website/Frame 50.jpg",
      IMG + "website/Frame 53.jpg",
    ],
    tags: ["education", "study abroad", "platform", "application form", "maustudy"],
  },
  {
    slug: "hidden-mauritius",
    title: "Hidden Mauritius – Travel Experiences Website",
    category: "Web design",
    cover: IMG + "website/Frame 12.jpg",
    images: [
      IMG + "website/Frame 12.jpg",
      IMG + "website/Frame 13.jpg",
      IMG + "website/Frame 27.jpg",
      IMG + "website/Frame 14.jpg",
      IMG + "website/Frame 15.jpg",
      IMG + "website/Frame 16.jpg",
      IMG + "website/Frame 17.jpg",
      IMG + "mobile/Frame 18.jpg",
    ],
    tags: ["travel", "tourism", "mauritius", "experiences", "booking"],
  },
  {
    slug: "la-casa-properties",
    title: "La Casa Properties – Real Estate Website",
    category: "Web design",
    cover: IMG + "website/Frame 19.jpg",
    images: [
      IMG + "website/Frame 19.jpg",
      IMG + "website/Frame 22.jpg",
      IMG + "website/Frame 23.jpg",
      IMG + "website/Frame 24.jpg",
      IMG + "website/Frame 21.jpg",
      IMG + "website/Frame 20.jpg",
    ],
    tags: ["real estate", "properties", "listings", "la casa"],
  },
  {
    slug: "trusty-app",
    title: "Trusty – Local Business Discovery App",
    category: "Mobile application",
    cover: IMG + "mobile/Frame 8.jpg",
    images: [
      IMG + "mobile/Frame 8.jpg",
      IMG + "website/Frame 10.jpg",
      IMG + "mobile/Frame 9.jpg",
      IMG + "mobile/Frame 11.jpg",
    ],
    tags: ["mobile app", "local business", "directory", "social", "trusty"],
  },
  {
    slug: "skintyfique",
    title: "Skintyfique – Skincare E-Commerce Website",
    category: "Web design",
    cover: IMG + "website/Frame 28.jpg",
    images: [
      IMG + "website/Frame 28.jpg",
      IMG + "website/Frame 32.jpg",
      IMG + "website/Frame 29.jpg",
      IMG + "website/Frame 30.jpg",
      IMG + "website/Frame 31.jpg",
      IMG + "website/Frame 33.jpg",
    ],
    tags: ["ecommerce", "skincare", "beauty", "shop", "products"],
  },
  {
    slug: "kev-car-rental",
    title: "KEV Car Rental – Brand Identity",
    category: "Branding",
    cover: IMG + "branding/Kev 4.jpg",
    images: [
      IMG + "branding/Kev 4.jpg",
      IMG + "branding/Kev 5.jpg",
      IMG + "branding/Kev 2.jpg",
      IMG + "branding/Kev 3.jpg",
    ],
    tags: ["branding", "identity", "logo", "car rental", "kev"],
  },
  {
    slug: "metro-express-app",
    title: "Metro Express – Transit Ticketing App",
    category: "Mobile application",
    cover: IMG + "mobile/Frame 5.jpg",
    images: [IMG + "mobile/Frame 5.jpg"],
    tags: ["mobile app", "transport", "metro", "ticketing", "me card"],
  },
  {
    slug: "reconnect",
    title: "Reconnect – Wellness Brand Identity",
    category: "Branding",
    cover: IMG + "branding/Reconnect 2.jpg",
    images: [
      IMG + "branding/Reconnect 2.jpg",
      IMG + "branding/Reconnect 1.jpg",
      IMG + "branding/Reconnect 3.jpg",
      IMG + "branding/Reconnect 4.jpg",
    ],
    tags: ["branding", "identity", "wellness", "logo", "reconnect"],
  },
  {
    slug: "sicom",
    title: "SICOM – Financial Services Website",
    category: "Web design",
    cover: IMG + "website/Frame 39.jpg",
    images: [
      IMG + "website/Frame 39.jpg",
      IMG + "website/Frame 40.jpg",
    ],
    tags: ["finance", "insurance", "corporate", "sicom"],
  },
  {
    slug: "solid-memory",
    title: "Solid Memory – Learning Platform Website",
    category: "Web design",
    cover: IMG + "website/Frame 41.jpg",
    images: [
      IMG + "website/Frame 41.jpg",
      IMG + "website/Frame 42.jpg",
    ],
    tags: ["education", "learning", "memory", "kids"],
  },
  {
    slug: "oasa",
    title: "OASA – Space Academy Website & Store",
    category: "Web design",
    cover: IMG + "website/Frame 49.jpg",
    images: [
      IMG + "website/Frame 49.jpg",
      IMG + "website/Frame 43.jpg",
    ],
    tags: ["space", "academy", "ecommerce", "merchandise", "oasa"],
  },
  {
    slug: "live-well-membership",
    title: "Live Well – Resort Membership Website",
    category: "Web design",
    cover: IMG + "website/Frame 25.jpg",
    images: [
      IMG + "website/Frame 25.jpg",
      IMG + "website/Frame 26.jpg",
      IMG + "website/Frame 60.jpg",
    ],
    tags: ["resort", "membership", "hospitality", "live well"],
  },
  {
    slug: "c-resorts",
    title: "C Resorts – Luxury Resort Website",
    category: "Web design",
    cover: IMG + "website/Frame 47.jpg",
    images: [IMG + "website/Frame 47.jpg"],
    tags: ["resort", "luxury", "hotel", "booking", "hospitality"],
  },
  {
    slug: "melbourne",
    title: "Melbourne – Digital Agency Website",
    category: "Web design",
    cover: IMG + "mobile/Frame 54.jpg",
    images: [
      IMG + "mobile/Frame 54.jpg",
      IMG + "website/Frame 35.jpg",
    ],
    tags: ["agency", "digital", "french", "melbourne"],
  },
  {
    slug: "filli",
    title: "Filli – Food Ordering Platform",
    category: "Web design",
    cover: IMG + "website/Frame 45.jpg",
    images: [
      IMG + "website/Frame 45.jpg",
      IMG + "website/Frame 44.jpg",
    ],
    tags: ["food", "restaurant", "ordering", "delivery", "filli"],
  },
  {
    slug: "medok",
    title: "MedOk – Healthcare Platform UI",
    category: "Others",
    cover: IMG + "website/Frame 46.jpg",
    images: [IMG + "website/Frame 46.jpg"],
    tags: ["healthcare", "medical", "platform", "dashboard", "medok"],
  },
  {
    slug: "cafme-dashboard",
    title: "Cafme – Support & Analytics Dashboard",
    category: "Others",
    cover: IMG + "website/Frame 56.jpg",
    images: [
      IMG + "website/Frame 56.jpg",
      IMG + "website/Frame 55.jpg",
    ],
    tags: ["saas", "dashboard", "analytics", "support", "product design"],
  },
  {
    slug: "studio-des-iles",
    title: "Studio des Îles – Architecture Website",
    category: "Web design",
    cover: IMG + "website/Frame 48.jpg",
    images: [IMG + "website/Frame 48.jpg"],
    tags: ["architecture", "sustainable", "blog", "editorial"],
  },
  {
    slug: "powertune",
    title: "PowerTune – Automotive Brand Identity",
    category: "Branding",
    cover: IMG + "branding/1 (6915b1).jpg",
    images: [
      IMG + "branding/1 (6915b1).jpg",
      IMG + "branding/2 (6915b1).jpg",
    ],
    tags: ["branding", "identity", "automotive", "logo", "powertune"],
  },
  {
    slug: "noirelab",
    title: "Noirelab – Tattoo Artist Brand Identity",
    category: "Branding",
    cover: IMG + "branding/1.jpg",
    images: [
      IMG + "branding/1.jpg",
      IMG + "branding/2.jpg",
      IMG + "branding/3.jpg",
      IMG + "branding/4.jpg",
    ],
    tags: ["branding", "identity", "tattoo", "artist", "noirelab"],
  },
  {
    slug: "maustudy-brand",
    title: "MauStudy – Brand Identity",
    category: "Branding",
    cover: IMG + "branding/Mau Study 0.jpg",
    images: [
      IMG + "branding/Mau Study 0.jpg",
      IMG + "branding/Mau Study 1.jpg",
      IMG + "branding/Mau Study 2.jpg",
      IMG + "branding/Mau Study 3.jpg",
      IMG + "branding/Mau Study 4.jpg",
    ],
    tags: ["branding", "identity", "stationery", "education", "maustudy"],
  },
];

/* ---------- Shared config + helpers (used by grid.js and shot.js) ---------- */

const SHOWCASE_CONFIG = {
  authorName: "Vertex Experience",
  authorShort: "Vertex",
  tagline: "Design-first digital agency — UI/UX, web & mobile",
  contactUrl: "https://www.vertexexperience.com/#contact",
  siteUrl: "https://www.vertexexperience.com/",
};

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

/* Escapes HTML, then converts **text** to <strong>text</strong>. */
function formatRich(str) {
  return escapeHtml(str).replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
}

const ICONS = {
  search:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" xmlns="http://www.w3.org/2000/svg"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>',
};

const AVATAR_SVG =
  "data:image/svg+xml," +
  encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80"><rect width="80" height="80" fill="#101828"/><text x="40" y="53" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-size="36" font-weight="700" fill="#ffffff">V</text></svg>'
  );

/* Builds one shot card (used on the grid page).
   Shows `src` (any image of the project — defaults to the cover);
   links to the project's shot page with the title beneath. */
function renderCard(p, src) {
  const href = "shot.html?p=" + encodeURIComponent(p.slug);
  return (
    '<article class="shot-card" data-category="' + escapeHtml(p.category) + '">' +
    '<a class="shot-thumb" href="' + href + '" aria-label="' + escapeHtml(p.title) + '">' +
    '<img src="' + escapeHtml(src || p.cover) + '" alt="' + escapeHtml(p.title) + '" loading="lazy">' +
    "</a>" +
    '<a class="shot-card-titlelink" href="' + href + '">' +
    '<h3 class="shot-card-title">' + escapeHtml(p.title) + "</h3>" +
    "</a></article>"
  );
}
