// Project Management — AERO page

// ── Data ─────────────────────────────────────────────────────────────────────

const AERO_BUDGET = {
  categories: [
    {
      name: 'Event & EO', icon: 'package', color: '#a855f7',
      bg: 'linear-gradient(135deg,#faf5ff,#f3e8ff)', border: 'rgba(168,85,247,0.2)',
      total: 92812500,
      items: [
        { name: 'Panggung Standard Outdoor 4×6m', qty: '1', total: 3000000 },
        { name: 'Sound System 2000 watt', qty: '1', total: 3500000 },
        { name: 'Misty Fan', qty: '10 unit', total: 4500000 },
        { name: 'AC Standing (5 PK)', qty: '2 unit', total: 1800000 },
        { name: 'Backdrop 4×6m (panggung)', qty: '1', total: 3800000 },
        { name: 'Frame Stage', qty: '1', total: 3500000 },
        { name: 'Sewa TV 80"', qty: '1', total: 2000000 },
        { name: 'Tenda Atas Panggung 4×6m', qty: '1', total: 1250000 },
        { name: 'Tenda Depan Panggung 4×6m', qty: '1', total: 1250000 },
        { name: 'Kursi Depan Panggung (cover)', qty: '20 kursi', total: 500000 },
        { name: 'Tenda Sarnavil 3×3m (booth)', qty: '20 tenda', total: 13000000 },
        { name: 'Tenda Sarnavil 5×5m (konsumsi & panitia)', qty: '2 tenda', total: 3000000 },
        { name: 'Meja IBM 60×180 (booth)', qty: '40 meja', total: 6000000 },
        { name: 'Meja IBM 60×180 (konsumsi)', qty: '2 meja', total: 300000 },
        { name: 'Kursi Futura + Cover (booth)', qty: '80 kursi', total: 2000000 },
        { name: 'Kursi Futura + Cover (panitia & konsumsi)', qty: '10 kursi', total: 250000 },
        { name: 'Print Banner Nama Negara/Universitas', qty: '20 banner', total: 2000000 },
        { name: 'Stop Kontak', qty: '40 unit', total: 3000000 },
        { name: 'Paket Photobooth (4 jam unlimited)', qty: '1', total: 4500000 },
        { name: 'Gate Event (pintu masuk)', qty: '1', total: 8500000 },
        { name: 'Umbul-Umbul (sekitar venue)', qty: '10 lembar', total: 4500000 },
        { name: 'Bendera Festival (dekorasi)', qty: '20 pcs', total: 1500000 },
        { name: 'Tiket Kota Tua + Jeep (city tour)', qty: '30 tiket', total: 2250000 },
        { name: 'Honor Tour Guide Kota Tua', qty: '2 orang', total: 1000000 },
        { name: 'Parkir Bus City Tour', qty: '2', total: 100000 },
        { name: 'Voucher Superindo (mahasiswa asing)', qty: '10 voucher', total: 5000000 },
        { name: 'Voucher TBMO', qty: '1 voucher', total: 500000 },
        { name: 'Pajak (Tax)', qty: '—', total: 10312500 },
      ]
    },
    {
      name: 'Accommodation', icon: 'building', color: '#0ea5e9',
      bg: 'linear-gradient(135deg,#f0f9ff,#e0f2fe)', border: 'rgba(14,165,233,0.2)',
      total: 20000000,
      items: [
        { name: 'Room Breakfast — Zoom Hotel Dharmahusada', qty: '20 kamar × 2 hari', total: 20000000 },
      ]
    },
    {
      name: 'Meals & Catering', icon: 'utensils', color: '#f97316',
      bg: 'linear-gradient(135deg,#fff7ed,#ffedd5)', border: 'rgba(249,115,22,0.2)',
      total: 17250000,
      items: [
        { name: 'Makan Siang — 9 Mei', qty: '100 orang', total: 3500000 },
        { name: 'Snack Siang — 9 Mei', qty: '100 orang', total: 1500000 },
        { name: 'Makan Malam / Dinner — 9 Mei', qty: '100 orang', total: 7500000 },
        { name: 'Makan Siang — 10 Mei', qty: '50 orang', total: 1750000 },
        { name: 'Snack — 10 Mei', qty: '50 orang', total: 750000 },
        { name: 'Makanan Vegetarian', qty: '50 orang', total: 1250000 },
        { name: 'Air Mineral', qty: '20 dus', total: 1000000 },
      ]
    },
    {
      name: 'Honorarium', icon: 'users', color: '#10b981',
      bg: 'linear-gradient(135deg,#f0fdf4,#dcfce7)', border: 'rgba(16,185,129,0.2)',
      total: 19600000,
      items: [
        { name: 'Driver & Kernet (3 hari)', qty: '2 orang', total: 900000 },
        { name: 'Cleaning Service (bantu bersihin venue)', qty: '10 orang', total: 1000000 },
        { name: 'Panitia AGE & Logistik', qty: '25 orang', total: 12500000 },
        { name: 'Magang (Intern)', qty: '15 orang', total: 3000000 },
        { name: 'Honor Sharing Session Alumni', qty: '2 jam', total: 1800000 },
        { name: 'MC Mahasiswa', qty: '1 kegiatan', total: 400000 },
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
    day: 'Pre-Arrival', date: 'Friday, 2 May 2025', label: 'Online Meeting', color: '#94a3b8',
    items: [
      { time: '15:00 – 16:00', activity: 'Technical Meeting', venue: 'Online (Zoom)' },
    ]
  },
  {
    day: 'Day 0', date: 'Thursday, 8 May 2025', label: 'Arrival Day', color: '#0ea5e9',
    items: [
      { time: 'TBC', activity: 'Participant Arrival & Hotel Check-in', venue: 'Zoom Hotel Dharmahusada, Jl. Dharmahusada No.188, Surabaya' },
    ]
  },
  {
    day: 'Day 1', date: 'Friday, 9 May 2025', label: 'AERO Exhibition', color: '#a855f7',
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
    day: 'Day 1', date: 'Friday, 9 May 2025', label: 'Networking Dinner', color: '#ec4899',
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
    day: 'Day 2', date: 'Saturday, 10 May 2025', label: 'Surabaya City Tour', color: '#14b8a6',
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

const AERO_COMMITTEE = [
  { no: 1, div: 'Registrasi & Administrasi', pic: 'Firo, Zadina', color: '#a855f7', icon: 'clipboard-check', tasks: [
    'Menyiapkan persuratan dan administrasi',
    'Menyiapkan daftar absensi peserta dan panitia',
    'Menerbitkan Letter of Invitation bagi peserta yang membutuhkan',
    'Menyiapkan QR registrasi pengunjung mahasiswa Unair',
    'Registrasi peserta (ID Card)',
    'Bersurat undangan networking dinner ke perwakilan Fakultas',
    'Issuing certificate untuk peserta penjaga booth',
  ]},
  { no: 2, div: 'Perlengkapan & Transportasi', pic: 'Duriati, Sahrul', color: '#0ea5e9', icon: 'truck', tasks: [
    'Peminjaman ruangan, venue, dan perlengkapan',
    'Menjaga dan menyiapkan kebutuhan perlengkapan',
    'Mengatur transportasi Hotel – Venue – Hotel',
    'Menjadi operator saat Global Talks, AERO Spotlight & Networking Dinner',
  ]},
  { no: 3, div: 'Acara & Surabaya City Tour', pic: 'Dian, Indra', color: '#f97316', icon: 'calendar-days', tasks: [
    'Menyiapkan keseluruhan acara dan networking dinner',
    'Menentukan tujuan Surabaya City Tour',
    'Berkoordinasi dengan EO',
    'Melakukan koordinasi panitia secara berkala',
  ]},
  { no: 4, div: 'Konsumsi & PIC Bazaar', pic: 'Melly, Nastiti', color: '#ec4899', icon: 'utensils', tasks: [
    'Menyiapkan konsumsi peserta dan panitia (meal box & snack box)',
    'Menghubungi vendor bazaar untuk membuka booth',
    'Mengorganisir bazaar sebelum dan selama acara',
  ]},
  { no: 5, div: 'Publikasi & Dokumentasi', pic: 'Diffa, Ehud', color: '#10b981', icon: 'camera', tasks: [
    'Promosi pre-event: Instagram, website, email blast, poster',
    'Membuat teaser dan backdrop acara',
    'Mendokumentasikan acara sebagai live report IG',
    'Membuat berita pasca acara',
  ]},
  { no: 6, div: 'PR — Liaison Officer (LO)', pic: 'Joshua (Zefanya)', color: '#a855f7', icon: 'handshake', highlight: true, tasks: [
    'Menjadi advokat acara untuk publik, mitra, dan stakeholder UNAIR',
    'Mendampingi mitra internasional selama acara berlangsung',
    'Mengkoordinir penugasan LO dan tim volunteer di setiap divisi',
  ]},
  { no: 7, div: 'Bendahara & Hotel', pic: 'Mas Rocky, Lusy', color: '#64748b', icon: 'wallet', tasks: [
    'Berkoordinasi dengan hotel terkait akomodasi peserta',
    'Mengkoordinir keuangan dan SPJ',
    'Berkoordinasi dengan vendor EO dan PLP',
  ]},
];

// ── Helpers ──────────────────────────────────────────────────────────────────

function aeroEsc(s) {
  return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function fmtRp(n) {
  return 'Rp ' + Number(n).toLocaleString('id-ID');
}

// ── Section Builders ─────────────────────────────────────────────────────────

function buildAeroWhatToExpect() {
  const features = [
    { icon: 'building-2',  color: '#a855f7', bg: 'rgba(168,85,247,0.08)',  title: 'Partner University Booths',       desc: 'Meet representatives from international partner universities and learn about study programs, scholarships, and academic opportunities.' },
    { icon: 'mic',         color: '#0ea5e9', bg: 'rgba(14,165,233,0.08)',  title: 'Global Talks & Alumni Sharing',   desc: 'Gain firsthand insights from alumni who have studied abroad — covering academic experiences, career prospects, and opportunities encountered.' },
    { icon: 'globe',       color: '#f97316', bg: 'rgba(249,115,22,0.08)',  title: 'Cultural Exchange & Performances',desc: 'Experience the richness of global cultures through artistic performances and interactive activities showcasing traditions from different countries.' },
    { icon: 'users',       color: '#10b981', bg: 'rgba(16,185,129,0.08)', title: 'Networking & Interactive Sessions',desc: 'Connect with international experts, alumni, and students from diverse backgrounds in engaging and inspiring sessions.' },
  ];
  const cards = features.map(f => `
    <div class="rounded-xl p-6" style="background:#F8FAFC;border:1px solid rgba(56,189,248,0.1)">
      <div class="w-12 h-12 rounded-lg flex items-center justify-center mb-4" style="background:${f.bg}">
        <i data-lucide="${f.icon}" style="width:24px;height:24px;color:${f.color}"></i>
      </div>
      <h4 class="font-heading font-semibold text-base mb-2" style="color:#0F172A">${aeroEsc(f.title)}</h4>
      <p class="text-sm leading-relaxed" style="color:#64748B">${aeroEsc(f.desc)}</p>
    </div>`).join('');
  return `
    <div class="card p-8 mb-6">
      <div class="flex items-center gap-3 mb-6"><span class="accent-line"></span><h2 class="font-heading font-semibold text-2xl" style="color:#0F172A">What to Expect</h2></div>
      <div class="grid sm:grid-cols-2 gap-4">${cards}</div>
    </div>`;
}

function buildAeroContributions() {
  const items = [
    { color: '#a855f7', bg: 'rgba(168,85,247,0.08)', icon: 'calendar-check', title: '1. Event Planning & Logistics',           desc: 'Planned and coordinated end-to-end event logistics across 50+ stakeholders, including venue setup, scheduling, and operational readiness.' },
    { color: '#ec4899', bg: 'rgba(236,72,153,0.08)',  icon: 'receipt',        title: '2. Vendor Management & Budgeting',         desc: 'Managed vendor relationships and procurement within an IDR 50–100M per-program budget, ensuring cost-efficient delivery across all event components.' },
    { color: '#8b5cf6', bg: 'rgba(139,92,246,0.08)', icon: 'building-2',     title: '3. Partner University & Guest Coordination',desc: 'Coordinated partner university booth logistics and facilitated international guest attendance, ensuring smooth communication and on-site experience.' },
    { color: '#d946ef', bg: 'rgba(217,70,239,0.08)', icon: 'megaphone',      title: '4. Promotion, Operations & Reporting',     desc: 'Led pre-event promotion campaigns, managed on-site operations, and prepared comprehensive post-event completion reports for stakeholders.' },
  ];
  const cards = items.map(i => `
    <div class="flex items-start gap-4 p-5 rounded-xl border-l-4" style="border-color:${i.color};background:#F8FAFC">
      <div class="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style="background:${i.bg}">
        <i data-lucide="${i.icon}" style="width:24px;height:24px;color:${i.color}"></i>
      </div>
      <div>
        <h4 class="font-heading font-semibold text-base mb-1" style="color:#0F172A">${aeroEsc(i.title)}</h4>
        <p class="text-sm" style="color:#64748B">${aeroEsc(i.desc)}</p>
      </div>
    </div>`).join('');
  return `
    <div class="card p-8 mb-6">
      <div class="flex items-center gap-3 mb-6"><span class="accent-line"></span><h2 class="font-heading font-semibold text-2xl" style="color:#0F172A">My Contributions</h2></div>
      <div class="space-y-4">${cards}</div>
    </div>`;
}

function buildAeroCommittee() {
  const cards = AERO_COMMITTEE.map(d => {
    const tasks = d.tasks.map(t => `<li class="text-sm" style="color:#64748B">${aeroEsc(t)}</li>`).join('');
    const border = d.highlight
      ? `border:2px solid ${d.color}`
      : 'border:1px solid rgba(56,189,248,0.1)';
    const bgIcon = d.color === '#a855f7' ? 'rgba(168,85,247,0.1)'
      : d.color === '#0ea5e9' ? 'rgba(14,165,233,0.1)'
      : d.color === '#f97316' ? 'rgba(249,115,22,0.1)'
      : d.color === '#ec4899' ? 'rgba(236,72,153,0.1)'
      : d.color === '#10b981' ? 'rgba(16,185,129,0.1)'
      : 'rgba(100,116,139,0.1)';
    return `
      <div class="rounded-xl p-5" style="background:#F8FAFC;${border}">
        <div class="flex items-center gap-3 mb-3">
          <div class="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0" style="background:${bgIcon}">
            <i data-lucide="${d.icon}" style="width:18px;height:18px;color:${d.color}"></i>
          </div>
          <div>
            <p class="font-heading font-semibold text-sm" style="color:#0F172A">${d.no}. ${aeroEsc(d.div)}</p>
            <p class="text-xs" style="color:${d.color}">PIC: ${aeroEsc(d.pic)}</p>
          </div>
        </div>
        <ul class="space-y-1 list-disc list-inside">${tasks}</ul>
      </div>`;
  }).join('');
  return `
    <div class="card p-8 mb-6">
      <div class="flex items-center gap-3 mb-2"><span class="accent-line"></span><h2 class="font-heading font-semibold text-2xl" style="color:#0F172A">Committee Structure</h2></div>
      <p class="text-sm mb-6" style="color:#64748B">7 divisions · my role is highlighted in purple.</p>
      <div class="grid md:grid-cols-2 gap-4">${cards}</div>
    </div>`;
}

function buildAeroRundown() {
  const sections = AERO_RUNDOWN.map(s => {
    const rows = s.items.map(item => {
      const noteRow = item.note
        ? `<tr><td></td><td colspan="2" class="pb-2 text-xs italic" style="color:#94A3B8;padding-left:0">${aeroEsc(item.note)}</td></tr>`
        : '';
      return `
        <tr>
          <td class="py-1.5 pr-4 text-xs font-mono whitespace-nowrap align-top" style="color:${s.color};width:8rem">${aeroEsc(item.time)}</td>
          <td class="py-1.5 pr-4 text-sm font-medium align-top" style="color:#0F172A">${aeroEsc(item.activity)}</td>
          <td class="py-1.5 text-xs align-top" style="color:#94A3B8">${item.venue ? aeroEsc(item.venue) : ''}</td>
        </tr>${noteRow}`;
    }).join('');
    return `
      <div class="mb-5">
        <div class="flex items-center gap-3 mb-3">
          <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold" style="background:${s.color}22;color:${s.color}">${aeroEsc(s.day)}</span>
          <span class="font-heading font-semibold text-sm" style="color:#0F172A">${aeroEsc(s.date)} — ${aeroEsc(s.label)}</span>
        </div>
        <div class="rounded-xl overflow-auto" style="border:1px solid rgba(56,189,248,0.1)">
          <table class="w-full" style="border-collapse:collapse;min-width:500px">
            <tbody style="padding:0 1rem">${rows}</tbody>
          </table>
        </div>
      </div>`;
  }).join('');
  return `
    <div class="card p-8 mb-6">
      <div class="flex items-center gap-3 mb-2"><span class="accent-line"></span><h2 class="font-heading font-semibold text-2xl" style="color:#0F172A">Event Rundown</h2></div>
      <p class="text-sm mb-6" style="color:#64748B">9–10 May 2025 · Universitas Airlangga, Surabaya</p>
      ${sections}
    </div>`;
}

function buildAeroParticipants() {
  const cornerCards = AERO_PARTICIPANTS.corners.map(c => `
    <div class="flex items-center gap-3 px-4 py-3 rounded-lg" style="background:#F8FAFC;border:1px solid rgba(56,189,248,0.1)">
      <span class="text-xs font-bold px-2 py-0.5 rounded" style="background:rgba(168,85,247,0.12);color:#a855f7">B${c.booth}</span>
      <div>
        <p class="text-sm font-medium" style="color:#0F172A">${aeroEsc(c.name)}</p>
        <p class="text-xs" style="color:#94A3B8">${aeroEsc(c.note)}</p>
      </div>
    </div>`).join('');

  const instBlocks = AERO_PARTICIPANTS.institutions.map(g => {
    const rows = g.orgs.map(o => {
      const badge = o.booth
        ? `<span class="text-xs font-bold px-1.5 py-0.5 rounded flex-shrink-0" style="background:rgba(168,85,247,0.12);color:#a855f7">B${o.booth}</span>`
        : '';
      return `<div class="flex items-center justify-between gap-2">
        <span class="text-sm" style="color:#0F172A">${aeroEsc(o.name)}</span>${badge}
      </div>`;
    }).join('');
    return `
      <div class="rounded-lg p-4" style="background:#F8FAFC;border:1px solid rgba(56,189,248,0.1)">
        <p class="text-xs font-semibold mb-2" style="color:#a855f7">${g.flag} ${aeroEsc(g.country)}</p>
        <div class="space-y-1.5">${rows}</div>
      </div>`;
  }).join('');

  const studentCards = AERO_PARTICIPANTS.studentDelegations.map(c => {
    const badge = c.booth
      ? `<span class="text-xs font-bold ml-auto" style="color:#a855f7">B${c.booth}</span>`
      : '';
    return `
      <div class="flex items-center gap-2 px-3 py-2 rounded-lg" style="background:#F8FAFC;border:1px solid rgba(56,189,248,0.1)">
        <span class="text-base">${c.flag}</span>
        <span class="text-sm" style="color:#0F172A">${aeroEsc(c.country)}</span>
        ${badge}
      </div>`;
  }).join('');

  return `
    <div class="card p-8 mb-6">
      <div class="flex items-center gap-3 mb-2"><span class="accent-line"></span><h2 class="font-heading font-semibold text-2xl" style="color:#0F172A">Participating Institutions</h2></div>
      <p class="text-sm mb-8" style="color:#64748B">19 booths · 12 partner universities & institutions · 9 international student delegations</p>

      <h3 class="font-heading font-semibold text-base mb-3" style="color:#0F172A">UNAIR Internal Corners</h3>
      <div class="grid sm:grid-cols-2 gap-2 mb-8">${cornerCards}</div>

      <h3 class="font-heading font-semibold text-base mb-3" style="color:#0F172A">Partner Universities & Institutions <span class="text-sm font-normal ml-1" style="color:#64748B">— 5 countries</span></h3>
      <div class="grid md:grid-cols-2 gap-3 mb-8">${instBlocks}</div>

      <h3 class="font-heading font-semibold text-base mb-3" style="color:#0F172A">International Student Delegations <span class="text-sm font-normal ml-1" style="color:#64748B">— representing their home countries</span></h3>
      <div class="grid sm:grid-cols-3 gap-2">${studentCards}</div>
    </div>`;
}

function buildAeroBudget() {
  const catCards = AERO_BUDGET.categories.map(cat => `
    <div class="rounded-xl p-5 text-center" style="background:${cat.bg};border:1px solid ${cat.border}">
      <div class="w-10 h-10 rounded-lg flex items-center justify-center mx-auto mb-3" style="background:rgba(0,0,0,0.05)">
        <i data-lucide="${cat.icon}" style="width:20px;height:20px;color:${cat.color}"></i>
      </div>
      <p class="font-heading font-bold text-base mb-1" style="color:${cat.color}">${fmtRp(cat.total)}</p>
      <p class="text-xs font-semibold" style="color:#0F172A">${aeroEsc(cat.name)}</p>
    </div>`).join('');

  const catTables = AERO_BUDGET.categories.map(cat => {
    const rows = cat.items.map(item => `
      <tr style="border-bottom:1px solid #F1F5F9">
        <td class="py-2 pr-4 text-sm" style="color:#0F172A">${aeroEsc(item.name)}</td>
        <td class="py-2 pr-4 text-xs text-center" style="color:#64748B">${aeroEsc(item.qty)}</td>
        <td class="py-2 text-sm font-semibold text-right whitespace-nowrap" style="color:${cat.color}">${fmtRp(item.total)}</td>
      </tr>`).join('');
    return `
      <div class="mb-6">
        <div class="flex items-center gap-2 mb-3">
          <div class="w-6 h-6 rounded flex items-center justify-center" style="background:rgba(0,0,0,0.05)">
            <i data-lucide="${cat.icon}" style="width:14px;height:14px;color:${cat.color}"></i>
          </div>
          <h4 class="font-heading font-semibold text-base" style="color:#0F172A">${aeroEsc(cat.name)}</h4>
          <span class="ml-auto text-sm font-bold" style="color:${cat.color}">${fmtRp(cat.total)}</span>
        </div>
        <div class="rounded-xl overflow-hidden" style="border:1px solid rgba(56,189,248,0.1)">
          <table class="w-full" style="border-collapse:collapse">
            <thead><tr style="background:#F8FAFC">
              <th class="py-2 px-4 text-left text-xs font-semibold" style="color:#64748B">Item</th>
              <th class="py-2 px-4 text-center text-xs font-semibold" style="color:#64748B">Qty</th>
              <th class="py-2 px-4 text-right text-xs font-semibold" style="color:#64748B">Total</th>
            </tr></thead>
            <tbody class="divide-y">${rows}</tbody>
          </table>
        </div>
      </div>`;
  }).join('');

  return `
    <div class="card p-8 mb-6">
      <div class="flex items-center gap-3 mb-2"><span class="accent-line"></span><h2 class="font-heading font-semibold text-2xl" style="color:#0F172A">Budget (RAB)</h2></div>
      <p class="text-sm mb-6" style="color:#64748B">Rencana Anggaran Biaya — AERO 2025</p>

      <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">${catCards}</div>

      <div class="rounded-xl p-5 mb-8 flex items-center justify-between" style="background:linear-gradient(135deg,#faf5ff,#f3e8ff);border:2px solid rgba(168,85,247,0.3)">
        <div>
          <p class="text-sm font-semibold" style="color:#64748B">Grand Total</p>
          <p class="font-heading font-bold text-2xl mt-1" style="color:#a855f7">${fmtRp(AERO_BUDGET.grandTotal)}</p>
        </div>
        <i data-lucide="receipt" style="width:40px;height:40px;color:#a855f7;opacity:0.3"></i>
      </div>

      ${catTables}
    </div>`;
}

// ── Page Shell ───────────────────────────────────────────────────────────────

function aeroInitPage() {
  const el = document.getElementById('page-aero');
  if (!el) return;
  el.innerHTML = `
   <div class="max-w-6xl mx-auto px-6">
    <button onclick="goToPage('projects-overview')" class="flex items-center gap-2 mb-6" style="color:#a855f7"><i data-lucide="arrow-left" style="width:16px;height:16px"></i> Back</button>
    <div class="card p-8 mb-8" style="background:linear-gradient(135deg,#a855f7,#e879f9)">
     <h1 class="font-heading font-bold text-4xl mb-3 text-white">AERO 2025</h1>
     <p class="text-lg text-white/90">Airlangga Expanding Reach &amp; Opportunities · 9–10 May 2025, Surabaya</p>
    </div>
    <div class="mb-8">
     <p class="text-lg max-w-4xl leading-relaxed" style="color:#64748B">AERO is an internationalization event that opens doors for Universitas Airlangga students to explore global opportunities in education, careers, and cultural exchange. More than just an event, AERO reflects UNAIR HEBAT values — shaping students into future-ready individuals with strong character, global insight, and a competitive edge. Through AERO, students engage directly with international universities, alumni, and professionals, gaining knowledge and networks to prepare them for the global stage.</p>
    </div>
    ${buildAeroWhatToExpect()}
    ${buildAeroContributions()}
    ${buildAeroCommittee()}
    ${buildAeroRundown()}
    ${buildAeroParticipants()}
    ${buildAeroBudget()}
    <div class="card p-8 mt-6">
     <div class="flex items-center gap-3 mb-2"><span class="accent-line"></span><h2 class="font-heading font-semibold text-2xl" style="color:#0F172A">Program Documents</h2></div>
     <p class="text-sm mb-6" style="color:#64748B">Supporting documentation for AERO 2025 — program proposal and participant data.</p>
     <div class="grid sm:grid-cols-2 gap-4">
      <a href="./assets/data/AERO 2025.docx" download class="flex items-center gap-4 rounded-xl p-5 transition-all duration-200 hover:shadow-md" style="background:linear-gradient(135deg,#faf5ff,#f3e8ff);border:1px solid rgba(168,85,247,0.2);text-decoration:none">
       <div class="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0" style="background:rgba(168,85,247,0.15)">
        <i data-lucide="file-text" style="width:24px;height:24px;color:#a855f7"></i>
       </div>
       <div class="flex-1 min-w-0">
        <p class="font-semibold text-sm" style="color:#0F172A">AERO 2025.docx</p>
        <p class="text-xs mt-0.5" style="color:#94A3B8">Program Proposal Document</p>
       </div>
       <i data-lucide="download" style="width:18px;height:18px;color:#a855f7;flex-shrink:0"></i>
      </a>
      <a href="./assets/data/AERO.xlsx" download class="flex items-center gap-4 rounded-xl p-5 transition-all duration-200 hover:shadow-md" style="background:linear-gradient(135deg,#faf5ff,#f3e8ff);border:1px solid rgba(168,85,247,0.2);text-decoration:none">
       <div class="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0" style="background:rgba(168,85,247,0.15)">
        <i data-lucide="table-2" style="width:24px;height:24px;color:#a855f7"></i>
       </div>
       <div class="flex-1 min-w-0">
        <p class="font-semibold text-sm" style="color:#0F172A">AERO.xlsx</p>
        <p class="text-xs mt-0.5" style="color:#94A3B8">Participant Data & Budget Spreadsheet</p>
       </div>
       <i data-lucide="download" style="width:18px;height:18px;color:#a855f7;flex-shrink:0"></i>
      </a>
     </div>
    </div>
   </div>`;

  if (window.lucide) lucide.createIcons();
}

document.addEventListener('DOMContentLoaded', function () {
  aeroInitPage();
});
