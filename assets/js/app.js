// Depósito Dental San Lorenzo - Landing JS con galería lightbox

// El manifest.json permite "agregar a pantalla de inicio", pero no queremos
// que el navegador muestre automáticamente el aviso emergente de "Instalar
// app" sin que el usuario lo pida. Esto lo evita.
window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
});

const fotos = [
  { file: '1.jpeg', altKey: 'alt1' },
  { file: '2.jpeg', altKey: 'alt2' },
  { file: '3.jpeg', altKey: 'alt3' },
  { file: '4.jpeg', altKey: 'alt4' },
  { file: '5.jpeg', altKey: 'alt5' },
  { file: '6.jpeg', altKey: 'alt6' },
  { file: '7.jpeg', altKey: 'alt7' },
  { file: '8.jpeg', altKey: 'alt8' },
  { file: '9.jpeg', altKey: 'alt9' },
  { file: '10.jpeg', altKey: 'alt10' }
];

let currentIndex = 0;

/* ==========================================================
   0. TEXTOS (ES / EN)
   ========================================================== */
const texts = {
  es: {
    meta: {
      title: "Depósito Dental San Lorenzo | Insumos odontológicos en CDMX",
      description: "Venta de insumos, materiales y equipos dentales. Atención a odontólogos, clínicas y laboratorios. Ubicados en CDMX, entregas express."
    },
    nav: {
      inicio: "Inicio",
      productos: "Productos",
      ubicacion: "Ubicación",
      contacto: "Contacto"
    },
    hero: {
      badge: "📦 Distribuidor autorizado",
      title: 'Depósito Dental <span class="highlight">San Lorenzo</span>',
      desc: "Más de 15 años abasteciendo a odontólogos, clínicas y laboratorios con insumos de alta calidad. Entrega express en CDMX y área metropolitana.",
      btnCotizar: "📲 Cotizar por WhatsApp 55 4187 0200",
      btnVerProductos: "Ver productos →",
      trust1: "✅ Precios competitivos",
      trust2: "⚡ Entrega el mismo día",
      trust3: "🦷 Atención personalizada"
    },
    gallery: {
      title: "📸 Conoce nuestro depósito",
      alt1: "Interior del Depósito Dental San Lorenzo con anaqueles de insumos",
      alt2: "Mostrador de atención al cliente en Depósito Dental San Lorenzo",
      alt3: "Exhibidores de materiales dentales en el depósito",
      alt4: "Fachada del Depósito Dental San Lorenzo en Iztapalapa",
      alt5: "Área de instrumental dental disponible en el depósito",
      alt6: "Anaqueles con resinas y adhesivos dentales",
      alt7: "Zona de equipo de laboratorio dental",
      alt8: "Personal atendiendo a un cliente en el depósito",
      alt9: "Vista general del depósito de insumos dentales",
      alt10: "Entrada del Depósito Dental San Lorenzo"
    },
    products: {
      title: "🦷 Lo que ofrecemos",
      p1Title: "Anestésicos y consumibles",
      p1Desc: "Cartuchos, agujas, jeringas y más.",
      p2Title: "Material de profilaxis",
      p2Desc: "Pastas, cepillos, copas y hilo dental.",
      p3Title: "Resinas y adhesivos",
      p3Desc: "De primeras marcas y excelente durabilidad.",
      p4Title: "Instrumental rotatorio",
      p4Desc: "Fresas, turbinas, piezas de mano.",
      p5Title: "Impresión y cementado",
      p5Desc: "Siliconas, alginatos, cementos.",
      p6Title: "Equipo para laboratorio",
      p6Desc: "Micro motor, vibradores, recortadoras.",
      btnCatalogo: "📋 Ver catálogo completo por WhatsApp"
    },
    location: {
      title: "📍 Encuéntranos",
      address: '<strong>Dirección:</strong><br>Av. Tlahuac 5171, 1er piso, San Lorenzo Tezonco, Iztapalapa, 09900 Ciudad de México, CDMX',
      reference: '<strong>Referencia:</strong> A 100 Mts de la estación Tezonco línea 12 del metro CDMX.',
      hours: '<strong>Horarios:</strong><br>Lunes a Viernes: 9:00 am - 6:40 pm<br>Sábados: 9:00 am - 3:40 pm<br>Domingo: Cerrado',
      phonesLabel: "<strong>📞 Teléfonos de Atención:</strong>",
      comoLlegar: "🗺️ Cómo llegar (Google Maps)",
      verified: "✅ Verificado en Google Maps"
    },
    contact: {
      title: "¿Necesitas una cotización urgente?",
      desc: "Escríbenos por WhatsApp y te responderemos en menos de 10 minutos en horario laboral.",
      btnChat: "💬 ¡Chatea con nosotros ahora!"
    },
    footer: {
      tagline: "Confianza y calidad para tu consultorio.",
      enlacesTitle: "Enlaces",
      contactoTitle: "Contacto rápido",
      rights: "© 2026 Depósito Dental San Lorenzo - Todos los derechos reservados",
      avisoPrivacidad: "Aviso de privacidad"
    },
    privacy: {
      title: "Aviso de Privacidad",
      responsable: '<strong>Responsable:</strong> Depósito Dental San Lorenzo, con domicilio en Av. Tláhuac 5171, 1er piso, San Lorenzo Tezonco, Iztapalapa, 09900, Ciudad de México.',
      datosTitle: "Datos que recabamos",
      datosText: "Cuando nos contactas por WhatsApp, llamada telefónica o correo electrónico, podemos recibir tu nombre, número telefónico, correo electrónico y los datos de tu pedido o cotización.",
      finalidadTitle: "Finalidad",
      finalidadText: "Usamos tus datos únicamente para cotizar, procesar pedidos, coordinar entregas y darte seguimiento comercial. No compartimos tu información con terceros ajenos a la operación del negocio.",
      arcoTitle: "Derechos ARCO",
      arcoText: 'Puedes solicitar acceder, rectificar, cancelar u oponerte al uso de tus datos escribiendo a <a href="mailto:ddev_0507@hotmail.com">ddev_0507@hotmail.com</a>.',
      cambiosTitle: "Cambios a este aviso",
      cambiosText: "Este aviso puede actualizarse; la versión vigente siempre estará disponible en esta página."
    },
    theme: {
      light: "Claro",
      dark: "Oscuro",
      auto: "Automático",
      toggleLabel: "Cambiar tema"
    }
  },
  en: {
    meta: {
      title: "Depósito Dental San Lorenzo | Dental Supplies in Mexico City",
      description: "Dental supplies, materials and equipment. Serving dentists, clinics and labs. Located in Mexico City, express delivery."
    },
    nav: {
      inicio: "Home",
      productos: "Products",
      ubicacion: "Location",
      contacto: "Contact"
    },
    hero: {
      badge: "📦 Authorized distributor",
      title: 'Depósito Dental <span class="highlight">San Lorenzo</span>',
      desc: "Over 15 years supplying dentists, clinics and labs with high-quality dental products. Express delivery across Mexico City and the metro area.",
      btnCotizar: "📲 Get a quote on WhatsApp 55 4187 0200",
      btnVerProductos: "See products →",
      trust1: "✅ Competitive prices",
      trust2: "⚡ Same-day delivery",
      trust3: "🦷 Personalized service"
    },
    gallery: {
      title: "📸 Take a look inside",
      alt1: "Interior of Depósito Dental San Lorenzo with supply shelves",
      alt2: "Customer service counter at Depósito Dental San Lorenzo",
      alt3: "Dental material displays inside the store",
      alt4: "Storefront of Depósito Dental San Lorenzo in Iztapalapa",
      alt5: "Dental instruments area available at the store",
      alt6: "Shelves with dental resins and adhesives",
      alt7: "Dental lab equipment area",
      alt8: "Staff assisting a customer at the store",
      alt9: "General view of the dental supply store",
      alt10: "Entrance of Depósito Dental San Lorenzo"
    },
    products: {
      title: "🦷 What we offer",
      p1Title: "Anesthetics and consumables",
      p1Desc: "Cartridges, needles, syringes and more.",
      p2Title: "Prophylaxis materials",
      p2Desc: "Pastes, brushes, cups and dental floss.",
      p3Title: "Resins and adhesives",
      p3Desc: "Top brands with excellent durability.",
      p4Title: "Rotary instruments",
      p4Desc: "Burs, turbines, handpieces.",
      p5Title: "Impression and cementation",
      p5Desc: "Silicones, alginates, cements.",
      p6Title: "Lab equipment",
      p6Desc: "Micromotors, vibrators, trimmers.",
      btnCatalogo: "📋 See the full catalog on WhatsApp"
    },
    location: {
      title: "📍 Find us",
      address: '<strong>Address:</strong><br>Av. Tlahuac 5171, 1st floor, San Lorenzo Tezonco, Iztapalapa, 09900 Mexico City, CDMX',
      reference: '<strong>Landmark:</strong> 100 m from the Tezonco metro station, Line 12, Mexico City.',
      hours: '<strong>Hours:</strong><br>Monday to Friday: 9:00 am - 6:40 pm<br>Saturday: 9:00 am - 3:40 pm<br>Sunday: Closed',
      phonesLabel: "<strong>📞 Phone numbers:</strong>",
      comoLlegar: "🗺️ Get directions (Google Maps)",
      verified: "✅ Verified on Google Maps"
    },
    contact: {
      title: "Need a quote urgently?",
      desc: "Message us on WhatsApp and we'll reply in under 10 minutes during business hours.",
      btnChat: "💬 Chat with us now!"
    },
    footer: {
      tagline: "Trust and quality for your dental practice.",
      enlacesTitle: "Links",
      contactoTitle: "Quick contact",
      rights: "© 2026 Depósito Dental San Lorenzo - All rights reserved",
      avisoPrivacidad: "Privacy notice"
    },
    privacy: {
      title: "Privacy Notice",
      responsable: '<strong>Data controller:</strong> Depósito Dental San Lorenzo, located at Av. Tláhuac 5171, 1st floor, San Lorenzo Tezonco, Iztapalapa, 09900, Mexico City.',
      datosTitle: "Data we collect",
      datosText: "When you contact us via WhatsApp, phone call or email, we may receive your name, phone number, email address and order or quote details.",
      finalidadTitle: "Purpose",
      finalidadText: "We use your data only to quote, process orders, coordinate deliveries and follow up commercially. We do not share your information with third parties outside the business operation.",
      arcoTitle: "Data rights",
      arcoText: 'You can request to access, rectify, cancel or object to the use of your data by writing to <a href="mailto:ddev_0507@hotmail.com">ddev_0507@hotmail.com</a>.',
      cambiosTitle: "Changes to this notice",
      cambiosText: "This notice may be updated; the current version will always be available on this page."
    },
    theme: {
      light: "Light",
      dark: "Dark",
      auto: "Auto",
      toggleLabel: "Toggle theme"
    }
  }
};

const LANG_STORAGE_KEY = "ddsl_lang";

/* ==========================================================
   1. GESTIÓN DE IDIOMA
   ========================================================== */
function changeLanguage(lang) {
  if (!texts[lang]) lang = "es";

  document.querySelectorAll("[data-section]").forEach((element) => {
    const section = element.dataset.section;
    const value = element.dataset.value;
    const entry = texts[lang][section] && texts[lang][section][value];
    if (entry === undefined) return;

    if (element.tagName === "META") {
      element.setAttribute("content", entry);
    } else {
      element.innerHTML = entry;
    }
  });

  document.documentElement.lang = lang;

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    const isActive = btn.dataset.lang === lang;
    btn.classList.toggle("is-active", isActive);
    btn.setAttribute("aria-pressed", String(isActive));
  });

  // Actualiza el texto alternativo de las fotos ya renderizadas en la galería
  document.querySelectorAll("#galleryGrid img[data-alt-key]").forEach((img) => {
    const key = img.dataset.altKey;
    const alt = texts[lang].gallery[key];
    if (alt) img.alt = alt;
  });

  // Si el lightbox está abierto, actualiza también su texto alternativo
  const lightboxImg = document.getElementById("lightbox-img");
  if (lightboxImg && fotos[currentIndex]) {
    const alt = texts[lang].gallery[fotos[currentIndex].altKey];
    if (alt) lightboxImg.alt = alt;
  }

  try {
    localStorage.setItem(LANG_STORAGE_KEY, lang);
  } catch (err) {
    /* almacenamiento no disponible: no es crítico */
  }

  updateThemeButtons();
  updateLogo();
}

function getInitialLanguage() {
  // El público principal es de habla hispana (México), así que el idioma
  // por defecto siempre es español. Solo respetamos una elección explícita
  // previa del propio visitante (guardada al usar el selector ES/EN).
  try {
    const saved = localStorage.getItem(LANG_STORAGE_KEY);
    if (saved && texts[saved]) return saved;
  } catch (err) {
    /* almacenamiento no disponible */
  }
  return "es";
}

function initLang() {
  changeLanguage(getInitialLanguage());

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.addEventListener("click", () => changeLanguage(btn.dataset.lang));
  });
}

/* ==========================================================
   1.5 GESTIÓN DE TEMA (claro / oscuro / automático)
   ========================================================== */
// El propio <head> del documento ya aplica el tema guardado (o el del
// sistema, si está en "automático") antes de que se pinte la página, para
// evitar un parpadeo claro→oscuro. Aquí solo conectamos el botón y
// mantenemos todo sincronizado si el usuario cambia el tema del sistema
// operativo mientras tiene la pestaña abierta.
const THEME_STORAGE_KEY = "ddsl_theme";
const THEME_ORDER = ["light", "dark", "auto"];

function getStoredThemePref() {
  try {
    const saved = localStorage.getItem(THEME_STORAGE_KEY);
    if (THEME_ORDER.includes(saved)) return saved;
  } catch (err) {
    /* almacenamiento no disponible */
  }
  return "auto";
}

function systemPrefersLight() {
  return !!(window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches);
}

function effectiveTheme(pref) {
  return pref === "auto" ? (systemPrefersLight() ? "light" : "dark") : pref;
}

function updateThemeButtons() {
  const lang = document.documentElement.lang || "es";
  const labels = (texts[lang] && texts[lang].theme) || texts.es.theme;
  const pref = document.documentElement.getAttribute("data-theme-pref") || "auto";

  document.querySelectorAll(".theme-toggle").forEach((btn) => {
    btn.setAttribute("data-theme-state", pref);
    const label = labels[pref] || pref;
    btn.setAttribute("aria-label", `${labels.toggleLabel} (${label})`);
    btn.setAttribute("title", `${labels.toggleLabel}: ${label}`);
  });
}

// El logo trae el nombre de la marca dibujado dentro del propio SVG (no es
// CSS), así que necesita un archivo distinto para fondo oscuro.
function updateLogo() {
  const logo = document.getElementById("site-logo");
  if (!logo) return;
  const theme = document.documentElement.getAttribute("data-theme") || "light";
  logo.src = theme === "dark" ? "assets/img/logo_dark.svg" : "assets/img/logo.svg";
}

function applyTheme(pref) {
  document.documentElement.setAttribute("data-theme", effectiveTheme(pref));
  document.documentElement.setAttribute("data-theme-pref", pref);
  updateThemeButtons();
  updateLogo();
  try {
    localStorage.setItem(THEME_STORAGE_KEY, pref);
  } catch (err) {
    /* no crítico */
  }
}

function initTheme() {
  applyTheme(getStoredThemePref());

  document.querySelectorAll(".theme-toggle").forEach((btn) => {
    btn.addEventListener("click", () => {
      const current = document.documentElement.getAttribute("data-theme-pref") || "auto";
      const next = THEME_ORDER[(THEME_ORDER.indexOf(current) + 1) % THEME_ORDER.length];
      applyTheme(next);
    });
  });

  if (window.matchMedia) {
    window.matchMedia("(prefers-color-scheme: light)").addEventListener("change", () => {
      if ((document.documentElement.getAttribute("data-theme-pref") || "auto") === "auto") {
        applyTheme("auto");
      }
    });
  }
}

// Detecta si el navegador soporta WebP (una sola vez, al cargar la página)
function supportsWebP() {
  const canvas = document.createElement('canvas');
  if (!canvas.getContext || !canvas.getContext('2d')) return false;
  return canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0;
}
const webpSupported = supportsWebP();

function fotoSrc(foto) {
  const name = foto.file.replace('.jpeg', '');
  return webpSupported ? `assets/img/${name}.webp` : `assets/img/${foto.file}`;
}

function currentAlt(foto) {
  const lang = document.documentElement.lang || "es";
  return (texts[lang] && texts[lang].gallery[foto.altKey]) || texts.es.gallery[foto.altKey];
}

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initLang();

  // Renderizar galería de fotos (WebP con respaldo JPEG vía <picture>)
  const galleryGrid = document.getElementById('galleryGrid');
  if (galleryGrid) {
    galleryGrid.innerHTML = fotos.map((foto, index) => {
      const name = foto.file.replace('.jpeg', '');
      const alt = currentAlt(foto);
      return `
      <picture>
        <source srcset="assets/img/${name}.webp" type="image/webp">
        <img src="assets/img/${foto.file}" alt="${alt}" width="300" height="180" loading="lazy" data-index="${index}" data-alt-key="${foto.altKey}" tabindex="0" role="button" aria-label="${alt}">
      </picture>
    `;
    }).join('');

    galleryGrid.querySelectorAll('img').forEach((img) => {
      img.addEventListener('click', () => openLightbox(Number(img.dataset.index)));
      img.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openLightbox(Number(img.dataset.index));
        }
      });
    });
  }

  // Controles del lightbox
  const lightbox = document.getElementById('lightbox');
  lightbox.querySelector('.close-lightbox').addEventListener('click', closeLightbox);
  lightbox.querySelector('.prev').addEventListener('click', () => changeImage(-1));
  lightbox.querySelector('.next').addEventListener('click', () => changeImage(1));
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
  });

  // Seguimiento de clics en botones de contacto (WhatsApp / teléfono / mapa)
  // Requiere que gtag esté cargado (Google Analytics 4). Si no existe, no hace nada.
  document.querySelectorAll('[data-track]').forEach((el) => {
    el.addEventListener('click', () => {
      const label = el.dataset.track;
      if (typeof gtag === 'function') {
        gtag('event', 'contacto_click', {
          contact_method: label
        });
      }
    });
  });

  // Modal de Aviso de Privacidad
  const privacyModal = document.getElementById('privacyModal');
  const openPrivacyBtn = document.getElementById('openPrivacyModal');
  const closePrivacyBtn = document.getElementById('closePrivacyModal');
  let lastFocusedBeforePrivacy = null;

  function openPrivacyModal() {
    lastFocusedBeforePrivacy = document.activeElement;
    privacyModal.style.display = 'flex';
    closePrivacyBtn.focus();
  }

  function closePrivacyModal() {
    privacyModal.style.display = 'none';
    if (lastFocusedBeforePrivacy) lastFocusedBeforePrivacy.focus();
  }

  if (openPrivacyBtn) openPrivacyBtn.addEventListener('click', openPrivacyModal);
  closePrivacyBtn.addEventListener('click', closePrivacyModal);
  privacyModal.addEventListener('click', (e) => {
    if (e.target === privacyModal) closePrivacyModal();
  });
});

let lastFocusedElement = null;

function openLightbox(index) {
  currentIndex = index;
  lastFocusedElement = document.activeElement;
  const lightbox = document.getElementById('lightbox');
  const img = document.getElementById('lightbox-img');
  const counter = document.getElementById('lightbox-counter');

  img.src = fotoSrc(fotos[currentIndex]);
  img.alt = currentAlt(fotos[currentIndex]);
  counter.textContent = `${currentIndex + 1} / ${fotos.length}`;
  lightbox.style.display = 'flex';
  lightbox.querySelector('.close-lightbox').focus();
}

function closeLightbox() {
  document.getElementById('lightbox').style.display = 'none';
  if (lastFocusedElement) lastFocusedElement.focus();
}

function changeImage(direction) {
  currentIndex += direction;
  if (currentIndex < 0) currentIndex = fotos.length - 1;
  if (currentIndex >= fotos.length) currentIndex = 0;

  const img = document.getElementById('lightbox-img');
  const counter = document.getElementById('lightbox-counter');
  img.src = fotoSrc(fotos[currentIndex]);
  img.alt = currentAlt(fotos[currentIndex]);
  counter.textContent = `${currentIndex + 1} / ${fotos.length}`;
}

// Cerrar con tecla ESC y navegar con flechas (solo cuando el lightbox está abierto)
document.addEventListener('keydown', (e) => {
  const lightbox = document.getElementById('lightbox');
  const privacyModal = document.getElementById('privacyModal');
  if (e.key === 'Escape' && privacyModal.style.display === 'flex') {
    privacyModal.style.display = 'none';
  }
  if (lightbox.style.display !== 'flex') return;
  if (e.key === 'Escape') closeLightbox();
  if (e.key === 'ArrowLeft') changeImage(-1);
  if (e.key === 'ArrowRight') changeImage(1);
});
