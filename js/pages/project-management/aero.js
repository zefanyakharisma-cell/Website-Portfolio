// Project Management — AERO page

// ── Data ─────────────────────────────────────────────────────────────────────

const AERO_BUDGET = {
  categories: [
    {
      name: 'Event & EO', icon: 'package', color: '#1C1C1E',
      bg: 'linear-gradient(135deg,#F4F4F4,#EBEBEB)', border: 'rgba(28,28,30,0.15)',
      total: 92812500,
      items: [
        { name: 'Outdoor Standard Stage 4×6m', qty: '1', total: 3000000 },
        { name: 'Sound System 2000 watt', qty: '1', total: 3500000 },
        { name: 'Misty Fan', qty: '10 units', total: 4500000 },
        { name: 'AC Standing Unit (5 PK)', qty: '2 units', total: 1800000 },
        { name: 'Stage Backdrop 4×6m', qty: '1', total: 3800000 },
        { name: 'Frame Stage', qty: '1', total: 3500000 },
        { name: 'TV Rental 80"', qty: '1', total: 2000000 },
        { name: 'Stage Roof Tent 4×6m', qty: '1', total: 1250000 },
        { name: 'Front Stage Tent 4×6m', qty: '1', total: 1250000 },
        { name: 'Front Stage Chairs (with cover)', qty: '20 chairs', total: 500000 },
        { name: 'Sarnavil Tent 3×3m (booth)', qty: '20 tents', total: 13000000 },
        { name: 'Sarnavil Tent 5×5m (catering & committee)', qty: '2 tents', total: 3000000 },
        { name: 'IBM Table 60×180 (booth)', qty: '40 tables', total: 6000000 },
        { name: 'IBM Table 60×180 (catering)', qty: '2 tables', total: 300000 },
        { name: 'Futura Chair + Cover (booth)', qty: '80 chairs', total: 2000000 },
        { name: 'Futura Chair + Cover (committee & catering)', qty: '10 chairs', total: 250000 },
        { name: 'Country / University Name Banner Print', qty: '20 banners', total: 2000000 },
        { name: 'Power Extension Sockets', qty: '40 units', total: 3000000 },
        { name: 'Photobooth Package (4 hours unlimited)', qty: '1', total: 4500000 },
        { name: 'Event Gate (entrance)', qty: '1', total: 8500000 },
        { name: 'Festival Flag Banners (around venue)', qty: '10 sheets', total: 4500000 },
        { name: 'Festival Pennant Flags (decoration)', qty: '20 pcs', total: 1500000 },
        { name: 'Old Town + Jeep Tour Tickets (city tour)', qty: '30 tickets', total: 2250000 },
        { name: 'Tour Guide Fee — Old Town Surabaya', qty: '2 persons', total: 1000000 },
        { name: 'City Tour Bus Parking', qty: '2', total: 100000 },
        { name: 'Superindo Voucher (international students)', qty: '10 vouchers', total: 5000000 },
        { name: 'TBMO Voucher', qty: '1 voucher', total: 500000 },
        { name: 'Tax', qty: '—', total: 10312500 },
      ]
    },
    {
      name: 'Accommodation', icon: 'building', color: '#4A6B8A',
      bg: 'linear-gradient(135deg,#EEF2F7,#D8E5EF)', border: 'rgba(74,107,138,0.2)',
      total: 20000000,
      items: [
        { name: 'Room with Breakfast — Zoom Hotel Dharmahusada', qty: '20 rooms × 2 nights', total: 20000000 },
      ]
    },
    {
      name: 'Meals & Catering', icon: 'utensils', color: '#8B7355',
      bg: 'linear-gradient(135deg,#F5F1EC,#EDE5D8)', border: 'rgba(139,115,85,0.2)',
      total: 17250000,
      items: [
        { name: 'Lunch — May 9', qty: '100 persons', total: 3500000 },
        { name: 'Afternoon Snack — May 9', qty: '100 persons', total: 1500000 },
        { name: 'Dinner — May 9', qty: '100 persons', total: 7500000 },
        { name: 'Lunch — May 10', qty: '50 persons', total: 1750000 },
        { name: 'Snack — May 10', qty: '50 persons', total: 750000 },
        { name: 'Vegetarian Meals', qty: '50 persons', total: 1250000 },
        { name: 'Mineral Water', qty: '20 boxes', total: 1000000 },
      ]
    },
    {
      name: 'Honorarium', icon: 'users', color: '#4A5235',
      bg: 'linear-gradient(135deg,#F1F3EE,#E4E8DC)', border: 'rgba(74,82,53,0.2)',
      total: 19600000,
      items: [
        { name: 'Driver & Assistant (3 days)', qty: '2 persons', total: 900000 },
        { name: 'Cleaning Service (venue cleaning)', qty: '10 persons', total: 1000000 },
        { name: 'AGE Committee & Logistics Staff', qty: '25 persons', total: 12500000 },
        { name: 'Interns', qty: '15 persons', total: 3000000 },
        { name: 'Alumni Sharing Session Fee', qty: '2 hours', total: 1800000 },
        { name: 'Student MC', qty: '1 event', total: 400000 },
      ]
    },
  ],
  grandTotal: 149662500
};

const AERO_PARTICIPANTS = {
  corners: [
    { name: 'European Union Centre', note: 'Universitas Airlangga', booth: 1 },
    { name: 'American Corner', note: 'Universitas Airlangga', booth: 2 },
    { name: 'CYUT-UNAIR Taiwan Centre', note: 'Universitas Airlangga', booth: 3 },
    { name: 'Aussie Banget Corner', note: 'Universitas Airlangga', booth: 4 },
  ],
  institutions: [
    { country: 'Australia', flag: '🇦🇺', orgs: [
      { name: 'The University of Western Australia', booth: 5 },
      { name: 'University of New South Wales', booth: 6 },
      { name: 'Western Sydney University', booth: null },
    ]},
    { country: 'France', flag: '🇫🇷', orgs: [
      { name: 'IFI Campus France', booth: 7 },
    ]},
    { country: 'Japan', flag: '🇯🇵', orgs: [
      { name: 'Kumamoto University', booth: 8 },
    ]},
    { country: 'Singapore', flag: '🇸🇬', orgs: [
      { name: 'Singapore Management University', booth: null },
    ]},
    { country: 'Malaysia', flag: '🇲🇾', orgs: [
      { name: 'International Islamic University Malaysia (IIUM)', booth: 10 },
      { name: 'INTI International University', booth: null },
      { name: 'Universiti Sultan Zainal Abidin (UniSZA)', booth: null },
      { name: 'Management and Science University (MSU)', booth: 11 },
      { name: 'Tunku Abdul Rahman University of Management and Technology', booth: 12 },
      { name: 'UiTM Cawangan Perlis', booth: null },
      { name: 'Universiti Malaya (UM)', booth: 13 },
    ]},
    { country: 'Organizations', flag: '🌐', orgs: [
      { name: 'AIESEC in Surabaya', booth: 14 },
    ]},
  ],
  studentDelegations: [
    { country: 'Myanmar',      flag: '🇲🇲', booth: 15 },
    { country: 'Cambodia',     flag: '🇰🇭', booth: 16 },
    { country: 'Yemen',        flag: '🇾🇪', booth: 17 },
    { country: 'Sudan',        flag: '🇸🇩', booth: 18 },
    { country: 'Vietnam',      flag: '🇻🇳', booth: 19 },
    { country: 'Mexico',       flag: '🇲🇽', booth: null },
    { country: 'Palestine',    flag: '🇵🇸', booth: null },
    { country: 'Sierra Leone', flag: '🇸🇱', booth: null },
    { country: 'China',        flag: '🇨🇳', booth: null },
  ]
};

const AERO_RUNDOWN = [
  {
    day: 'Pre-Arrival', date: 'Friday, 2 May 2025', label: 'Online Meeting', color: '#9A9A9A',
    items: [
      { time: '15:00 – 16:00', activity: 'Technical Meeting', venue: 'Online (Zoom)' },
    ]
  },
  {
    day: 'Day 0', date: 'Thursday, 8 May 2025', label: 'Arrival Day', color: '#4A6B8A',
    items: [
      { time: 'TBC', activity: 'Participant Arrival & Hotel Check-in', venue: 'Zoom Hotel Dharmahusada, Jl. Dharmahusada No.188, Surabaya' },
    ]
  },
  {
    day: 'Day 1', date: 'Friday, 9 May 2025', label: 'AERO Exhibition', color: '#1C1C1E',
    items: [
      { time: '07:00', activity: 'Transfer to Venue', venue: 'Meet at Hotel Lobby' },
      { time: '07:00 – 08:00', activity: 'Exhibitor Registration & Badge Collection', venue: 'Boulevard Area, UNAIR Library Campus B' },
      { time: '08:00 – 09:00', activity: 'Booth Preparation (Exhibitor Loading In)', venue: 'Exhibition Area' },
      { time: '09:00 – 09:05', activity: 'MC Start — Opening Ceremony', venue: 'Main Stage' },
      { time: '09:05 – 09:15', activity: 'Welcoming Speech — Vice Dean of Academic, Students & Alumni Affairs', venue: 'Main Stage', note: 'Prof. Dr. Bambang Sektiari Lukiswanto, DEA, DVM' },
      { time: '09:15 – 09:20', activity: 'Photo Session with All Participants', venue: 'Main Stage' },
      { time: '09:20 – 09:30', activity: 'Interactive Session — Marking Start of Exhibition', venue: 'Exhibition Area' },
      { time: '09:30 – 10:30', activity: 'Global Talks — Session 1', venue: 'Main Stage', note: 'IIUM · INTI International · Kumamoto University · MSU · Singapore Management University · Western Sydney University' },
      { time: '10:30 – 11:00', activity: 'Interactive Session with Partner University Booths', venue: 'Exhibition Area' },
      { time: '11:00 – 13:00', activity: 'Lunch Break (Friday Prayer)', venue: '—' },
      { time: '13:00 – 14:00', activity: 'AERO Spotlight — Alumni & Student Success Stories', venue: 'Main Stage', note: 'Inbound: Nesrine Kawkeb Aggoun (France) · Outbound: Amrizal Ahmad (Kumamoto), Fiona Lim (NUS)' },
      { time: '14:00 – 15:00', activity: 'Interactive Session with Partner University Booths', venue: 'Exhibition Area' },
      { time: '15:00 – 15:50', activity: 'Global Talks — Session 2', venue: 'Main Stage', note: 'TAR UMT · UiTM Cawangan Perlis · Universiti Malaya · IFI Campus France · UniSZA' },
      { time: '15:50 – 16:00', activity: 'Closing Event', venue: 'Main Stage' },
      { time: '16:00 – 17:00', activity: 'Exhibitors Loading Out', venue: 'Exhibition Area' },
      { time: '17:00 – 18:00', activity: 'Free Time', venue: '—' },
    ]
  },
  {
    day: 'Day 1', date: 'Friday, 9 May 2025', label: 'Networking Dinner', color: '#8B7355',
    items: [
      { time: '18:00 – 18:05', activity: 'Opening — Networking Dinner', venue: 'Ruang Sriwijaya, Lt. 5, ASEEC Tower, Campus B' },
      { time: '18:05 – 18:15', activity: 'Welcoming Speech — Director of Airlangga Global Engagement', venue: '', note: 'Prof. Iman Harymawan, Ph.D' },
      { time: '18:15 – 18:20', activity: 'Photo Session with All Participants', venue: '' },
      { time: '18:25 – 18:30', activity: 'Awarding Session — Best Booth Display', venue: '' },
      { time: '18:30 – 18:35', activity: 'Awarding Session — Outstanding Booth', venue: '' },
      { time: '18:35 – 19:55', activity: 'Dinner & Networking Session', venue: '' },
      { time: '19:55 – 20:00', activity: 'Closing Event', venue: '' },
      { time: '20:00', activity: 'Transfer Back to Hotel', venue: 'Bus at Lobby' },
    ]
  },
  {
    day: 'Day 2', date: 'Saturday, 10 May 2025', label: 'Surabaya City Tour', color: '#4A5235',
    items: [
      { time: '06:00 – 07:30', activity: 'Breakfast', venue: 'Hotel' },
      { time: '07:30 – 08:00', activity: 'Preparation for City Tour', venue: 'Meet at Hotel Lobby' },
      { time: '08:00 – 08:30', activity: 'Transfer to Kota Tua Surabaya', venue: 'Bus from Hotel' },
      { time: '08:30 – 09:00', activity: 'Explore Kota Tua Surabaya', venue: 'Kota Tua, Surabaya' },
      { time: '09:00 – 10:00', activity: 'Tourwagen Trip', venue: 'Guide & LO assisting' },
      { time: '10:00 – 10:30', activity: 'Photo Session at Kota Tua', venue: 'Kota Tua, Surabaya' },
      { time: '10:30 – 11:00', activity: 'Transfer Back to Hotel', venue: '' },
      { time: '11:00 – 12:00', activity: 'Hotel Check-Out (lunch box provided)', venue: 'Hotel' },
    ]
  },
];


// ── Helpers ──────────────────────────────────────────────────────────────────

function aeroEsc(s) {
  return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function fmtRp(n) {
  return 'Rp ' + Number(n).toLocaleString('id-ID');
}

// ── Section Builders ─────────────────────────────────────────────────────────

function buildAeroWhatToExpect() {
  const features = [
    { icon: 'building-2',  color: '#1C1C1E', bg: 'rgba(28,28,30,0.06)',   title: 'Partner University Booths',        desc: 'Meet representatives from international partner universities and learn about study programs, scholarships, and academic opportunities.' },
    { icon: 'mic',         color: '#4A6B8A', bg: 'rgba(74,107,138,0.08)', title: 'Global Talks & Alumni Sharing',    desc: 'Gain firsthand insights from alumni who have studied abroad — covering academic experiences, career prospects, and opportunities encountered.' },
    { icon: 'globe',       color: '#8B7355', bg: 'rgba(139,115,85,0.08)', title: 'Cultural Exchange & Performances', desc: 'Experience the richness of global cultures through artistic performances and interactive activities showcasing traditions from different countries.' },
    { icon: 'users',       color: '#4A5235', bg: 'rgba(74,82,53,0.08)',   title: 'Networking & Interactive Sessions', desc: 'Connect with international experts, alumni, and students from diverse backgrounds in engaging and inspiring sessions.' },
  ];
  const cards = features.map(f => `
    <div class="rounded-xl p-6" style="background:#F8FAFC;border:1px solid rgba(28,28,30,0.07)">
      <div class="w-10 h-10 rounded-lg flex items-center justify-center mb-4" style="background:${f.bg}">
        <i data-lucide="${f.icon}" style="width:20px;height:20px;color:${f.color}"></i>
      </div>
      <h4 class="font-heading font-semibold text-base mb-2" style="color:#1C1C1E">${aeroEsc(f.title)}</h4>
      <p class="text-sm leading-relaxed" style="color:#5C5C5C">${aeroEsc(f.desc)}</p>
    </div>`).join('');
  return `<div class="grid sm:grid-cols-2 gap-4">${cards}</div>`;
}

function buildAeroContributions() {
  const items = [
    { n:'01', icon:'calendar-check', color:'#1C1C1E', bg:'rgba(28,28,30,0.06)',   title:'Event Planning & Logistics',             desc:'Planned and coordinated end-to-end event logistics across 50+ stakeholders, including venue setup, scheduling, and operational readiness.' },
    { n:'02', icon:'receipt',        color:'#8B7355', bg:'rgba(139,115,85,0.08)', title:'Vendor Management & Budgeting',           desc:'Managed vendor relationships and procurement within an IDR 50–100M per-program budget, ensuring cost-efficient delivery across all event components.' },
    { n:'03', icon:'building-2',     color:'#4A6B8A', bg:'rgba(74,107,138,0.08)', title:'Partner University & Guest Coordination', desc:'Coordinated partner university booth logistics and facilitated international guest attendance, ensuring smooth communication and on-site experience.' },
    { n:'04', icon:'megaphone',      color:'#4A5235', bg:'rgba(74,82,53,0.08)',   title:'Promotion, Operations & Reporting',       desc:'Led pre-event promotion campaigns, managed on-site operations, and prepared comprehensive post-event completion reports for stakeholders.' },
  ];
  return items.map(i => `
   <div class="flex gap-6 py-8" style="border-top:1px solid rgba(28,28,30,0.07)">
    <div class="flex-shrink-0 w-10 pt-0.5">
     <span class="font-heading font-bold text-3xl select-none" style="color:rgba(28,28,30,0.1);line-height:1">${i.n}</span>
    </div>
    <div class="flex gap-4 flex-1">
     <div class="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5" style="background:${i.bg}">
      <i data-lucide="${i.icon}" style="width:18px;height:18px;color:${i.color}"></i>
     </div>
     <div>
      <h3 class="font-heading font-semibold text-lg mb-2" style="color:#1C1C1E">${aeroEsc(i.title)}</h3>
      <p class="text-sm leading-relaxed" style="color:#5C5C5C">${aeroEsc(i.desc)}</p>
     </div>
    </div>
   </div>
  `).join('');
}

function buildAeroRundown() {
  const sections = AERO_RUNDOWN.map(s => {
    const rows = s.items.map(item => {
      const noteRow = item.note
        ? `<tr><td></td><td colspan="2" class="pb-2 text-xs italic" style="color:#9A9A9A;padding-left:0">${aeroEsc(item.note)}</td></tr>`
        : '';
      return `
        <tr>
          <td class="py-1.5 pr-4 text-xs font-mono whitespace-nowrap align-top" style="color:${s.color};width:8rem">${aeroEsc(item.time)}</td>
          <td class="py-1.5 pr-4 text-sm font-medium align-top" style="color:#1C1C1E">${aeroEsc(item.activity)}</td>
          <td class="py-1.5 text-xs align-top" style="color:#9A9A9A">${item.venue ? aeroEsc(item.venue) : ''}</td>
        </tr>${noteRow}`;
    }).join('');
    return `
      <div class="mb-5">
        <div class="flex items-center gap-3 mb-3">
          <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold" style="background:${s.color}18;color:${s.color}">${aeroEsc(s.day)}</span>
          <span class="font-heading font-semibold text-sm" style="color:#1C1C1E">${aeroEsc(s.date)} — ${aeroEsc(s.label)}</span>
        </div>
        <div class="rounded-xl overflow-auto" style="border:1px solid rgba(28,28,30,0.08)">
          <table class="w-full" style="border-collapse:collapse;min-width:500px">
            <tbody style="padding:0 1rem">${rows}</tbody>
          </table>
        </div>
      </div>`;
  }).join('');
  return sections;
}

function buildAeroParticipants() {
  const cornerCards = AERO_PARTICIPANTS.corners.map(c => `
    <div class="flex items-center gap-3 px-4 py-3 rounded-lg" style="background:#F8FAFC;border:1px solid rgba(28,28,30,0.08)">
      <span class="text-xs font-bold px-2 py-0.5 rounded" style="background:rgba(28,28,30,0.08);color:#1C1C1E">B${c.booth}</span>
      <div>
        <p class="text-sm font-medium" style="color:#1C1C1E">${aeroEsc(c.name)}</p>
        <p class="text-xs" style="color:#9A9A9A">${aeroEsc(c.note)}</p>
      </div>
    </div>`).join('');

  const instBlocks = AERO_PARTICIPANTS.institutions.map(g => {
    const rows = g.orgs.map(o => {
      const badge = o.booth
        ? `<span class="text-xs font-bold px-1.5 py-0.5 rounded flex-shrink-0" style="background:rgba(28,28,30,0.08);color:#1C1C1E">B${o.booth}</span>`
        : '';
      return `<div class="flex items-center justify-between gap-2">
        <span class="text-sm" style="color:#1C1C1E">${aeroEsc(o.name)}</span>${badge}
      </div>`;
    }).join('');
    return `
      <div class="rounded-lg p-4" style="background:#F8FAFC;border:1px solid rgba(28,28,30,0.08)">
        <p class="text-xs font-semibold mb-2" style="color:#5C5C5C">${g.flag} ${aeroEsc(g.country)}</p>
        <div class="space-y-1.5">${rows}</div>
      </div>`;
  }).join('');

  const studentCards = AERO_PARTICIPANTS.studentDelegations.map(c => {
    const badge = c.booth
      ? `<span class="text-xs font-bold ml-auto" style="color:#1C1C1E">B${c.booth}</span>`
      : '';
    return `
      <div class="flex items-center gap-2 px-3 py-2 rounded-lg" style="background:#F8FAFC;border:1px solid rgba(28,28,30,0.08)">
        <span class="text-base">${c.flag}</span>
        <span class="text-sm" style="color:#1C1C1E">${aeroEsc(c.country)}</span>
        ${badge}
      </div>`;
  }).join('');

  return `
    <h3 class="font-heading font-semibold text-base mb-3" style="color:#1C1C1E">UNAIR Internal Corners</h3>
    <div class="grid sm:grid-cols-2 gap-2 mb-8">${cornerCards}</div>
    <h3 class="font-heading font-semibold text-base mb-3" style="color:#1C1C1E">Partner Universities & Institutions <span class="text-sm font-normal ml-1" style="color:#9A9A9A">— 5 countries</span></h3>
    <div class="grid md:grid-cols-2 gap-3 mb-8">${instBlocks}</div>
    <h3 class="font-heading font-semibold text-base mb-3" style="color:#1C1C1E">International Student Delegations <span class="text-sm font-normal ml-1" style="color:#9A9A9A">— representing their home countries</span></h3>
    <div class="grid sm:grid-cols-3 gap-2">${studentCards}</div>`;
}

function buildAeroBudget() {
  const catRows = AERO_BUDGET.categories.map(cat => `
    <div class="flex items-center gap-4 p-4 rounded-xl" style="background:${cat.bg};border:1px solid ${cat.border}">
      <div class="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style="background:rgba(0,0,0,0.06)">
        <i data-lucide="${cat.icon}" style="width:20px;height:20px;color:${cat.color}"></i>
      </div>
      <p class="text-sm font-semibold flex-1" style="color:#1C1C1E">${aeroEsc(cat.name)}</p>
      <p class="font-heading font-bold text-base" style="color:${cat.color}">${fmtRp(cat.total)}</p>
    </div>`).join('');

  return `
    <div class="space-y-3 mb-6">${catRows}</div>
    <div class="rounded-xl p-5 flex items-center justify-between" style="background:#1C1C1E;border:1px solid rgba(255,255,255,0.08)">
      <div>
        <p class="text-xs uppercase tracking-wider mb-1" style="color:rgba(255,255,255,0.5)">Grand Total</p>
        <p class="font-heading font-bold text-2xl" style="color:#fff">${fmtRp(AERO_BUDGET.grandTotal)}</p>
      </div>
      <i data-lucide="receipt" style="width:36px;height:36px;color:rgba(255,255,255,0.2)"></i>
    </div>`;
}

// ── Page Shell ───────────────────────────────────────────────────────────────

function aeroInitPage() {
  const el = document.getElementById('page-aero');
  if (!el) return;
  el.innerHTML = `
   <div class="page-hero-banner relative overflow-hidden" style="padding:64px 0 48px">
    <div class="absolute inset-0"><img src="assets/images/aero/aero-header-1.JPEG" alt="AERO" style="width:100%;height:100%;object-fit:cover;object-position:center"><div style="position:absolute;inset:0;background:linear-gradient(135deg,rgba(28,28,30,0.88) 0%,rgba(44,44,46,0.82) 60%,rgba(60,60,62,0.77) 100%)"></div></div>
    <div class="absolute -right-16 -top-16 w-80 h-80 rounded-full" style="background:rgba(255,255,255,0.03)"></div>
    <div class="absolute right-24 bottom-8 w-48 h-48 rounded-full" style="border:2px solid rgba(255,255,255,0.05)"></div>
    <div class="absolute inset-0 flex items-center justify-end overflow-hidden pr-8 pointer-events-none select-none" aria-hidden="true">
     <span class="font-heading font-bold" style="font-size:clamp(5rem,15vw,12rem);color:rgba(255,255,255,0.04);letter-spacing:-.04em;line-height:1">AERO</span>
    </div>
    <div class="relative z-10 max-w-6xl mx-auto px-6">
     <button onclick="goToPage('projects-overview')" class="flex items-center gap-2 mb-8" style="color:rgba(255,255,255,0.6)"><i data-lucide="arrow-left" style="width:16px;height:16px"></i> Back</button>
     <span class="inline-block px-4 py-1.5 rounded-full text-xs font-semibold mb-5 uppercase tracking-wider" style="background:rgba(255,255,255,0.1);color:#fff">Project Management</span>
     <h1 class="font-heading font-bold mb-3 text-white" style="font-size:clamp(2.5rem,6vw,4rem);letter-spacing:-.02em">AERO 2025</h1>
     <p class="text-base max-w-2xl" style="color:rgba(255,255,255,0.65)">Airlangga Expanding Reach & Opportunities — annual internationalization exhibition connecting UNAIR students with global partners, alumni, and opportunities. 9–10 May 2025, Surabaya.</p>
    </div>
   </div>

   <div class="max-w-6xl mx-auto px-6">
    <div class="flex flex-wrap gap-10 py-10" style="border-bottom:1px solid rgba(28,28,30,0.08)">
     <div><div class="font-heading font-bold text-4xl" style="color:#1C1C1E">19</div><div class="text-xs uppercase tracking-wider mt-1" style="color:#9A9A9A">Exhibition Booths</div></div>
     <div><div class="font-heading font-bold text-4xl" style="color:#1C1C1E">12</div><div class="text-xs uppercase tracking-wider mt-1" style="color:#9A9A9A">Partner Universities</div></div>
     <div><div class="font-heading font-bold text-4xl" style="color:#1C1C1E">50+</div><div class="text-xs uppercase tracking-wider mt-1" style="color:#9A9A9A">Stakeholders</div></div>
     <div><div class="font-heading font-bold text-4xl" style="color:#1C1C1E">Rp 149.7M</div><div class="text-xs uppercase tracking-wider mt-1" style="color:#9A9A9A">Total Budget</div></div>
    </div>
   </div>

   <div class="max-w-6xl mx-auto px-6 py-14">
    <p class="text-lg max-w-3xl leading-relaxed mb-14" style="color:#5C5C5C">AERO is an internationalization event that opens doors for Universitas Airlangga students to explore global opportunities in education, careers, and cultural exchange — shaping students into future-ready individuals with global insight. Through AERO, students engage directly with international universities, alumni, and professionals.</p>

    <div class="flex items-center gap-3 mb-3"><span class="accent-line"></span><span class="text-sm font-semibold" style="color:#5C5C5C">What to Expect</span></div>
    <h2 class="font-heading font-bold text-3xl mb-8" style="color:#1C1C1E">Program Highlights</h2>
    ${buildAeroWhatToExpect()}

    <div class="flex items-center gap-3 mb-3 mt-16"><span class="accent-line"></span><span class="text-sm font-semibold" style="color:#5C5C5C">My Role</span></div>
    <h2 class="font-heading font-bold text-3xl mb-2" style="color:#1C1C1E">Contributions</h2>
    <div class="mt-6">${buildAeroContributions()}</div>
   </div>

   <div style="background:#F2ECE4;border-top:1px solid rgba(28,28,30,0.07)">
    <div class="max-w-6xl mx-auto px-6 py-16">

     <div class="flex items-center gap-3 mb-3"><span class="accent-line"></span><span class="text-sm font-semibold" style="color:#5C5C5C">Institutions</span></div>
     <h2 class="font-heading font-bold text-3xl mb-2" style="color:#1C1C1E">Participating Institutions</h2>
     <p class="text-sm mb-10" style="color:#5C5C5C">19 booths · 12 partner universities & institutions · 9 international student delegations</p>
     ${buildAeroParticipants()}

     <div class="flex items-center gap-3 mb-3 mt-16"><span class="accent-line"></span><span class="text-sm font-semibold" style="color:#5C5C5C">Schedule</span></div>
     <h2 class="font-heading font-bold text-3xl mb-2" style="color:#1C1C1E">Event Rundown</h2>
     <p class="text-sm mb-8" style="color:#5C5C5C">9–10 May 2025 · Universitas Airlangga, Surabaya</p>
     ${buildAeroRundown()}

     <div class="flex items-center gap-3 mb-3 mt-16"><span class="accent-line"></span><span class="text-sm font-semibold" style="color:#5C5C5C">Financials</span></div>
     <h2 class="font-heading font-bold text-3xl mb-2" style="color:#1C1C1E">Budget Overview</h2>
     <p class="text-sm mb-8" style="color:#5C5C5C">Budget breakdown across 4 categories — AERO 2025</p>
     ${buildAeroBudget()}

    </div>
   </div>`;

  if (window.lucide) lucide.createIcons();
}

document.addEventListener('DOMContentLoaded', function () {
  aeroInitPage();
});
