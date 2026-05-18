// ── Graphic Designs — Editorial Visual Portfolio ──────────────────────────────

function gdInjectFonts() {
  if (document.querySelector('[data-gd-fonts]')) return;
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = 'https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Caveat:wght@400;500;600;700&display=swap';
  link.setAttribute('data-gd-fonts', '1');
  document.head.appendChild(link);
}

const GD = {
  yellow:   '#F5D05E',
  blue:     '#7BC8F6',
  orange:   '#F4874B',
  coral:    '#FF6B6B',
  lavender: '#C4B5FD',
  cream:    '#FFFBF5',
  mint:     '#6EE7B7',
  peach:    '#FDBA8C',
  pink:     '#FDA4AF',
  purple:   '#A78BFA',
};

let gdCurrentFilter  = 'all';
let gdCurrentView    = 'gallery';
let gdCurrentProject = null;

const GD_PROJECTS = [
  // ── PCU Projects first ──────────────────────────────────────────────────────
  {
    id: 'pcu-partnership-booklet',
    title: 'PCU Partnership Booklet',
    fullTitle: 'Partnership Initiative Booklet for Petra Christian University',
    institution: 'Petra Christian University',
    year: '2024–2025',
    categories: ['institutional', 'partnership'],
    emoji: '◈',
    bg: GD.lavender,
    textColor: '#5B21B6',
    folder: 'partnership-booklet-pcu',
    pages: 35,
    skills: ['Graphic Design', 'Branding', 'Editorial Layout', 'International Education'],
    summary: 'A comprehensive booklet showcasing PCU\'s international partnership initiatives — designed to attract new institutional partners and communicate the depth of existing collaborations.',
    challenge: 'Communicating years of partnership work across diverse global institutions in a way that feels cohesive, credible, and inviting.',
    approach: 'Used PCU\'s brand language as a foundation, then elevated it with premium editorial layouts, rich data storytelling, and clear visual hierarchy.',
    reflection: 'Good institutional design earns trust. Every page choice — from typography to white space — signals how serious and thoughtful an institution is.',
    impact: 'Used by PCU International Office in partner meetings and institutional visits across Southeast Asia and beyond.',
    deliverables: ['35-page digital booklet', 'Print-ready PDF export', 'Partnership data infographics', 'Cover & chapter divider system'],
    designDecisions: [
      { icon: '◈', label: 'Typography System', text: 'Paired a confident sans-serif headline with a warm body font — signaling institutional authority without losing approachability.' },
      { icon: '✦', label: 'Data Storytelling', text: 'Partnership statistics visualized as infographic blocks rather than tables — numbers reframed as achievements, not just data.' },
      { icon: '⬡', label: 'Color Language', text: 'Anchored in PCU institutional tones with a refined lavender-and-white palette — distinguished, memorable, and aligned with the institution\'s identity.' },
    ],
    link: 'https://canva.link/partnershipbookletpetra',
  },
  {
    id: 'pcu-intl-students',
    title: 'PCU International Students Guide',
    fullTitle: 'International Students Guidebook for Petra Christian University',
    institution: 'Petra Christian University',
    year: '2024–2025',
    categories: ['guidebook', 'student'],
    emoji: '🌐',
    bg: GD.yellow,
    textColor: '#854D0E',
    folder: 'international-students-guidebook-pcu',
    pages: 30,
    skills: ['Graphic Design', 'Information Architecture', 'Communication Design', 'International Education'],
    summary: 'A comprehensive guidebook helping international students navigate life at PCU — from academic processes to daily living in Surabaya.',
    challenge: 'Covering a vast scope of practical information — visa, housing, healthcare, campus life — without overwhelming a reader who may already feel anxious.',
    approach: 'Used a clear chapter system with visual anchors, illustrated icons, and step-by-step formats that let students find what they need quickly.',
    reflection: 'Designing a guidebook is an act of empathy — every page should make a nervous international student feel a little more at home.',
    impact: 'Distributed to all incoming international students at PCU as their primary orientation resource.',
    deliverables: ['30-page interactive guide', 'Chapter navigation system', 'Step-by-step registration flow', 'Campus life visual directory'],
    designDecisions: [
      { icon: '◈', label: 'Reader Journey', text: 'Structured as a timeline from pre-arrival to settled campus life — mirroring the student\'s actual emotional journey, not the institution\'s org chart.' },
      { icon: '✦', label: 'Icon Language', text: 'Created a consistent icon set for tips, warnings, steps, and definitions — reducing cognitive load so students can scan before they read.' },
      { icon: '⬡', label: 'Friendly Tone by Design', text: 'Visual breathing room, warm yellow, and generous margins communicate safety — anxious first-time arrivals should feel guided, never overwhelmed.' },
    ],
    link: 'https://canva.link/internationalstudentsguidebookpetra',
  },
  {
    id: 'pcu-presentation',
    title: 'PCU Presentation Template',
    fullTitle: 'General Presentation Template for Partnership Initiative — Petra Christian University',
    institution: 'Petra Christian University',
    year: '2024–2025',
    categories: ['presentation', 'partnership'],
    emoji: '◉',
    bg: GD.pink,
    textColor: '#9F1239',
    folder: 'general-ppt-pcu',
    pages: 35,
    skills: ['Presentation Design', 'Branding', 'Typography', 'Communication Design'],
    summary: 'A modular, reusable presentation template giving PCU\'s international partnership team a consistent, polished voice in every meeting, pitch, and partner visit.',
    challenge: 'Creating a template flexible enough for MoU meetings, partner visits, and conferences — while keeping every slide unmistakably PCU.',
    approach: 'Built a master template with clearly defined sections, slide variants, and visual rules — empowering any team member to create on-brand presentations without a designer.',
    reflection: 'The best design systems disappear into the background. A great template empowers non-designers to communicate beautifully.',
    impact: 'Now the standard presentation template for all PCU International Office partner meetings and official conferences.',
    deliverables: ['35-slide master template', '8 layout variant archetypes', 'Data visualization slides', 'Brand-aligned color & type system'],
    designDecisions: [
      { icon: '◈', label: 'Modular Architecture', text: 'Built 8 core archetypes — title, content, data, quote, cover, divider, gallery, closing — every meeting scenario is covered by combining these.' },
      { icon: '✦', label: 'White Space Strategy', text: 'Generous margins and restrained content per slide ensure the speaker\'s voice leads — the deck should support, not compete.' },
      { icon: '⬡', label: 'Reuse Flexibility', text: 'Color and font variables defined systematically — any team member can rearrange slides without accidentally breaking visual consistency.' },
    ],
    link: 'https://canva.link/jat6f7jcsawdmnu',
  },
  // ── Universitas Airlangga Projects ──────────────────────────────────────────
  {
    id: 'aci-b2-2025',
    title: 'ACI 2025 Batch 2 Guidebook',
    fullTitle: 'Guidebook for Airlangga Cultural Immersion 2025 — Batch 2',
    institution: 'Universitas Airlangga',
    year: '2025',
    categories: ['guidebook', 'student'],
    emoji: '📖',
    bg: GD.blue,
    textColor: '#0369A1',
    folder: 'booklet-aci-2025-b2-unair',
    pages: 7,
    skills: ['Graphic Design', 'Editorial Layout', 'Information Architecture', 'Communication Design'],
    summary: 'A concise, high-impact guidebook for international students joining the Airlangga Cultural Immersion program — every page designed to make participants feel welcomed, informed, and genuinely excited.',
    challenge: 'Communicating a full program itinerary, cultural context, and practical logistics in only 7 pages — without losing warmth or detail.',
    approach: 'Applied a compressed information hierarchy — critical content large and bold, supporting detail small but accessible — within a scan-first editorial grid.',
    reflection: 'Designing for cross-cultural audiences taught me that clarity is the highest form of care — making someone feel seen through design means speaking their visual language.',
    impact: 'Handed to each participant on arrival day of ACI 2025 Batch 2 — the first designed touchpoint of their cultural immersion experience.',
    deliverables: ['7-page event guidebook', 'Program schedule spread', 'Welcome briefing layout', 'Participant reference sheet'],
    designDecisions: [
      { icon: '◈', label: 'Compact but Complete', text: 'A full program in 7 pages — achieved through layered information density where critical info is big, supplementary info is accessible but secondary.' },
      { icon: '✦', label: 'Cultural Warmth', text: 'Soft blues and clean editorial whites evoke trust and calm — essential for participants arriving in an unfamiliar country for the first time.' },
      { icon: '⬡', label: 'Scan-first Design', text: 'Every spread was designed to be understood in under 10 seconds — headers, icons, and color blocks guide the eye before a single word is read.' },
    ],
    link: 'https://canva.link/motmeousw72spno',
  },
  {
    id: 'aci-b1-2025',
    title: 'ACI 2025 Batch 1 Guidebook',
    fullTitle: 'Guidebook for Airlangga Cultural Immersion 2025 — Batch 1',
    institution: 'Universitas Airlangga',
    year: '2025',
    categories: ['guidebook', 'student'],
    emoji: '🌿',
    bg: GD.mint,
    textColor: '#065F46',
    folder: 'guidebook-aci-2025-b1-unair',
    pages: 15,
    skills: ['Graphic Design', 'Editorial Layout', 'Information Architecture', 'Communication Design'],
    summary: 'The inaugural guidebook for ACI 2025\'s first batch — setting the visual identity and design system for the entire Airlangga Cultural Immersion series.',
    challenge: 'Establishing a recurring visual identity flexible enough to feel fresh per cohort, while remaining unmistakably ACI across future editions.',
    approach: 'Developed a modular design system — consistent branding with swappable color themes, flexible illustration slots, and an adaptable schedule layout.',
    reflection: 'The first edition of any design system carries the weight of setting standards. I learned to design for flexibility without sacrificing identity.',
    impact: 'The design system established in Batch 1 became the foundation that Batch 2\'s condensed edition built directly upon.',
    deliverables: ['15-page participant guidebook', 'Day-by-day itinerary spread', 'Cultural etiquette section', 'Emergency contacts page'],
    designDecisions: [
      { icon: '◈', label: 'System Foundation', text: 'Color-coded chapters — each program section has its own accent color — enabling instant navigation without needing an index page.' },
      { icon: '✦', label: 'Itinerary as Visual Story', text: 'Transformed a text-heavy schedule into a visual timeline with icons and color blocks — making participants feel excited, not administratively processed.' },
      { icon: '⬡', label: 'Bilingual Layout Awareness', text: 'Grid and spacing decisions account for bilingual content — generous white space ensures the layout holds even when text expands across languages.' },
    ],
    link: 'https://canva.link/6bysygp89hi879s',
  },
  {
    id: 'staffs-banyuwangi',
    title: 'Staffordshire Banyuwangi Booklet',
    fullTitle: 'Booklet for Staffordshire University Tailor-Made Program to Banyuwangi',
    institution: 'Staffordshire University × Universitas Airlangga',
    year: '2025',
    categories: ['institutional', 'partnership'],
    emoji: '✦',
    bg: GD.peach,
    textColor: '#9A3412',
    folder: 'guidebook-staffordshire-unair',
    pages: 15,
    skills: ['Graphic Design', 'Editorial Layout', 'Branding', 'International Education'],
    summary: 'A tailor-made program booklet for Staffordshire University students visiting Banyuwangi — blending academic immersion with cultural exploration in a visually distinctive editorial format.',
    challenge: 'Designing for a brand-new partnership with no established visual identity — while making both Staffordshire and Airlangga feel equally represented and proud.',
    approach: 'Created a warm, exploratory visual language drawn from East Java\'s natural landscape — earth tones, organic shapes, and editorial magazine-style layouts.',
    reflection: 'Partnership communications are a design challenge of trust — the visual must make both institutions feel equally proud to share it.',
    impact: 'Presented to the Staffordshire University delegation at the program kick-off — the first visual touchpoint of the partnership relationship.',
    deliverables: ['15-page program booklet', 'Dual-institution branding system', 'Destination visual guide', 'Program itinerary spreads'],
    designDecisions: [
      { icon: '◈', label: 'Neutral Dual-brand', text: 'A visual language neither institution fully "owns" — warm earth tones feel Indonesian without alienating the UK partner delegation.' },
      { icon: '✦', label: 'Destination Storytelling', text: 'Banyuwangi\'s natural beauty became the visual metaphor — organic shapes and rich textures made the program feel like an adventure, not just an exchange.' },
      { icon: '⬡', label: 'Premium Booklet Feel', text: 'Structured like a travel magazine editorial — aspirational, airy layouts that made participants feel selected for something genuinely special.' },
    ],
    link: 'https://canva.link/i1i6dbnby7ho36z',
  },
  {
    id: 'aero-2025',
    title: 'AERO 2025 Presentation',
    fullTitle: 'Presentation for AERO 2025 for Institutional Partners',
    institution: 'Universitas Airlangga',
    year: '2025',
    categories: ['presentation', 'partnership'],
    emoji: '✈',
    bg: GD.coral,
    textColor: '#9F1239',
    folder: 'aero-2025-unair',
    pages: 13,
    skills: ['Presentation Design', 'Branding', 'Communication Design', 'Typography'],
    summary: 'A flagship institutional presentation for AERO 2025 — communicating Universitas Airlangga\'s global partnerships to an international audience of institutional leaders.',
    challenge: 'Translating years of complex partnership data, program milestones, and institutional highlights into a narrative that resonates across cultural contexts.',
    approach: 'Used bold, confident visual language — clean data visualization, commanding typography, and strategic white space — to project institutional authority with genuine warmth.',
    reflection: 'A great institutional presentation doesn\'t just inform — it inspires. The design needed to make partners feel proud to be part of the story.',
    impact: 'Presented live at AERO 2025 to institutional partners from across Asia and Europe — representing Universitas Airlangga on an international stage.',
    deliverables: ['13-slide institutional deck', 'Partnership achievement data slides', 'Program overview spreads', 'Airlangga-branded opening & closing'],
    designDecisions: [
      { icon: '◈', label: 'Confidence First', text: 'Bold full-bleed color fields and oversized typography command the room before a word is spoken — the first impression is always felt before it\'s heard.' },
      { icon: '✦', label: 'Data as Achievement', text: 'Partnership numbers presented as visual milestones — not just facts, but evidence of a growing network worth belonging to.' },
      { icon: '⬡', label: 'Brand Elevation', text: 'Honored Universitas Airlangga\'s institutional identity while modernizing its visual presence — familiar enough to be recognized, refined enough to be respected.' },
    ],
    link: 'https://canva.link/odx5kh4eara7iuh',
  },
  {
    id: 'unair-accommodation',
    title: 'Airlangga Accommodation Booklet',
    fullTitle: 'Accommodation Booklet for Universitas Airlangga International Students',
    institution: 'Universitas Airlangga',
    year: '2024–2025',
    categories: ['guidebook', 'student'],
    emoji: '🏠',
    bg: GD.orange,
    textColor: '#7C2D12',
    folder: 'accommodation-guidebook-unair',
    pages: 28,
    skills: ['Graphic Design', 'Information Architecture', 'Communication Design', 'International Education'],
    summary: 'A dedicated accommodation guide for international students at Universitas Airlangga — covering housing options, neighborhoods, costs, and practical tips for settling into Surabaya.',
    challenge: 'Presenting housing options across wildly different budgets and preferences while making an unfamiliar city feel accessible and welcoming rather than overwhelming.',
    approach: 'Built a map-centric layout with neighborhood profiles, visual housing comparisons, and a conversational tone that humanizes what could easily be a dry administrative document.',
    reflection: 'Finding a home in a foreign city is one of the most emotionally charged moments for international students. Design can ease that anxiety — or amplify it.',
    impact: 'Distributed digitally to all incoming international students at Universitas Airlangga one month before their arrival date.',
    deliverables: ['28-page accommodation guide', 'Neighborhood profile spreads', 'Housing comparison infographics', 'Cost breakdown visual tables'],
    designDecisions: [
      { icon: '◈', label: 'Map-centric Navigation', text: 'Every neighborhood profile is anchored by a spatial reference — giving students a mental map of Surabaya before they land.' },
      { icon: '✦', label: 'Visual Comparison', text: 'Housing options side-by-side as scannable cards — enabling quick decision-making across budget, distance to campus, and available amenities.' },
      { icon: '⬡', label: 'Anxiety Reduction', text: 'Warm orange tones, friendly language, and generous imagery communicate that someone thought of you — turning a bureaucratic guide into a genuine welcome.' },
    ],
    link: 'https://canva.link/l8pkkjs0x8f24sy',
  },
  {
    id: 'unair-intl-students',
    title: 'Airlangga International Students Guide',
    fullTitle: 'International Students Guidebook for Universitas Airlangga',
    institution: 'Universitas Airlangga',
    year: '2024–2025',
    categories: ['guidebook', 'student'],
    emoji: '⬡',
    bg: GD.purple,
    textColor: '#4C1D95',
    folder: 'international-students-guidebook-unair',
    pages: 32,
    skills: ['Graphic Design', 'Editorial Layout', 'Information Architecture', 'Communication Design'],
    summary: 'The comprehensive international student handbook for Universitas Airlangga — covering everything from enrollment to campus life for students arriving from around the world.',
    challenge: 'Synthesizing an entire university\'s international student journey — spanning academic, social, logistical, and emotional dimensions — into one navigable, engaging document.',
    approach: 'Structured as a five-chapter journey narrative: Pre-Arrival → First Week → Campus Life → City Life → Support — matching the student\'s real emotional timeline.',
    reflection: 'This was the most comprehensive communication design project in this collection. It reinforced that great information design is fundamentally about serving real people.',
    impact: 'The primary onboarding resource for international students — and the most downloaded student document on Universitas Airlangga\'s international office portal.',
    deliverables: ['32-page comprehensive handbook', 'Five-chapter navigation system', 'Surabaya city guide section', 'Academic calendar & support directory'],
    designDecisions: [
      { icon: '◈', label: 'Journey Architecture', text: 'Five chapters structured around the student\'s emotional timeline — not the institution\'s org chart. The design follows people, not bureaucracy.' },
      { icon: '✦', label: 'Chapter Color System', text: 'Each chapter has a distinct accent drawn from a unified palette — students navigate by color without needing to read a single chapter title.' },
      { icon: '⬡', label: 'Human Voice', text: 'Copywriting and design worked in tandem — tips framed as personal advice, not institutional rules — making a 32-page handbook feel like a letter from a friend.' },
    ],
    link: 'https://canva.link/xehf9jz9v781sn7',
  },
];

const GD_FILTER_CATEGORIES = [
  { id: 'all',           label: 'All Work',              color: '#1C1C1E'    },
  { id: 'guidebook',     label: 'Guidebooks',             color: GD.blue      },
  { id: 'presentation',  label: 'Presentations',          color: GD.coral     },
  { id: 'partnership',   label: 'Partnership Materials',  color: GD.lavender  },
  { id: 'student',       label: 'Student Communication',  color: GD.mint      },
  { id: 'institutional', label: 'Institutional Branding', color: GD.peach     },
];

const GD_STICKERS = [
  { text: '✦ visual',    bg: GD.yellow,   rotate: '-8deg',  x: '6%',  y: '10%' },
  { text: 'design',      bg: GD.pink,     rotate: '5deg',   x: '56%', y: '8%'  },
  { text: '◎ layout',   bg: GD.mint,     rotate: '-3deg',  x: '26%', y: '56%' },
  { text: 'editorial',   bg: GD.blue,     rotate: '10deg',  x: '70%', y: '42%' },
  { text: '✺ color',    bg: GD.lavender, rotate: '-6deg',  x: '4%',  y: '66%' },
  { text: 'type',        bg: GD.peach,    rotate: '4deg',   x: '46%', y: '70%' },
  { text: '⬡ branding', bg: GD.coral,    rotate: '-12deg', x: '76%', y: '16%' },
  { text: 'story',       bg: GD.purple,   rotate: '7deg',   x: '16%', y: '26%' },
];

const GD_INSPO = [
  { text: 'Swiss typography',       color: GD.yellow   },
  { text: 'Editorial grids',        color: GD.blue     },
  { text: 'Color theory',           color: GD.pink     },
  { text: 'Indonesian culture',     color: GD.lavender },
  { text: 'Travel design',          color: GD.mint     },
  { text: 'Institutional print',    color: GD.peach    },
  { text: 'Infographic systems',    color: GD.coral    },
  { text: 'Human-centered design',  color: GD.purple   },
  { text: 'Educational publishing', color: GD.blue     },
  { text: 'Wayfinding design',      color: GD.yellow   },
  { text: 'Museum publications',    color: GD.pink     },
  { text: 'Global visual culture',  color: GD.mint     },
];

// ── Helpers ───────────────────────────────────────────────────────────────────

function gdIsLight(color) {
  return [GD.yellow, GD.mint, GD.peach, GD.blue].includes(color);
}

function gdCatCount(catId) {
  if (catId === 'all') return GD_PROJECTS.length;
  return GD_PROJECTS.filter(p => p.categories.includes(catId)).length;
}

function gdCatBadge(catId, small) {
  const cat = GD_FILTER_CATEGORIES.find(f => f.id === catId);
  if (!cat) return '';
  const tc = gdIsLight(cat.color) ? '#1C1C1E' : cat.color;
  const pad = small ? '2px 9px' : '3px 11px';
  const fs  = small ? '.58rem' : '.63rem';
  return `<span style="background:${cat.color}22;color:${tc};padding:${pad};border-radius:999px;font-size:${fs};font-weight:700;letter-spacing:.06em;text-transform:uppercase">${cat.label}</span>`;
}

// ── Regular project card (grid) ───────────────────────────────────────────────

function gdBuildProjectCard(p) {
  const badges = p.categories.map(c => gdCatBadge(c, true)).join('');
  return `
    <button onclick="gdShowProject('${p.id}')" style="
      background:#fff;border-radius:18px;overflow:hidden;
      border:1px solid rgba(28,28,30,0.07);
      cursor:pointer;text-align:left;display:block;width:100%;
      box-shadow:0 2px 16px rgba(0,0,0,0.05);
      transition:transform .28s cubic-bezier(0.34,1.56,0.64,1),box-shadow .28s
    " onmouseover="this.style.transform='translateY(-5px)';this.style.boxShadow='0 16px 48px rgba(0,0,0,0.1)'"
       onmouseout="this.style.transform='';this.style.boxShadow='0 2px 16px rgba(0,0,0,0.05)'">
      <div style="height:180px;overflow:hidden;position:relative;background:${p.bg}">
        <img src="./assets/images/graphic-designs/${p.folder}/1.png" alt="${p.title}" style="width:100%;height:100%;object-fit:cover;object-position:top center;display:block" loading="lazy">
        <span style="position:absolute;top:10px;right:10px;background:rgba(0,0,0,0.35);backdrop-filter:blur(4px);color:#fff;font-size:.6rem;font-weight:700;padding:3px 9px;border-radius:999px">${p.year}</span>
        <div style="position:absolute;inset:0;background:linear-gradient(to bottom,transparent 60%,rgba(0,0,0,0.08));pointer-events:none"></div>
      </div>
      <div style="padding:16px 18px 20px">
        <div style="display:flex;flex-wrap:wrap;gap:4px;margin-bottom:8px">${badges}</div>
        <h4 style="font-family:'Space Grotesk',Inter,sans-serif;font-weight:700;font-size:.93rem;color:#1C1C1E;margin-bottom:4px;line-height:1.25">${p.title}</h4>
        <p style="font-size:.72rem;color:rgba(28,28,30,0.42);font-weight:500;margin-bottom:12px">${p.institution}</p>
        <div style="display:inline-flex;align-items:center;gap:5px;font-size:.75rem;font-weight:600;color:#1C1C1E">
          View Case Study <i data-lucide="arrow-right" style="width:11px;height:11px"></i>
        </div>
      </div>
    </button>`;
}

// ── SECTION 1: Hero — split layout with stacked card deck ─────────────────────

function gdBuildHero() {
  const deck = GD_PROJECTS.slice(0, 3);

  const quickFilters = GD_FILTER_CATEGORIES.slice(1).map(cat => {
    const tc = gdIsLight(cat.color) ? '#1C1C1E' : cat.color;
    return `<button onclick="document.getElementById('gd-projects').scrollIntoView({behavior:'smooth'});setTimeout(()=>gdSetFilter('${cat.id}'),350)" style="
      background:${cat.color}22;color:${tc};
      padding:5px 14px;border-radius:999px;
      font-size:.7rem;font-weight:600;letter-spacing:.04em;
      border:1px solid ${cat.color}44;cursor:pointer;white-space:nowrap;
      transition:background .18s
    " onmouseover="this.style.background='${cat.color}40'" onmouseout="this.style.background='${cat.color}22'">${cat.label}</button>`;
  }).join('');

  const statItems = [
    { n: '09', label: 'Projects' },
    { n: '02', label: 'Universities' },
    { n: '05', label: 'Skill Areas' },
  ].map(s => `
    <div style="text-align:center;padding:0 20px">
      <div style="font-family:'Space Grotesk',Inter,sans-serif;font-size:1.6rem;font-weight:700;color:#1C1C1E;letter-spacing:-.04em;line-height:1">${s.n}</div>
      <div style="font-size:.65rem;font-weight:600;letter-spacing:.1em;text-transform:uppercase;color:rgba(28,28,30,0.38);margin-top:4px">${s.label}</div>
    </div>`).join(`<div style="width:1px;height:32px;background:rgba(28,28,30,0.1);align-self:center"></div>`);

  return `
    <div id="gd-hero" style="background:#FAFAF8;padding:clamp(4rem,10vh,7rem) 24px clamp(3rem,6vh,4rem);position:relative;overflow:hidden">

      <!-- Subtle ambient blobs (lower opacity than CroissantsMoon) -->
      <div style="position:absolute;right:-60px;top:-60px;width:280px;height:280px;border-radius:50%;background:${GD.yellow};opacity:.12;filter:blur(80px);pointer-events:none"></div>
      <div style="position:absolute;left:-40px;bottom:-40px;width:220px;height:220px;border-radius:50%;background:${GD.blue};opacity:.1;filter:blur(80px);pointer-events:none"></div>

      <!-- Floating symbols (small, restrained) -->
      <div class="cm-float" style="position:absolute;right:50%;top:12%;font-size:1.2rem;opacity:.16;pointer-events:none;color:${GD.orange}">✦</div>
      <div class="cm-float-2" style="position:absolute;left:52%;bottom:18%;font-size:.9rem;opacity:.14;pointer-events:none;color:${GD.purple}">◈</div>

      <div class="max-w-5xl mx-auto">

        <!-- Top bar -->
        <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:3rem;flex-wrap:wrap;gap:12px">
          <button onclick="goToPage('projects-overview')" style="
            display:inline-flex;align-items:center;gap:7px;
            font-size:.82rem;color:rgba(28,28,30,0.38);
            background:none;border:none;cursor:pointer;padding:0;transition:color .18s
          " onmouseover="this.style.color='rgba(28,28,30,0.75)'" onmouseout="this.style.color='rgba(28,28,30,0.38)'">
            <i data-lucide="arrow-left" style="width:15px;height:15px"></i> Projects
          </button>
          <span style="background:${GD.orange}18;color:${GD.orange};padding:4px 13px;border-radius:999px;font-size:.68rem;font-weight:700;letter-spacing:.08em">Visual Portfolio · 2024–2025</span>
        </div>

        <!-- Split grid: left text / right card deck -->
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:clamp(2.5rem,6vw,5rem);align-items:center;margin-bottom:3rem">

          <!-- LEFT: text stack -->
          <div>
            <div style="display:flex;align-items:center;gap:10px;margin-bottom:1.25rem">
              <span style="display:inline-block;width:24px;height:3px;background:${GD.orange};border-radius:2px"></span>
              <span style="font-size:.65rem;font-weight:700;letter-spacing:.18em;text-transform:uppercase;color:${GD.orange}">Graphic Design</span>
            </div>
            <h1 style="
              font-family:'Space Grotesk',Inter,sans-serif;
              font-size:clamp(2.6rem,5.5vw,5rem);
              font-weight:700;line-height:.95;
              letter-spacing:-.04em;color:#1C1C1E;margin-bottom:1.5rem
            ">Visual<br>Communication<br><span style="color:${GD.orange}">Work.</span></h1>
            <p style="font-size:clamp(.88rem,1.5vw,1rem);color:rgba(28,28,30,0.52);line-height:1.7;max-width:380px;margin-bottom:2rem">
              Guidebooks, presentations, and institutional materials — communication design for international education and global engagement.
            </p>

            <!-- Stats row -->
            <div style="display:flex;align-items:center;gap:0;margin-bottom:2rem;background:#fff;border-radius:14px;padding:16px 20px;border:1px solid rgba(28,28,30,0.07);box-shadow:0 2px 12px rgba(0,0,0,0.04);width:fit-content">
              ${statItems}
            </div>

            <!-- CTAs -->
            <div style="display:flex;flex-wrap:wrap;gap:10px">
              <button onclick="document.getElementById('gd-projects').scrollIntoView({behavior:'smooth'})" style="
                background:#1C1C1E;color:#fff;
                padding:12px 24px;border-radius:999px;
                font-size:.85rem;font-weight:600;
                border:none;cursor:pointer;
                display:inline-flex;align-items:center;gap:7px;transition:opacity .2s
              " onmouseover="this.style.opacity='.8'" onmouseout="this.style.opacity='1'">
                Browse Projects <i data-lucide="arrow-down" style="width:13px;height:13px"></i>
              </button>
              <button onclick="goToPage('contact')" style="
                border:1.5px solid rgba(28,28,30,0.18);color:#1C1C1E;
                background:transparent;padding:12px 20px;border-radius:999px;
                font-size:.85rem;font-weight:600;cursor:pointer;transition:background .2s
              " onmouseover="this.style.background='rgba(28,28,30,0.05)'" onmouseout="this.style.background='transparent'">
                Collaborate
              </button>
            </div>
          </div>

          <!-- RIGHT: stacked card deck -->
          <div style="position:relative;padding:20px 20px 20px 0">
            <!-- Back card 2 (deepest) -->
            <div style="position:absolute;top:28px;right:-18px;left:18px;bottom:-18px;background:${deck[2].bg}55;border-radius:20px;z-index:1"></div>
            <!-- Back card 1 -->
            <div style="position:absolute;top:14px;right:-9px;left:9px;bottom:-9px;background:${deck[1].bg}88;border-radius:20px;z-index:2"></div>
            <!-- Front card (interactive) -->
            <button onclick="gdShowProject('${deck[0].id}')" style="
              position:relative;z-index:3;width:100%;
              background:#fff;border-radius:20px;overflow:hidden;
              border:1px solid rgba(28,28,30,0.07);
              box-shadow:0 8px 40px rgba(0,0,0,0.10);
              cursor:pointer;text-align:left;display:block;
              transition:transform .3s cubic-bezier(0.34,1.56,0.64,1),box-shadow .3s
            " onmouseover="this.style.transform='translateY(-6px) rotate(-0.5deg)';this.style.boxShadow='0 24px 64px rgba(0,0,0,0.14)'"
               onmouseout="this.style.transform='';this.style.boxShadow='0 8px 40px rgba(0,0,0,0.10)'">
              <div style="height:200px;overflow:hidden;position:relative;background:${deck[0].bg}">
                <img src="./assets/images/graphic-designs/${deck[0].folder}/1.png" alt="${deck[0].title}" style="width:100%;height:100%;object-fit:cover;object-position:top center;display:block">
                <span style="position:absolute;top:14px;right:14px;background:rgba(0,0,0,0.32);backdrop-filter:blur(4px);color:#fff;font-size:.62rem;font-weight:700;padding:4px 10px;border-radius:999px">${deck[0].year}</span>
                <div style="position:absolute;inset:0;background:linear-gradient(to bottom,transparent 55%,rgba(0,0,0,0.1));pointer-events:none"></div>
              </div>
              <div style="padding:20px 22px 22px">
                <div style="display:flex;flex-wrap:wrap;gap:5px;margin-bottom:9px">
                  ${deck[0].categories.map(c => gdCatBadge(c, true)).join('')}
                </div>
                <h3 style="font-family:'Space Grotesk',Inter,sans-serif;font-weight:700;font-size:1rem;color:#1C1C1E;margin-bottom:4px;line-height:1.25">${deck[0].title}</h3>
                <p style="font-size:.74rem;color:rgba(28,28,30,0.42);font-weight:500;margin-bottom:12px">${deck[0].institution}</p>
                <div style="display:inline-flex;align-items:center;gap:5px;font-size:.78rem;font-weight:600;color:${deck[0].textColor}">
                  Open Case Study <i data-lucide="arrow-right" style="width:12px;height:12px"></i>
                </div>
              </div>
            </button>
          </div>
        </div>

        <!-- Quick filter chips -->
        <div style="display:flex;flex-wrap:wrap;gap:8px;padding-top:1.5rem;border-top:1px solid rgba(28,28,30,0.07)">
          <span style="font-size:.72rem;font-weight:600;color:rgba(28,28,30,0.32);align-self:center;margin-right:4px">Browse by:</span>
          ${quickFilters}
        </div>
      </div>
    </div>`;
}

// ── SECTION 2: Project Showcase — tab filter + featured row + card grid ────────

function gdBuildProjectShowcase() {
  const filtered = gdCurrentFilter === 'all'
    ? GD_PROJECTS
    : GD_PROJECTS.filter(p => p.categories.includes(gdCurrentFilter));

  const activeCat = GD_FILTER_CATEGORIES.find(c => c.id === gdCurrentFilter);

  // Filter tabs
  const tabs = GD_FILTER_CATEGORIES.map(cat => {
    const isActive = gdCurrentFilter === cat.id;
    const count    = gdCatCount(cat.id);
    const isAll    = cat.id === 'all';
    return `
      <button onclick="gdSetFilter('${cat.id}')" style="
        padding:12px 16px;border:none;background:none;cursor:pointer;
        white-space:nowrap;font-size:.82rem;
        font-weight:${isActive ? '700' : '500'};
        color:${isActive ? '#1C1C1E' : 'rgba(28,28,30,0.42)'};
        border-bottom:2.5px solid ${isActive ? (isAll ? '#1C1C1E' : cat.color) : 'transparent'};
        margin-bottom:-1px;transition:all .2s;display:inline-flex;align-items:center;gap:6px;
      " onmouseover="this.style.color='${isActive ? '#1C1C1E' : 'rgba(28,28,30,0.7)'}';"
         onmouseout="this.style.color='${isActive ? '#1C1C1E' : 'rgba(28,28,30,0.42)'}';">
        ${cat.label}
        <span style="
          background:${isActive ? (isAll ? 'rgba(28,28,30,0.1)' : cat.color + '25') : 'rgba(28,28,30,0.06)'};
          color:${isActive ? (isAll ? '#1C1C1E' : cat.color) : 'rgba(28,28,30,0.4)'};
          padding:1px 7px;border-radius:999px;font-size:.65rem;font-weight:700;
        ">${count}</span>
      </button>`;
  }).join('');

  // Build cards
  let contentHTML = '';
  if (filtered.length === 0) {
    contentHTML = `<div style="padding:60px;text-align:center;color:rgba(28,28,30,0.38);font-size:.9rem">No projects in this category yet.</div>`;
  } else {
    const [featured, ...rest] = filtered;

    // Featured landscape card (first in filtered list)
    const featBadges = featured.categories.map(c => gdCatBadge(c, false)).join('');
    const featSkills = featured.skills.slice(0, 3).map(s =>
      `<span style="background:rgba(28,28,30,0.06);color:rgba(28,28,30,0.55);padding:4px 10px;border-radius:6px;font-size:.65rem;font-weight:600">${s}</span>`
    ).join('');

    contentHTML = `
      <button onclick="gdShowProject('${featured.id}')" style="
        display:grid;grid-template-columns:280px 1fr;
        width:100%;background:#fff;border-radius:20px;overflow:hidden;
        border:1px solid rgba(28,28,30,0.07);
        box-shadow:0 4px 24px rgba(0,0,0,0.06);
        cursor:pointer;text-align:left;
        margin-bottom:20px;
        transition:transform .25s cubic-bezier(0.34,1.56,0.64,1),box-shadow .25s
      " onmouseover="this.style.transform='translateY(-4px)';this.style.boxShadow='0 20px 56px rgba(0,0,0,0.10)'"
         onmouseout="this.style.transform='';this.style.boxShadow='0 4px 24px rgba(0,0,0,0.06)'">
        <!-- Thumbnail left -->
        <div style="position:relative;overflow:hidden;min-height:240px;background:${featured.bg}">
          <img src="./assets/images/graphic-designs/${featured.folder}/1.png" alt="${featured.title}" style="width:100%;height:100%;object-fit:cover;object-position:top center;display:block;position:absolute;inset:0">
          <div style="position:absolute;inset:0;background:linear-gradient(to bottom,rgba(0,0,0,0.12) 0%,transparent 40%,rgba(0,0,0,0.08) 100%);pointer-events:none"></div>
          <span style="position:absolute;top:14px;left:14px;background:rgba(0,0,0,0.38);backdrop-filter:blur(4px);color:#fff;font-size:.62rem;font-weight:700;padding:4px 10px;border-radius:999px">Featured</span>
          <span style="position:absolute;bottom:14px;left:14px;background:rgba(0,0,0,0.32);backdrop-filter:blur(4px);color:#fff;font-size:.62rem;font-weight:700;padding:4px 10px;border-radius:999px">${featured.year}</span>
        </div>
        <!-- Content right -->
        <div style="padding:28px 32px;display:flex;flex-direction:column;justify-content:space-between;gap:14px">
          <div>
            <div style="display:flex;flex-wrap:wrap;gap:6px;margin-bottom:12px">${featBadges}</div>
            <h3 style="font-family:'Space Grotesk',Inter,sans-serif;font-weight:700;font-size:1.25rem;color:#1C1C1E;margin-bottom:6px;line-height:1.2">${featured.fullTitle}</h3>
            <p style="font-size:.76rem;color:rgba(28,28,30,0.42);font-weight:600;margin-bottom:12px">${featured.institution} · ${featured.year}</p>
            <p style="font-size:.86rem;line-height:1.68;color:rgba(28,28,30,0.58)">${featured.summary}</p>
          </div>
          <div style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:10px">
            <div style="display:flex;flex-wrap:wrap;gap:5px">${featSkills}</div>
            <div style="display:inline-flex;align-items:center;gap:6px;font-size:.82rem;font-weight:700;color:#1C1C1E">
              View Case Study <i data-lucide="arrow-right" style="width:14px;height:14px"></i>
            </div>
          </div>
        </div>
      </button>`;

    // Remaining cards in a 3-col grid
    if (rest.length > 0) {
      contentHTML += `<div id="gd-project-grid" style="display:grid;grid-template-columns:repeat(auto-fill,minmax(240px,1fr));gap:16px">
        ${rest.map(gdBuildProjectCard).join('')}
      </div>`;
    }
  }

  const sectionTitle = gdCurrentFilter === 'all'
    ? 'All Design Work'
    : (activeCat?.label || 'Projects');

  return `
    <div id="gd-projects" style="padding:clamp(3.5rem,7vh,5.5rem) 24px;background:#FAFAF8">
      <div class="max-w-5xl mx-auto">

        <!-- Section header -->
        <div style="display:flex;align-items:flex-end;justify-content:space-between;margin-bottom:1.25rem;flex-wrap:wrap;gap:12px">
          <div>
            <div style="display:flex;align-items:center;gap:10px;margin-bottom:.5rem">
              <span style="display:inline-block;width:24px;height:3px;background:${GD.coral};border-radius:2px"></span>
              <span style="font-size:.65rem;font-weight:700;letter-spacing:.18em;text-transform:uppercase;color:${GD.coral}">Design Archive</span>
            </div>
            <h2 style="font-family:'Space Grotesk',Inter,sans-serif;font-size:clamp(1.8rem,3.5vw,2.6rem);font-weight:700;color:#1C1C1E;letter-spacing:-.03em;line-height:1">
              ${sectionTitle}
              <span style="font-size:.48em;font-weight:400;color:rgba(28,28,30,0.32);margin-left:10px;letter-spacing:0">${filtered.length} project${filtered.length !== 1 ? 's' : ''}</span>
            </h2>
          </div>
        </div>

        <!-- Tab filter -->
        <div style="border-bottom:1px solid rgba(28,28,30,0.09);display:flex;gap:0;margin-bottom:2.5rem;overflow-x:auto;scrollbar-width:none;-webkit-overflow-scrolling:touch">
          ${tabs}
        </div>

        <!-- Content -->
        ${contentHTML}
      </div>
    </div>`;
}

// ── SECTION 3: Creative Directions — 4 visual approach cards ─────────────────

function gdBuildCreativeDirections() {
  const directions = [
    {
      color: GD.blue,     emoji: '📖', cat: 'Guidebook Design',
      headline: 'Making information feel like a welcome.',
      body: 'Dense itineraries, cultural context, practical logistics — redesigned as visual journeys that participants want to read.',
    },
    {
      color: GD.coral,    emoji: '✈', cat: 'Presentation Design',
      headline: 'Data with emotional resonance.',
      body: 'Partnership statistics and program highlights told through bold type, clean visuals, and strategic narrative flow.',
    },
    {
      color: GD.lavender, emoji: '◈', cat: 'Partnership Materials',
      headline: 'Design as institutional trust.',
      body: 'Booklets and branding materials that make both sides of a partnership feel equally proud to put their name on.',
    },
    {
      color: GD.mint,     emoji: '🌐', cat: 'Student Communication',
      headline: 'Home away from home.',
      body: 'Guides and handbooks designed from empathy first — helping students navigate the unfamiliar with confidence.',
    },
  ].map(d => {
    const tc = gdIsLight(d.color) ? '#1C1C1E' : d.color;
    return `
      <div style="background:#fff;border-radius:20px;overflow:hidden;border:1px solid rgba(28,28,30,0.07);box-shadow:0 4px 20px rgba(0,0,0,0.05)">
        <div style="height:6px;background:${d.color}"></div>
        <div style="padding:26px 24px">
          <span style="font-size:1.7rem;display:block;margin-bottom:12px">${d.emoji}</span>
          <div style="font-size:.62rem;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:${tc};margin-bottom:9px">${d.cat}</div>
          <h4 style="font-family:'Space Grotesk',Inter,sans-serif;font-weight:700;font-size:1rem;color:#1C1C1E;margin-bottom:10px;line-height:1.3">${d.headline}</h4>
          <p style="font-size:.82rem;line-height:1.65;color:rgba(28,28,30,0.55)">${d.body}</p>
        </div>
      </div>`;
  }).join('');

  return `
    <div style="padding:clamp(4rem,8vh,6rem) 24px;background:${GD.cream}">
      <div class="max-w-5xl mx-auto">
        <div style="display:flex;align-items:center;gap:10px;margin-bottom:.75rem">
          <span style="display:inline-block;width:24px;height:3px;background:${GD.purple};border-radius:2px"></span>
          <span style="font-size:.65rem;font-weight:700;letter-spacing:.18em;text-transform:uppercase;color:${GD.purple}">Creative Directions</span>
        </div>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:2rem;align-items:end;margin-bottom:2.5rem;flex-wrap:wrap">
          <h2 style="font-family:'Space Grotesk',Inter,sans-serif;font-size:clamp(1.8rem,3.5vw,2.6rem);font-weight:700;color:#1C1C1E;letter-spacing:-.03em;line-height:1.05">
            How I design<br>for <em style="font-style:italic;color:${GD.orange}">communication.</em>
          </h2>
          <p style="font-size:.92rem;line-height:1.7;color:rgba(28,28,30,0.52)">
            Every project starts with a real person who needs to understand something. The design serves them — not the institution.
          </p>
        </div>

        <!-- 4 direction cards -->
        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:16px;margin-bottom:2rem">
          ${directions}
        </div>

        <!-- Sticky note accent row -->
        <div style="display:flex;flex-wrap:wrap;gap:12px;justify-content:flex-end">
          <div class="cm-sticky-note" style="transform:rotate(-1.5deg)">"clarity is care" ✦</div>
          <div class="cm-sticky-note" style="transform:rotate(1.2deg);background:${GD.blue}">"design w/ empathy" ◈</div>
          <div class="cm-sticky-note" style="transform:rotate(-0.8deg);background:${GD.mint}">"make it feel human" ◉</div>
        </div>
      </div>
    </div>`;
}

// ── SECTION 4: Moodboard (condensed) ─────────────────────────────────────────

function gdBuildMoodboard() {
  const rotations = ['-2deg','1.2deg','-1.5deg','2deg','0deg','-0.8deg','1deg','-1.2deg','0.5deg','-1.5deg','1.8deg','-0.5deg'];
  const sizes = ['.77rem','.9rem','1.05rem'];
  const pads  = ['5px 12px','6px 16px','8px 20px'];

  const tags = GD_INSPO.map((item, i) => {
    const sz  = i % 3;
    const rot = rotations[i % rotations.length];
    const tc  = gdIsLight(item.color) ? '#1C1C1E' : '#2A1A4A';
    return `
      <span style="
        display:inline-block;background:${item.color}28;color:${tc};
        padding:${pads[sz]};border-radius:999px;font-size:${sizes[sz]};font-weight:600;
        border:1.5px solid ${item.color}55;transform:rotate(${rot});
        transition:transform .22s cubic-bezier(0.34,1.56,0.64,1),box-shadow .22s;
        cursor:default;margin:5px
      " onmouseover="this.style.transform='scale(1.08) rotate(0deg)';this.style.boxShadow='0 6px 20px rgba(0,0,0,0.09)'"
         onmouseout="this.style.transform='rotate(${rot})';this.style.boxShadow='none'">${item.text}</span>`;
  }).join('');

  return `
    <div style="padding:clamp(3.5rem,7vh,5.5rem) 24px;background:#FAFAF8">
      <div class="max-w-5xl mx-auto">
        <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:1.5rem;flex-wrap:wrap;gap:12px">
          <div style="display:flex;align-items:center;gap:10px">
            <span style="display:inline-block;width:24px;height:3px;background:${GD.orange};border-radius:2px"></span>
            <span style="font-size:.65rem;font-weight:700;letter-spacing:.18em;text-transform:uppercase;color:${GD.orange}">Influences & Inspirations</span>
          </div>
          <p style="font-size:.8rem;color:rgba(28,28,30,0.38);max-width:300px;line-height:1.5">Design traditions and ideas that shape how I see and communicate visually.</p>
        </div>
        <div style="display:flex;flex-wrap:wrap;align-items:center;padding:24px;background:#fff;border-radius:20px;border:1px solid rgba(28,28,30,0.07);box-shadow:0 4px 20px rgba(0,0,0,0.04)">
          ${tags}
        </div>
      </div>
    </div>`;
}

// ── SECTION 5: Sticker playground ─────────────────────────────────────────────

function gdBuildFunSection() {
  const stickers = GD_STICKERS.map(s => {
    const tc = gdIsLight(s.bg) ? '#1C1C1E' : (s.bg === GD.purple ? '#fff' : '#1C1C1E');
    return `
      <div class="cm-sticker" style="
        left:${s.x};top:${s.y};background:${s.bg};color:${tc};
        padding:10px 18px;border-radius:8px;
        font-family:'Caveat',cursive;font-size:1.15rem;font-weight:600;
        transform:rotate(${s.rotate});
        box-shadow:2px 4px 14px rgba(0,0,0,0.12),0 1px 0 rgba(255,255,255,0.28) inset;
        z-index:10;white-space:nowrap;position:absolute
      ">${s.text}</div>`;
  }).join('');

  const reactions = [['🎨','Inspired'],['✨','Creative'],['💛','Warm'],['🌈','Colorful']]
    .map(([emoji, label]) => `
      <button onclick="gdReact(this,'${label}')" style="
        background:#fff;border:1.5px solid rgba(28,28,30,0.1);
        padding:7px 14px;border-radius:999px;font-size:.82rem;cursor:pointer;
        display:inline-flex;align-items:center;gap:5px;transition:background .18s
      " onmouseover="this.style.background='#f5f5f5'" onmouseout="this.style.background='#fff'">
        ${emoji} <span style="font-size:.72rem;font-weight:500;color:rgba(28,28,30,0.55)">${label}</span>
      </button>`).join('');

  return `
    <div style="padding:clamp(3.5rem,7vh,5.5rem) 24px;background:linear-gradient(135deg,${GD.yellow}1E,${GD.peach}18)">
      <div class="max-w-5xl mx-auto">
        <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:1.5rem;flex-wrap:wrap;gap:12px">
          <div>
            <div style="display:flex;align-items:center;gap:10px;margin-bottom:.4rem">
              <span style="display:inline-block;width:24px;height:3px;background:${GD.orange};border-radius:2px"></span>
              <span style="font-size:.65rem;font-weight:700;letter-spacing:.18em;text-transform:uppercase;color:${GD.orange}">Design Playground</span>
            </div>
            <h2 style="font-family:'Space Grotesk',Inter,sans-serif;font-size:clamp(1.6rem,3vw,2.2rem);font-weight:700;color:#1C1C1E;letter-spacing:-.03em">Drag the Stickers ✦</h2>
          </div>
          <p style="font-size:.82rem;color:rgba(28,28,30,0.45);max-width:260px;line-height:1.55">A creative space needs a corkboard. This one is interactive.</p>
        </div>
        <div id="gd-sticker-board" style="
          position:relative;height:380px;
          background:rgba(255,255,255,0.55);
          border:1.5px dashed rgba(28,28,30,0.11);
          border-radius:20px;overflow:hidden;backdrop-filter:blur(8px)
        ">
          <div style="
            position:absolute;inset:0;pointer-events:none;
            background-image:radial-gradient(circle,rgba(28,28,30,0.05) 1px,transparent 1px);
            background-size:26px 26px
          "></div>
          ${stickers}
          <div style="position:absolute;bottom:16px;right:18px;font-family:'Caveat',cursive;font-size:.9rem;color:rgba(28,28,30,0.2);pointer-events:none">← drag to rearrange</div>
        </div>
        <div style="display:flex;gap:10px;margin-top:18px;flex-wrap:wrap;align-items:center">
          <span style="font-size:.78rem;font-weight:600;color:rgba(28,28,30,0.36)">How does this work make you feel?</span>
          ${reactions}
          <span id="gd-react-msg" style="font-family:'Caveat',cursive;font-size:1.1rem;color:${GD.orange};display:none"></span>
        </div>
      </div>
    </div>`;
}

// ── SECTION 6: Contact CTA ────────────────────────────────────────────────────

function gdBuildContact() {
  return `
    <div style="padding:clamp(4rem,9vh,7rem) 24px;background:#1C1C1E;position:relative;overflow:hidden">
      <div style="position:absolute;top:-80px;right:-80px;width:300px;height:300px;border-radius:50%;background:${GD.orange};opacity:.08;filter:blur(60px);pointer-events:none"></div>
      <div style="position:absolute;bottom:-60px;left:-60px;width:240px;height:240px;border-radius:50%;background:${GD.blue};opacity:.07;filter:blur(60px);pointer-events:none"></div>
      <div class="max-w-4xl mx-auto text-center" style="position:relative;z-index:1">
        <div style="display:flex;align-items:center;justify-content:center;gap:10px;margin-bottom:1.5rem">
          <span style="display:inline-block;width:24px;height:2px;background:rgba(255,255,255,0.2);border-radius:2px"></span>
          <span style="font-size:.65rem;font-weight:700;letter-spacing:.18em;text-transform:uppercase;color:rgba(255,255,255,0.35)">Let's Work Together</span>
          <span style="display:inline-block;width:24px;height:2px;background:rgba(255,255,255,0.2);border-radius:2px"></span>
        </div>
        <h2 style="
          font-family:'Space Grotesk',Inter,sans-serif;
          font-size:clamp(2rem,4.5vw,3.5rem);
          font-weight:700;color:#fff;
          margin-bottom:1rem;letter-spacing:-.04em;line-height:1.05
        ">Need visual communication<br><span style="color:${GD.orange}">that actually connects?</span></h2>
        <p style="font-size:.95rem;line-height:1.7;color:rgba(255,255,255,0.45);max-width:400px;margin:0 auto 2.5rem">
          Guidebooks, presentations, or institutional branding — let's design communication experiences that feel human.
        </p>
        <div style="display:flex;flex-wrap:wrap;gap:14px;justify-content:center;align-items:center">
          <button onclick="goToPage('contact')" style="
            background:${GD.orange};color:#fff;
            padding:15px 32px;border-radius:999px;
            font-family:'Space Grotesk',Inter,sans-serif;
            font-size:.9rem;font-weight:700;
            border:none;cursor:pointer;
            display:inline-flex;align-items:center;gap:9px;
            transition:opacity .2s;box-shadow:0 4px 24px rgba(244,135,75,0.4)
          " onmouseover="this.style.opacity='.85'" onmouseout="this.style.opacity='1'">
            Start a Conversation <i data-lucide="arrow-right" style="width:15px;height:15px"></i>
          </button>
          <a href="mailto:zefanya.kharisma@gmail.com" style="
            border:1.5px solid rgba(255,255,255,0.18);
            color:rgba(255,255,255,0.7);background:transparent;
            padding:15px 24px;border-radius:999px;
            font-size:.85rem;font-weight:600;
            cursor:pointer;text-decoration:none;
            display:inline-flex;align-items:center;gap:7px;
            transition:border-color .2s,color .2s
          " onmouseover="this.style.borderColor='rgba(255,255,255,0.4)';this.style.color='#fff'"
             onmouseout="this.style.borderColor='rgba(255,255,255,0.18)';this.style.color='rgba(255,255,255,0.7)'">
            <i data-lucide="mail" style="width:14px;height:14px"></i>
            zefanya.kharisma@gmail.com
          </a>
        </div>
        <div style="margin-top:40px">
          <button onclick="goToPage('projects-overview')" style="
            display:inline-flex;align-items:center;gap:6px;
            background:none;border:none;cursor:pointer;
            font-size:.78rem;color:rgba(255,255,255,0.25);
            padding:8px 12px;border-radius:8px;transition:color .18s
          " onmouseover="this.style.color='rgba(255,255,255,0.55)'" onmouseout="this.style.color='rgba(255,255,255,0.25)'">
            <i data-lucide="arrow-left" style="width:13px;height:13px"></i> Back to Projects
          </button>
        </div>
      </div>
    </div>`;
}

// ── Lightbox ──────────────────────────────────────────────────────────────────

let gdLightboxProject = null;
let gdLightboxIndex   = 0;

function gdLightboxContent() {
  const p = gdLightboxProject;
  const n = gdLightboxIndex + 1;
  const total = p.pages;
  const thumbs = Array.from({ length: total }, (_, i) => `
    <div onclick="event.stopPropagation();gdLightboxJump(${i})" style="
      flex:0 0 auto;width:52px;height:34px;border-radius:5px;overflow:hidden;cursor:pointer;
      border:2px solid ${i === gdLightboxIndex ? '#fff' : 'transparent'};
      opacity:${i === gdLightboxIndex ? '1' : '0.45'};transition:all .15s
    " onmouseover="this.style.opacity='0.85'" onmouseout="this.style.opacity='${i === gdLightboxIndex ? '1' : '0.45'}'">
      <img src="./assets/images/graphic-designs/${p.folder}/${i + 1}.png" style="width:100%;height:100%;object-fit:cover;object-position:top" loading="lazy">
    </div>`).join('');

  return `
    <div onclick="gdCloseLightbox()" style="position:absolute;inset:0;cursor:zoom-out"></div>

    <!-- Top bar -->
    <div style="position:absolute;top:0;left:0;right:0;padding:14px 20px;display:flex;align-items:center;justify-content:space-between;z-index:3;background:linear-gradient(to bottom,rgba(0,0,0,0.65),transparent);pointer-events:none">
      <div style="pointer-events:auto">
        <div style="color:rgba(255,255,255,0.85);font-size:.82rem;font-weight:600;font-family:'Space Grotesk',Inter,sans-serif">${p.title}</div>
        <div style="color:rgba(255,255,255,0.4);font-size:.68rem;margin-top:2px">${p.institution}</div>
      </div>
      <div style="display:flex;align-items:center;gap:14px;pointer-events:auto">
        <span style="color:rgba(255,255,255,0.45);font-size:.75rem;font-weight:600">Page ${n} of ${total}</span>
        <button onclick="gdCloseLightbox()" style="
          background:rgba(255,255,255,0.12);border:1px solid rgba(255,255,255,0.18);
          cursor:pointer;color:#fff;width:34px;height:34px;border-radius:50%;
          display:flex;align-items:center;justify-content:center;
          font-size:1.1rem;line-height:1;transition:background .15s
        " onmouseover="this.style.background='rgba(255,255,255,0.24)'" onmouseout="this.style.background='rgba(255,255,255,0.12)'">×</button>
      </div>
    </div>

    <!-- Main image -->
    <div style="position:relative;z-index:2;display:flex;align-items:center;justify-content:center;width:100%;padding:56px 80px 80px">
      <img id="gd-lb-img" src="./assets/images/graphic-designs/${p.folder}/${n}.png"
           alt="${p.title} — page ${n}"
           style="max-width:100%;max-height:75vh;object-fit:contain;border-radius:10px;box-shadow:0 32px 100px rgba(0,0,0,0.6);display:block">
    </div>

    <!-- Prev arrow -->
    ${gdLightboxIndex > 0 ? `
    <button onclick="event.stopPropagation();gdLightboxNav(-1)" style="
      position:absolute;left:16px;top:50%;transform:translateY(-50%);z-index:3;
      background:rgba(255,255,255,0.1);border:1px solid rgba(255,255,255,0.18);
      cursor:pointer;color:#fff;width:46px;height:46px;border-radius:50%;
      display:flex;align-items:center;justify-content:center;font-size:1.4rem;
      transition:background .15s;line-height:1
    " onmouseover="this.style.background='rgba(255,255,255,0.22)'" onmouseout="this.style.background='rgba(255,255,255,0.1)'">‹</button>` : ''}

    <!-- Next arrow -->
    ${gdLightboxIndex < total - 1 ? `
    <button onclick="event.stopPropagation();gdLightboxNav(1)" style="
      position:absolute;right:16px;top:50%;transform:translateY(-50%);z-index:3;
      background:rgba(255,255,255,0.1);border:1px solid rgba(255,255,255,0.18);
      cursor:pointer;color:#fff;width:46px;height:46px;border-radius:50%;
      display:flex;align-items:center;justify-content:center;font-size:1.4rem;
      transition:background .15s;line-height:1
    " onmouseover="this.style.background='rgba(255,255,255,0.22)'" onmouseout="this.style.background='rgba(255,255,255,0.1)'">›</button>` : ''}

    <!-- Thumbnail strip -->
    <div onclick="event.stopPropagation()" style="
      position:absolute;bottom:0;left:0;right:0;z-index:3;
      padding:14px 20px;
      background:linear-gradient(to top,rgba(0,0,0,0.72),transparent);
      display:flex;gap:7px;overflow-x:auto;scrollbar-width:none;
      -webkit-overflow-scrolling:touch;align-items:center;justify-content:center
    ">${thumbs}</div>`;
}

function gdOpenLightbox(projectId, pageIndex) {
  gdLightboxProject = GD_PROJECTS.find(p => p.id === projectId);
  gdLightboxIndex   = pageIndex;
  const existing = document.getElementById('gd-lightbox');
  if (existing) existing.remove();
  const lb = document.createElement('div');
  lb.id = 'gd-lightbox';
  lb.style.cssText = 'position:fixed;inset:0;z-index:9999;background:rgba(0,0,0,0.94);display:flex;align-items:center;justify-content:center;backdrop-filter:blur(10px)';
  lb.innerHTML = gdLightboxContent();
  document.body.appendChild(lb);
  document.addEventListener('keydown', gdLightboxKeyHandler);
}

function gdLightboxNav(dir) {
  if (!gdLightboxProject) return;
  const newIndex = Math.max(0, Math.min(gdLightboxProject.pages - 1, gdLightboxIndex + dir));
  if (newIndex === gdLightboxIndex) return;
  gdLightboxIndex = newIndex;
  const lb = document.getElementById('gd-lightbox');
  if (lb) lb.innerHTML = gdLightboxContent();
}

function gdLightboxJump(index) {
  if (!gdLightboxProject) return;
  gdLightboxIndex = index;
  const lb = document.getElementById('gd-lightbox');
  if (lb) lb.innerHTML = gdLightboxContent();
}

function gdCloseLightbox() {
  const lb = document.getElementById('gd-lightbox');
  if (lb) lb.remove();
  document.removeEventListener('keydown', gdLightboxKeyHandler);
}

function gdLightboxKeyHandler(e) {
  if (e.key === 'ArrowLeft')  gdLightboxNav(-1);
  if (e.key === 'ArrowRight') gdLightboxNav(1);
  if (e.key === 'Escape')     gdCloseLightbox();
}

// ── Image Preview Gallery (clickable → lightbox) ──────────────────────────────

function gdBuildImageGallery(project) {
  const previewCount = Math.min(project.pages, 12);
  const imgs = Array.from({ length: previewCount }, (_, i) => i + 1).map(n => `
    <div onclick="gdOpenLightbox('${project.id}', ${n - 1})" style="
      flex:0 0 auto;width:200px;border-radius:12px;overflow:hidden;
      box-shadow:0 4px 20px rgba(0,0,0,0.10);background:${project.bg};
      cursor:zoom-in;position:relative;
      transition:transform .22s cubic-bezier(0.34,1.56,0.64,1),box-shadow .22s
    " onmouseover="this.style.transform='translateY(-5px) scale(1.02)';this.style.boxShadow='0 16px 40px rgba(0,0,0,0.18)'"
       onmouseout="this.style.transform='';this.style.boxShadow='0 4px 20px rgba(0,0,0,0.10)'">
      <img src="./assets/images/graphic-designs/${project.folder}/${n}.png"
           alt="${project.title} — page ${n}"
           style="width:100%;display:block;object-fit:cover;aspect-ratio:3/2;object-position:top center"
           loading="lazy">
      <div style="position:absolute;inset:0;background:rgba(0,0,0,0);transition:background .2s;display:flex;align-items:center;justify-content:center;pointer-events:none" class="gd-img-overlay">
        <span style="color:#fff;font-size:.65rem;font-weight:700;letter-spacing:.1em;opacity:0;transition:opacity .2s">Click to expand</span>
      </div>
      <span style="position:absolute;bottom:8px;right:10px;background:rgba(0,0,0,0.4);color:rgba(255,255,255,0.7);font-size:.58rem;font-weight:600;padding:2px 7px;border-radius:999px">${n}</span>
    </div>`).join('');

  const moreLabel = project.pages > 12
    ? `<div onclick="gdOpenLightbox('${project.id}', 12)" style="
        flex:0 0 auto;width:140px;border-radius:12px;
        background:${project.bg}22;border:2px dashed ${project.bg}55;
        display:flex;flex-direction:column;align-items:center;justify-content:center;
        aspect-ratio:3/2;gap:8px;cursor:zoom-in;transition:background .18s
      " onmouseover="this.style.background='${project.bg}38'" onmouseout="this.style.background='${project.bg}22'">
        <span style="font-size:1.4rem">${project.emoji}</span>
        <span style="font-size:.7rem;font-weight:700;color:${project.textColor};text-align:center;line-height:1.4">+${project.pages - 12} more pages</span>
      </div>`
    : '';

  return `
    <div style="margin-bottom:3rem">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:1.25rem;flex-wrap:wrap;gap:8px">
        <div style="display:flex;align-items:center;gap:10px">
          <span style="display:inline-block;width:22px;height:3px;background:${project.bg};border-radius:2px"></span>
          <span style="font-size:.65rem;font-weight:700;letter-spacing:.18em;text-transform:uppercase;color:${project.textColor}">Design Preview</span>
        </div>
        <span style="font-size:.72rem;color:rgba(28,28,30,0.38);font-weight:500">${project.pages} pages · click to expand</span>
      </div>
      <div style="display:flex;gap:12px;overflow-x:auto;padding-bottom:14px;scrollbar-width:thin;scrollbar-color:${project.bg} transparent;-webkit-overflow-scrolling:touch">
        ${imgs}${moreLabel}
      </div>
    </div>`;
}

// ── Project Detail View ───────────────────────────────────────────────────────

function gdBuildProjectDetail(project) {
  const related = GD_PROJECTS
    .filter(p => p.id !== project.id && p.categories.some(c => project.categories.includes(c)))
    .slice(0, 3);

  const skillTags = project.skills.map(s => `
    <span style="
      background:${project.bg}28;color:${project.textColor};
      padding:5px 14px;border-radius:999px;
      font-size:.72rem;font-weight:600;border:1px solid ${project.bg}55
    ">${s}</span>`).join('');

  const relatedCards = related.map(p => `
    <button onclick="gdShowProject('${p.id}')" style="
      background:#fff;border-radius:16px;overflow:hidden;
      border:1px solid rgba(28,28,30,0.07);cursor:pointer;text-align:left;
      box-shadow:0 2px 16px rgba(0,0,0,0.05);
      transition:transform .28s cubic-bezier(0.34,1.56,0.64,1),box-shadow .28s;
      display:block;width:100%
    " onmouseover="this.style.transform='translateY(-5px)';this.style.boxShadow='0 16px 44px rgba(0,0,0,0.1)'"
       onmouseout="this.style.transform='';this.style.boxShadow='0 2px 16px rgba(0,0,0,0.05)'">
      <div style="height:100px;overflow:hidden;position:relative;background:${p.bg}">
        <img src="./assets/images/graphic-designs/${p.folder}/1.png" alt="${p.title}" style="width:100%;height:100%;object-fit:cover;object-position:top center;display:block" loading="lazy">
        <div style="position:absolute;inset:0;background:linear-gradient(to bottom,transparent 50%,rgba(0,0,0,0.08));pointer-events:none"></div>
      </div>
      <div style="padding:12px 14px 14px">
        <div style="font-size:.6rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:rgba(28,28,30,0.35);margin-bottom:4px">${p.institution}</div>
        <h4 style="font-family:'Space Grotesk',Inter,sans-serif;font-weight:700;font-size:.85rem;color:#1C1C1E;line-height:1.3">${p.title}</h4>
      </div>
    </button>`).join('');

  return `
    <div style="background:#FAFAF8;min-height:100vh">

      <!-- Project header -->
      <div style="background:${project.bg};padding:clamp(4rem,10vh,7rem) 24px clamp(3rem,6vh,5rem);position:relative;overflow:hidden">
        <div style="position:absolute;inset:0;overflow:hidden;pointer-events:none">
          <img src="./assets/images/graphic-designs/${project.folder}/1.png" alt="" style="width:100%;height:100%;object-fit:cover;object-position:top center;opacity:0.13;display:block">
          <div style="position:absolute;inset:0;background:${project.bg};opacity:0.82"></div>
        </div>
        <div style="position:absolute;top:-80px;right:-80px;width:360px;height:360px;border-radius:50%;background:rgba(255,255,255,0.12);pointer-events:none"></div>
        <div style="position:absolute;bottom:-60px;left:-40px;width:280px;height:280px;border-radius:50%;background:rgba(0,0,0,0.05);pointer-events:none"></div>
        <div class="max-w-5xl mx-auto" style="position:relative;z-index:1">
          <button onclick="gdShowGallery()" style="
            display:inline-flex;align-items:center;gap:8px;margin-bottom:2.5rem;
            font-size:.85rem;color:#1C1C1E;opacity:.6;
            background:rgba(255,255,255,0.28);border:none;cursor:pointer;
            padding:8px 18px;border-radius:999px;transition:opacity .2s
          " onmouseover="this.style.opacity='1'" onmouseout="this.style.opacity='.6'">
            <i data-lucide="arrow-left" style="width:14px;height:14px"></i> Back to Gallery
          </button>
          <div style="display:flex;align-items:center;gap:10px;margin-bottom:1.25rem">
            <span style="display:inline-block;width:22px;height:3px;background:rgba(28,28,30,0.3);border-radius:2px"></span>
            <span style="font-size:.65rem;font-weight:700;letter-spacing:.18em;text-transform:uppercase;color:rgba(28,28,30,0.48)">${project.institution}</span>
          </div>
          <h1 style="
            font-family:'Space Grotesk',Inter,sans-serif;
            font-size:clamp(1.9rem,4vw,3.5rem);
            font-weight:700;line-height:1.05;
            letter-spacing:-.04em;color:#1C1C1E;margin-bottom:1.25rem
          ">${project.fullTitle}</h1>
          <div style="display:flex;flex-wrap:wrap;gap:9px;margin-bottom:1.5rem">
            <span style="background:rgba(255,255,255,0.28);color:#1C1C1E;padding:5px 13px;border-radius:999px;font-size:.72rem;font-weight:600">${project.year}</span>
            ${skillTags}
          </div>
          <p style="font-size:1rem;line-height:1.68;color:rgba(28,28,30,0.68);max-width:560px;font-weight:500">${project.summary}</p>
        </div>
      </div>

      <!-- Content -->
      <div class="max-w-5xl mx-auto" style="padding:clamp(3rem,6vh,5rem) 24px">

        <!-- Two-column: challenge + approach -->
        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:2rem;margin-bottom:2.5rem">
          <div style="background:#fff;border-radius:18px;padding:28px;border:1px solid rgba(28,28,30,0.07);box-shadow:0 4px 20px rgba(0,0,0,0.04)">
            <div style="width:38px;height:38px;border-radius:10px;background:${project.bg}33;display:flex;align-items:center;justify-content:center;margin-bottom:16px;font-size:1.1rem">◈</div>
            <h3 style="font-family:'Space Grotesk',Inter,sans-serif;font-weight:700;font-size:1.05rem;color:#1C1C1E;margin-bottom:10px">The Communication Challenge</h3>
            <p style="font-size:.86rem;line-height:1.7;color:rgba(28,28,30,0.6)">${project.challenge}</p>
          </div>
          <div style="background:#fff;border-radius:18px;padding:28px;border:1px solid rgba(28,28,30,0.07);box-shadow:0 4px 20px rgba(0,0,0,0.04)">
            <div style="width:38px;height:38px;border-radius:10px;background:${project.bg}33;display:flex;align-items:center;justify-content:center;margin-bottom:16px;font-size:1.1rem">✦</div>
            <h3 style="font-family:'Space Grotesk',Inter,sans-serif;font-weight:700;font-size:1.05rem;color:#1C1C1E;margin-bottom:10px">The Design Approach</h3>
            <p style="font-size:.86rem;line-height:1.7;color:rgba(28,28,30,0.6)">${project.approach}</p>
          </div>
        </div>

        <!-- Image Preview Gallery -->
        ${gdBuildImageGallery(project)}

        <!-- View on Canva -->
        <div style="
          background:${project.bg}18;border:2px dashed ${project.bg}66;
          border-radius:22px;padding:clamp(2.5rem,5vh,4rem) 24px;
          text-align:center;margin-bottom:2.5rem
        ">
          <div style="font-size:3rem;margin-bottom:16px">${project.emoji}</div>
          <h3 style="font-family:'Space Grotesk',Inter,sans-serif;font-weight:700;font-size:1.3rem;color:#1C1C1E;margin-bottom:10px">View the Full Design</h3>
          <p style="font-size:.86rem;color:rgba(28,28,30,0.48);margin-bottom:22px;max-width:340px;margin-left:auto;margin-right:auto;line-height:1.65">
            The complete design is available on Canva — explore all spreads, layouts, and visual systems.
          </p>
          <a href="${project.link}" target="_blank" rel="noopener noreferrer" style="
            display:inline-flex;align-items:center;gap:9px;
            background:#1C1C1E;color:#fff;
            padding:13px 26px;border-radius:999px;
            font-family:'Space Grotesk',Inter,sans-serif;
            font-size:.87rem;font-weight:700;text-decoration:none;
            transition:opacity .2s;box-shadow:0 4px 20px rgba(28,28,30,0.18)
          " onmouseover="this.style.opacity='.8'" onmouseout="this.style.opacity='1'">
            Open on Canva <i data-lucide="external-link" style="width:14px;height:14px"></i>
          </a>
        </div>

        <!-- Reflection pullquote -->
        <div style="
          background:${project.bg};border-radius:22px;
          padding:clamp(2.5rem,5vh,4rem);margin-bottom:2.5rem;
          position:relative;overflow:hidden
        ">
          <div style="position:absolute;right:-30px;top:-30px;width:180px;height:180px;border-radius:50%;background:rgba(255,255,255,0.12);pointer-events:none"></div>
          <div style="display:flex;align-items:center;gap:10px;margin-bottom:1.25rem;position:relative;z-index:1">
            <span style="display:inline-block;width:18px;height:3px;background:rgba(28,28,30,0.3);border-radius:2px"></span>
            <span style="font-size:.62rem;font-weight:700;letter-spacing:.18em;text-transform:uppercase;color:rgba(28,28,30,0.45)">Reflection</span>
          </div>
          <p style="
            font-family:'Caveat',cursive;
            font-size:clamp(1.2rem,2.3vw,1.6rem);
            line-height:1.5;color:#1C1C1E;font-weight:500;position:relative;z-index:1
          ">"${project.reflection}"</p>
        </div>

        <!-- Related -->
        ${related.length > 0 ? `
        <div>
          <div style="display:flex;align-items:center;gap:10px;margin-bottom:1.25rem">
            <span style="display:inline-block;width:22px;height:3px;background:${GD.coral};border-radius:2px"></span>
            <span style="font-size:.65rem;font-weight:700;letter-spacing:.18em;text-transform:uppercase;color:${GD.coral}">Related Projects</span>
          </div>
          <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));gap:14px">${relatedCards}</div>
        </div>` : ''}

        <div style="display:flex;justify-content:center;margin-top:3rem">
          <button onclick="gdShowGallery()" style="
            display:inline-flex;align-items:center;gap:6px;
            border:1.5px solid rgba(28,28,30,0.12);background:none;cursor:pointer;
            font-size:.83rem;font-weight:600;color:rgba(28,28,30,0.42);
            padding:10px 20px;border-radius:999px;transition:all .2s
          " onmouseover="this.style.background='rgba(28,28,30,0.05)';this.style.color='rgba(28,28,30,0.75)'"
             onmouseout="this.style.background='';this.style.color='rgba(28,28,30,0.42)'">
            <i data-lucide="grid-2x2" style="width:13px;height:13px"></i> Back to Gallery
          </button>
        </div>
      </div>
    </div>`;
}

// ── State Management ──────────────────────────────────────────────────────────

function gdSetFilter(filterId) {
  gdCurrentFilter = filterId;
  const section = document.getElementById('gd-projects');
  if (section) {
    const tmp = document.createElement('div');
    tmp.innerHTML = gdBuildProjectShowcase();
    section.replaceWith(tmp.firstElementChild);
    if (window.lucide) lucide.createIcons();
  }
}

function gdShowProject(projectId) {
  const project = GD_PROJECTS.find(p => p.id === projectId);
  if (!project) return;
  gdCurrentProject = project;
  gdCurrentView    = 'project';
  const el = document.getElementById('page-designs');
  if (!el) return;
  el.innerHTML = gdBuildProjectDetail(project);
  if (window.lucide) lucide.createIcons();
  const app = document.getElementById('app');
  if (app) app.scrollTop = 0;
}

function gdShowGallery() {
  gdCurrentView    = 'gallery';
  gdCurrentProject = null;
  const el = document.getElementById('page-designs');
  if (!el) return;
  gdRenderGallery(el);
  const app = document.getElementById('app');
  if (app) app.scrollTop = 0;
}

function gdRenderGallery(el) {
  el.innerHTML = [
    gdBuildHero(),
    gdBuildProjectShowcase(),
    gdBuildCreativeDirections(),
    gdBuildMoodboard(),
    gdBuildFunSection(),
    gdBuildContact(),
  ].join('');

  if (window.lucide) lucide.createIcons();

  setTimeout(() => {
    gdInitDraggableStickers();
  }, 80);
}

function gdReact(btn, label) {
  const msgs = {
    Inspired: 'That\'s what design is for! 🎨',
    Creative: 'Let\'s make something together. ✨',
    Warm:     'Communication through warmth. 💛',
    Colorful: 'Color is information, too. 🌈',
  };
  const el = document.getElementById('gd-react-msg');
  if (!el) return;
  el.textContent = msgs[label] || '✦';
  el.style.display = 'inline';
  setTimeout(() => { el.style.display = 'none'; }, 3200);
}

window.gdSetFilter   = gdSetFilter;
window.gdShowProject = gdShowProject;
window.gdShowGallery = gdShowGallery;
window.gdReact       = gdReact;

// ── Interactive JS ────────────────────────────────────────────────────────────

function gdInitDraggableStickers() {
  const board = document.getElementById('gd-sticker-board');
  if (!board) return;
  board.querySelectorAll('.cm-sticker').forEach(sticker => {
    let dragging = false, sx, sy, sl, st;
    const onStart = (cx, cy) => {
      dragging = true; sx = cx; sy = cy;
      const cs = window.getComputedStyle(sticker);
      sl = parseFloat(cs.left) || 0;
      st = parseFloat(cs.top)  || 0;
      sticker.style.zIndex = '100';
      sticker.style.transition = 'none';
    };
    const onMove = (cx, cy) => {
      if (!dragging) return;
      sticker.style.left = (sl + cx - sx) + 'px';
      sticker.style.top  = (st + cy - sy) + 'px';
    };
    const onEnd = () => {
      dragging = false;
      sticker.style.zIndex = '10';
      sticker.style.transition = '';
    };
    sticker.addEventListener('mousedown',  e => { onStart(e.clientX, e.clientY); e.preventDefault(); });
    document.addEventListener('mousemove', e => onMove(e.clientX, e.clientY));
    document.addEventListener('mouseup',   onEnd);
    sticker.addEventListener('touchstart', e => { const t = e.touches[0]; onStart(t.clientX, t.clientY); e.preventDefault(); }, { passive: false });
    document.addEventListener('touchmove', e => { const t = e.touches[0]; onMove(t.clientX, t.clientY); });
    document.addEventListener('touchend',  onEnd);
  });
}

// ── Page Init ─────────────────────────────────────────────────────────────────

function gdInitPage() {
  gdInjectFonts();
  const el = document.getElementById('page-designs');
  if (!el) return;
  el.style.background = '#FAFAF8';
  gdRenderGallery(el);

  const orig = window.goToPage;
  if (orig) {
    window.goToPage = function(pageName, updateHash) {
      if (pageName === 'designs' && gdCurrentView === 'project') {
        gdCurrentView    = 'gallery';
        gdCurrentProject = null;
      }
      orig(pageName, updateHash);
      if (pageName === 'designs') {
        gdRenderGallery(document.getElementById('page-designs'));
        const app = document.getElementById('app');
        if (app) app.scrollTop = 0;
      }
    };
  }
}

document.addEventListener('DOMContentLoaded', gdInitPage);
