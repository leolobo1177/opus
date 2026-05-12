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
    const open = isMenuOpen();
    document.body.classList.toggle("nav-menu-open", open);
    document.documentElement.classList.toggle("nav-menu-open", open);
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
    } else if (document.body.classList.contains("page-variant-v5")) {
      activeVariant = "v5";
    } else if (document.body.classList.contains("page-variant-v6")) {
      activeVariant = "v6";
    } else if (document.body.classList.contains("page-variant-v7")) {
      activeVariant = "v7";
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
        url.searchParams.delete("categoria");
      } else {
        url.searchParams.set("categoria", key);
      }

      url.searchParams.delete("filtro");

      window.history.replaceState(null, "", `${url.pathname}${url.search}${url.hash}`);
    };

    const resolveFilterKey = (key) => {
      if (validFilters.has(key)) {
        return key;
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

    const urlParams = new URLSearchParams(window.location.search);
    const requestedFilter = urlParams.get("categoria") || urlParams.get("filtro") || "todos";
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

const faqLineTrack = document.querySelector("[data-faq-line-track]");
const faqLinePrevButton = document.querySelector("[data-faq-line-prev]");
const faqLineNextButton = document.querySelector("[data-faq-line-next]");
const faqManualList = document.querySelector("[data-faq-manual-list]");
const faqVideoList = document.querySelector("[data-faq-video-list]");
const faqFileList = document.querySelector("[data-faq-file-list]");
const faqQuestionList = document.querySelector("[data-faq-question-list]");
let faqAnimationsReady = false;
let faqSectionObserver = null;
const faqRevealRegistry = new WeakMap();

const faqLineData = {
  lampadas: {
    label: "L\u00e2mpadas",
    subtitle: "Guia de montagem e limpeza",
    manuals: [
      { index: "01", title: "Manual de Instala\u00e7\u00e3o de Spots", meta: "MULTI-IDIOMA \u00b7 REV 2026.05", href: "#" },
      { index: "02", title: "Guia de Limpeza para Embutidos", meta: "MANUTEN\u00c7\u00c3O \u00b7 REV 2026.04", href: "#" },
      { index: "03", title: "Compatibiliza\u00e7\u00e3o com Dimmers", meta: "CONFIGURA\u00c7\u00c3O \u00b7 REV 2026.03", href: "#" },
    ],
    videos: [
      { index: "01", title: "Recorte e prepara\u00e7\u00e3o do nicho", meta: "4:12 \u00b7 guia t\u00e9cnico" },
      { index: "02", title: "Conex\u00e3o el\u00e9trica b\u00e1sica", meta: "6:45 \u00b7 instala\u00e7\u00e3o" },
      { index: "03", title: "Acabamento e regulagem final", meta: "3:20 \u00b7 ajuste fino" },
    ],
    files: [
      { icon: "PDF", title: "Datasheet T\u00e9cnico", description: "Resumo t\u00e9cnico com dimens\u00f5es, pot\u00eancias e aplica\u00e7\u00f5es da linha.", cta: "Download PDF", href: "#" },
      { icon: "IES", title: "Arquivo IES", description: "Curvas fotom\u00e9tricas e dados para softwares de simula\u00e7\u00e3o.", cta: "Download ZIP", href: "#" },
      { icon: "3D", title: "Modelo 3D", description: "Blocos base para estudo de encaixe e compatibiliza\u00e7\u00e3o.", cta: "Download ZIP", href: "#" },
    ],
    faqs: [
      { question: "Como escolher o recorte correto para a lumin\u00e1ria?", answer: "Use sempre o recorte indicado no datasheet do modelo escolhido. Em prot\u00f3tipos, considere uma folga m\u00ednima para acabamento e ventila\u00e7\u00e3o do conjunto." },
      { question: "Posso usar dimmer de parede comum na linha?", answer: "Depende do driver aplicado em cada produto. Para evitar incompatibilidade, o ideal \u00e9 cruzar driver, protocolo e pot\u00eancia antes da instala\u00e7\u00e3o final." },
      { question: "Qual \u00e9 a limpeza recomendada para spots e embutidos?", answer: "Desligue a alimenta\u00e7\u00e3o, use pano macio e seco ou levemente umedecido, sem solventes agressivos nem abrasivos no acabamento." },
    ],
  },
  interno: {
    label: "Uso Interno",
    subtitle: "Guia de instala\u00e7\u00e3o e integra\u00e7\u00e3o",
    manuals: [
      { index: "01", title: "Guia de Montagem para Perfis Internos", meta: "MULTI-IDIOMA \u00b7 REV 2026.05", href: "#" },
      { index: "02", title: "Instala\u00e7\u00e3o de Pain\u00e9is e Plafons", meta: "ESPECIFICA\u00c7\u00c3O \u00b7 REV 2026.04", href: "#" },
      { index: "03", title: "Lineares e Sistemas Decorativos", meta: "APLICA\u00c7\u00d5ES \u00b7 REV 2026.03", href: "#" },
    ],
    videos: [
      { index: "01", title: "Fixadores e estrutura de teto", meta: "5:08 \u00b7 montagem" },
      { index: "02", title: "Passagem de fia\u00e7\u00e3o no forro", meta: "7:11 \u00b7 infraestrutura" },
      { index: "03", title: "Alinhamento visual da composi\u00e7\u00e3o", meta: "3:44 \u00b7 acabamento" },
    ],
    files: [
      { icon: "PDF", title: "Datasheet T\u00e9cnico", description: "Base dimensional da linha de uso interno para estudos preliminares.", cta: "Download PDF", href: "#" },
      { icon: "IES", title: "Arquivo IES", description: "Distribui\u00e7\u00e3o luminosa para simula\u00e7\u00e3o de ambientes internos.", cta: "Download ZIP", href: "#" },
      { icon: "3D", title: "Modelo 3D", description: "Blocos para detalhamento executivo e estudo de volumetria.", cta: "Download ZIP", href: "#" },
    ],
    faqs: [
      { question: "Os perfis internos podem ser instalados em marcenaria?", answer: "Sim, desde que haja ventila\u00e7\u00e3o adequada e previs\u00e3o do alojamento para fita, difusor e fonte." },
      { question: "Como alinhar lineares em longos corredores?", answer: "O ideal \u00e9 modular a instala\u00e7\u00e3o pela pagina\u00e7\u00e3o do forro ou da arquitetura e prever pontos de alimenta\u00e7\u00e3o intermedi\u00e1rios." },
      { question: "Posso combinar diferentes temperaturas de cor no mesmo ambiente?", answer: "Pode, mas \u00e9 importante definir hierarquia entre ilumina\u00e7\u00e3o funcional e destaque para evitar leitura visual inconsistente." },
    ],
  },
  externo: {
    label: "Uso Externo",
    subtitle: "Guia de montagem e vedação",
    manuals: [
      { index: "01", title: "Instala\u00e7\u00e3o de Balizadores", meta: "MULTI-IDIOMA \u00b7 REV 2026.05", href: "#" },
      { index: "02", title: "Arandelas e Jardim", meta: "VEDA\u00c7\u00c3O \u00b7 REV 2026.04", href: "#" },
      { index: "03", title: "Conectores e Prote\u00e7\u00e3o IP", meta: "CAMPO \u00b7 REV 2026.03", href: "#" },
    ],
    videos: [
      { index: "01", title: "Preparo de base para jardim", meta: "4:56 \u00b7 instala\u00e7\u00e3o" },
      { index: "02", title: "Selagem e prote\u00e7\u00e3o de conex\u00f5es", meta: "6:03 \u00b7 vedação" },
      { index: "03", title: "Ajuste de foco em fachadas", meta: "3:28 \u00b7 regula\u00e7\u00e3o" },
    ],
    files: [
      { icon: "PDF", title: "Datasheet T\u00e9cnico", description: "Par\u00e2metros de prote\u00e7\u00e3o, instala\u00e7\u00e3o e aplica\u00e7\u00e3o em campo.", cta: "Download PDF", href: "#" },
      { icon: "IES", title: "Arquivo IES", description: "Curvas para simula\u00e7\u00e3o de fachada, jardim e \u00e1reas externas.", cta: "Download ZIP", href: "#" },
      { icon: "3D", title: "Modelo 3D", description: "Fam\u00edlias base para pagina\u00e7\u00e3o de paisagismo e obra externa.", cta: "Download ZIP", href: "#" },
    ],
    faqs: [
      { question: "Como garantir a vedação correta em áreas externas?", answer: "Verifique conectores, prensa-cabos e vedações do conjunto antes da energização. O grau IP do produto depende da montagem correta em campo." },
      { question: "Posso instalar balizadores em piso drenante?", answer: "Pode, desde que a base esteja estabilizada e o ponto de instalação preserve o acesso para manutenção futura." },
      { question: "Quando devo usar conectores IP68?", answer: "Sempre que a instalação exigir exposição direta à umidade ou ambientes sujeitos a lavagem, infiltração ou intempérie constante." },
    ],
  },
  fitas: {
    label: "Fitas, Fontes e Perfis",
    subtitle: "Guia de corte, fonte e acabamento",
    manuals: [
      { index: "01", title: "Corte e Alimenta\u00e7\u00e3o de Fitas", meta: "MULTI-IDIOMA \u00b7 REV 2026.05", href: "#" },
      { index: "02", title: "Dimensionamento de Fontes", meta: "EL\u00c9TRICA \u00b7 REV 2026.04", href: "#" },
      { index: "03", title: "Montagem de Perfis e Difusores", meta: "ACABAMENTO \u00b7 REV 2026.03", href: "#" },
    ],
    videos: [
      { index: "01", title: "Corte preciso e solda inicial", meta: "4:02 \u00b7 bancada" },
      { index: "02", title: "Instala\u00e7\u00e3o em perfil de alum\u00ednio", meta: "5:40 \u00b7 montagem" },
      { index: "03", title: "Liga\u00e7\u00e3o de fontes e redund\u00e2ncia", meta: "6:15 \u00b7 el\u00e9trica" },
    ],
    files: [
      { icon: "PDF", title: "Datasheet T\u00e9cnico", description: "Especificações de fitas, potências lineares e perfis compatíveis.", cta: "Download PDF", href: "#" },
      { icon: "IES", title: "Arquivo IES", description: "Curvas e parâmetros lineares para cenários de iluminação contínua.", cta: "Download ZIP", href: "#" },
      { icon: "3D", title: "Modelo 3D", description: "Perfis e elementos básicos para estudo de encaixe arquitetônico.", cta: "Download ZIP", href: "#" },
    ],
    faqs: [
      { question: "Qual é o limite recomendado para alimentação de fitas?", answer: "O limite depende da potência por metro e da bitola da alimentação. Em trechos longos, distribua pontos de energia para evitar queda de tensão." },
      { question: "Preciso sempre usar perfil de alumínio?", answer: "Para melhor dissipação e acabamento, sim. Em aplicações técnicas, o perfil também ajuda a estabilizar a vida útil da fita." },
      { question: "Como escolher a fonte correta?", answer: "Some a carga instalada, aplique margem de segurança e confirme compatibilidade de tensão, dimerização e ambiente de instalação." },
    ],
  },
  sistemas: {
    label: "Sistemas",
    subtitle: "Guia de trilhos e integração",
    manuals: [
      { index: "01", title: "Montagem de Sistema Magn\u00e9tico", meta: "MULTI-IDIOMA \u00b7 REV 2026.05", href: "#" },
      { index: "02", title: "Instala\u00e7\u00e3o de Trilhos", meta: "INFRAESTRUTURA \u00b7 REV 2026.04", href: "#" },
      { index: "03", title: "Integra\u00e7\u00e3o de M\u00f3dulos", meta: "CONFIGURA\u00c7\u00c3O \u00b7 REV 2026.03", href: "#" },
    ],
    videos: [
      { index: "01", title: "Nivelamento do trilho", meta: "4:46 \u00b7 montagem" },
      { index: "02", title: "Posicionamento dos m\u00f3dulos", meta: "5:26 \u00b7 configura\u00e7\u00e3o" },
      { index: "03", title: "Ajuste final e energiza\u00e7\u00e3o", meta: "3:18 \u00b7 comissionamento" },
    ],
    files: [
      { icon: "PDF", title: "Datasheet T\u00e9cnico", description: "Parâmetros de montagem, modulação e integração dos sistemas.", cta: "Download PDF", href: "#" },
      { icon: "IES", title: "Arquivo IES", description: "Curvas dos módulos para simulação em layouts modulares.", cta: "Download ZIP", href: "#" },
      { icon: "3D", title: "Modelo 3D", description: "Componentes base de sistema para compatibilização em projeto.", cta: "Download ZIP", href: "#" },
    ],
    faqs: [
      { question: "Posso misturar módulos diferentes no mesmo trilho?", answer: "Sim, desde que o sistema escolhido suporte a combinação elétrica e mecânica entre os módulos previstos." },
      { question: "Como definir a modulação inicial do sistema?", answer: "Parta do layout arquitetônico, pontos de alimentação e cenas desejadas. Depois ajuste comprimentos e acessórios compatíveis." },
      { question: "O sistema magnético exige manutenção específica?", answer: "A manutenção é preventiva: inspeção de encaixes, limpeza de contatos e conferência periódica dos pontos de alimentação." },
    ],
  },
};

const faqLineMediaAssets = {
  lampadas: {
    src: "./assets/faq-lines/categoria-lampadas.png",
    alt: "Luminaria Opus para lampadas",
  },
  interno: {
    src: "./assets/faq-lines/categoria-interno.png",
    alt: "Produto Opus para uso interno",
  },
  externo: {
    src: "./assets/faq-lines/categoria-externo.png",
    alt: "Produto Opus para uso externo",
  },
  fitas: {
    src: "./assets/faq-lines/categoria-fitas.png",
    alt: "Fita LED Opus",
  },
  sistemas: {
    src: "./assets/faq-lines/categoria-sistemas.png",
    alt: "Sistema linear Opus",
  },
};

const normalizedFaqLineData = {
  ventiladores: {
    label: "Ventiladores",
    subtitle: "Guia de montagem e limpeza",
    manuals: [
      { index: "01", title: "Ventiladores Air Class", meta: "MULTI-IDIOMA · REV 2024.02", href: "#" },
      { index: "02", title: "Ventiladores Air Orbital", meta: "APENAS SPECS TÉCNICAS · REV 2023.11", href: "#" },
      { index: "03", title: "Ventiladores Air Retrátil", meta: "API E CONECTIVIDADE · REV 2024.01", href: "#" },
    ],
    videos: [
      { index: "01", title: "Suporte de teto", meta: "4:12 · guia técnico" },
      { index: "02", title: "Sincronização e fiação", meta: "6:45 · configuração avançada" },
      { index: "03", title: "Balanceamento das pás", meta: "3:20 · ajuste de precisão" },
    ],
    files: [
      { icon: "PDF", title: "Datasheet Técnico", description: "Resumo técnico com dimensões, instalação e aplicação da linha de ventiladores.", cta: "Download PDF", href: "#" },
      { icon: "IES", title: "Arquivo IES", description: "Dados fotométricos e parâmetros complementares de apoio ao projeto.", cta: "Download ZIP", href: "#" },
      { icon: "3D", title: "Modelo 3D", description: "Famílias base para compatibilização arquitetônica e estudo de volumetria.", cta: "Download ZIP", href: "#" },
    ],
    faqs: [
      { question: "O Air Class pode ser instalado em tetos inclinados?", answer: "Sim, o kit de montagem padrão suporta inclinações leves. Para ângulos maiores, o ideal é prever um adaptador compatível da linha." },
      { question: "O motor DC é compatível com dimmers de parede analógicos?", answer: "Não diretamente. O controle deve seguir o protocolo eletrônico previsto para cada modelo, evitando incompatibilidades de acionamento." },
      { question: "Quantas unidades podem ser sincronizadas com um único controle?", answer: "A quantidade varia por linha e receptor utilizado. Para o protótipo, o mais seguro é considerar o agrupamento indicado no manual técnico de cada modelo." },
    ],
  },
  darwin: {
    label: "Darwin",
    subtitle: "Guia de instalação e foco",
    manuals: [
      { index: "01", title: "Instalação do Espeto Darwin", meta: "MULTI-IDIOMA · REV 2026.05", href: "#" },
      { index: "02", title: "Vedação e conexão em jardim", meta: "VEDAÇÃO · REV 2026.04", href: "#" },
      { index: "03", title: "Regulagem de foco e orientação", meta: "CAMPO · REV 2026.03", href: "#" },
    ],
    videos: [
      { index: "01", title: "Fixação da base no solo", meta: "4:56 · instalação" },
      { index: "02", title: "Selagem das conexões externas", meta: "6:03 · vedação" },
      { index: "03", title: "Ajuste do facho em paisagismo", meta: "3:28 · regulagem" },
    ],
    files: [
      { icon: "PDF", title: "Datasheet Técnico", description: "Parâmetros de proteção, fixação e aplicação da linha Darwin em campo.", cta: "Download PDF", href: "#" },
      { icon: "IES", title: "Arquivo IES", description: "Curvas de distribuição e dados de apoio para simulações externas.", cta: "Download ZIP", href: "#" },
      { icon: "3D", title: "Modelo 3D", description: "Blocos base para paginação de jardim, fachada e cenários externos.", cta: "Download ZIP", href: "#" },
    ],
    faqs: [
      { question: "Como garantir a vedação correta da linha Darwin?", answer: "Verifique prensa-cabos, conectores e pontos de junção antes da energização. O desempenho IP depende diretamente da montagem correta em campo." },
      { question: "Posso usar Darwin em solo com drenagem irregular?", answer: "Pode, desde que a base de fixação esteja estabilizada e o ponto de instalação preserve o acesso para manutenção futura." },
      { question: "Qual é a melhor forma de regular o foco em jardim?", answer: "Comece com o alinhamento do elemento paisagístico principal e depois refine a inclinação do facho em pequenos ajustes para evitar ofuscamento." },
    ],
  },
  fitas: {
    ...faqLineData.fitas,
    label: "Fitas de LED",
  },
  trilho: {
    label: "Trilho Magnetico",
    subtitle: "Guia de trilho e modulação",
    manuals: [
      { index: "01", title: "Montagem do Trilho Magnético", meta: "MULTI-IDIOMA · REV 2026.05", href: "#" },
      { index: "02", title: "Instalação e nivelamento", meta: "INFRAESTRUTURA · REV 2026.04", href: "#" },
      { index: "03", title: "Posicionamento dos módulos", meta: "CONFIGURAÇÃO · REV 2026.03", href: "#" },
    ],
    videos: [
      { index: "01", title: "Nivelamento do trilho", meta: "4:46 · montagem" },
      { index: "02", title: "Encaixe dos módulos magnéticos", meta: "5:26 · configuração" },
      { index: "03", title: "Ajuste final e energização", meta: "3:18 · comissionamento" },
    ],
    files: [
      { icon: "PDF", title: "Datasheet Técnico", description: "Parâmetros de modulação, fixação e integração do trilho magnético.", cta: "Download PDF", href: "#" },
      { icon: "IES", title: "Arquivo IES", description: "Curvas dos módulos para simulação em layouts lineares e modulares.", cta: "Download ZIP", href: "#" },
      { icon: "3D", title: "Modelo 3D", description: "Componentes base do trilho para compatibilização em projeto.", cta: "Download ZIP", href: "#" },
    ],
    faqs: [
      { question: "Posso misturar módulos diferentes no mesmo trilho?", answer: "Sim, desde que o trilho escolhido suporte a combinação elétrica e mecânica entre os módulos previstos no conjunto." },
      { question: "Como definir a modulação inicial do trilho?", answer: "Parta do layout arquitetônico, dos pontos de alimentação e das cenas de luz desejadas. Depois ajuste comprimentos e acessórios compatíveis." },
      { question: "O trilho magnético exige manutenção específica?", answer: "A manutenção é preventiva: inspeção de encaixes, limpeza de contatos e conferência periódica dos pontos de alimentação." },
    ],
  },
};

Object.keys(faqLineData).forEach((key) => {
  delete faqLineData[key];
});

Object.assign(faqLineData, normalizedFaqLineData);

const normalizedFaqLineMediaAssets = {
  ventiladores: {
    src: "./assets/faq-lines/categoria-interno.png",
    alt: "Ventilador Opus",
  },
  darwin: {
    src: "./assets/faq-lines/categoria-externo.png",
    alt: "Spot Darwin Opus",
  },
  fitas: {
    src: "./assets/faq-lines/categoria-fitas.png",
    alt: "Fita de LED Opus",
  },
  trilho: {
    src: "./assets/faq-lines/categoria-sistemas.png",
    alt: "Trilho Magnetico Opus",
  },
};

Object.keys(faqLineMediaAssets).forEach((key) => {
  delete faqLineMediaAssets[key];
});

Object.assign(faqLineMediaAssets, normalizedFaqLineMediaAssets);

const faqLineOrder = ["ventiladores", "darwin", "fitas", "trilho"];

normalizedFaqLineData.ventiladores.faqs = [
  {
    question: "Os ventiladores são compatíveis com Alexa ou automação inteligente?",
    answer: `Não. Os ventiladores não foram desenvolvidos para integração com Alexa ou outros sistemas de automação inteligente.\nPor isso, a OPUS LED não fornece suporte técnico para esse tipo de uso.`,
  },
  {
    question: "Qual é a frequência de funcionamento do controle dos ventiladores?",
    answer: `O controle utiliza tecnologia em 2.4GHz.\nO receptor do ventilador, porém, não possui módulo Bluetooth, funcionando por Radiofrequência RF 2.4GHz.`,
  },
  {
    question: "O motor dos ventiladores é DC?",
    answer: `Sim. O motor dos ventiladores é DC, ou seja, funciona em corrente contínua.`,
  },
  {
    question: "O que é a função Air Sound?",
    answer: `A função Air Sound está relacionada ao sistema de alto-falante do produto.\n\nObservação: essa informação está incompleta no documento original. Recomendo validar internamente antes de publicar no site, para deixar a resposta mais precisa.`,
  },
  {
    question: "O que verificar quando o controle remoto do ventilador não funciona?",
    answer: `Primeiro, verifique se a luz do ventilador liga pelo interruptor da parede.\nSe a luz ligar, mas o controle não responder, recomenda-se realizar o pareamento do controle remoto.\n\nTambém é importante verificar:\nSe o ventilador funcionava normalmente antes.\nHá quanto tempo o produto está em uso.\nSe a luz acende ao ligar e desligar o interruptor.\nSe a luz do controle acende ao pressionar algum botão.`,
  },
  {
    question: "Como parear o controle dos ventiladores retráteis antigos?",
    answer: `1. Desligue o interruptor de energia do ventilador na parede.\n2. Religue o interruptor para energizar o ventilador.\n3. Com o controle em mãos, pressione e segure o botão "Desligar Ventilador" quase simultaneamente ao religamento.\n4. O ventilador emitirá um bipe ou as luzes poderão oscilar.\n5. Após o bipe ou oscilação das luzes, solte o botão "Desligar Ventilador".`,
  },
  {
    question: "Como desparear o controle dos ventiladores retráteis antigos?",
    answer: `1. Desligue o interruptor de energia do ventilador na parede.\n2. Religue o interruptor para energizar o ventilador.\n3. Com o controle em mãos, pressione e segure o botão "2H" quase simultaneamente ao religamento.\n4. O ventilador emitirá um bipe ou as luzes poderão oscilar.\n5. Após o bipe ou oscilação das luzes, solte o botão "2H".`,
  },
  {
    question: "Como parear o controle dos ventiladores retráteis novos?",
    answer: `1. Desligue o interruptor de energia do ventilador na parede.\n2. Religue o interruptor para energizar o ventilador.\n3. Com o controle em mãos, pressione e segure o botão "Desligar Ventilador" quase simultaneamente ao religamento.\n4. O ventilador emitirá um bipe ou as luzes poderão oscilar.\n5. Após o bipe ou oscilação das luzes, solte o botão "Desligar Ventilador".`,
  },
  {
    question: "Como desparear o controle dos ventiladores retráteis novos?",
    answer: `1. Desligue o interruptor de energia do ventilador na parede.\n2. Religue o interruptor para energizar o ventilador.\n3. Com o controle em mãos, pressione e segure o botão "Desligar tudo" quase simultaneamente ao religamento.\n4. O ventilador emitirá um bipe ou as luzes poderão oscilar.\n5. Após o bipe ou oscilação das luzes, solte o botão "Desligar tudo".`,
  },
  {
    question: "Como parear o controle dos ventiladores orbitais?",
    answer: `1. Desligue o interruptor de energia do ventilador na parede.\n2. Religue o interruptor para energizar o ventilador.\n3. Com o controle em mãos, pressione e segure o botão "SETUP" quase simultaneamente ao religamento.\n4. O ventilador emitirá um bipe ou as luzes poderão oscilar.\n5. Teste as funções do ventilador pelo controle.\n6. Se o ventilador responder aos comandos, o controle foi pareado corretamente.`,
  },
  {
    question: "Como desparear o controle dos ventiladores orbitais?",
    answer: `1. Desligue o interruptor de energia do ventilador na parede.\n2. Religue o interruptor para energizar o ventilador.\n3. Com o controle em mãos, pressione e segure os botões "4" e "Aumento de Brilho" quase simultaneamente ao religamento.\n4. O ventilador emitirá um bipe ou as luzes poderão oscilar.\n5. Teste as funções do ventilador pelo controle.\n6. Se o ventilador não responder aos comandos, o controle foi despareado corretamente.`,
  },
  {
    question: "Como verificar se a velocidade do ventilador retrátil está dentro do normal?",
    answer: `A velocidade máxima indicada para os ventiladores retráteis é de 240 RPM.\nPara verificar se o produto está dentro da especificação, é possível fazer um teste simples de rotação.`,
  },
  {
    question: "Como fazer o teste de velocidade do ventilador retrátil?",
    answer: `1. Cole uma fita adesiva em uma das pás para identificar cada volta completa.\n2. Grave o ventilador em funcionamento usando a câmera lenta do celular.\n3. Use outro aparelho para cronometrar o tempo.\n4. Conte quantas voltas completas a pá realiza em 1 segundo.\n5. Multiplique esse número por 60 para obter o valor em RPM.\n\nExemplo:\nSe o ventilador realiza 4 voltas em 1 segundo, o cálculo é:\n4 RPS × 60 segundos = 240 RPM\n\nNesse caso, o produto está de acordo com a especificação técnica.`,
  },
  {
    question: "Como ajustar a velocidade de acendimento das luzes no módulo sequencial?",
    answer: `Pressione o botão "Velocidade" algumas vezes até que a velocidade de acendimento das luzes fique de acordo com sua preferência.`,
  },
  {
    question: "Como aumentar a quantidade de canais ativos no módulo sequencial?",
    answer: `1. Pressione e segure o botão "Velocidade" por 5 segundos.\n2. Solte o botão.\n3. Pressione novamente o botão "Velocidade" até atingir a quantidade desejada de canais ativos.\n\nA quantidade de canais ativos será indicada pelos LEDs azuis na placa do módulo sequencial.`,
  },
  {
    question: "Como diminuir a quantidade de canais ativos no módulo sequencial?",
    answer: `1. Pressione e segure o botão "Velocidade" por 5 segundos.\n2. Solte o botão.\n3. Pressione o botão "Timer" até atingir a quantidade desejada de canais ativos.\n\nA quantidade de canais ativos será indicada pelos LEDs azuis na placa do módulo sequencial.`,
  },
  {
    question: "Como ajustar o brilho dos LEDs no módulo sequencial?",
    answer: `Pressione a tecla "Brilho" algumas vezes até que os LEDs atinjam a intensidade desejada.`,
  },
  {
    question: "Como alterar os efeitos dos LEDs no módulo sequencial?",
    answer: `1. Pressione e segure o botão "Brilho" por 5 segundos.\n2. Solte o botão.\n3. Pressione novamente o botão "Brilho" até selecionar o efeito desejado.\n\nO módulo possui 3 tipos de efeito, e a configuração é salva automaticamente após a alteração.`,
  },
  {
    question: "Como ajustar o tempo de permanência das luzes acesas?",
    answer: `Pressione o botão "Timer" algumas vezes até que o tempo de permanência das luzes acesas fique de acordo com sua preferência.\n\nO tempo será indicado pelos 8 LEDs vermelhos na placa interna do módulo.`,
  },
  {
    question: "Como salvar as configurações feitas no módulo sequencial?",
    answer: `Após realizar qualquer configuração, pressione e segure o botão "Brilho" até que as luzes do módulo sequencial se apaguem.\nQuando as luzes apagarem, as alterações estarão salvas.`,
  },
  {
    question: "É necessário remover a tampa do módulo sequencial para configurar?",
    answer: `Não é obrigatório, mas remover a tampa pode facilitar a visualização dos LEDs que indicam as alterações feitas.\n\nPara retirar a tampa de acabamento, remova os 4 parafusos localizados nas tampas laranjas do módulo e desencaixe a peça.\n\nSugestão para página: em caso de dúvida, procure um profissional qualificado, principalmente por envolver instalação elétrica.`,
  },
];

faqLineData.darwin.label = "Fita Digital Monocromática";
faqLineData.darwin.subtitle = "Modelos OPS 83588, OPS 83571 e OPS 83564";
faqLineData.darwin.faqs = [
  {
    question: "É possível sincronizar vários receptores em um único controle?",
    answer: `Modelos: OPS 83588, OPS 83571 e OPS 83564\nControle compatível: OPS 84813\n\nSim. É possível sincronizar até 5 receptores em um único controle.\n\nPara sincronizar, pressione o botão B+ do controle logo após ligar a energia das fitas.`,
  },
  {
    question: "Quantos pixels possui um rolo de fita digital monocromática?",
    answer: `Um rolo de fita de 10 metros possui 80 pixels.`,
  },
  {
    question: "Quantos pixels existem por metro na fita digital monocromática?",
    answer: `Cada metro da fita possui 8 pixels.`,
  },
  {
    question: "Qual é o comprimento máximo considerando 2048 pixels?",
    answer: `Considerando que cada metro possui 8 pixels:\n\n2048 pixels ÷ 8 pixels por metro = 256 metros\n\nPortanto, 2048 pixels equivalem a aproximadamente 256 metros de fita.`,
  },
];

faqLineData.fitas.label = "Fita RGB Digital";
faqLineData.fitas.subtitle = "Modelo OPS 85551";
faqLineData.fitas.faqs = [
  {
    question: "É possível emendar mais de dois rolos da fita RGB digital OPS 85551?",
    answer: `Modelo: OPS 85551\n\nNão é recomendado emendar mais de 2 rolos, pois pode haver perda de cores mesmo com realimentação.`,
  },
  {
    question: "Posso ligar o final de uma fita RGB digital na ponta de outra?",
    answer: `Não. Cada fita deve ser controlada individualmente.\nOu seja, não é indicado ligar o final de uma fita diretamente na ponta da outra.`,
  },
  {
    question: "O controle da fita RGB digital pode comandar vários receptores?",
    answer: `Sim. O controle pode comandar vários receptores, desde que estejam dentro do alcance do controle remoto.`,
  },
  {
    question: "Como os receptores da fita RGB digital devem ser posicionados no projeto?",
    answer: `Os receptores devem ser concentrados em um mesmo local, com distância máxima de aproximadamente 5 cm entre eles.\nIsso ajuda a garantir que todos recebam o comando do mesmo controle remoto.`,
  },
  {
    question: "Qual é o protocolo da fita RGB digital OPS 85551?",
    answer: `O protocolo da fita RGB digital OPS 85551 é SM16703P.`,
  },
];

faqLineMediaAssets.darwin = {
  src: "./assets/faq-lines/categoria-fitas.png",
  alt: "Fita digital monocromática Opus",
};

faqLineMediaAssets.fitas = {
  src: "./assets/faq-lines/categoria-fitas.png",
  alt: "Fita RGB digital Opus",
};

let activeFaqLineKey = faqLineOrder[0] || Object.keys(faqLineData)[0] || "";

const syncFaqLineNavButtons = () => {
  if (!faqLineTrack || !faqLinePrevButton || !faqLineNextButton) {
    return;
  }

  const maxScroll = Math.max(0, faqLineTrack.scrollWidth - faqLineTrack.clientWidth);
  const atStart = faqLineTrack.scrollLeft <= 4;
  const atEnd = faqLineTrack.scrollLeft >= maxScroll - 4;

  faqLinePrevButton.disabled = atStart;
  faqLineNextButton.disabled = atEnd;
  faqLinePrevButton.classList.toggle("is-disabled", atStart);
  faqLineNextButton.classList.toggle("is-disabled", atEnd);
};

const syncFaqUrl = (key) => {
  const url = new URL(window.location.href);
  url.searchParams.set("linha", key);
  window.history.replaceState(null, "", `${url.pathname}${url.search}${url.hash}`);
};

const runFaqReveal = (targets, options = {}) => {
  if (typeof window.gsap !== "object") {
    return;
  }

  const items = Array.from(targets).filter((item) => item instanceof Element);

  if (!items.length) {
    return;
  }

  window.gsap.killTweensOf(items);
  window.gsap.fromTo(
    items,
    {
      y: options.y ?? 38,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: options.duration ?? 0.88,
      ease: options.ease ?? "power3.out",
      stagger: options.stagger ?? 0.08,
      overwrite: "auto",
      clearProps: "transform,opacity",
    },
  );
};

const animateFaqDynamicBlocks = () => {
  runFaqReveal(
    document.querySelectorAll(".faq-manual-row, .faq-video-card, .faq-file-card, .faq-accordion-item"),
    {
      y: 26,
      duration: 0.76,
      stagger: 0.055,
    },
  );
};

const setFaqAccordionState = (article, expanded, immediate = false) => {
  if (!(article instanceof Element)) {
    return;
  }

  const toggle = article.querySelector(".faq-accordion-item__toggle");
  const icon = article.querySelector(".faq-accordion-item__icon");
  const panel = article.querySelector(".faq-accordion-item__panel");

  if (!(panel instanceof HTMLElement)) {
    return;
  }

  article.classList.toggle("is-open", expanded);

  if (toggle) {
    toggle.setAttribute("aria-expanded", expanded ? "true" : "false");
  }

  if (icon) {
    icon.textContent = expanded ? "-" : "+";
  }

  if (immediate || typeof window.gsap !== "object") {
    panel.style.height = expanded ? "auto" : "0px";
    panel.style.opacity = expanded ? "1" : "0";
    return;
  }

  window.gsap.killTweensOf(panel);

  if (expanded) {
    panel.style.height = `${panel.scrollHeight}px`;

    window.gsap.fromTo(
      panel,
      {
        height: panel.offsetHeight || 0,
        opacity: Number.parseFloat(panel.style.opacity || "0") || 0,
      },
      {
        height: panel.scrollHeight,
        opacity: 1,
        duration: 0.46,
        ease: "power2.out",
        overwrite: "auto",
        onComplete: () => {
          panel.style.height = "auto";
        },
      },
    );

    return;
  }

  const collapseHeight = panel.offsetHeight || panel.scrollHeight;
  panel.style.height = `${collapseHeight}px`;

  window.gsap.to(panel, {
    height: 0,
    opacity: 0,
    duration: 0.34,
    ease: "power2.inOut",
    overwrite: "auto",
  });
};

const hydrateFaqAccordion = () => {
  if (!faqQuestionList) {
    return;
  }

  faqQuestionList.querySelectorAll(".faq-accordion-item").forEach((article) => {
    setFaqAccordionState(article, article.classList.contains("is-open"), true);
  });

  if (faqQuestionList.dataset.accordionEnhanced === "true") {
    return;
  }

  faqQuestionList.addEventListener(
    "click",
    (event) => {
      const target = event.target;

      if (!(target instanceof Element)) {
        return;
      }

      const toggle = target.closest(".faq-accordion-item__toggle");

      if (!(toggle instanceof HTMLElement) || !faqQuestionList.contains(toggle)) {
        return;
      }

      event.preventDefault();
      event.stopPropagation();
      event.stopImmediatePropagation();

      const article = toggle.closest(".faq-accordion-item");

      if (!(article instanceof Element)) {
        return;
      }

      const isOpen = article.classList.contains("is-open");

      faqQuestionList.querySelectorAll(".faq-accordion-item.is-open").forEach((entry) => {
        if (entry !== article) {
          setFaqAccordionState(entry, false);
        }
      });

      setFaqAccordionState(article, !isOpen);
    },
    true,
  );

  faqQuestionList.dataset.accordionEnhanced = "true";
};

const getFaqFileIconMarkup = (type) => {
  const normalizedType = String(type || "").trim().toUpperCase();

  if (normalizedType === "3D") {
    return `
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 3 19 7v10l-7 4-7-4V7l7-4Z"></path>
        <path d="M12 3v8"></path>
        <path d="m5 7 7 4 7-4"></path>
        <path d="M12 11v10"></path>
      </svg>
    `;
  }

  return `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M7 3.5h6.5L18 8v12.5H7z"></path>
      <path d="M13.5 3.5V8H18"></path>
      <path d="M9.5 12h6"></path>
      <path d="M9.5 15h6"></path>
    </svg>
  `;
};

const renderFaqQuestions = (items) => {
  if (!faqQuestionList) {
    return;
  }

  faqQuestionList.replaceChildren();

  items.forEach((item, index) => {
    const article = document.createElement("article");
    article.className = `faq-accordion-item${index === 0 ? " is-open" : ""}`;

    const toggle = document.createElement("button");
    toggle.className = "faq-accordion-item__toggle";
    toggle.type = "button";
    toggle.setAttribute("aria-expanded", index === 0 ? "true" : "false");

    const label = document.createElement("span");
    label.textContent = item.question;

    const icon = document.createElement("span");
    icon.className = "faq-accordion-item__icon";
    icon.textContent = index === 0 ? "−" : "+";

    const panel = document.createElement("div");
    panel.className = "faq-accordion-item__panel";

    const answer = document.createElement("p");
    answer.textContent = item.answer;

    panel.appendChild(answer);
    toggle.appendChild(label);
    toggle.appendChild(icon);
    article.appendChild(toggle);
    article.appendChild(panel);

    toggle.addEventListener("click", () => {
      const isOpen = article.classList.contains("is-open");

      Array.from(faqQuestionList.children).forEach((entry) => {
        entry.classList.remove("is-open");
        const entryToggle = entry.querySelector(".faq-accordion-item__toggle");
        const entryIcon = entry.querySelector(".faq-accordion-item__icon");

        if (entryToggle) {
          entryToggle.setAttribute("aria-expanded", "false");
        }

        if (entryIcon) {
          entryIcon.textContent = "+";
        }
      });

      if (!isOpen) {
        article.classList.add("is-open");
        toggle.setAttribute("aria-expanded", "true");
        icon.textContent = "−";
      }
    });

    faqQuestionList.appendChild(article);
  });
};

const renderFaqPage = (key) => {
  const data = faqLineData[key];

  if (!data) {
    return;
  }

  activeFaqLineKey = key;

  if (faqLineTrack) {
    faqLineTrack.querySelectorAll("[data-faq-line-btn]").forEach((button) => {
      button.classList.toggle("is-active", button.dataset.faqLineBtn === key);
    });
  }

  if (faqManualList) {
    faqManualList.replaceChildren();

    data.manuals.forEach((manual) => {
      const link = document.createElement("a");
      link.className = "faq-manual-row";
      link.href = manual.href;

      const index = document.createElement("span");
      index.className = "faq-manual-row__index";
      index.textContent = manual.index;

      const copy = document.createElement("div");
      copy.className = "faq-manual-row__copy";

      const title = document.createElement("strong");
      title.textContent = manual.title;

      const meta = document.createElement("small");
      meta.textContent = manual.meta;

      const cta = document.createElement("span");
      cta.className = "faq-manual-row__cta";
      cta.textContent = "Baixar";

      copy.appendChild(title);
      copy.appendChild(meta);
      link.appendChild(index);
      link.appendChild(copy);
      link.appendChild(cta);
      faqManualList.appendChild(link);
    });
  }

  if (faqVideoList) {
    faqVideoList.replaceChildren();

    data.videos.forEach((video) => {
      const card = document.createElement("article");
      card.className = "faq-video-card";

      const thumb = document.createElement("div");
      thumb.className = `faq-video-card__thumb faq-video-card__thumb--${key}`;

      const placeholder = document.createElement("span");
      placeholder.className = "faq-video-card__placeholder";
      placeholder.textContent = "Imagem em breve";

      const play = document.createElement("span");
      play.className = "faq-video-card__play";
      play.textContent = "▶";

      const body = document.createElement("div");
      body.className = "faq-video-card__body";

      const title = document.createElement("strong");
      title.textContent = `${video.index}. ${video.title}`;

      const meta = document.createElement("span");
      meta.textContent = video.meta;

      thumb.appendChild(placeholder);
      thumb.appendChild(play);
      body.appendChild(title);
      body.appendChild(meta);
      card.appendChild(thumb);
      card.appendChild(body);
      faqVideoList.appendChild(card);
    });
  }

  if (faqFileList) {
    faqFileList.replaceChildren();

    data.files.forEach((file) => {
      const card = document.createElement("article");
      card.className = "faq-file-card";

      const icon = document.createElement("span");
      icon.className = "faq-file-card__icon";
      icon.innerHTML = getFaqFileIconMarkup(file.icon);

      const title = document.createElement("h3");
      title.textContent = file.title;

      const cta = document.createElement("a");
      cta.className = "faq-file-card__cta";
      cta.href = file.href;
      cta.textContent = "Download";

      card.appendChild(icon);
      card.appendChild(title);
      card.appendChild(cta);
      faqFileList.appendChild(card);
    });
  }

  renderFaqQuestions(data.faqs);
  hydrateFaqAccordion();
  syncFaqUrl(key);

  if (faqAnimationsReady) {
    window.requestAnimationFrame(() => {
      animateFaqDynamicBlocks();
    });
  }
};

const initFaqPage = () => {
  if (!faqLineTrack) {
    return;
  }

  const requestedKey = new URLSearchParams(window.location.search).get("linha");

  if (requestedKey && faqLineData[requestedKey]) {
    activeFaqLineKey = requestedKey;
  } else if (!faqLineData[activeFaqLineKey]) {
    activeFaqLineKey = faqLineOrder[0];
  }

  faqLineTrack.replaceChildren();

  faqLineOrder.forEach((key) => {
    const data = faqLineData[key];

    if (!data) {
      return;
    }

    const button = document.createElement("button");
    button.className = `faq-line-card${key === activeFaqLineKey ? " is-active" : ""}`;
    button.type = "button";
    button.dataset.faqLineBtn = key;

    const media = document.createElement("span");
    media.className = `faq-line-card__media faq-line-card__media--${key}`;
    const mediaAsset = faqLineMediaAssets[key];

    if (mediaAsset) {
      const image = document.createElement("img");
      image.className = "faq-line-card__image";
      image.src = mediaAsset.src;
      image.alt = mediaAsset.alt;
      image.loading = "lazy";
      media.appendChild(image);
    } else {
      const placeholder = document.createElement("span");
      placeholder.className = "faq-line-card__placeholder";
      placeholder.textContent = "Imagem da linha";
      media.appendChild(placeholder);
    }

    const body = document.createElement("span");
    body.className = "faq-line-card__copy";

    const title = document.createElement("strong");
    title.textContent = data.label;

    body.appendChild(title);
    button.appendChild(media);
    button.appendChild(body);

    button.addEventListener("click", () => {
      renderFaqPage(key);
    });

    faqLineTrack.appendChild(button);
  });

  if (faqLinePrevButton) {
    faqLinePrevButton.addEventListener("click", () => {
      faqLineTrack.scrollBy({ left: -280, behavior: "smooth" });
    });
  }

  if (faqLineNextButton) {
    faqLineNextButton.addEventListener("click", () => {
      faqLineTrack.scrollBy({ left: 280, behavior: "smooth" });
    });
  }

  faqLineTrack.addEventListener("scroll", syncFaqLineNavButtons, { passive: true });
  window.addEventListener("resize", syncFaqLineNavButtons, { passive: true });

  renderFaqPage(activeFaqLineKey);
  syncFaqLineNavButtons();
};

const initFaqAnimations = () => {
  if (!document.body.classList.contains("page-faq") || typeof window.gsap !== "object") {
    return;
  }

  faqAnimationsReady = true;

  if (faqSectionObserver) {
    faqSectionObserver.disconnect();
  }

  faqSectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        const config = faqRevealRegistry.get(entry.target);

        if (!config) {
          return;
        }

        const targets = typeof config.targets === "function"
          ? config.targets(entry.target)
          : entry.target.querySelectorAll(config.targets);

        runFaqReveal(targets, config.options);
        faqSectionObserver.unobserve(entry.target);
        faqRevealRegistry.delete(entry.target);
      });
    },
    {
      threshold: 0.18,
      rootMargin: "0px 0px -10% 0px",
    },
  );

  const registerFaqReveal = (root, targets, options = {}) => {
    if (!(root instanceof Element) || !faqSectionObserver) {
      return;
    }

    faqRevealRegistry.set(root, { targets, options });
    faqSectionObserver.observe(root);
  };

  registerFaqReveal(document.querySelector(".faq-hero__inner"), ":scope > *", {
    y: 42,
    duration: 0.96,
    stagger: 0.1,
  });

  registerFaqReveal(document.querySelector(".faq-lines .site-shell"), ".faq-section-heading, .faq-lines__toolbar, .faq-line-card", {
    y: 38,
    duration: 0.88,
    stagger: 0.08,
  });

  registerFaqReveal(document.querySelector(".faq-manuals .site-shell"), ".faq-section-heading, .faq-manual-row", {
    y: 34,
    duration: 0.84,
    stagger: 0.06,
  });

  registerFaqReveal(document.querySelector(".faq-videos .site-shell"), ".faq-section-heading, .faq-video-card", {
    y: 34,
    duration: 0.84,
    stagger: 0.06,
  });

  registerFaqReveal(document.querySelector(".faq-files .site-shell"), ".faq-section-heading, .faq-file-card", {
    y: 34,
    duration: 0.84,
    stagger: 0.06,
  });

  registerFaqReveal(document.querySelector(".faq-technical .site-shell"), ".faq-section-heading, .faq-accordion-item", {
    y: 34,
    duration: 0.84,
    stagger: 0.06,
  });

  registerFaqReveal(document.querySelector(".faq-contact__inner"), ".faq-section-heading, .faq-contact__button", {
    y: 36,
    duration: 0.86,
    stagger: 0.08,
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
initFaqPage();
initFaqAnimations();
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
