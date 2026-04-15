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
    label: "Lâmpadas",
    kicker: "Linha em destaque",
    image: "https://opusled.com.br/wp-content/uploads/2026/03/noir_desk.jpg",
    alt: "Preview Lâmpadas",
    items: [
      { label: "Direcionais IRC80" },
      { label: "Direcionais IRC95" },
      { label: "Direcionais IRC95 Externos" },
      { label: "Dimerizáveis" },
      { label: "Tubulares" },
      { label: "Decorativas" },
      { label: "Filamentos" },
      { label: "Módulos" },
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
      { label: "Acessórios para Fitas" },
      { label: "Fontes Ultraslim" },
      { label: "Fontes Slim" },
      { label: "Fontes Blindadas" },
      { label: "Fontes Dimerizáveis" },
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
      { label: "Spots para Lâmpadas" },
      { label: "Spots LED" },
      { label: "Painéis" },
      { label: "Plafons" },
      { label: "Lineares" },
      { label: "Sistemas Magnéticos" },
      { label: "Sistemas de Trilho" },
      { label: "Decorativos" },
      { label: "Iluminações de Emergência" },
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
      { label: "Calhas Herméticas" },
      { label: "Balizadores" },
      { label: "Spots LED IP65" },
      { label: "High Bays" },
      { label: "Luminárias para Postes" },
      { label: "Conectores Externos IP68" },
    ],
  },
};

let activeLineKey = "lampadas";

lineData.lampadas.label = "L\u00e2mpadas";
lineData.lampadas.alt = "Preview L\u00e2mpadas";
lineData.lampadas.items = [
  { label: "Direcionais IRC80" },
  { label: "Direcionais IRC95" },
  { label: "Direcionais IRC95 Externos" },
  { label: "Dimeriz\u00e1veis" },
  { label: "Tubulares" },
  { label: "Decorativas" },
  { label: "Filamentos" },
  { label: "M\u00f3dulos" },
];

lineData.fitas.items = [
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
];

lineData.interno.items = [
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
];

lineData.externo.items = [
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
];

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

const clearMenuHash = () => {
  if (window.location.hash !== "#nav-overlay") {
    return;
  }

  const cleanUrl = `${window.location.pathname}${window.location.search}`;
  window.history.replaceState(null, "", cleanUrl);
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

const setNavView = (view) => {
  const isSubmenu = view === "submenu";

  if (!navPanel || !mainNavView || !submenuNavView) {
    return;
  }

  navPanel.classList.toggle("is-submenu-open", isSubmenu);
  mainNavView.setAttribute("aria-hidden", isSubmenu ? "true" : "false");
  submenuNavView.setAttribute("aria-hidden", isSubmenu ? "false" : "true");
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
    const button = document.createElement("button");
    button.type = "button";
    button.className = "nav-submenu__link";
    button.textContent = item.label;
    submenuItems.appendChild(button);
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

  navOverlay.querySelectorAll("a[href]").forEach((link) => {
    link.addEventListener("click", () => {
      closeMenu();
    });
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
      applyFilter(button.dataset.filterBtn || "todos");
    });
  });

  applyFilter("todos");
};

if (!initSwiper()) {
  window.addEventListener("load", initSwiper, { once: true });
}

if (!initCategorySwipers()) {
  window.addEventListener("load", initCategorySwipers, { once: true });
}

initCategoryFilters();

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
});
