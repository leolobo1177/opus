document.addEventListener("DOMContentLoaded", () => {
const menuTrigger = document.querySelector("[data-nav-open]");
const navOverlay = document.querySelector("[data-nav-overlay]");
const navCloseButtons = document.querySelectorAll("[data-nav-close]");
const navPanel = document.querySelector("[data-nav-panel]");
const mainNavView = document.querySelector('[data-nav-view="main"]');
const submenuNavView = document.querySelector('[data-nav-view="submenu"]');
const navLineButtons = document.querySelectorAll(".nav-line[data-line]");
const submenuTitle = document.querySelector("[data-submenu-title]");
const submenuItems = document.querySelector("[data-submenu-items]");
const submenuBackButton = document.querySelector("[data-nav-back]");
const preview = document.querySelector(".nav-preview");
const previewImage = document.querySelector("[data-preview-image]");
const previewKicker = document.querySelector("[data-preview-kicker]");
const previewTitle = document.querySelector("[data-preview-title]");
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
  destaques: {
    label: "Destaques",
    kicker: "Linhas em destaque",
    image: "https://opusled.com.br/wp-content/uploads/2026/03/genesis_left.jpg",
    alt: "Preview Destaques",
    items: [
      { label: "Genesis", featured: true },
      { label: "Soul", featured: true },
      { label: "Inside", featured: true },
      { label: "Sistema Belts", featured: true },
      { label: "Darwin", featured: true },
      { label: "Lapiz", featured: true },
    ],
  },
  lampadas: {
    label: "L\u00e2mpadas",
    kicker: "Linha em destaque",
    image: "https://opusled.com.br/wp-content/uploads/2026/03/noir_desk.jpg",
    alt: "Preview L\u00e2mpadas",
    items: [
      { label: "Direcionais IRC80", href: buildCategoryFilterHref("direcionais-irc80") },
      { label: "Direcionais IRC95", href: buildCategoryFilterHref("direcionais-irc95") },
      { label: "Direcionais IRC95 Externos", href: buildCategoryFilterHref("direcionais-irc95-externos") },
      { label: "Dimeriz\u00e1veis", href: buildCategoryFilterHref("dimerizaveis") },
      { label: "Tubulares", href: buildCategoryFilterHref("tubulares") },
      { label: "Decorativas", href: buildCategoryFilterHref("decorativas") },
      { label: "Filamentos", href: buildCategoryFilterHref("filamentos") },
      { label: "M\u00f3dulos", href: buildCategoryFilterHref("modulos") },
    ],
  },
  fitas: {
    label: "Fitas, Fontes e Perfis",
    kicker: "Linha em destaque",
    image: "https://opusled.com.br/wp-content/uploads/2026/03/Belts_vertical.png",
    alt: "Preview Fitas, Fontes e Perfis",
    items: [
      { label: "Fitas 12V" },
      { label: "Fitas 24V" },
      { label: "Fitas COB" },
      { label: "Fitas Especiais" },
      { label: "Acess\u00f3rios para Fitas" },
      { label: "Fontes Ultraslim" },
      { label: "Fontes Slim" },
      { label: "Fontes Blindadas" },
      { label: "Fontes Dimeriz\u00e1veis" },
      { label: "Perfis" },
    ],
  },
  interno: {
    label: "Uso Interno",
    kicker: "Linha em destaque",
    image: "https://opusled.com.br/wp-content/uploads/2026/03/genesis_left.jpg",
    alt: "Preview Uso Interno",
    items: [
      { label: "Linhas Genesis", featured: true },
      { label: "Linhas Soul", featured: true },
      { label: "Linhas Inside", featured: true },
      { label: "Sistemas Belts", featured: true },
      { label: "Spots para L\u00e2mpadas" },
      { label: "Spots LED" },
      { label: "Pain\u00e9is" },
      { label: "Plafons" },
      { label: "Lineares" },
      { label: "Sistemas Magn\u00e9ticos" },
      { label: "Sistemas de Trilho" },
      { label: "Decorativos" },
      { label: "Ilumina\u00e7\u00f5es de Emerg\u00eancia" },
      { label: "Dimmers e Sensores" },
    ],
  },
  externo: {
    label: "Uso Externo",
    kicker: "Linha em destaque",
    image: "https://opusled.com.br/wp-content/uploads/2026/04/darwin_top_desk.jpg",
    alt: "Preview Uso Externo",
    items: [
      { label: "Linhas Darwin", featured: true },
      { label: "Linhas Lapiz", featured: true },
      { label: "Espetos de Jardim" },
      { label: "Refletores" },
      { label: "Embutidos de Solo" },
      { label: "Arandelas" },
      { label: "Postes Balizadores" },
      { label: "Calhas Herm\u00e9ticas" },
      { label: "Balizadores" },
      { label: "Spots LED IP65" },
      { label: "High Bays" },
      { label: "Lumin\u00e1rias para Postes" },
      { label: "Conectores Externos IP68" },
    ],
  },
};

let activeLineKey = "lampadas";

const isMenuOpen = () => Boolean(navOverlay && navOverlay.classList.contains("is-open"));

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

const renderSubmenu = (key) => {
  const data = lineData[key];

  if (!data || !submenuTitle || !submenuItems) {
    return;
  }

  submenuTitle.textContent = data.label;
  submenuItems.replaceChildren();

  data.items.forEach((item) => {
    const itemElement = item.href ? document.createElement("a") : document.createElement("button");

    if (item.href) {
      itemElement.href = item.href;
    } else {
      itemElement.type = "button";
    }

    itemElement.className = "nav-submenu__link";
    itemElement.textContent = item.label;
    submenuItems.appendChild(itemElement);
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

    button.addEventListener("mouseenter", () => {
      setActiveLine(line);
    });

    button.addEventListener("focus", () => {
      setActiveLine(line);
    });

    button.addEventListener("click", () => {
      setActiveLine(line);
      renderSubmenu(line);
      setNavView("submenu");
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
  setNavView("main");
  updatePreview(activeLineKey);
  clearMenuHash();
  syncHeaderState();
  syncMenuA11y();
}

syncBrandState();
window.addEventListener("scroll", syncBrandState, { passive: true });

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

    const section = swiperElement.closest(".category-showcase");
    const prevButton = section ? section.querySelector("[data-category-prev]") : null;
    const nextButton = section ? section.querySelector("[data-category-next]") : null;

    swiperElement.dataset.swiperReady = "true";

    new window.Swiper(swiperElement, {
      speed: 520,
      watchOverflow: true,
      grabCursor: true,
      roundLengths: true,
      centeredSlides: false,
      centerInsufficientSlides: false,
      slidesPerView: 1,
      spaceBetween: 14,
      navigation: {
        prevEl: prevButton,
        nextEl: nextButton,
      },
      breakpoints: {
        640: {
          slidesPerView: 2,
          spaceBetween: 16,
        },
        900: {
          slidesPerView: 3,
          spaceBetween: 18,
        },
        1200: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
      },
    });
  });

  return true;
};

const initCategoryFilters = () => {
  const filterButtons = document.querySelectorAll("[data-filter-btn]");
  const filterSections = document.querySelectorAll("[data-filter-section]");

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

  const applyFilter = (key) => {
    filterButtons.forEach((button) => {
      button.classList.toggle("is-active", button.dataset.filterBtn === key);
    });

    filterSections.forEach((section) => {
      const visible = key === "todos" || section.dataset.filterSection === key;
      section.hidden = !visible;

      if (visible) {
        const swiper = section.querySelector("[data-category-swiper]");

        if (swiper && swiper.swiper) {
          swiper.swiper.update();
        }
      }
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
  const initialFilter = validFilters.has(requestedFilter) ? requestedFilter : "todos";

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
