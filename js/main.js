const defaultConfig = {
  hero_name: 'Zefanya Kharisma Nugroho',
  hero_title: 'International Partnership Specialist',
  hero_tagline: 'Supporting 200+ international students and managing end-to-end global mobility programs across universities in Indonesia and beyond — based in Surabaya.',
  about_text: 'Over the past 3+ years, I have supported 200+ international students and managed end-to-end global mobility programs across universities in Indonesia and beyond. From coordinating semester exchange programs and government scholarships (KNB & TIAS) to reviewing 25+ partnership agreements monthly, I bring both operational depth and strategic vision to international education. Currently at Petra Christian University, I focus on building and strengthening institutional partnerships — facilitating 15+ strategic meetings per month, expanding access to international grants, and growing PCU\'s global network.',
  contact_email: 'zefanya.kharisma@gmail.com',
  partnership_title: 'Partnership Development',
  mou_title: 'MoU / MoA Coordination',
  background_color: '#F8FAFC',
  surface_color: '#FFFFFF',
  text_color: '#1E293B',
  primary_action_color: '#2563EB',
  accent_color: '#38BDF8',
  font_family: 'Sora',
  font_size: 16
};

let currentPage = 'home';
let currentSlideHero = 0;
let currentPagesSlide = 0;
let pagesAutoplay;

function goToPage(pageName, updateHash = true) {
  document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
  const page = document.getElementById(`page-${pageName}`);
  if (page) {
    page.classList.add('active');
    currentPage = pageName;
    const container = document.querySelector('.pages-container');
    if (container) container.scrollTop = 0;
  }
  document.getElementById('mobile-menu').classList.add('hidden');
  const app = document.getElementById('app');
  if (app) app.scrollTop = 0;
  if (updateHash) {
    const hash = pageName === 'home' ? '' : pageName;
    history.pushState({ page: pageName }, '', hash ? `#${hash}` : location.pathname);
  }
}

window.addEventListener('popstate', (e) => {
  const page = e.state?.page || 'home';
  goToPage(page, false);
});

function slideCarouselHero(direction) {
  const track = document.getElementById('carousel-track-hero');
  const slides = track.children;
  currentSlideHero += direction;
  if (currentSlideHero >= slides.length) currentSlideHero = 0;
  if (currentSlideHero < 0) currentSlideHero = slides.length - 1;
  track.style.transform = `translateX(-${currentSlideHero * 100}%)`;
  updateCarouselDotsHero();
}

function updateCarouselDotsHero() {
  const dotsContainer = document.getElementById('carousel-dots-hero');
  dotsContainer.innerHTML = '';
  const slides = document.getElementById('carousel-track-hero').children;
  for (let i = 0; i < slides.length; i++) {
    const dot = document.createElement('button');
    dot.className = 'w-2 h-2 rounded-full transition';
    dot.style.background = i === currentSlideHero ? '#ffffff' : 'rgba(255,255,255,0.4)';
    dot.onclick = () => {
      currentSlideHero = i;
      document.getElementById('carousel-track-hero').style.transform = `translateX(-${currentSlideHero * 100}%)`;
      updateCarouselDotsHero();
    };
    dotsContainer.appendChild(dot);
  }
}

function slidePagesCarousel(dir) {
  const track = document.getElementById('pages-carousel-track');
  if (!track) return;
  const count = track.children.length;
  currentPagesSlide += dir;
  if (currentPagesSlide >= count) currentPagesSlide = 0;
  if (currentPagesSlide < 0) currentPagesSlide = count - 1;
  track.style.transform = `translateX(-${currentPagesSlide * 100}%)`;
  updatePagesCarouselDots();
  clearInterval(pagesAutoplay);
  pagesAutoplay = setInterval(() => slidePagesCarousel(1), 3500);
}

function updatePagesCarouselDots() {
  const dotsContainer = document.getElementById('pages-carousel-dots');
  const track = document.getElementById('pages-carousel-track');
  if (!dotsContainer || !track) return;
  const count = track.children.length;
  dotsContainer.innerHTML = '';
  for (let i = 0; i < count; i++) {
    const dot = document.createElement('button');
    dot.className = 'w-2 h-2 rounded-full transition';
    dot.style.background = i === currentPagesSlide ? '#2563EB' : 'rgba(37,99,235,0.25)';
    dot.onclick = () => {
      currentPagesSlide = i;
      track.style.transform = `translateX(-${currentPagesSlide * 100}%)`;
      updatePagesCarouselDots();
      clearInterval(pagesAutoplay);
      pagesAutoplay = setInterval(() => slidePagesCarousel(1), 3500);
    };
    dotsContainer.appendChild(dot);
  }
}

function applyConfig(config) {
  const c = key => config[key] || defaultConfig[key];
  document.getElementById('nav-name').textContent = c('hero_name').split(' ')[0].substring(0, 1) + c('hero_name').split(' ')[1].substring(0, 1);
  const teaserEl = document.getElementById('about-teaser-text');
  if (teaserEl) teaserEl.textContent = c('about_text');
  document.getElementById('contact-email-el').textContent = c('contact_email');
  const partnershipTitle = document.getElementById('partnership-title');
  if (partnershipTitle) partnershipTitle.textContent = c('partnership_title');
  const mouTitle = document.getElementById('mou-title');
  if (mouTitle) mouTitle.textContent = c('mou_title');
}

window.elementSdk.init({
  defaultConfig,
  onConfigChange: async (config) => applyConfig(config),
  mapToCapabilities: (config) => ({
    recolorables: [
      { get: () => config.background_color || defaultConfig.background_color, set: v => { config.background_color = v; window.elementSdk.setConfig({ background_color: v }); }},
      { get: () => config.surface_color || defaultConfig.surface_color, set: v => { config.surface_color = v; window.elementSdk.setConfig({ surface_color: v }); }},
      { get: () => config.text_color || defaultConfig.text_color, set: v => { config.text_color = v; window.elementSdk.setConfig({ text_color: v }); }},
      { get: () => config.primary_action_color || defaultConfig.primary_action_color, set: v => { config.primary_action_color = v; window.elementSdk.setConfig({ primary_action_color: v }); }},
      { get: () => config.accent_color || defaultConfig.accent_color, set: v => { config.accent_color = v; window.elementSdk.setConfig({ accent_color: v }); }}
    ],
    borderables: [],
    fontEditable: { get: () => config.font_family || defaultConfig.font_family, set: v => { config.font_family = v; window.elementSdk.setConfig({ font_family: v }); }},
    fontSizeable: { get: () => config.font_size || defaultConfig.font_size, set: v => { config.font_size = v; window.elementSdk.setConfig({ font_size: v }); }}
  }),
  mapToEditPanelValues: (config) => new Map([
    ['hero_name', config.hero_name || defaultConfig.hero_name],
    ['hero_title', config.hero_title || defaultConfig.hero_title],
    ['hero_tagline', config.hero_tagline || defaultConfig.hero_tagline],
    ['about_text', config.about_text || defaultConfig.about_text],
    ['contact_email', config.contact_email || defaultConfig.contact_email],
    ['partnership_title', config.partnership_title || defaultConfig.partnership_title],
    ['mou_title', config.mou_title || defaultConfig.mou_title]
  ])
});

// Initialize mobile menu
document.getElementById('mobile-menu-btn').addEventListener('click', () => {
  document.getElementById('mobile-menu').classList.toggle('hidden');
});

document.querySelectorAll('.mobile-menu-toggle').forEach(btn => {
  btn.addEventListener('click', () => {
    const menu = document.getElementById(btn.dataset.menu + '-menu');
    if (menu) {
      menu.classList.toggle('hidden');
      btn.querySelector('i').style.transform = menu.classList.contains('hidden') ? 'rotate(0deg)' : 'rotate(180deg)';
    }
  });
});

// Hero banner configurations for each page
const heroConfigs = {
  'education': { back: 'about-overview', backLabel: 'Back', category: 'About Me', title: 'Academic Foundation', desc: 'Education and achievements that shaped my professional expertise in international relations.', gradient: '#1E3A5F 0%, #2563EB 60%, #38BDF8 100%' },
  'international': { back: 'about-overview', backLabel: 'Back', category: 'About Me', title: 'International Exposure', desc: 'Real-world experience bridging institutions, students, and cultures across Southeast Asia.', gradient: '#1E3A5F 0%, #2563EB 60%, #38BDF8 100%' },
  'values': { back: 'about-overview', backLabel: 'Back', category: 'About Me', title: 'Professional Values', desc: 'Principles that guide my work and decisions in international education.', gradient: '#1E3A5F 0%, #2563EB 60%, #38BDF8 100%' },
  'expertise': { back: 'about-overview', backLabel: 'Back', category: 'About Me', title: 'Areas of Expertise', desc: 'Core competencies built through hands-on experience in international higher education.', gradient: '#1E3A5F 0%, #2563EB 60%, #38BDF8 100%' },
  'experience': { back: 'about-overview', backLabel: 'Back', category: 'About Me', title: 'Professional Experience', desc: '3+ years building international partnerships and supporting student mobility across Surabaya.', gradient: '#1E3A5F 0%, #2563EB 60%, #38BDF8 100%' },
  'skillset': { back: 'about-overview', backLabel: 'Back', category: 'About Me', title: 'Skillset', desc: 'Core competencies and professional capabilities.', gradient: '#1E3A5F 0%, #2563EB 60%, #38BDF8 100%' },
  'projects-overview': { back: 'home', backLabel: 'Back', category: 'Project Management', title: "Programs I've Led", desc: 'End-to-end management of flagship exchange programs with IDR 50-90M budgets per program.', gradient: '#3B0764 0%, #7C3AED 60%, #A78BFA 100%' },
  'amerta': { back: 'projects-overview', backLabel: 'Back', category: 'Project Management', title: 'AMERTA', desc: "Universitas Airlangga's flagship semester exchange program — 120+ students, IDR 50-100M budget.", gradient: '#3B0764 0%, #7C3AED 60%, #A78BFA 100%' },
  'aci': { back: 'projects-overview', backLabel: 'Back', category: 'Project Management', title: 'ACI', desc: 'Airlangga Cultural Immersion — structured engagement program connecting international and local students.', gradient: '#3B0764 0%, #7C3AED 60%, #A78BFA 100%' },
  'aero': { back: 'projects-overview', backLabel: 'Back', category: 'Project Management', title: 'AERO', desc: 'Annual exhibition at Universitas Airlangga showcasing global partnerships and international programs.', gradient: '#3B0764 0%, #7C3AED 60%, #A78BFA 100%' },
  'onboarding': { back: 'engagement', backLabel: 'Back', category: 'Student Services', title: 'Student Onboarding & Orientation', desc: 'End-to-end welfare support for 100+ international students per semester at Airlangga Global Engagement.', gradient: '#064E3B 0%, #059669 60%, #34D399 100%' },
  'engagement': { back: 'home', backLabel: 'Back', category: 'Student Services', title: 'International Student Support', desc: 'Supporting 200+ international students across welfare, mobility, and engagement programs.', gradient: '#064E3B 0%, #059669 60%, #34D399 100%' },
  'engagement-detail': { back: 'engagement', backLabel: 'Back', category: 'Student Services', title: 'Engagement Initiatives', desc: 'Building meaningful connections and fostering personal growth for exchange students.', gradient: '#064E3B 0%, #059669 60%, #34D399 100%' },
  'partnerships': { back: 'home', backLabel: 'Back', category: 'Global Partnerships', title: 'Global Partnerships & Promotion', desc: 'Managing 30+ institutional partners — reviewing 25+ agreements monthly and facilitating 15+ strategic meetings.', gradient: '#7C2D12 0%, #EA580C 60%, #FB923C 100%' },
  'partnership-detail': { back: 'partnerships', backLabel: 'Back', category: 'Global Partnerships', title: 'Partnership Development', desc: 'Building and nurturing strategic academic partnerships that drive institutional excellence.', gradient: '#7C2D12 0%, #EA580C 60%, #FB923C 100%' },
  'mou-detail': { back: 'partnerships', backLabel: 'Back', category: 'Global Partnerships', title: 'MoU / MoA Coordination', desc: 'Reviewing 25+ partnership agreements per month — ensuring compliance and institutional alignment.', gradient: '#7C2D12 0%, #EA580C 60%, #FB923C 100%' },
  'mou': { back: 'partnerships', backLabel: 'Back', category: 'Global Partnerships', title: 'MoU / MoA Coordination', desc: 'Formalizing academic partnerships through strategic agreements.', gradient: '#7C2D12 0%, #EA580C 60%, #FB923C 100%' },
  'websites': { back: 'home', backLabel: 'Back', category: 'Creative Services', title: 'Web Development & Design', desc: 'Responsive, user-centered websites for institutional communications and international engagement.', gradient: '#7F1D1D 0%, #DC2626 60%, #F87171 100%' },
  'designs': { back: 'home', backLabel: 'Back', category: 'Creative Services', title: 'Graphic Design & Branding', desc: 'Strategic visual design for institutional identity and international partnerships.', gradient: '#7F1D1D 0%, #DC2626 60%, #F87171 100%' },
  'contact': { back: 'home', backLabel: 'Back', category: 'Get in Touch', title: "Let's Connect", desc: 'Open to international partnerships, collaborations, and meaningful conversations about global education.', gradient: '#1E293B 0%, #334155 60%, #64748B 100%' }
};

function injectHeroBanners() {
  Object.entries(heroConfigs).forEach(([pageId, cfg]) => {
    const page = document.getElementById('page-' + pageId);
    if (!page || page.querySelector('.page-hero-banner')) return;
    page.classList.remove('py-20');
    const hero = document.createElement('div');
    hero.className = 'page-hero-banner relative overflow-hidden';
    hero.style.cssText = 'background:linear-gradient(135deg,' + cfg.gradient + ');padding:64px 0 48px';
    hero.innerHTML = '<div class="absolute -right-16 -top-16 w-80 h-80 rounded-full" style="background:rgba(255,255,255,0.05)"></div>' +
      '<div class="absolute right-24 bottom-8 w-48 h-48 rounded-full" style="border:2px solid rgba(255,255,255,0.08)"></div>' +
      '<div class="relative z-10 max-w-6xl mx-auto px-6">' +
      '<button onclick="goToPage(\'' + cfg.back + '\')" class="flex items-center gap-2 mb-8" style="color:rgba(255,255,255,0.75)">' +
      '<i data-lucide="arrow-left" style="width:16px;height:16px"></i> ' + cfg.backLabel + '</button>' +
      '<span class="inline-block px-4 py-1.5 rounded-full text-xs font-semibold mb-5 uppercase tracking-wider" style="background:rgba(255,255,255,0.15);color:#fff">' + cfg.category + '</span>' +
      '<h1 class="font-heading font-bold text-4xl md:text-5xl mb-4 text-white">' + cfg.title + '</h1>' +
      '<p class="text-base md:text-lg max-w-2xl" style="color:rgba(255,255,255,0.75)">' + cfg.desc + '</p>' +
      '</div>';
    page.insertBefore(hero, page.firstChild);
    const contentWrapper = Array.from(page.children).find(el =>
      el !== hero && el.tagName === 'DIV' && el.querySelector && el.querySelector('button[onclick*="goToPage"]')
    );
    if (contentWrapper) {
      contentWrapper.style.paddingTop = contentWrapper.style.paddingTop || '64px';
      contentWrapper.style.paddingBottom = contentWrapper.style.paddingBottom || '64px';
      const oldBack = contentWrapper.querySelector('button[onclick*="goToPage"]');
      if (oldBack && oldBack.querySelector('i[data-lucide="arrow-left"]')) oldBack.remove();
    }
  });
}

// Initialize carousels
updateCarouselDotsHero();
updatePagesCarouselDots();
pagesAutoplay = setInterval(() => slidePagesCarousel(1), 3500);

// Inject hero banners then initialize lucide icons
injectHeroBanners();
lucide.createIcons();

// Navigate to page from URL hash on load
(function() {
  const hash = location.hash.replace('#', '');
  if (hash && document.getElementById(`page-${hash}`)) {
    goToPage(hash, false);
    history.replaceState({ page: hash }, '', location.hash);
  } else {
    history.replaceState({ page: 'home' }, '', location.pathname);
  }
})();

// Touch swipe for hero carousel
(function() {
  var track = document.getElementById('carousel-track-hero');
  var startX = 0;
  track.addEventListener('touchstart', function(e) { startX = e.touches[0].clientX; }, { passive: true });
  track.addEventListener('touchend', function(e) {
    var diff = startX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) slideCarouselHero(diff > 0 ? 1 : -1);
  }, { passive: true });
})();

// Touch swipe for pages carousel
(function() {
  var track = document.getElementById('pages-carousel-track');
  if (!track) return;
  var startX = 0;
  track.addEventListener('touchstart', function(e) { startX = e.touches[0].clientX; }, { passive: true });
  track.addEventListener('touchend', function(e) {
    var diff = startX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) slidePagesCarousel(diff > 0 ? 1 : -1);
  }, { passive: true });
})();
