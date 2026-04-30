document.addEventListener("DOMContentLoaded", () => {
const menuTrigger = document.querySelector("[data-nav-open]");
const navOverlay = document.querySelector("[data-nav-overlay]");
const navCloseButtons = document.querySelectorAll("[data-nav-close]");
const navPanel = document.querySelector("[data-nav-panel]");
const mainNavView = document.querySelector('[data-nav-view="main"]');
const submenuNavView = document.querySelector('[data-nav-view="submenu"]');
const navLinesContainer = document.querySelector(".nav-lines");
const navLineButtons = document.querySelectorAll(".nav-line[data-line]");
const mainPreviewTitle = document.querySelector("[data-nav-main-title]");
const mainPreviewItems = document.querySelector("[data-nav-main-items]");
const submenuTitle = document.querySelector("[data-submenu-title]");
const submenuItems = document.querySelector("[data-submenu-items]");
const submenuBackButton = document.querySelector("[data-nav-back]");
const preview = document.querySelector(".nav-preview");
const previewImage = document.querySelector("[data-preview-image]");
const previewKicker = document.querySelector("[data-preview-kicker]");
const previewTitle = document.querySelector("[data-preview-title]");
const versionSwitcherLinks = document.querySelectorAll("[data-version-link]");
const categoryDirectoryRoot = document.querySelector("[data-category-directory]");
const newsletterForm = document.querySelector("[data-newsletter-form]");
const feedback = document.querySelector("[data-form-feedback]");
const backToTopButton = document.querySelector("[data-back-to-top]");
const productMainImage = document.querySelector("[data-product-main]");
const productThumbButtons = document.querySelectorAll("[data-product-thumb]");
const productOpenGalleryButton = document.querySelector("[data-product-open-gallery]");
const productLightbox = document.querySelector("[data-product-lightbox]");
const productLightboxImage = document.querySelector("[data-product-lightbox-image]");
const productLightboxCaption = document.querySelector("[data-product-lightbox-caption]");
const productLightboxCounter = document.querySelector("[data-product-lightbox-counter]");
const productLightboxPrevButton = document.querySelector("[data-product-lightbox-prev]");
const productLightboxNextButton = document.querySelector("[data-product-lightbox-next]");
const productLightboxCloseButtons = document.querySelectorAll("[data-product-lightbox-close]");
const productSwatches = document.querySelectorAll("[data-product-swatch]");
const temperatureOptions = document.querySelectorAll("[data-temperature-option]");
const productSheet = document.querySelector("[data-product-sheet]");
const productSheetOpenButton = document.querySelector("[data-product-sheet-open]");
const productSheetCloseButtons = document.querySelectorAll("[data-product-sheet-close]");
const productSheetCopyButton = document.querySelector("[data-product-sheet-copy]");
const productSheetContent = document.querySelector("[data-product-sheet-content]");

const buildCategoryFilterHref = (filterKey) => `./categoria.html?filtro=${encodeURIComponent(filterKey)}`;

const lineData = {
  lampadas: {
    label: "L\u00e2mpadas",
    kicker: "Linha em destaque",
    image: "https://opusled.com.br/wp-content/uploads/2026/03/noir_desk.jpg",
    alt: "Preview L\u00e2mpadas",
    items: [
      { label: "Direcionais IRC80", href: buildCategoryFilterHref("direcionais-irc80") },
      { label: "Direcionais IRC95", href: buildCategoryFilterHref("direcionais-irc95") },
      { label: "G4 e G9" },
      { label: "Bulbo G" },
      { label: "Filamentos", href: buildCategoryFilterHref("filamentos") },
      { label: "Dimeriz\u00e1veis", href: buildCategoryFilterHref("dimerizaveis") },
      { label: "Tubulares", href: buildCategoryFilterHref("tubulares") },
      { label: "M\u00f3dulos", href: buildCategoryFilterHref("modulos") },
    ],
  },
  interno: {
    label: "Uso Interno",
    kicker: "Linha em destaque",
    image: "https://opusled.com.br/wp-content/uploads/2026/03/genesis_left.jpg",
    alt: "Preview Uso Interno",
    items: [
      { label: "Spots para L\u00e2mpadas" },
      { label: "Spots LED" },
      { label: "Pain\u00e9is" },
      { label: "Plafons" },
      { label: "Lineares" },
      { label: "Decorativos" },
      { label: "Ilumina\u00e7\u00e3o de Emerg\u00eancia" },
      { label: "Dimmer e Sensores" },
      { label: "Ventiladores" },
    ],
  },
  externo: {
    label: "Uso Externo",
    kicker: "Linha em destaque",
    image: "https://opusled.com.br/wp-content/uploads/2026/04/darwin_top_desk.jpg",
    alt: "Preview Uso Externo",
    items: [
      { label: "Jardim" },
      { label: "Arandelas" },
      { label: "Balizadores" },
      { label: "Spots LED IP65" },
      { label: "Industrial" },
      { label: "Conectores IP68" },
    ],
  },
  fitas: {
    label: "Fitas, Fontes e Perfis",
    kicker: "Linha em destaque",
    image: "https://opusled.com.br/wp-content/uploads/2026/03/Belts_vertical.png",
    alt: "Preview Fitas, Fontes e Perfis",
    items: [
      { label: "Perfis" },
      { label: "Fitas Baixa Tens\u00e3o" },
      { label: "Fitas Tens\u00e3o Rede" },
      { label: "Fontes" },
    ],
  },
  sistemas: {
    label: "Sistemas",
    kicker: "Linha em destaque",
    image: "https://opusled.com.br/wp-content/uploads/2026/03/Belts_vertical.png",
    alt: "Preview Sistemas",
    items: [
      { label: "Sistema Magn\u00e9tico 20" },
      { label: "Sistema Magn\u00e9tico 10" },
      { label: "Sistema Trilho" },
      { label: "Sistema Belts" },
    ],
  },
};

const categoryDirectoryOrder = ["lampadas", "interno", "externo", "fitas", "sistemas"];

const categoryDirectoryImageSets = {
  lampadas: [
    "./assets/products/produto-01.png",
    "./assets/products/produto-02.png",
    "./assets/products/produto-03.png",
    "./assets/products/produto-04.png",
  ],
  fitas: [
    "./assets/products/produto-05.png",
    "./assets/products/produto-01.png",
    "./assets/products/produto-02.png",
    "./assets/products/produto-03.png",
  ],
  sistemas: [
    "./assets/products/produto-02.png",
    "./assets/products/produto-03.png",
    "./assets/products/produto-04.png",
    "./assets/products/produto-05.png",
  ],
  interno: [
    "./assets/products/produto-04.png",
    "./assets/products/produto-05.png",
    "./assets/products/produto-01.png",
    "./assets/products/produto-02.png",
  ],
  externo: [
    "./assets/products/produto-03.png",
    "./assets/products/produto-04.png",
    "./assets/products/produto-05.png",
    "./assets/products/produto-01.png",
  ],
};

const categoryDirectoryVariants = ["Branco", "Preto", "3000K", "4000K"];

let activeLineKey = "lampadas";
let expandedLineKey = "";

const isMenuOpen = () => Boolean(navOverlay && navOverlay.classList.contains("is-open"));
const keepBrandVisible = () => document.body.classList.contains("page-brand-persistent");
const isHomeVariantWithoutAnnounce = () => (
  document.body.classList.contains("page-home")
  && !document.body.classList.contains("page-variant-v3")
);

const syncHeaderState = () => {
  document.body.classList.toggle("nav-menu-open", isMenuOpen());
};

const syncMenuA11y = () => {
  if (!menuTrigger || !navOverlay) {
    return;
  }

  const open = isMenuOpen();
  menuTrigger.setAttribute("aria-expanded", open ? "true" : "false");
  navOverlay.setAttribute("aria-hidden", open ? "false" : "true");
};

const syncBrandState = () => {
  if (keepBrandVisible()) {
    document.body.classList.remove("nav-logo-hidden");
    return;
  }

  document.body.classList.toggle("nav-logo-hidden", window.scrollY > 18);
};

const isProductSheetOpen = () => Boolean(productSheet && productSheet.classList.contains("is-open"));
const isProductLightboxOpen = () => Boolean(productLightbox && productLightbox.classList.contains("is-open"));

let activeProductImageIndex = 0;

const clearMenuHash = () => {
  if (window.location.hash !== "#nav-overlay") {
    return;
  }

  const cleanUrl = `${window.location.pathname}${window.location.search}`;
  window.history.replaceState(null, "", cleanUrl);
};

const setNavView = (view) => {
  const isSubmenu = view === "submenu";

  if (!navPanel || !mainNavView || !submenuNavView) {
    return;
  }

  navPanel.classList.toggle("is-submenu-open", isSubmenu);
  mainNavView.setAttribute("aria-hidden", isSubmenu ? "true" : "false");
  submenuNavView.setAttribute("aria-hidden", isSubmenu ? "false" : "true");
};

const openMenu = () => {
  if (!navOverlay) {
    return;
  }

  navOverlay.classList.add("is-open");
  syncHeaderState();
  syncMenuA11y();
};

const closeMenu = () => {
  if (!navOverlay) {
    return;
  }

  navOverlay.classList.remove("is-open");
  closeInlineAccordion();
  setNavView("main");
  clearMenuHash();
  syncHeaderState();
  syncMenuA11y();
};

const openProductSheet = () => {
  if (!productSheet) {
    return;
  }

  productSheet.classList.add("is-open");
  productSheet.setAttribute("aria-hidden", "false");
  document.body.classList.add("product-sheet-open");
};

const closeProductSheet = () => {
  if (!productSheet) {
    return;
  }

  productSheet.classList.remove("is-open");
  productSheet.setAttribute("aria-hidden", "true");
  document.body.classList.remove("product-sheet-open");
};

const getProductGalleryItems = () => Array.from(productThumbButtons, (button) => ({
  src: button.dataset.src || "",
  alt: button.dataset.alt || "",
}));

const updateProductLightbox = (index) => {
  const items = getProductGalleryItems();

  if (!items.length || !productLightboxImage) {
    return;
  }

  const safeIndex = (index + items.length) % items.length;
  const item = items[safeIndex];

  activeProductImageIndex = safeIndex;
  productLightboxImage.setAttribute("src", item.src);
  productLightboxImage.setAttribute("alt", item.alt);

  if (productLightboxCaption) {
    productLightboxCaption.textContent = item.alt;
  }

  if (productLightboxCounter) {
    productLightboxCounter.textContent = `${safeIndex + 1} / ${items.length}`;
  }
};

const updateProductMainImage = (index) => {
  const items = getProductGalleryItems();

  if (!items.length || !productMainImage) {
    return;
  }

  const safeIndex = (index + items.length) % items.length;
  const item = items[safeIndex];

  activeProductImageIndex = safeIndex;
  productMainImage.setAttribute("src", item.src);
  productMainImage.setAttribute("alt", item.alt || productMainImage.getAttribute("alt") || "");

  productThumbButtons.forEach((thumb, thumbIndex) => {
    thumb.classList.toggle("is-active", thumbIndex === safeIndex);
  });

  if (isProductLightboxOpen()) {
    updateProductLightbox(safeIndex);
  }
};

const openProductLightbox = (index) => {
  if (!productLightbox) {
    return;
  }

  if (isProductSheetOpen()) {
    closeProductSheet();
  }

  updateProductLightbox(index);
  productLightbox.classList.add("is-open");
  productLightbox.setAttribute("aria-hidden", "false");
  document.body.classList.add("product-lightbox-open");
};

const closeProductLightbox = () => {
  if (!productLightbox) {
    return;
  }

  productLightbox.classList.remove("is-open");
  productLightbox.setAttribute("aria-hidden", "true");
  document.body.classList.remove("product-lightbox-open");
};

const updatePreview = (key) => {
  const data = lineData[key];

  if (!data || !previewImage || !previewKicker || !previewTitle) {
    return;
  }

  previewKicker.textContent = data.kicker;
  previewTitle.textContent = data.label;

  if (previewImage.getAttribute("src") === data.image) {
    previewImage.setAttribute("alt", data.alt);
    return;
  }

  if (preview) {
    preview.classList.add("is-changing");
  }

  previewImage.setAttribute("alt", data.alt);
  previewImage.setAttribute("src", data.image);

  const finishPreviewChange = () => {
    if (preview) {
      preview.classList.remove("is-changing");
    }
  };

  previewImage.addEventListener("load", finishPreviewChange, { once: true });
  window.setTimeout(finishPreviewChange, 450);
};

const createNavMenuItem = (item, className) => {
  const itemElement = item.href ? document.createElement("a") : document.createElement("button");

  if (item.href) {
    itemElement.href = item.href;
  } else {
    itemElement.type = "button";
  }

  itemElement.className = className;
  itemElement.textContent = item.label;

  if (item.featured) {
    itemElement.classList.add("is-featured");
  }

  return itemElement;
};

const getInlineAccordion = () => document.querySelector("[data-nav-inline-accordion]");

const ensureInlineAccordion = () => {
  if (!navLinesContainer) {
    return null;
  }

  const existing = getInlineAccordion();

  if (existing) {
    return existing;
  }

  const accordion = document.createElement("div");
  accordion.className = "nav-line-accordion";
  accordion.dataset.navInlineAccordion = "true";
  accordion.setAttribute("aria-hidden", "true");
  accordion.style.maxHeight = "0px";

  const inner = document.createElement("div");
  inner.className = "nav-line-accordion__inner";

  const items = document.createElement("div");
  items.className = "nav-line-accordion__items";
  items.dataset.navInlineItems = "true";

  inner.appendChild(items);
  accordion.appendChild(inner);
  navLinesContainer.appendChild(accordion);

  return accordion;
};

const closeInlineAccordion = () => {
  const accordion = getInlineAccordion();

  if (!accordion) {
    return;
  }

  accordion.classList.remove("is-open");
  accordion.setAttribute("aria-hidden", "true");
  accordion.style.maxHeight = "0px";
  expandedLineKey = "";

  navLineButtons.forEach((button) => {
    button.setAttribute("aria-expanded", "false");
  });
};

const openInlineAccordion = (button, key) => {
  const data = lineData[key];
  const accordion = ensureInlineAccordion();
  const itemsContainer = accordion ? accordion.querySelector("[data-nav-inline-items]") : null;
  const inner = accordion ? accordion.querySelector(".nav-line-accordion__inner") : null;

  if (!data || !accordion || !itemsContainer || !inner) {
    return;
  }

  itemsContainer.replaceChildren();

  data.items.forEach((item) => {
    itemsContainer.appendChild(createNavMenuItem(item, "nav-line-accordion__link"));
  });

  button.insertAdjacentElement("afterend", accordion);
  accordion.classList.remove("is-open");
  accordion.setAttribute("aria-hidden", "true");
  accordion.style.maxHeight = "0px";

  navLineButtons.forEach((lineButton) => {
    lineButton.setAttribute("aria-expanded", lineButton === button ? "true" : "false");
  });

  expandedLineKey = key;

  window.requestAnimationFrame(() => {
    accordion.classList.add("is-open");
    accordion.setAttribute("aria-hidden", "false");
    accordion.style.maxHeight = `${inner.scrollHeight}px`;
  });
};

const renderMainPreview = (key) => {
  const data = lineData[key];

  if (!data || !mainPreviewTitle || !mainPreviewItems) {
    return;
  }

  mainPreviewTitle.textContent = data.label;
  mainPreviewItems.replaceChildren();

  data.items.forEach((item) => {
    mainPreviewItems.appendChild(createNavMenuItem(item, "nav-main-preview__link"));
  });
};

const renderSubmenu = (key) => {
  const data = lineData[key];

  if (!data || !submenuTitle || !submenuItems) {
    return;
  }

  submenuTitle.textContent = data.label;
  submenuItems.replaceChildren();

  data.items.forEach((item) => {
    submenuItems.appendChild(createNavMenuItem(item, "nav-submenu__link"));
  });
};

const setActiveLine = (key) => {
  if (!lineData[key]) {
    return;
  }

  activeLineKey = key;

  navLineButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.line === key);
  });

  updatePreview(key);
  renderMainPreview(key);
};

if (navOverlay) {
  if (menuTrigger) {
    menuTrigger.addEventListener("click", (event) => {
      event.preventDefault();
      openMenu();
    });
  }

  navCloseButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      event.preventDefault();
      closeMenu();
    });
  });

  navOverlay.addEventListener("click", (event) => {
    const link = event.target.closest("a[href]");

    if (link && navOverlay.contains(link)) {
      closeMenu();
    }
  });

  navLineButtons.forEach((button) => {
    const { line } = button.dataset;
    button.setAttribute("aria-expanded", "false");

    button.addEventListener("mouseenter", () => {
      setActiveLine(line);
    });

    button.addEventListener("focus", () => {
      setActiveLine(line);
    });

    button.addEventListener("click", () => {
      setActiveLine(line);

      if (expandedLineKey === line) {
        closeInlineAccordion();
        return;
      }

      openInlineAccordion(button, line);
    });
  });

  if (submenuBackButton) {
    submenuBackButton.addEventListener("click", () => {
      setNavView("main");
    });
  }

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && isMenuOpen()) {
      closeMenu();
    }
  });

  renderSubmenu(activeLineKey);
  renderMainPreview(activeLineKey);
  setNavView("main");
  updatePreview(activeLineKey);
  clearMenuHash();
  syncHeaderState();
  syncMenuA11y();
}

if (isHomeVariantWithoutAnnounce()) {
  document.documentElement.style.setProperty("--announce-height", "0px");
}

syncBrandState();
window.addEventListener("scroll", syncBrandState, { passive: true });

if (versionSwitcherLinks.length) {
  let activeVariant = "v3";

  if (document.body.classList.contains("page-variant-v1")) {
    activeVariant = "v1";
  } else if (document.body.classList.contains("page-variant-v2")) {
    activeVariant = "v2";
  } else if (document.body.classList.contains("page-variant-v4")) {
    activeVariant = "v4";
  }

  versionSwitcherLinks.forEach((link) => {
    link.classList.toggle("is-active", link.dataset.versionLink === activeVariant);
  });
}

(() => {
  const indicator = document.querySelector("#hero-banners .scroll-indicator");

  if (!indicator) {
    return;
  }

  const isDesktop = () => window.matchMedia("(min-width: 1025px)").matches;

  const updateIndicator = () => {
    if (!isDesktop()) {
      document.body.classList.remove("show-top-indicator");
      return;
    }

    document.body.classList.toggle("show-top-indicator", window.scrollY <= 10);
  };

  updateIndicator();
  window.addEventListener("scroll", updateIndicator, { passive: true });
  window.addEventListener("resize", updateIndicator, { passive: true });
})();

const initSwiper = () => {
  const section = document.getElementById("opus-destaques");
  const swiperElement = section ? section.querySelector(".opus-swiper") : null;

  if (!section || !swiperElement || typeof window.Swiper !== "function") {
    return false;
  }

  if (swiperElement.dataset.swiperReady === "true") {
    return true;
  }

  swiperElement.dataset.swiperReady = "true";

  new window.Swiper(swiperElement, {
    speed: 550,
    grabCursor: true,
    watchOverflow: true,
    preloadImages: false,
    lazy: true,
    pagination: {
      el: section.querySelector(".opus-pagination"),
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1.15,
        spaceBetween: 16,
        centeredSlides: true,
        centerInsufficientSlides: true,
      },
      769: {
        slidesPerView: 2,
        spaceBetween: 20,
        centeredSlides: false,
        centerInsufficientSlides: false,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 28,
        centeredSlides: false,
        centerInsufficientSlides: false,
      },
    },
  });

  return true;
};

const initCategorySwipers = () => {
  const swipers = document.querySelectorAll("[data-category-swiper]");

  if (!swipers.length || typeof window.Swiper !== "function") {
    return false;
  }

  swipers.forEach((swiperElement) => {
    if (swiperElement.dataset.swiperReady === "true") {
      return;
    }

    const section = swiperElement.closest(".category-showcase, .category-directory-group");
    const prevButton = section ? section.querySelector("[data-category-prev]") : null;
    const nextButton = section ? section.querySelector("[data-category-next]") : null;

    swiperElement.dataset.swiperReady = "true";

    new window.Swiper(swiperElement, {
      speed: 520,
      watchOverflow: true,
      grabCursor: true,
      roundLengths: true,
      observer: true,
      observeParents: true,
      centeredSlides: false,
      centerInsufficientSlides: false,
      slidesPerView: 1,
      spaceBetween: 14,
      navigation: {
        prevEl: prevButton,
        nextEl: nextButton,
      },
      breakpoints: {
        0: {
          slidesPerView: 1.08,
          spaceBetween: 14,
        },
        640: {
          slidesPerView: 2.1,
          spaceBetween: 16,
        },
        900: {
          slidesPerView: 3.05,
          spaceBetween: 18,
        },
        1200: {
          slidesPerView: 4.05,
          spaceBetween: 20,
        },
      },
    });
  });

  return true;
};

const slugifyText = (value) => value
  .normalize("NFD")
  .replace(/[\u0300-\u036f]/g, "")
  .toLowerCase()
  .replace(/[^a-z0-9]+/g, "-")
  .replace(/^-+|-+$/g, "");

const buildDirectoryShowcase = (groupKey, groupData, item, itemIndex) => {
  const showcase = document.createElement("section");
  const sectionSlug = slugifyText(`${groupKey}-${item.label}`);
  const imagePool = categoryDirectoryImageSets[groupKey] || categoryDirectoryImageSets.lampadas;

  showcase.className = "category-showcase";
  showcase.id = sectionSlug;

  const head = document.createElement("div");
  head.className = "category-showcase__head";

  const title = document.createElement("h2");
  title.textContent = item.label;
  head.appendChild(title);

  const tools = document.createElement("div");
  tools.className = "category-showcase__tools";

  if (item.href) {
    const moreLink = document.createElement("a");
    moreLink.className = "category-showcase__more";
    moreLink.href = item.href;
    moreLink.textContent = "Veja mais";
    tools.appendChild(moreLink);
  }

  const nav = document.createElement("div");
  nav.className = "category-carousel-nav";

  const prevButton = document.createElement("button");
  prevButton.className = "category-nav category-nav--prev";
  prevButton.type = "button";
  prevButton.setAttribute("aria-label", "Produtos anteriores");
  prevButton.dataset.categoryPrev = "true";
  prevButton.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14.5 5 8 12l6.5 7"></path></svg>';

  const nextButton = document.createElement("button");
  nextButton.className = "category-nav category-nav--next";
  nextButton.type = "button";
  nextButton.setAttribute("aria-label", "Próximos produtos");
  nextButton.dataset.categoryNext = "true";
  nextButton.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m9.5 5 6.5 7-6.5 7"></path></svg>';

  nav.appendChild(prevButton);
  nav.appendChild(nextButton);
  tools.appendChild(nav);
  head.appendChild(tools);
  showcase.appendChild(head);

  const swiper = document.createElement("div");
  swiper.className = "swiper category-swiper";
  swiper.dataset.categorySwiper = "true";

  const wrapper = document.createElement("div");
  wrapper.className = "swiper-wrapper";

  categoryDirectoryVariants.forEach((variant, productIndex) => {
    const card = document.createElement("article");
    card.className = "swiper-slide category-product";

    if (item.featured && productIndex === 0) {
      const flag = document.createElement("span");
      flag.className = "category-product__flag";
      flag.textContent = "Destaque";
      card.appendChild(flag);
    }

    const media = document.createElement("figure");
    media.className = "category-product__media";

    const image = document.createElement("img");
    image.src = imagePool[(itemIndex + productIndex) % imagePool.length];
    image.alt = `${item.label} ${variant}`;
    image.loading = "lazy";
    media.appendChild(image);

    const body = document.createElement("div");
    body.className = "category-product__body";

    const name = document.createElement("h3");
    name.textContent = `${item.label} ${variant}`;

    const description = document.createElement("p");
    description.textContent = groupData.label;

    body.appendChild(name);
    body.appendChild(description);

    card.appendChild(media);
    card.appendChild(body);
    wrapper.appendChild(card);
  });

  swiper.appendChild(wrapper);
  showcase.appendChild(swiper);

  return showcase;
};

const buildDirectoryShowcaseGrid = (groupKey, groupData, item, itemIndex) => {
  const showcase = document.createElement("section");
  const imagePool = categoryDirectoryImageSets[groupKey] || categoryDirectoryImageSets.lampadas;

  showcase.className = "category-showcase";

  const head = document.createElement("div");
  head.className = "category-showcase__head";

  const title = document.createElement("h2");
  title.textContent = item.label;
  head.appendChild(title);

  if (item.href) {
    const tools = document.createElement("div");
    tools.className = "category-showcase__tools";

    const moreLink = document.createElement("a");
    moreLink.className = "category-showcase__more";
    moreLink.href = item.href;
    moreLink.textContent = "Veja mais";

    tools.appendChild(moreLink);
    head.appendChild(tools);
  }

  showcase.appendChild(head);

  const grid = document.createElement("div");
  grid.className = "category-grid category-grid--directory-products";

  categoryDirectoryVariants.forEach((variant, productIndex) => {
    const card = document.createElement("article");
    card.className = "category-product";

    if (item.featured && productIndex === 0) {
      const flag = document.createElement("span");
      flag.className = "category-product__flag";
      flag.textContent = "Destaque";
      card.appendChild(flag);
    }

    const media = document.createElement("figure");
    media.className = "category-product__media";

    const image = document.createElement("img");
    image.src = imagePool[(itemIndex + productIndex) % imagePool.length];
    image.alt = `${item.label} ${variant}`;
    image.loading = "lazy";
    media.appendChild(image);

    const body = document.createElement("div");
    body.className = "category-product__body";

    const name = document.createElement("h3");
    name.textContent = `${item.label} ${variant}`;

    const description = document.createElement("p");
    description.textContent = groupData.label;

    body.appendChild(name);
    body.appendChild(description);

    card.appendChild(media);
    card.appendChild(body);
    grid.appendChild(card);
  });

  showcase.appendChild(grid);

  return showcase;
};

const buildDirectoryCategoryCarousel = (groupKey, groupData) => {
  const groupCarousel = document.createElement("div");
  groupCarousel.className = "category-directory-carousel";
  groupCarousel.dataset.directoryCarousel = "true";

  const wrapper = document.createElement("div");
  wrapper.className = "category-directory-carousel__track";
  wrapper.dataset.directoryTrack = "true";

  groupData.items.forEach((item, itemIndex) => {
    const imagePool = categoryDirectoryImageSets[groupKey] || categoryDirectoryImageSets.lampadas;
    const slide = document.createElement("article");
    slide.className = "category-subcard";

    const cardShell = item.href ? document.createElement("a") : document.createElement("div");
    cardShell.className = "category-subcard__link";

    if (item.href) {
      cardShell.href = item.href;
      cardShell.setAttribute("aria-label", `Abrir ${item.label}`);
    }

    const media = document.createElement("figure");
    media.className = "category-subcard__media";

    const image = document.createElement("img");
    image.src = imagePool[itemIndex % imagePool.length];
    image.alt = item.label;
    image.loading = "lazy";
    media.appendChild(image);

    const body = document.createElement("div");
    body.className = "category-subcard__body";

    const eyebrow = document.createElement("p");
    eyebrow.className = "category-subcard__eyebrow";
    eyebrow.textContent = item.featured ? "Destaque" : "Subcategoria";

    const title = document.createElement("h3");
    title.className = "category-subcard__title";
    title.textContent = item.label;

    body.appendChild(title);
    body.appendChild(eyebrow);

    cardShell.appendChild(media);
    cardShell.appendChild(body);
    slide.appendChild(cardShell);
    wrapper.appendChild(slide);
  });

  groupCarousel.appendChild(wrapper);

  return groupCarousel;
};

const initCategoryDirectory = () => {
  if (!categoryDirectoryRoot) {
    return;
  }

  categoryDirectoryRoot.classList.remove("is-ready");
  categoryDirectoryRoot.replaceChildren();

  categoryDirectoryOrder.forEach((groupKey) => {
    const groupData = lineData[groupKey];

    if (!groupData) {
      return;
    }

    const groupSection = document.createElement("section");
    groupSection.className = "category-directory-group";
    groupSection.dataset.filterSection = groupKey;
    groupSection.id = `${groupKey}-categoria`;

    const groupHead = document.createElement("div");
    groupHead.className = "category-directory-group__head category-directory-group__head--carousel";

    const groupTitleWrap = document.createElement("div");
    groupTitleWrap.className = "category-directory-group__title-wrap";

    const groupEyebrow = document.createElement("p");
    groupEyebrow.className = "category-directory-group__eyebrow";
    groupEyebrow.textContent = "Linha";

    const groupTitle = document.createElement("h2");
    groupTitle.textContent = groupData.label;

    groupTitleWrap.appendChild(groupEyebrow);
    groupTitleWrap.appendChild(groupTitle);
    groupHead.appendChild(groupTitleWrap);

    const nav = document.createElement("div");
    nav.className = "category-directory-group__nav category-carousel-nav";

    const prevButton = document.createElement("button");
    prevButton.className = "category-nav category-nav--prev";
    prevButton.type = "button";
    prevButton.setAttribute("aria-label", "Subcategorias anteriores");
    prevButton.dataset.directoryPrev = "true";
    prevButton.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14.5 5 8 12l6.5 7"></path></svg>';

    const nextButton = document.createElement("button");
    nextButton.className = "category-nav category-nav--next";
    nextButton.type = "button";
    nextButton.setAttribute("aria-label", "Próximas subcategorias");
    nextButton.dataset.directoryNext = "true";
    nextButton.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m9.5 5 6.5 7-6.5 7"></path></svg>';

    nav.appendChild(prevButton);
    nav.appendChild(nextButton);
    groupHead.appendChild(nav);
    groupSection.appendChild(groupHead);
    groupSection.appendChild(buildDirectoryCategoryCarousel(groupKey, groupData));
    categoryDirectoryRoot.appendChild(groupSection);
  });

  window.requestAnimationFrame(() => {
    categoryDirectoryRoot.classList.add("is-ready");
  });
};

const initDirectoryCarousels = () => {
  const carousels = document.querySelectorAll("[data-directory-carousel]");

  if (!carousels.length) {
    return;
  }

  carousels.forEach((carousel) => {
    if (carousel.dataset.carouselReady === "true") {
      return;
    }

    const track = carousel.querySelector("[data-directory-track]");
    const group = carousel.closest(".category-directory-group");
    const prevButton = group ? group.querySelector("[data-directory-prev]") : null;
    const nextButton = group ? group.querySelector("[data-directory-next]") : null;

    if (!track || !prevButton || !nextButton) {
      return;
    }

    const getStep = () => {
      const firstCard = track.querySelector(".category-subcard");

      if (!firstCard) {
        return 320;
      }

      const cardWidth = firstCard.getBoundingClientRect().width;
      const styles = window.getComputedStyle(track);
      const gap = Number.parseFloat(styles.columnGap || styles.gap || "0") || 0;
      return cardWidth + gap;
    };

    const syncButtons = () => {
      const maxScroll = Math.max(0, track.scrollWidth - track.clientWidth);
      prevButton.classList.toggle("swiper-button-disabled", track.scrollLeft <= 4);
      nextButton.classList.toggle("swiper-button-disabled", track.scrollLeft >= maxScroll - 4);
    };

    prevButton.addEventListener("click", () => {
      track.scrollBy({ left: -getStep(), behavior: "smooth" });
    });

    nextButton.addEventListener("click", () => {
      track.scrollBy({ left: getStep(), behavior: "smooth" });
    });

    track.addEventListener("scroll", syncButtons, { passive: true });
    window.addEventListener("resize", syncButtons, { passive: true });

    carousel.dataset.carouselReady = "true";
    window.requestAnimationFrame(syncButtons);
  });
};

const initCategoryFilters = () => {
  const filterButtons = document.querySelectorAll("[data-filter-btn]");
  const filterSections = document.querySelectorAll(".category-directory-group[data-filter-section]");

  if (!filterButtons.length || !filterSections.length) {
    return;
  }

  const validFilters = new Set(
    Array.from(filterButtons, (button) => button.dataset.filterBtn || "todos"),
  );

  const syncFilterUrl = (key) => {
    const url = new URL(window.location.href);

    if (key === "todos") {
      url.searchParams.delete("filtro");
    } else {
      url.searchParams.set("filtro", key);
    }

    window.history.replaceState(null, "", `${url.pathname}${url.search}${url.hash}`);
  };

  const resolveFilterKey = (key) => {
    if (validFilters.has(key)) {
      return key;
    }

    for (const [groupKey, groupData] of Object.entries(lineData)) {
      const hasMatch = groupData.items.some((item) => {
        if (item.href) {
          const hrefUrl = new URL(item.href, window.location.href);
          return hrefUrl.searchParams.get("filtro") === key;
        }

        return slugifyText(item.label) === key;
      });

      if (hasMatch) {
        return groupKey;
      }
    }

    return "todos";
  };

  const applyFilter = (key) => {
    filterButtons.forEach((button) => {
      button.classList.toggle("is-active", button.dataset.filterBtn === key);
    });

    filterSections.forEach((section) => {
      const visible = key === "todos" || section.dataset.filterSection === key;
      section.hidden = !visible;

      if (visible) {
        const swipers = section.querySelectorAll("[data-category-swiper]");

        swipers.forEach((swiperElement) => {
          if (swiperElement.swiper) {
            swiperElement.swiper.update();
          }
        });
      }
    });

    window.requestAnimationFrame(() => {
      window.dispatchEvent(new Event("resize"));
    });
  };

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const nextKey = button.dataset.filterBtn || "todos";
      applyFilter(nextKey);
      syncFilterUrl(nextKey);
    });
  });

  const requestedFilter = new URLSearchParams(window.location.search).get("filtro") || "todos";
  const initialFilter = resolveFilterKey(requestedFilter);

  applyFilter(initialFilter);
  syncFilterUrl(initialFilter);
};

const initCategoryProductLinks = () => {
  const categoryProducts = document.querySelectorAll(".category-product");

  if (!categoryProducts.length) {
    return;
  }

  categoryProducts.forEach((card) => {
    card.tabIndex = 0;
    card.setAttribute("role", "link");
    card.setAttribute("aria-label", "Abrir página do produto");

    const openProductPage = () => {
      window.location.href = "./produto.html";
    };

    card.addEventListener("click", (event) => {
      if (event.target.closest("button, a")) {
        return;
      }

      openProductPage();
    });

    card.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openProductPage();
      }
    });
  });
};

const enhanceCategoryProductLinks = () => {
  const categoryProducts = document.querySelectorAll(".category-product");

  if (!categoryProducts.length) {
    return;
  }

  categoryProducts.forEach((card) => {
    if (card.querySelector(".category-product__link")) {
      return;
    }

    const productLink = document.createElement("a");
    productLink.className = "category-product__link";
    productLink.href = "./produto.html";
    productLink.setAttribute("aria-label", "Abrir página do produto");

    while (card.firstChild) {
      productLink.appendChild(card.firstChild);
    }

    card.appendChild(productLink);
  });
};

const initProductGallery = () => {
  if (!productMainImage || !productThumbButtons.length) {
    return;
  }

  updateProductMainImage(activeProductImageIndex);

  productThumbButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
      updateProductMainImage(index);
    });
  });

  if (productOpenGalleryButton) {
    productOpenGalleryButton.addEventListener("click", () => {
      openProductLightbox(activeProductImageIndex);
    });
  }

  if (productLightboxPrevButton) {
    productLightboxPrevButton.addEventListener("click", () => {
      updateProductMainImage(activeProductImageIndex - 1);
    });
  }

  if (productLightboxNextButton) {
    productLightboxNextButton.addEventListener("click", () => {
      updateProductMainImage(activeProductImageIndex + 1);
    });
  }

  productLightboxCloseButtons.forEach((button) => {
    button.addEventListener("click", () => {
      closeProductLightbox();
    });
  });
};

const initProductOptions = () => {
  [productSwatches, temperatureOptions].forEach((group) => {
    if (!group.length) {
      return;
    }

    group.forEach((button) => {
      button.addEventListener("click", () => {
        group.forEach((item) => {
          item.classList.toggle("is-active", item === button);
        });
      });
    });
  });
};

const initProductSheet = () => {
  if (!productSheet || !productSheetOpenButton) {
    return;
  }

  productSheetOpenButton.addEventListener("click", () => {
    openProductSheet();
  });

  productSheetCloseButtons.forEach((button) => {
    button.addEventListener("click", () => {
      closeProductSheet();
    });
  });

  if (productSheetCopyButton && productSheetContent) {
    productSheetCopyButton.addEventListener("click", async () => {
      const originalLabel = productSheetCopyButton.querySelector("span");
      const textToCopy = productSheetContent.innerText.trim();

      if (!textToCopy) {
        return;
      }

      try {
        await navigator.clipboard.writeText(textToCopy);

        if (originalLabel) {
          originalLabel.textContent = "Copiado";
          window.setTimeout(() => {
            originalLabel.textContent = "Copiar Tudo";
          }, 1400);
        }
      } catch (error) {
        if (originalLabel) {
          originalLabel.textContent = "Não copiado";
          window.setTimeout(() => {
            originalLabel.textContent = "Copiar Tudo";
          }, 1400);
        }
      }
    });
  }
};

const initRelatedSwiper = () => {
  const swiperElement = document.querySelector("[data-related-swiper]");

  if (!swiperElement || typeof window.Swiper !== "function") {
    return false;
  }

  if (swiperElement.dataset.swiperReady === "true") {
    return true;
  }

  swiperElement.dataset.swiperReady = "true";

  new window.Swiper(swiperElement, {
    speed: 520,
    watchOverflow: true,
    grabCursor: true,
    navigation: {
      prevEl: document.querySelector("[data-related-prev]"),
      nextEl: document.querySelector("[data-related-next]"),
    },
    breakpoints: {
      0: {
        slidesPerView: 1.1,
        spaceBetween: 14,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 18,
      },
      1100: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1360: {
        slidesPerView: 4,
        spaceBetween: 22,
      },
    },
  });

  return true;
};

initCategoryDirectory();
initDirectoryCarousels();

if (!initSwiper()) {
  window.addEventListener("load", initSwiper, { once: true });
}

if (!initCategorySwipers()) {
  window.addEventListener("load", initCategorySwipers, { once: true });
}

if (!initRelatedSwiper()) {
  window.addEventListener("load", initRelatedSwiper, { once: true });
}

initCategoryFilters();
initCategoryProductLinks();
enhanceCategoryProductLinks();
initProductGallery();
initProductOptions();
initProductSheet();

if (newsletterForm && feedback) {
  newsletterForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(newsletterForm);
    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();

    if (!name || !email) {
      feedback.textContent = "Preencha nome e e-mail para testar o fluxo.";
      return;
    }

    feedback.textContent = `Cadastro simulado para ${name}.`;
    newsletterForm.reset();
  });
}

if (backToTopButton) {
  const toggleBackToTop = () => {
    backToTopButton.classList.toggle("is-visible", window.scrollY > 720);
  };

  toggleBackToTop();
  window.addEventListener("scroll", toggleBackToTop, { passive: true });

  backToTopButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

document.addEventListener("keydown", (event) => {
  if (isProductLightboxOpen()) {
    if (event.key === "Escape") {
      closeProductLightbox();
      return;
    }

    if (event.key === "ArrowLeft") {
      updateProductMainImage(activeProductImageIndex - 1);
      return;
    }

    if (event.key === "ArrowRight") {
      updateProductMainImage(activeProductImageIndex + 1);
      return;
    }
  }

  if (event.key === "Escape" && isProductSheetOpen()) {
    closeProductSheet();
  }
});
});
