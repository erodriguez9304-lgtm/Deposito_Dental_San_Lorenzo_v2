// Depósito Dental San Lorenzo - Landing JS con galería lightbox
const fotos = [
  { file: '1.jpeg', alt: 'Interior del Depósito Dental San Lorenzo con anaqueles de insumos' },
  { file: '2.jpeg', alt: 'Mostrador de atención al cliente en Depósito Dental San Lorenzo' },
  { file: '3.jpeg', alt: 'Exhibidores de materiales dentales en el depósito' },
  { file: '4.jpeg', alt: 'Fachada del Depósito Dental San Lorenzo en Iztapalapa' },
  { file: '5.jpeg', alt: 'Área de instrumental dental disponible en el depósito' },
  { file: '6.jpeg', alt: 'Anaqueles con resinas y adhesivos dentales' },
  { file: '7.jpeg', alt: 'Zona de equipo de laboratorio dental' },
  { file: '8.jpeg', alt: 'Personal atendiendo a un cliente en el depósito' },
  { file: '9.jpeg', alt: 'Vista general del depósito de insumos dentales' },
  { file: '10.jpeg', alt: 'Entrada del Depósito Dental San Lorenzo' }
];

let currentIndex = 0;

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

document.addEventListener('DOMContentLoaded', () => {
  // Renderizar galería de fotos (WebP con respaldo JPEG vía <picture>)
  const galleryGrid = document.getElementById('galleryGrid');
  if (galleryGrid) {
    galleryGrid.innerHTML = fotos.map((foto, index) => {
      const name = foto.file.replace('.jpeg', '');
      return `
      <picture>
        <source srcset="assets/img/${name}.webp" type="image/webp">
        <img src="assets/img/${foto.file}" alt="${foto.alt}" width="300" height="180" loading="lazy" data-index="${index}" tabindex="0" role="button" aria-label="Ampliar: ${foto.alt}">
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
  img.alt = fotos[currentIndex].alt;
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
  img.alt = fotos[currentIndex].alt;
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
