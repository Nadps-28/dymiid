/* ── Navbar Transparent-to-Solid Scroll Behavior ── */
const navbar = document.getElementById('navbar');

function handleNavScroll() {
  if (!navbar) return;
  if (window.scrollY > 60) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
}

window.addEventListener('scroll', handleNavScroll);
handleNavScroll(); // Run initial check

/* ── Hero Automatic Background Carousel (Rotate every 5 seconds) ── */
let currentHeroSlide = 0;
const heroSlides = document.querySelectorAll('.hero-slide');

if (heroSlides.length > 0) {
  setInterval(function () {
    heroSlides[currentHeroSlide].classList.remove('active');
    currentHeroSlide = (currentHeroSlide + 1) % heroSlides.length;
    heroSlides[currentHeroSlide].classList.add('active');
  }, 5000);
}

/* ── Mobile Menu Toggle ── */
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
const mobileMenuClose = document.getElementById('mobileMenuClose');
const mobileMenuOverlay = document.getElementById('mobileMenuOverlay');
const mobileNavLinks = document.querySelectorAll('.mobile-nav-links a');

function openMobileMenu() {
  if (hamburger) hamburger.classList.add('active');
  if (mobileMenu) mobileMenu.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeMobileMenu() {
  if (hamburger) hamburger.classList.remove('active');
  if (mobileMenu) mobileMenu.classList.remove('active');
  document.body.style.overflow = '';
}

if (hamburger) {
  hamburger.addEventListener('click', function () {
    if (mobileMenu && mobileMenu.classList.contains('active')) {
      closeMobileMenu();
    } else {
      openMobileMenu();
    }
  });
}

// Close button
if (mobileMenuClose) mobileMenuClose.addEventListener('click', closeMobileMenu);

// Close when clicking overlay
if (mobileMenuOverlay) mobileMenuOverlay.addEventListener('click', closeMobileMenu);

// Close mobile menu when clicking on a link
mobileNavLinks.forEach(link => {
  link.addEventListener('click', closeMobileMenu);
});

/* ── Portfolio Category Filter Tabs ── */
const filterTabs = document.querySelectorAll('.filter-tab');
const projCards = document.querySelectorAll('.proj-card');

filterTabs.forEach(tab => {
  tab.addEventListener('click', function () {
    filterTabs.forEach(t => t.classList.remove('active'));
    this.classList.add('active');

    const filter = this.getAttribute('data-filter');

    projCards.forEach(card => {
      const category = card.getAttribute('data-category');
      if (filter === 'all' || category === filter) {
        card.style.display = 'flex';
        setTimeout(() => { card.style.opacity = '1'; }, 50);
      } else {
        card.style.opacity = '0';
        setTimeout(() => { card.style.display = 'none'; }, 300);
      }
    });
  });
});

/* ── Portfolio Detailed Modal Data (DYMI ID with Multi-Photo Gallery) ── */
const portfolioData = {
  "1": {
    title: "01 — Kitchen Set Minimalis Modern",
    client: "Rancaekek, Kab. Bandung",
    tag: "Kitchen Set",
    image: "images/kitchenset1(thumbnail).jpg",
    gallery: [
      "images/kitchenset1(thumbnail).jpg",
      "images/ktichenset1(1).jpg",
      "images/ktichenset1(2).jpg",
      "images/ktichenset1(3).jpg",
      "images/ktichenset1(4).jpg",
      "images/ktichenset1(5).jpg"
    ],
    desc: "Kitchen set dengan konsep minimalis modern yang memadukan warna putih glossy dengan aksen kayu. Desain dibuat untuk memaksimalkan area dapur yang memanjang dengan tetap memberikan ruang gerak yang nyaman.",
    details: [
      { label: "Konsep", value: "Minimalis Modern" },
      { label: "Material", value: "Multiplek / plywood dengan finishing HPL" },
      { label: "Finishing", value: "Putih glossy & motif kayu" },
      { label: "Top Table", value: "Solid surface / batu sintetis" },
      { label: "Kabinet", value: "Kabinet atas & bawah" },
      { label: "Fitur", value: "Soft closing, rak penyimpanan, area sink dan kompor" },
      { label: "Pencahayaan", value: "LED warm white" },
      { label: "Estimasi Ukuran", value: "± 3,5 meter linear" },
      { label: "Durasi Pengerjaan", value: "± 14 hari" },
      { label: "Status", value: "Selesai" }
    ],
    highlight: "Pemanfaatan area dibuat seefisien mungkin dengan perpaduan warna terang dan aksen kayu sehingga dapur terasa lebih luas, bersih, dan modern."
  },
  "2": {
    title: "02 — Kitchen Set Custom L-Shape",
    client: "Bojongsoang, Kab. Bandung",
    tag: "Kitchen Set",
    image: "images/ktichenset2(thumbnail).jpg",
    gallery: [
      "images/ktichenset2(thumbnail).jpg",
      "images/ktichenset2(1).jpg",
      "images/ktichenset2(2).jpg",
      "images/ktichenset2(3).jpg",
      "images/ktichenset2(4).jpg",
      "images/ktichenset2(5).jpg"
    ],
    desc: "Kitchen set berbentuk L dengan konsep modern elegan. Dilengkapi berbagai area penyimpanan untuk kebutuhan dapur sekaligus mempertahankan tampilan yang clean dan rapi.",
    details: [
      { label: "Konsep", value: "Modern Contemporary" },
      { label: "Material", value: "Multiplek dengan finishing HPL" },
      { label: "Warna", value: "Taupe / abu-abu kecokelatan" },
      { label: "Backsplash", value: "Motif marble" },
      { label: "Top Table", value: "Motif marble" },
      { label: "Kabinet", value: "Upper & lower cabinet" },
      { label: "Fitur", value: "Soft closing, laci multifungsi, rak piring, rak sudut" },
      { label: "Perlengkapan", value: "Kompor tanam, sink & area appliance" },
      { label: "Pencahayaan", value: "LED warm white" },
      { label: "Estimasi Ukuran", value: "± 4 meter" },
      { label: "Durasi Pengerjaan", value: "± 18 hari" },
      { label: "Status", value: "Selesai" }
    ],
    highlight: "Tidak hanya mengutamakan tampilan, setiap kabinet dirancang dengan fungsi penyimpanan yang maksimal agar aktivitas memasak menjadi lebih practical."
  },
  "3": {
    title: "03 — Wall Panel Mushola Premium",
    client: "Cileunyi, Kab. Bandung",
    tag: "Mushola / Wall Panel",
    image: "images/mushola(thumbnail).jpg",
    gallery: [
      "images/mushola(thumbnail).jpg",
      "images/mushola1.jpg",
      "images/mushola2.jpg",
      "images/mushola3.jpg",
      "images/mushola4.jpg"
    ],
    desc: "Pengerjaan wall panel untuk area mushola dengan konsep elegan dan hangat. Penggunaan motif kayu memberikan kesan natural, sementara pencahayaan warm white dan aksen kaligrafi menjadi focal point utama ruangan.",
    details: [
      { label: "Konsep", value: "Modern Elegant" },
      { label: "Material", value: "Multiplek / MDF dengan finishing HPL" },
      { label: "Finishing", value: "Motif kayu walnut" },
      { label: "Elemen Utama", value: "Full wall panel" },
      { label: "Focal Point", value: "Kaligrafi dekoratif dengan backlight" },
      { label: "Pencahayaan", value: "LED warm white" },
      { label: "Panel", value: "Custom vertical panel" },
      { label: "Estimasi Luas", value: "± 8–10 m²" },
      { label: "Durasi Pengerjaan", value: "± 7 hari" },
      { label: "Status", value: "Selesai" }
    ],
    highlight: "Wall panel dirancang sebagai focal point untuk memberikan karakter yang lebih premium sekaligus menciptakan suasana mushola yang hangat dan nyaman."
  },
  "4": {
    title: "04 — Custom Work Office & Storage",
    client: "Cileunyi, Kab. Bandung",
    tag: "Work Office / Custom Furniture",
    image: "images/workoffice(thumbnail).jpg",
    gallery: [
      "images/workoffice(thumbnail).jpg",
      "images/workoffice1.jpg",
      "images/workoffice2.jpg",
      "images/workoffice3.jpg",
      "images/workoffice4.jpg",
      "images/workoffice5.jpg"
    ],
    desc: "Custom furniture untuk ruang kerja dengan kombinasi kabinet tertutup dan area display terbuka. Desain dibuat untuk memenuhi kebutuhan penyimpanan sekaligus memberikan tampilan workspace yang lebih rapi dan profesional.",
    details: [
      { label: "Konsep", value: "Modern Minimalist" },
      { label: "Material", value: "Multiplek dengan finishing HPL" },
      { label: "Finishing", value: "Putih dengan aksen motif kayu" },
      { label: "Kabinet", value: "Storage cabinet full height" },
      { label: "Display", value: "Open shelving dengan LED" },
      { label: "Fitur", value: "Kabinet tertutup, rak display & storage bawah" },
      { label: "Pencahayaan", value: "LED warm white" },
      { label: "Estimasi Ukuran", value: "± 3 meter" },
      { label: "Durasi Pengerjaan", value: "± 12 hari" },
      { label: "Status", value: "Selesai" }
    ],
    highlight: "Kombinasi kabinet tertutup dan rak display membuat ruang kerja terasa lebih terorganisir tanpa menghilangkan unsur estetika."
  }
};

const modal = document.getElementById('portfolioModal');
const modalClose = document.getElementById('modalClose');
const modalImg = document.getElementById('modalImg');
const modalTag = document.getElementById('modalTag');
const modalTitle = document.getElementById('modalTitle');
const modalDesc = document.getElementById('modalDesc');
const modalDetailsGrid = document.getElementById('modalDetailsGrid');
const modalHighlightSec = document.getElementById('modalHighlightSec');
const modalHighlight = document.getElementById('modalHighlight');
const modalWaBtn = document.getElementById('modalWaBtn');
const modalGalleryThumbs = document.getElementById('modalGalleryThumbs');

/* ── Lightbox Zoom Elements ── */
const lightboxOverlay = document.getElementById('lightboxOverlay');
const lightboxClose = document.getElementById('lightboxClose');
const lightboxImg = document.getElementById('lightboxImg');
const lightboxCaption = document.getElementById('lightboxCaption');
const btnZoomImg = document.getElementById('btnZoomImg');

let currentActiveProject = null;

function openModal(id) {
  const data = portfolioData[id];
  if (!data) return;

  currentActiveProject = data;

  if (modalImg) {
    modalImg.src = data.image;
    modalImg.alt = data.title;
  }
  if (modalTag) modalTag.textContent = data.tag;
  if (modalTitle) modalTitle.innerHTML = `${data.title} <br><span style="font-size:14px; font-weight:600; color:var(--sage-green);">📍 ${data.client}</span>`;
  if (modalDesc) modalDesc.textContent = data.desc;

  // Build detail grid
  if (modalDetailsGrid && data.details) {
    modalDetailsGrid.innerHTML = data.details.map(item => `
      <div class="modal-detail-item">
        <span class="modal-detail-label">${item.label}</span>
        <span class="modal-detail-value">${item.value}</span>
      </div>
    `).join('');
  }

  // Build highlight box
  if (modalHighlight && modalHighlightSec) {
    if (data.highlight) {
      modalHighlight.textContent = `"${data.highlight}"`;
      modalHighlightSec.style.display = 'block';
    } else {
      modalHighlightSec.style.display = 'none';
    }
  }

  // Render gallery thumbnails
  if (modalGalleryThumbs && data.gallery) {
    modalGalleryThumbs.innerHTML = data.gallery.map((imgUrl, index) => {
      const activeClass = index === 0 ? 'active' : '';
      return `<img class="modal-thumb ${activeClass}" src="${imgUrl}" alt="Foto Proyek ${index + 1}" data-src="${imgUrl}" />`;
    }).join('');

    // Attach click listeners to thumbnails
    const thumbs = modalGalleryThumbs.querySelectorAll('.modal-thumb');
    thumbs.forEach(thumb => {
      thumb.addEventListener('click', function () {
        thumbs.forEach(t => t.classList.remove('active'));
        this.classList.add('active');
        if (modalImg) {
          modalImg.src = this.getAttribute('data-src');
        }
      });
    });
  }

  // Format WA Link for DYMI ID
  const waText = encodeURIComponent(`Halo DYMI ID, saya tertarik untuk konsultasi mengenai "${data.title} (${data.client})". Bisa tolong diinfokan estimasi biaya dan jadwal survey lokasinya?`);
  if (modalWaBtn) {
    modalWaBtn.href = `https://wa.me/6285157288606?text=${waText}`;
  }

  if (modal) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function closeModal() {
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
}

/* ── Lightbox Open/Close Logic ── */
function openLightbox(imgSrc, captionText) {
  if (lightboxImg) lightboxImg.src = imgSrc;
  if (lightboxCaption) lightboxCaption.textContent = captionText || '';
  if (lightboxOverlay) {
    lightboxOverlay.classList.add('active');
  }
}

function closeLightbox() {
  if (lightboxOverlay) {
    lightboxOverlay.classList.remove('active');
  }
}

if (btnZoomImg) {
  btnZoomImg.addEventListener('click', function () {
    if (modalImg && modalImg.src) {
      const caption = currentActiveProject ? `${currentActiveProject.title} — ${currentActiveProject.client}` : '';
      openLightbox(modalImg.src, caption);
    }
  });
}

if (modalImg) {
  modalImg.addEventListener('click', function () {
    if (this.src) {
      const caption = currentActiveProject ? `${currentActiveProject.title} — ${currentActiveProject.client}` : '';
      openLightbox(this.src, caption);
    }
  });
}

if (lightboxClose) {
  lightboxClose.addEventListener('click', closeLightbox);
}

if (lightboxOverlay) {
  lightboxOverlay.addEventListener('click', function (e) {
    if (e.target === lightboxOverlay || e.target === lightboxClose) {
      closeLightbox();
    }
  });
}

// Attach click listeners to cards & open buttons
projCards.forEach(card => {
  const id = card.getAttribute('data-id');
  const btn = card.querySelector('.btn-modal-open');

  if (btn) {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      openModal(id);
    });
  }

  card.addEventListener('click', () => {
    openModal(id);
  });
});

if (modalClose) {
  modalClose.addEventListener('click', closeModal);
}

if (modal) {
  modal.addEventListener('click', function (e) {
    if (e.target === modal) {
      closeModal();
    }
  });
}

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    if (lightboxOverlay && lightboxOverlay.classList.contains('active')) {
      closeLightbox();
    } else if (modal && modal.classList.contains('active')) {
      closeModal();
    }
  }
});

/* ── Language Toggle (ID & EN) ── */
let currentLang = 'id';

const translations = {
  id: {
    'nav-home': 'Beranda',
    'nav-services': 'Layanan',
    'nav-portfolio': 'Portfolio',
    'nav-about': 'Tentang',
    'nav-contact': 'Kontak',
    'hero-location': '📍 DYMI ID',
    'hero-title': 'DYMI <em>ID</em>',
    'hero-tagline': 'Desain & Build',
    'hero-btn1': 'Konsultasi WhatsApp',
    'hero-btn2': 'Lihat Portfolio',
    'stat-projects': 'Proyek Selesai',
    'stat-years': 'Pengalaman',
    'stat-precision': 'Presisi & Rapi',
    'stat-satisfaction': 'Klien Puas',
    'services-kicker': 'Layanan DYMI ID',
    'services-title': 'Layanan Utama',
    'services-tag': 'Desain & Build',
    'svc1-title': 'Kitchen Set Custom',
    'svc1-desc': 'Pembuatan dapur modern minimalis dengan keunggulan maksimalisasi fungsi penyimpanan (storage), penggunaan material premium, dan sentuhan estetik seperti lampu LED hangat (hidden LED) dan motif marmer.',
    'svc2-title': 'Kamar Tidur & Workspace',
    'svc2-desc': 'Perancangan kamar tidur estetik serta ruang kerja (workspace) minimalis yang dirancang fungsional untuk meningkatkan produktivitas.',
    'svc3-title': 'Backdrop TV & Ruang Keluarga',
    'svc3-desc': 'Pembuatan panel dinding TV interaktif yang dipadukan dengan kredenza dan penyimpanan terbuka untuk mempercantik ruang keluarga.',
    'svc4-title': 'Interior Ruang Ibadah',
    'svc4-desc': 'Penataan ruangan khusus seperti mushola rumah dengan nuansa netral dan panel kayu yang menenangkan.',
    'portfolio-kicker': 'Karya DYMI ID',
    'portfolio-title': 'Portofolio Karya',
    'portfolio-tag': 'Proyek Terbaru',
    'about-kicker': 'Profil Perusahaan',
    'about-title': 'DYMI.id Furniture',
    'about-desc1': '<strong>DYMI.id Furniture</strong> berdiri pada <strong>20 April 2020</strong>. Kami menyediakan custom furniture &amp; interior mulai dari <em>Kitchen Set, Kabinet Bawah Tangga, Bedroom Set, Sink Cabinet, Backdrop TV, dan Partisi</em>.',
    'about-desc2': 'Berbasis di Kp. Cikalendong RT.01 RW.07 Desa. Ciherang Kec. Nagreg Kab. Bandung, Jawa Barat. Kami telah mendedikasikan diri di kerajinan furniture selama bertahun-tahun dengan membuat furniture dari bahan terbaik, memeriksa kualitas serta kelengkapan produk kami secara maksimal, serta mengirim dengan jasa pengiriman terbaik — <strong>kami menjamin kamu akan menerima produk furniture terbaik!</strong>',
    'about-stat1': 'Proyek Custom Furniture',
    'about-stat2': 'Berdiri Sejak 20 April 2020',
    'about-stat3': 'Kualitas Terbaik & Presisi',
    'contact-kicker': 'Hubungi DYMI ID',
    'contact-title': 'Konsultasikan Desain & Build<br>Interior Anda',
    'contact-name': 'Nama Lengkap',
    'contact-phone': 'No. WhatsApp / Telepon',
    'contact-select': '-- Pilih Jenis Layanan --',
    'contact-message': 'Ceritakan ukuran ruangan atau kebutuhan desain & build interior Anda...',
    'contact-submit': 'Kirim via WhatsApp',
    'contact-address': 'Lokasi Workshop',
    'contact-phone-label': 'No. Telepon / WA',
    'contact-hours': 'Jam Operasional Workshop',
    'contact-hours-val': 'Senin – Sabtu: 08.00 – 17.00 WIB<br>Minggu: Libur (By Appointment)'
  },
  en: {
    'nav-home': 'Home',
    'nav-services': 'Services',
    'nav-portfolio': 'Portfolio',
    'nav-about': 'About',
    'nav-contact': 'Contact',
    'hero-location': '📍 DYMI ID',
    'hero-title': 'DYMI <em>ID</em> Furniture',
    'hero-tagline': 'Design & Build',
    'hero-btn1': 'WhatsApp Consultation',
    'hero-btn2': 'View Portfolio',
    'stat-projects': 'Completed Projects',
    'stat-years': 'Experience',
    'stat-precision': 'Precision & Quality',
    'stat-satisfaction': 'Satisfied Clients',
    'services-kicker': 'DYMI ID Services',
    'services-title': 'Main Services',
    'services-tag': 'Design & Build',
    'svc1-title': 'Kitchen Set Custom',
    'svc1-desc': 'Crafting modern minimalist kitchens with maximum storage optimization, premium materials, and aesthetic touches like warm hidden LED lighting and marble motifs.',
    'svc2-title': 'Bedroom & Workspace',
    'svc2-desc': 'Designing aesthetic bedrooms and minimalist workspaces that are functionally designed to enhance productivity.',
    'svc3-title': 'TV Backdrop & Living Room',
    'svc3-desc': 'Creating interactive TV wall panels combined with credenzas and open storage to beautify the living room.',
    'svc4-title': 'Prayer Room Interior',
    'svc4-desc': 'Designing special spaces like home prayer rooms with neutral tones and calming wood panels.',
    'portfolio-kicker': 'DYMI ID Works',
    'portfolio-title': 'Our Portfolio',
    'portfolio-tag': 'Recent Projects',
    'about-kicker': 'Company Profile',
    'about-title': 'DYMI.id Furniture',
    'about-desc1': '<strong>DYMI.id Furniture</strong> was established on <strong>April 20, 2020</strong>. We provide custom furniture &amp; interior services including <em>Kitchen Sets, Under-Stair Cabinets, Bedroom Sets, Sink Cabinets, TV Backdrops, and Partitions</em>.',
    'about-desc2': 'Based in Kp. Cikalendong RT.01 RW.07 Desa. Ciherang Kec. Nagreg Kab. Bandung, West Java. We have dedicated ourselves to furniture craftsmanship for years, crafting products from the finest materials, thoroughly checking quality, and guaranteeing the best furniture delivered to you!',
    'about-stat1': 'Custom Furniture Projects',
    'about-stat2': 'Established April 20, 2020',
    'about-stat3': 'Best Quality & Precision',
    'contact-kicker': 'Contact DYMI ID',
    'contact-title': 'Consult Your Interior Design & Build Needs',
    'contact-name': 'Full Name',
    'contact-phone': 'WhatsApp / Phone Number',
    'contact-select': '-- Select Service Type --',
    'contact-message': 'Tell us your room dimensions or interior requirements...',
    'contact-submit': 'Send via WhatsApp',
    'contact-address': 'Workshop Location',
    'contact-phone-label': 'Phone / WA',
    'contact-hours': 'Workshop Hours',
    'contact-hours-val': 'Monday – Saturday: 08.00 – 17.00 WIB<br>Sunday: Closed (By Appointment)'
  }
};

function updateLanguage() {
  document.querySelectorAll('[data-lang]').forEach(element => {
    const key = element.getAttribute('data-lang');
    if (translations[currentLang] && translations[currentLang][key]) {
      if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
        element.placeholder = translations[currentLang][key];
      } else if (element.tagName === 'OPTION') {
        element.textContent = translations[currentLang][key];
      } else {
        element.innerHTML = translations[currentLang][key];
      }
    }
  });

  document.querySelectorAll('[data-placeholder]').forEach(element => {
    const key = element.getAttribute('data-placeholder');
    if (translations[currentLang] && translations[currentLang][key]) {
      element.placeholder = translations[currentLang][key];
    }
  });
}

// Desktop language toggle
const langToggleDesktop = document.getElementById('langToggleDesktop');
if (langToggleDesktop) {
  langToggleDesktop.addEventListener('click', function () {
    currentLang = currentLang === 'id' ? 'en' : 'id';
    this.textContent = currentLang === 'id' ? 'EN' : 'ID';
    const langToggleMobile = document.getElementById('langToggleMobile');
    if (langToggleMobile) langToggleMobile.textContent = currentLang === 'id' ? 'EN' : 'ID';
    updateLanguage();
  });
}

// Mobile language toggle
const langToggleMobile = document.getElementById('langToggleMobile');
if (langToggleMobile) {
  langToggleMobile.addEventListener('click', function () {
    currentLang = currentLang === 'id' ? 'en' : 'id';
    this.textContent = currentLang === 'id' ? 'EN' : 'ID';
    const langToggleDesktop = document.getElementById('langToggleDesktop');
    if (langToggleDesktop) langToggleDesktop.textContent = currentLang === 'id' ? 'EN' : 'ID';
    updateLanguage();
  });
}

/* ── Testimonial rotator ── */
var testis = [
  {
    text: 'Hasil pengerjaan kitchen set custom dan backdrop TV dari DYMI ID sangat rapi dan presisi. Sangat puas dengan hasilnya!',
    by: '— Ibu Maya, Klien Residential'
  },
  {
    text: 'Interior kamar tidur dan workspace dari DYMI ID membuat ruang kami terlihat sangat estetik dan fungsional. Pengerjaan tepat waktu dan komunikatif dari awal.',
    by: '— Pak Hendra, Klien Residential'
  },
  {
    text: 'Backdrop TV dan ruang keluarga dikerjakan dengan sangat bersih dan presisi oleh tim DYMI ID. Recommended banget!',
    by: '— Sdr. Rian, Klien Residential'
  }
];

function changeTesti(idx) {
  const testiText = document.getElementById('testiText');
  const testiBy = document.getElementById('testiBy');
  if (testiText) testiText.textContent = testis[idx].text;
  if (testiBy) testiBy.innerHTML = testis[idx].by;
  document.querySelectorAll('.testi-dot').forEach(function (d, i) {
    d.classList.toggle('active', i === idx);
  });
}

var testiIdx = 0;
setInterval(function () {
  testiIdx = (testiIdx + 1) % testis.length;
  changeTesti(testiIdx);
}, 5000);

/* ── WhatsApp Form Handler (IPP Interior: 0823-6438-9235) ── */
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const nama = document.getElementById('nama').value;
    const email = document.getElementById('email').value;
    const telepon = document.getElementById('telepon').value;
    const layanan = document.getElementById('layanan').value;
    const pesan = document.getElementById('pesan').value;

    let message = '';
    if (currentLang === 'id') {
      message = `*Permintaan Konsultasi DYMI ID*\n\n` +
        `*Nama:* ${nama}\n` +
        (email ? `*Email:* ${email}\n` : '') +
        `*No. WA/Telp:* ${telepon}\n` +
        `*Layanan:* ${layanan}\n` +
        `*Pesan / Rincian Ruangan:*\n${pesan}`;
    } else {
      message = `*DYMI ID Consultation Request*\n\n` +
        `*Name:* ${nama}\n` +
        (email ? `*Email:* ${email}\n` : '') +
        `*WhatsApp/Phone:* ${telepon}\n` +
        `*Service:* ${layanan}\n` +
        `*Message / Room Details:*\n${pesan}`;
    }

    const waNumber = '6285157288606';
    const encodedMessage = encodeURIComponent(message);
    const waURL = `https://wa.me/${waNumber}?text=${encodedMessage}`;

    window.open(waURL, '_blank');
    this.reset();
  });
}

// Close mobile menu on ESC key
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && mobileMenu && mobileMenu.classList.contains('active')) {
    closeMobileMenu();
  }
});
