// Project Management — PCU Global page

function pcuEsc(s) {
  return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

const PCU_PROBLEMS = [
  {
    icon: 'file-x',
    color: '#ef4444',
    bg: 'rgba(239,68,68,0.08)',
    title: 'No Value Proposition',
    desc: 'The homepage has zero introductory text. Visitors arrive to a menu of links with no explanation of who the International Office serves or why it matters — leaving first impressions entirely to navigation breadcrumbs.'
  },
  {
    icon: 'link-2-off',
    color: '#f97316',
    bg: 'rgba(249,115,22,0.08)',
    title: 'Incomplete Development',
    desc: 'Multiple navigation links use javascript:void(0) as their href — a telltale sign the site was shipped in a half-built state and never finished. Dead links erode institutional trust immediately.'
  },
  {
    icon: 'newspaper',
    color: '#eab308',
    bg: 'rgba(234,179,8,0.08)',
    title: 'Abandoned Content Systems',
    desc: '"Recent Posts" and "Category" sections display 0 entries — a blog feature built into the CMS but never populated. The skeleton of a news system exists; the content never arrived.'
  },
  {
    icon: 'layout-list',
    color: '#8b5cf6',
    bg: 'rgba(139,92,246,0.08)',
    title: 'Redundant Navigation',
    desc: 'The same menu structure repeats identically multiple times on a single page, creating cognitive overload without adding hierarchy or value. Quantity of links was mistaken for quality of navigation.'
  },
  {
    icon: 'smartphone',
    color: '#06b6d4',
    bg: 'rgba(6,182,212,0.08)',
    title: 'No Mobile-First Design',
    desc: 'No evidence of responsive design patterns anywhere on the site. International students researching programs on mobile devices encounter a desktop-only experience — a critical gap in 2025.'
  },
  {
    icon: 'mouse-pointer-2',
    color: '#ec4899',
    bg: 'rgba(236,72,153,0.08)',
    title: 'Zero Calls to Action',
    desc: 'Not a single button, form, or prompt guides visitors toward any next step — applying for exchange, contacting the office, or exploring programs. A pure directory with no conversion path.'
  },
];

const PCU_SOLUTIONS = [
  {
    icon: 'layers',
    color: '#003087',
    bg: 'rgba(0,48,135,0.08)',
    title: 'Audience-First Architecture',
    desc: 'Dedicated sections for Inbound, Outbound, Partnership, and Life at PCU — each with dynamic color theming so every visitor immediately understands where they are and what to explore next.'
  },
  {
    icon: 'route',
    color: '#1a56a0',
    bg: 'rgba(26,86,160,0.08)',
    title: 'Complete Hash-Based Routing',
    desc: 'Every page and section has a real, shareable URL via client-side hash routing — enabling deep-linking, browser navigation, and bookmarking. No placeholder links, no dead ends.'
  },
  {
    icon: 'rss',
    color: '#0ea5e9',
    bg: 'rgba(14,165,233,0.08)',
    title: 'Live News Management System',
    desc: 'Full admin CMS with article CRUD, trending tracking by visit count, image upload via base64, and role-based access — so the IO team can keep content fresh without touching any code.'
  },
  {
    icon: 'smartphone',
    color: '#10b981',
    bg: 'rgba(16,185,129,0.08)',
    title: 'Mobile-Responsive Design',
    desc: 'Built mobile-first with a slide-in drawer navigation, responsive grid layouts, and touch-friendly interactions — fully accessible to prospective students researching on any device.'
  },
  {
    icon: 'calendar-check',
    color: '#f97316',
    bg: 'rgba(249,115,22,0.08)',
    title: 'Multi-Step Meeting Request Form',
    desc: 'Prospective students and institutional partners can request meetings through a structured multi-step form with automatic email notification to the IO team — turning passive visitors into active contacts.'
  },
  {
    icon: 'globe',
    color: '#8b5cf6',
    bg: 'rgba(139,92,246,0.08)',
    title: 'Partnership Directory by Continent',
    desc: 'An interactive partnership modal organized by continent and country — replacing the link-list approach with a visual, explorable map of PCU\'s full global network of partner universities.'
  },
];

const PCU_TECH = [
  { name: 'HTML5', detail: 'Semantic structure' },
  { name: 'Tailwind CSS v3.4', detail: 'Utility-first styling via CDN' },
  { name: 'Vanilla JavaScript', detail: 'Client-side routing & rendering' },
  { name: 'Flask + Python 3', detail: 'Backend API services' },
  { name: 'SQLite', detail: 'Data persistence' },
  { name: 'Gunicorn', detail: 'Production web server' },
  { name: 'Lucide Icons', detail: 'Icon system' },
  { name: 'DM Sans + Playfair Display', detail: 'Typography system' },
];

// ── Section Builders ─────────────────────────────────────────────────────────

function buildPcuProblems() {
  const cards = PCU_PROBLEMS.map(p => `
    <div class="rounded-xl p-6" style="background:#FFF8F8;border:1px solid rgba(239,68,68,0.1)">
      <div class="w-11 h-11 rounded-lg flex items-center justify-center mb-4" style="background:${p.bg}">
        <i data-lucide="${p.icon}" style="width:22px;height:22px;color:${p.color}"></i>
      </div>
      <h4 class="font-heading font-semibold text-base mb-2" style="color:#1C1C1E">${pcuEsc(p.title)}</h4>
      <p class="text-sm leading-relaxed" style="color:#5C5C5C">${pcuEsc(p.desc)}</p>
    </div>`).join('');
  return `
    <div class="card p-8 mb-6">
      <div class="flex items-center gap-3 mb-2"><span class="accent-line" style="background:#ef4444"></span><h2 class="font-heading font-semibold text-2xl" style="color:#1C1C1E">The Problem</h2></div>
      <p class="text-sm mb-8" style="color:#5C5C5C">A diagnostic audit of io.petra.ac.id — PCU's existing International Office website — revealed six systemic failures undermining its ability to serve prospective students and institutional partners.</p>
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">${cards}</div>
    </div>`;
}

function buildPcuSolutions() {
  const cards = PCU_SOLUTIONS.map(s => `
    <div class="flex items-start gap-4 p-5 rounded-xl border-l-4" style="border-color:${s.color};background:#F4F7FF">
      <div class="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0" style="background:${s.bg}">
        <i data-lucide="${s.icon}" style="width:22px;height:22px;color:${s.color}"></i>
      </div>
      <div>
        <h4 class="font-heading font-semibold text-base mb-1" style="color:#1C1C1E">${pcuEsc(s.title)}</h4>
        <p class="text-sm leading-relaxed" style="color:#5C5C5C">${pcuEsc(s.desc)}</p>
      </div>
    </div>`).join('');
  return `
    <div class="card p-8 mb-6">
      <div class="flex items-center gap-3 mb-2"><span class="accent-line" style="background:#003087"></span><h2 class="font-heading font-semibold text-2xl" style="color:#1C1C1E">The Solution</h2></div>
      <p class="text-sm mb-8" style="color:#5C5C5C">PCU Global is a ground-up redesign of the International Office's web presence — built to serve three distinct audiences (inbound students, outbound students, and institutional partners) with clear information architecture, live content management, and genuine calls to action.</p>
      <div class="space-y-4">${cards}</div>
    </div>`;
}

function buildPcuTechStack() {
  const items = PCU_TECH.map(t => `
    <div class="flex items-center gap-3 px-4 py-3 rounded-lg" style="background:#F4F7FF;border:1px solid rgba(0,48,135,0.1)">
      <div class="w-2 h-2 rounded-full flex-shrink-0" style="background:#003087"></div>
      <div>
        <p class="text-sm font-semibold" style="color:#1C1C1E">${pcuEsc(t.name)}</p>
        <p class="text-xs" style="color:#5C5C5C">${pcuEsc(t.detail)}</p>
      </div>
    </div>`).join('');
  return `
    <div class="card p-8 mb-6">
      <div class="flex items-center gap-3 mb-6"><span class="accent-line" style="background:#003087"></span><h2 class="font-heading font-semibold text-2xl" style="color:#1C1C1E">Tech Stack</h2></div>
      <div class="grid sm:grid-cols-2 md:grid-cols-4 gap-3">${items}</div>
    </div>`;
}

function buildPcuPreview() {
  return `
    <div class="card p-8 mb-6">
      <div class="flex items-center gap-3 mb-2"><span class="accent-line" style="background:#003087"></span><h2 class="font-heading font-semibold text-2xl" style="color:#1C1C1E">Live Preview</h2></div>
      <p class="text-sm mb-6" style="color:#5C5C5C">The prototype is live — explore the full interface below or open it in a new tab.</p>
      <div class="rounded-xl overflow-hidden" style="border:1px solid rgba(28,28,30,0.1);box-shadow:0 8px 32px rgba(0,0,0,0.08)">
        <div class="flex items-center gap-3 px-4 py-3" style="background:#1C1C1E">
          <div class="flex items-center gap-1.5 flex-shrink-0">
            <span style="width:12px;height:12px;border-radius:50%;background:#FF5F57;display:inline-block"></span>
            <span style="width:12px;height:12px;border-radius:50%;background:#FFBD2E;display:inline-block"></span>
            <span style="width:12px;height:12px;border-radius:50%;background:#28CA41;display:inline-block"></span>
          </div>
          <div class="flex-1 flex items-center justify-center px-2">
            <div class="flex items-center gap-2 px-3 py-1.5 rounded-full text-xs w-full" style="background:rgba(255,255,255,0.08);color:rgba(255,255,255,0.5);max-width:480px">
              <i data-lucide="lock" style="width:10px;height:10px;flex-shrink:0;color:rgba(255,255,255,0.3)"></i>
              <span class="truncate">zefanyakharisma-cell.github.io/international-office-website/</span>
            </div>
          </div>
          <a href="https://zefanyakharisma-cell.github.io/international-office-website/" target="_blank" rel="noopener"
            class="flex items-center flex-shrink-0 transition hover:opacity-80"
            style="color:rgba(255,255,255,0.4)">
            <i data-lucide="external-link" style="width:14px;height:14px"></i>
          </a>
        </div>
        <div style="position:relative;height:580px;background:#f0f0f0">
          <iframe
            src="https://zefanyakharisma-cell.github.io/international-office-website/"
            style="width:100%;height:100%;border:none;display:block"
            loading="lazy"
            title="PCU Global — International Office Website Preview"
            sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox"
          ></iframe>
        </div>
      </div>
      <div class="flex justify-end mt-4">
        <a href="https://zefanyakharisma-cell.github.io/international-office-website/" target="_blank" rel="noopener"
          class="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-medium text-sm transition hover:opacity-90"
          style="background:#003087;color:#fff">
          <i data-lucide="external-link" style="width:14px;height:14px"></i> Open Full Site
        </a>
      </div>
    </div>`;
}

function buildPcuGithubLink() {
  return `
    <div class="card p-8 mb-6" style="background:linear-gradient(135deg,#003087,#1a56a0)">
      <div class="flex items-center justify-between flex-wrap gap-4">
        <div>
          <h3 class="font-heading font-bold text-xl mb-2 text-white">View on GitHub</h3>
          <p class="text-sm" style="color:rgba(255,255,255,0.75)">Full source code — built to be forked, adapted, and deployed by any international office team.</p>
        </div>
        <a href="https://github.com/zefanyakharisma-cell/international-office-website" target="_blank" rel="noopener"
          class="inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium text-sm transition hover:opacity-90 flex-shrink-0"
          style="background:#fff;color:#003087">
          <i data-lucide="github" style="width:16px;height:16px"></i> Open Repository
        </a>
      </div>
    </div>`;
}

// ── Page Shell ───────────────────────────────────────────────────────────────

function pcuInitPage() {
  const el = document.getElementById('page-pcu-global');
  if (!el) return;
  el.innerHTML = `
   <div class="max-w-6xl mx-auto px-6">
    <button onclick="goToPage('projects-overview')" class="flex items-center gap-2 mb-6" style="color:#003087"><i data-lucide="arrow-left" style="width:16px;height:16px"></i> Back</button>
    <div class="card p-8 mb-8" style="background:linear-gradient(135deg,#003087,#1a56a0)">
     <div class="flex items-center gap-3 mb-4">
      <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold" style="background:rgba(255,255,255,0.15);color:#fff">Digital Transformation</span>
      <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold" style="background:rgba(255,255,255,0.15);color:#fff">PCU · Surabaya</span>
     </div>
     <h1 class="font-heading font-bold text-4xl mb-3 text-white">PCU Global</h1>
     <p class="text-lg max-w-2xl" style="color:rgba(255,255,255,0.9)">Rebuilding and rebranding Petra Christian University's International Office through a purpose-built online presence — designed for inbound students, outbound programs, and institutional partners.</p>
    </div>
    <div class="card p-8 mb-6">
     <p class="text-base leading-relaxed max-w-4xl" style="color:#5C5C5C">
      PCU's International Office (io.petra.ac.id) is the digital front door for one of Surabaya's leading Christian universities — a gateway for prospective exchange students, institutional partners, and anyone navigating PCU's global programs. The existing site falls well short of that responsibility. PCU Global is a complete redesign: starting from the user's actual needs, building systems that scale, and creating a web presence worthy of the institution's global ambitions.
     </p>
    </div>
    ${buildPcuProblems()}
    <div class="mb-6 px-2 py-10 text-center">
     <div class="flex items-center justify-center gap-4 mb-5">
      <span style="flex:1;max-width:80px;height:1px;background:rgba(28,28,30,0.1)"></span>
      <span style="font-size:.7rem;font-weight:600;letter-spacing:.12em;text-transform:uppercase;color:#003087">Our Response</span>
      <span style="flex:1;max-width:80px;height:1px;background:rgba(28,28,30,0.1)"></span>
     </div>
     <h2 class="font-heading font-bold mb-3" style="font-size:clamp(1.8rem,4vw,2.6rem);color:#1C1C1E;line-height:1.1">So we built this.</h2>
     <p class="text-base max-w-lg mx-auto" style="color:#5C5C5C">A ground-up redesign that answers every failure above — live, explorable, and open source.</p>
    </div>
    ${buildPcuPreview()}
    ${buildPcuSolutions()}
    ${buildPcuTechStack()}
    ${buildPcuGithubLink()}
   </div>`;

  if (window.lucide) lucide.createIcons();
}

document.addEventListener('DOMContentLoaded', function () {
  pcuInitPage();
});
