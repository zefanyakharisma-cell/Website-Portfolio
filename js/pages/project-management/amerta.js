// ── AMERTA Participant Statistics ────────────────────────────────────────────

const AMERTA_DATA = {
  all: {
    label: 'All Batches', period: '2024 – 2027',
    students: 207, countries: 14, uniCount: 24,
    color: '#2563EB', bg: 'linear-gradient(135deg,#EFF6FF,#DBEAFE)', border: 'rgba(37,99,235,0.15)',
    nationalities: [
      { country: 'Malaysia',    flag: '🇲🇾', count: 114 },
      { country: 'Philippines', flag: '🇵🇭', count: 29  },
      { country: 'France',      flag: '🇫🇷', count: 14  },
      { country: 'Germany',     flag: '🇩🇪', count: 10  },
      { country: 'Brunei',      flag: '🇧🇳', count: 10  },
      { country: 'Australia',   flag: '🇦🇺', count: 6   },
      { country: 'Poland',      flag: '🇵🇱', count: 6   },
      { country: 'Pakistan',    flag: '🇵🇰', count: 4   },
      { country: 'Netherlands', flag: '🇳🇱', count: 3   },
      { country: 'Cambodia',    flag: '🇰🇭', count: 3   },
      { country: 'Singapore',   flag: '🇸🇬', count: 2   },
      { country: 'UK',          flag: '🇬🇧', count: 1   },
      { country: 'Mexico',      flag: '🇲🇽', count: 1   },
      { country: 'Belgium',     flag: '🇧🇪', count: 1   },
    ],
    universities: [
      { region: '🇲🇾 Malaysia', items: [
        { name: 'Universiti Sultan Zainal Abidin (UniSZA)', count: 83 },
        { name: 'Universiti Teknologi MARA (UiTM)',         count: 16 },
        { name: 'Universiti Kebangsaan Malaysia (UKM)',     count: 15 },
        { name: 'Management & Science University (MSU)',    count: 1  },
      ]},
      { region: '🇵🇭 Philippines', items: [
        { name: 'Pangasinan State University', count: 18 },
        { name: 'Batangas State University',   count: 11 },
      ]},
      { region: '🇫🇷 France', items: [
        { name: "Université Le Havre Normandie", count: 9 },
        { name: 'VetAgro Sup',                   count: 4 },
        { name: "CESI École d'Ingénieurs",        count: 2 },
      ]},
      { region: '🇩🇪 Germany', items: [
        { name: 'DHBW Ravensburg',                          count: 3 },
        { name: 'Universität Hamburg',                      count: 3 },
        { name: 'Frankfurt University of Applied Sciences', count: 1 },
      ]},
      { region: '🇧🇳 Brunei', items: [
        { name: 'Universiti Brunei Darussalam (UBD)', count: 10 },
      ]},
      { region: '🇵🇱 Poland', items: [
        { name: 'University of Warsaw', count: 6 },
      ]},
      { region: '🇦🇺 Australia', items: [
        { name: 'Deakin University', count: 6 },
      ]},
      { region: '🇵🇰 Pakistan', items: [
        { name: 'Lahore University of Management Sciences', count: 4 },
      ]},
      { region: '🇳🇱 Netherlands', items: [
        { name: 'Fontys University of Applied Sciences', count: 2 },
        { name: 'Maastricht University',                 count: 1 },
      ]},
      { region: '🇰🇭 Cambodia', items: [
        { name: 'Royal University of Law & Economics', count: 3 },
      ]},
      { region: '🇸🇬 Singapore', items: [
        { name: 'Temasek Polytechnic', count: 2 },
      ]},
      { region: '🇬🇧 United Kingdom', items: [
        { name: 'Liverpool John Moores University', count: 1 },
      ]},
      { region: '🇧🇪 Belgium', items: [
        { name: 'EPHEC Brussels', count: 1 },
      ]},
      { region: '🇲🇽 Mexico', items: [
        { name: 'Universidad Panamericana', count: 1 },
      ]},
    ],
    faculties: [
      { name: 'Social & Political Science (FISIP)', count: 51 },
      { name: 'Humanities (FIB)',                   count: 29 },
      { name: 'Law (FH)',                           count: 25 },
      { name: 'Psychology (FPsi)',                  count: 23 },
      { name: 'Economy & Business (FEB)',           count: 17 },
      { name: 'Vocational Studies (FV)',            count: 5  },
      { name: 'Veterinary Medicine (FKH)',          count: 4  },
      { name: 'Medicine, Nursing & others',         count: 5  },
    ],
    facultyNote: 'Based on course registrations for AMERTA XXI, XXIII & XXIV. Students may be enrolled in multiple faculties simultaneously.',
    analysis: [
      { icon: '🌍', text: 'Across 4 batches (2024–2027), AMERTA enrolled <strong>207 students from 14 countries</strong> at 24 partner universities.' },
      { icon: '🇲🇾', text: '<strong>Malaysia is the dominant sending country</strong> across all batches, contributing 114 students — 55% of total enrollment.' },
      { icon: '🌏', text: 'Southeast Asian students (Malaysia + Philippines + Brunei) collectively account for over <strong>74%</strong> of total enrollment.' },
      { icon: '📚', text: '<strong>FISIP and FIB</strong> are the most popular study destinations, together hosting 39% of all course registrations across 3 batches.' },
      { icon: '📈', text: 'Geographic diversity grew steadily: <strong>7 → 9 → 7 → 12 countries</strong> per batch, with XXIV being the most diverse to date.' },
    ],
  },

  21: {
    label: 'AMERTA XXI', period: '2024 – 2025 Sem. 1',
    students: 68, countries: 7, uniCount: 10,
    color: '#2563EB', bg: 'linear-gradient(135deg,#EFF6FF,#DBEAFE)', border: 'rgba(37,99,235,0.15)',
    nationalities: [
      { country: 'Malaysia',    flag: '🇲🇾', count: 58 },
      { country: 'France',      flag: '🇫🇷', count: 3  },
      { country: 'Germany',     flag: '🇩🇪', count: 2  },
      { country: 'Brunei',      flag: '🇧🇳', count: 2  },
      { country: 'Belgium',     flag: '🇧🇪', count: 1  },
      { country: 'Netherlands', flag: '🇳🇱', count: 1  },
      { country: 'Pakistan',    flag: '🇵🇰', count: 1  },
    ],
    universities: [
      { region: '🇲🇾 Malaysia', items: [
        { name: 'Universiti Sultan Zainal Abidin (UniSZA)' },
        { name: 'Universiti Teknologi MARA (UiTM)'         },
        { name: 'Universiti Kebangsaan Malaysia (UKM)'     },
        { name: 'Management & Science University (MSU)'    },
      ]},
      { region: '🇫🇷 France', items: [
        { name: "Université Le Havre Normandie" },
      ]},
      { region: '🇩🇪 Germany', items: [
        { name: 'Universität Hamburg' },
      ]},
      { region: '🇧🇳 Brunei', items: [
        { name: 'Universiti Brunei Darussalam (UBD)' },
      ]},
      { region: '🇧🇪 Belgium', items: [
        { name: 'EPHEC Brussels' },
      ]},
      { region: '🇳🇱 Netherlands', items: [
        { name: 'Fontys University of Applied Sciences' },
      ]},
      { region: '🇵🇰 Pakistan', items: [
        { name: 'Lahore University of Management Sciences' },
      ]},
    ],
    faculties: [
      { name: 'Social & Political Science (FISIP)', count: 46 },
      { name: 'Law (FH)',                           count: 14 },
      { name: 'Psychology (FPsi)',                  count: 12 },
      { name: 'Economy & Business (FEB)',           count: 3  },
      { name: 'Humanities (FIB)',                   count: 2  },
      { name: 'Vocational Studies (FV)',            count: 1  },
      { name: 'Medicine (FK)',                      count: 1  },
    ],
    facultyNote: 'From Course-Students sheet. Students may be enrolled in multiple faculties simultaneously.',
    analysis: [
      { icon: '🏆', text: 'AMERTA XXI was the <strong>largest single-batch enrollment</strong> with 68 students — establishing the program\'s scale and operational blueprint.' },
      { icon: '🇲🇾', text: '<strong>Malaysia dominated with 85%</strong> of participants (58 of 68), primarily from UniSZA, reflecting a strong bilateral partnership.' },
      { icon: '🎓', text: '<strong>FISIP was the clear academic preference</strong> — 46 of 79 course registrations (58%) — the highest single-faculty concentration across all batches.' },
      { icon: '🌍', text: 'Despite the strong Malaysian majority, 7 countries were represented, including niche academic perspectives from Belgium, the Netherlands, and Germany.' },
    ],
  },

  22: {
    label: 'AMERTA XXII', period: '2024 – 2025 Sem. 2',
    students: 22, countries: 9, uniCount: 9,
    color: '#10B981', bg: 'linear-gradient(135deg,#F0FDF4,#DCFCE7)', border: 'rgba(16,185,129,0.15)',
    nationalities: [
      { country: 'Philippines', flag: '🇵🇭', count: 8 },
      { country: 'Poland',      flag: '🇵🇱', count: 3 },
      { country: 'France',      flag: '🇫🇷', count: 2 },
      { country: 'Cambodia',    flag: '🇰🇭', count: 2 },
      { country: 'Brunei',      flag: '🇧🇳', count: 2 },
      { country: 'Australia',   flag: '🇦🇺', count: 1 },
      { country: 'Mexico',      flag: '🇲🇽', count: 1 },
      { country: 'Pakistan',    flag: '🇵🇰', count: 1 },
      { country: 'Germany',     flag: '🇩🇪', count: 1 },
    ],
    universities: [
      { region: '🇵🇭 Philippines', items: [
        { name: 'Pangasinan State University' },
        { name: 'Batangas State University'   },
      ]},
      { region: '🇵🇱 Poland', items: [
        { name: 'University of Warsaw' },
      ]},
      { region: '🇫🇷 France', items: [
        { name: "Université Le Havre Normandie" },
      ]},
      { region: '🇰🇭 Cambodia', items: [
        { name: 'Royal University of Law & Economics' },
      ]},
      { region: '🇧🇳 Brunei', items: [
        { name: 'Universiti Brunei Darussalam (UBD)' },
      ]},
      { region: '🇦🇺 Australia', items: [
        { name: 'Deakin University' },
      ]},
      { region: '🇲🇽 Mexico', items: [
        { name: 'Universidad Panamericana' },
      ]},
      { region: '🇵🇰 Pakistan', items: [
        { name: 'Lahore University of Management Sciences' },
      ]},
      { region: '🇩🇪 Germany', items: [
        { name: 'Frankfurt University of Applied Sciences' },
      ]},
    ],
    faculties: null,
    facultyNote: null,
    analysis: [
      { icon: '🌍', text: 'AMERTA XXII was the <strong>smallest but most proportionally diverse</strong> batch: 9 nationalities for just 22 students — averaging 1 university per country.' },
      { icon: '🇵🇭', text: 'The Philippines led with <strong>8 students (36%)</strong>. For the first time in program history, <strong>Malaysia was entirely absent</strong> from the batch.' },
      { icon: '🆕', text: '<strong>First appearances</strong> of Mexico and Cambodia — significantly broadening AMERTA\'s global reach beyond Southeast Asia.' },
      { icon: '📋', text: '<strong>Faculty enrollment data was not recorded</strong> for this batch — a documentation gap that was addressed in subsequent semesters.' },
    ],
  },

  23: {
    label: 'AMERTA XXIII', period: '2025 – 2026',
    students: 67, countries: 7, uniCount: 10,
    color: '#F97316', bg: 'linear-gradient(135deg,#FFF7ED,#FFEDD5)', border: 'rgba(249,115,22,0.15)',
    nationalities: [
      { country: 'Malaysia',    flag: '🇲🇾', count: 42 },
      { country: 'Philippines', flag: '🇵🇭', count: 11 },
      { country: 'Germany',     flag: '🇩🇪', count: 5  },
      { country: 'Australia',   flag: '🇦🇺', count: 4  },
      { country: 'Brunei',      flag: '🇧🇳', count: 3  },
      { country: 'Netherlands', flag: '🇳🇱', count: 1  },
      { country: 'UK',          flag: '🇬🇧', count: 1  },
    ],
    universities: [
      { region: '🇲🇾 Malaysia', items: [
        { name: 'Universiti Sultan Zainal Abidin (UniSZA)' },
        { name: 'Universiti Teknologi MARA (UiTM)'         },
        { name: 'Universiti Kebangsaan Malaysia (UKM)'     },
      ]},
      { region: '🇵🇭 Philippines', items: [
        { name: 'Pangasinan State University' },
        { name: 'Batangas State University'   },
      ]},
      { region: '🇩🇪 Germany', items: [
        { name: 'DHBW Ravensburg'    },
        { name: 'Universität Hamburg' },
      ]},
      { region: '🇦🇺 Australia', items: [
        { name: 'Deakin University' },
      ]},
      { region: '🇧🇳 Brunei', items: [
        { name: 'Universiti Brunei Darussalam (UBD)' },
      ]},
      { region: '🇳🇱 Netherlands', items: [
        { name: 'Fontys / Maastricht University' },
      ]},
      { region: '🇬🇧 United Kingdom', items: [
        { name: 'Liverpool John Moores University' },
      ]},
    ],
    faculties: [
      { name: 'Humanities (FIB)',           count: 17 },
      { name: 'Law (FH)',                   count: 10 },
      { name: 'Economy & Business (FEB)',   count: 6  },
      { name: 'Psychology (FPsi)',          count: 5  },
      { name: 'Nursing (FKep)',             count: 1  },
      { name: 'Vocational Studies (FV)',    count: 1  },
      { name: 'Science & Technology (FST)', count: 1  },
    ],
    facultyNote: 'From KRS Baru course registration sheet. Students may be enrolled in multiple faculties simultaneously.',
    analysis: [
      { icon: '📈', text: 'AMERTA XXIII <strong>returned to scale with 67 students</strong> after the smaller XXII batch, maintaining the program\'s momentum.' },
      { icon: '🇲🇾', text: 'Malaysia remained the majority at 63%, but <strong>Philippines grew to 16%</strong> and Germany showed a notable 5-student cohort.' },
      { icon: '📚', text: '<strong>Humanities (FIB) overtook FISIP</strong> as the top faculty for the first time — 17 registrations reflect growing interest in Indonesian language and culture.' },
      { icon: '🇬🇧', text: 'The <strong>first British student</strong> joined from Liverpool John Moores University, adding a new European partner to the program network.' },
    ],
  },

  24: {
    label: 'AMERTA XXIV', period: '2026 – 2027',
    students: 50, countries: 12, uniCount: 13,
    color: '#A855F7', bg: 'linear-gradient(135deg,#FDF4FF,#FAE8FF)', border: 'rgba(168,85,247,0.15)',
    nationalities: [
      { country: 'Malaysia',    flag: '🇲🇾', count: 14 },
      { country: 'Philippines', flag: '🇵🇭', count: 10 },
      { country: 'France',      flag: '🇫🇷', count: 9  },
      { country: 'Poland',      flag: '🇵🇱', count: 3  },
      { country: 'Brunei',      flag: '🇧🇳', count: 3  },
      { country: 'Germany',     flag: '🇩🇪', count: 2  },
      { country: 'Singapore',   flag: '🇸🇬', count: 2  },
      { country: 'Pakistan',    flag: '🇵🇰', count: 2  },
      { country: 'Netherlands', flag: '🇳🇱', count: 1  },
      { country: 'Australia',   flag: '🇦🇺', count: 1  },
      { country: 'Cambodia',    flag: '🇰🇭', count: 1  },
    ],
    universities: [
      { region: '🇲🇾 Malaysia', items: [
        { name: 'Universiti Sultan Zainal Abidin (UniSZA)' },
        { name: 'Universiti Teknologi MARA (UiTM)'         },
        { name: 'Universiti Kebangsaan Malaysia (UKM)'     },
      ]},
      { region: '🇵🇭 Philippines', items: [
        { name: 'Pangasinan State University' },
        { name: 'Batangas State University'   },
      ]},
      { region: '🇫🇷 France', items: [
        { name: "Université Le Havre Normandie" },
        { name: 'VetAgro Sup'                   },
        { name: "CESI École d'Ingénieurs"       },
      ]},
      { region: '🇵🇱 Poland', items: [
        { name: 'University of Warsaw' },
      ]},
      { region: '🇧🇳 Brunei', items: [
        { name: 'Universiti Brunei Darussalam (UBD)' },
      ]},
      { region: '🇩🇪 Germany', items: [
        { name: 'Frankfurt University of Applied Sciences' },
      ]},
      { region: '🇸🇬 Singapore', items: [
        { name: 'Temasek Polytechnic' },
      ]},
      { region: '🇵🇰 Pakistan', items: [
        { name: 'Lahore University of Management Sciences' },
      ]},
      { region: '🇳🇱 Netherlands', items: [
        { name: 'Fontys University of Applied Sciences' },
      ]},
      { region: '🇦🇺 Australia', items: [
        { name: 'Deakin University' },
      ]},
      { region: '🇰🇭 Cambodia', items: [
        { name: 'Royal University of Law & Economics' },
      ]},
    ],
    faculties: [
      { name: 'Humanities (FIB)',                         count: 10 },
      { name: 'Economy & Business (FEB)',                 count: 8  },
      { name: 'Psychology (FPsi)',                        count: 6  },
      { name: 'Social & Political Science (FISIP)',       count: 5  },
      { name: 'Veterinary Medicine (FKH)',                count: 4  },
      { name: 'Vocational Studies (FV)',                  count: 3  },
      { name: 'Law (FH)',                                 count: 1  },
      { name: 'Medicine (FK)',                            count: 1  },
      { name: 'Advanced Technology (FTMM)',               count: 1  },
    ],
    facultyNote: 'From Matkul per Mahasiswa sheet. Data reflects applicants — final enrollment may vary. Students may enroll across multiple faculties.',
    analysis: [
      { icon: '🌍', text: 'AMERTA XXIV is the <strong>most geographically diverse batch</strong> with 12 countries — more than any previous iteration of the program.' },
      { icon: '🇫🇷', text: '<strong>France emerged as the 3rd-largest sender</strong> (18%, 9 students) from 3 partner institutions — reflecting a maturing European partnership network.' },
      { icon: '🆕', text: '<strong>Singapore appeared for the first time</strong>, and Veterinary Medicine (FKH) and Advanced Technology (FTMM) debuted as Airlangga study destinations.' },
      { icon: '📊', text: 'Malaysia\'s share dropped from 85% (XXI) to 28% (XXIV), demonstrating strong <strong>diversification of the sending-country portfolio</strong> over program iterations.' },
    ],
  },
};

// ── Helpers ──────────────────────────────────────────────────────────────────

function esc(s) {
  return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function buildOverview(key) {
  const d = AMERTA_DATA[key];
  if (key === 'all') {
    const cards = ['21', '22', '23', '24'].map(k => {
      const b = AMERTA_DATA[k];
      return `<div onclick="amertaSelectBatch('${k}')" class="rounded-xl p-5 text-center cursor-pointer hover:shadow-md transition-all duration-200" style="background:${b.bg};border:1px solid ${b.border}">
        <p class="font-heading font-bold text-2xl mb-1" style="color:${b.color}">${b.students}</p>
        <p class="font-heading font-semibold text-sm mb-1" style="color:#0F172A">${b.label}</p>
        <p class="text-xs mb-3" style="color:#64748B">${b.period}</p>
        <p class="text-xs" style="color:#64748B">
          <span style="color:${b.color};font-weight:600">${b.countries}</span> countries &middot;
          <span style="color:${b.color};font-weight:600">${b.uniCount}</span> universities
        </p>
      </div>`;
    }).join('');
    return `<div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">${cards}</div>`;
  }
  return `<div class="rounded-xl p-6 mb-8 flex flex-wrap gap-8 items-center" style="background:${d.bg};border:1px solid ${d.border}">
    <div class="text-center">
      <p class="font-heading font-bold text-3xl" style="color:${d.color}">${d.students}</p>
      <p class="text-xs mt-1" style="color:#64748B">Participants</p>
    </div>
    <div class="text-center">
      <p class="font-heading font-bold text-3xl" style="color:${d.color}">${d.countries}</p>
      <p class="text-xs mt-1" style="color:#64748B">Countries</p>
    </div>
    <div class="text-center">
      <p class="font-heading font-bold text-3xl" style="color:${d.color}">${d.uniCount}</p>
      <p class="text-xs mt-1" style="color:#64748B">Universities</p>
    </div>
    <div class="ml-auto text-right">
      <p class="font-heading font-bold text-xl" style="color:#0F172A">${d.label}</p>
      <p class="text-sm" style="color:#64748B">${d.period}</p>
    </div>
  </div>`;
}

function buildNationalities(d) {
  const max  = d.nationalities[0].count;
  const rows = d.nationalities.map(n => {
    const barPct   = ((n.count / max)      * 100).toFixed(1);
    const sharePct = ((n.count / d.students) * 100).toFixed(0);
    return `<div class="flex items-center gap-3">
      <span class="text-base w-7 flex-shrink-0">${n.flag}</span>
      <span class="text-sm w-28 flex-shrink-0" style="color:#0F172A">${esc(n.country)}</span>
      <div class="flex-1 rounded-full overflow-hidden" style="background:#F1F5F9;height:10px">
        <div class="h-full rounded-full" data-w="${barPct}%" style="width:0;background:linear-gradient(90deg,#2563EB,#38BDF8);transition:width .55s ease"></div>
      </div>
      <span class="text-sm font-semibold w-8 text-right" style="color:#2563EB">${n.count}</span>
      <span class="text-xs w-9 text-right" style="color:#94A3B8">${sharePct}%</span>
    </div>`;
  }).join('');
  return `<h3 class="font-heading font-semibold text-lg mb-5" style="color:#0F172A">
    Nationalities <span class="text-sm font-normal ml-2" style="color:#64748B">— ${d.nationalities.length} countries</span>
  </h3>
  <div class="space-y-3 mb-10">${rows}</div>`;
}

function buildUniversities(d) {
  const hasCount = d.universities.some(g => g.items.some(i => i.count != null));
  const cards = d.universities.map(g => {
    const items = g.items.map(item => {
      const badge = item.count != null
        ? `<span class="text-xs font-semibold px-2 py-0.5 rounded-full flex-shrink-0" style="background:#EFF6FF;color:#2563EB">${item.count}</span>`
        : '';
      return `<div class="flex justify-between items-center gap-2">
        <span class="text-sm" style="color:#0F172A">${esc(item.name)}</span>${badge}
      </div>`;
    }).join('');
    return `<div class="rounded-lg p-4" style="background:#F8FAFC;border:1px solid rgba(56,189,248,0.1)">
      <p class="text-xs font-semibold mb-2" style="color:#2563EB">${esc(g.region)}</p>
      <div class="space-y-1.5">${items}</div>
    </div>`;
  }).join('');
  const note = hasCount ? ' — student counts across all batches' : '';
  return `<h3 class="font-heading font-semibold text-lg mb-5" style="color:#0F172A">
    Partner Universities <span class="text-sm font-normal ml-2" style="color:#64748B">— ${d.uniCount} institutions${note}</span>
  </h3>
  <div class="grid md:grid-cols-2 gap-3 mb-10">${cards}</div>`;
}

function buildFaculties(d) {
  if (!d.faculties) {
    return `<h3 class="font-heading font-semibold text-lg mb-2" style="color:#0F172A">Faculty Enrollment at Airlangga</h3>
    <div class="rounded-lg p-6 mb-10 text-center" style="background:#F8FAFC;border:1px dashed rgba(100,116,139,0.3)">
      <p class="text-sm" style="color:#94A3B8">📋 Faculty enrollment data was not recorded for this batch.</p>
    </div>`;
  }
  const max  = d.faculties[0].count;
  const rows = d.faculties.map(f => {
    const pct = ((f.count / max) * 100).toFixed(1);
    return `<div class="flex items-center gap-3">
      <span class="text-sm w-52 flex-shrink-0" style="color:#0F172A">${esc(f.name)}</span>
      <div class="flex-1 rounded-full overflow-hidden" style="background:#F1F5F9;height:10px">
        <div class="h-full rounded-full" data-w="${pct}%" style="width:0;background:linear-gradient(90deg,#2563EB,#38BDF8);transition:width .55s ease"></div>
      </div>
      <span class="text-sm font-semibold w-8 text-right" style="color:#2563EB">${f.count}</span>
    </div>`;
  }).join('');
  return `<h3 class="font-heading font-semibold text-lg mb-2" style="color:#0F172A">Faculty Enrollment at Airlangga</h3>
  <p class="text-xs mb-5" style="color:#94A3B8">${esc(d.facultyNote)}</p>
  <div class="space-y-3 mb-10">${rows}</div>`;
}

function buildAnalysis(d) {
  const items = d.analysis.map(a =>
    `<div class="flex gap-3 items-start">
      <span class="text-xl flex-shrink-0 mt-0.5">${a.icon}</span>
      <p class="text-sm leading-relaxed" style="color:#475569">${a.text}</p>
    </div>`
  ).join('');
  return `<div class="rounded-xl p-6" style="background:linear-gradient(135deg,#F8FAFC,#EFF6FF);border:1px solid rgba(37,99,235,0.1)">
    <h3 class="font-heading font-semibold text-base mb-4" style="color:#0F172A">Batch Analysis</h3>
    <div class="space-y-3">${items}</div>
  </div>`;
}

// ── Page Shell ───────────────────────────────────────────────────────────────

function amertaInitPage() {
  const el = document.getElementById('page-amerta');
  if (!el) return;
  el.innerHTML = `
   <div class="max-w-6xl mx-auto px-6">
    <button onclick="goToPage('projects-overview')" class="flex items-center gap-2 mb-6" style="color:#2563EB"><i data-lucide="arrow-left" style="width:16px;height:16px"></i> Back</button>
    <div class="card p-8 mb-8" style="background:linear-gradient(135deg,#2563EB,#38BDF8)">
     <h1 class="font-heading font-bold text-4xl mb-3 text-white">AMERTA</h1>
     <p class="text-lg text-white/90">Semester Exchange Program</p>
    </div>
    <div class="mb-8">
     <p class="text-lg max-w-4xl leading-relaxed" style="color:#64748B">As Project Manager of the AMERTA Exchange Program at Airlangga Global Engagement, I managed the entire student mobility journey — from institutional outreach and student recruitment to academic coordination, cultural engagement, and farewell sessions. The role required strategic coordination across universities, faculties, immigration offices, vendors, and international students from multiple countries.</p>
    </div>
    <div class="space-y-6 mb-6">
     <div class="card p-8 border-l-4" style="border-color:#2563EB">
      <div class="flex items-start gap-5">
       <div class="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0" style="background:rgba(37,99,235,0.1)">
        <i data-lucide="mail" style="width:28px;height:28px;color:#2563EB"></i>
       </div>
       <div>
        <h3 class="font-heading font-bold text-xl mb-2" style="color:#0F172A">1. Institutional Outreach &amp; Student Recruitment</h3>
        <p style="color:#64748B">Coordinated with international partner universities regarding program promotion, student nominations, application processes, and recruitment timelines. Managed communication with both institutional representatives and prospective exchange students.</p>
       </div>
      </div>
     </div>
     <div class="card p-8 border-l-4" style="border-color:#10B981">
      <div class="flex items-start gap-5">
       <div class="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0" style="background:rgba(16,185,129,0.1)">
        <i data-lucide="presentation" style="width:28px;height:28px;color:#10B981"></i>
       </div>
       <div>
        <h3 class="font-heading font-bold text-xl mb-2" style="color:#0F172A">2. Pre-Departure Orientation</h3>
        <p style="color:#64748B">Organized pre-departure orientation sessions covering academic systems, Indonesian culture, immigration procedures, accommodation guidance, and student preparedness before arrival in Indonesia.</p>
       </div>
      </div>
     </div>
     <div class="card p-8 border-l-4" style="border-color:#8B5CF6">
      <div class="flex items-start gap-5">
       <div class="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0" style="background:rgba(139,92,246,0.1)">
        <i data-lucide="book-open-check" style="width:28px;height:28px;color:#8B5CF6"></i>
       </div>
       <div>
        <h3 class="font-heading font-bold text-xl mb-2" style="color:#0F172A">3. Academic Coordination &amp; Credit Transfer</h3>
        <p style="color:#64748B">Managed course mapping and credit transfer processes between Universitas Airlangga and international partner institutions. Bridged communication between faculties, academic coordinators, and students to ensure smooth academic recognition.</p>
       </div>
      </div>
     </div>
     <div class="card p-8 border-l-4" style="border-color:#F97316">
      <div class="flex items-start gap-5">
       <div class="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0" style="background:rgba(249,115,22,0.1)">
        <i data-lucide="plane-landing" style="width:28px;height:28px;color:#F97316"></i>
       </div>
       <div>
        <h3 class="font-heading font-bold text-xl mb-2" style="color:#0F172A">4. Arrival, Visa, Immigration &amp; Accommodation</h3>
        <p style="color:#64748B">Managed airport pick-up services, accommodation arrangements, visa documentation, immigration coordination, and arrival logistics to ensure students experienced a smooth transition into Indonesia.</p>
       </div>
      </div>
     </div>
     <div class="card p-8 border-l-4" style="border-color:#EC4899">
      <div class="flex items-start gap-5">
       <div class="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0" style="background:rgba(236,72,153,0.1)">
        <i data-lucide="users" style="width:28px;height:28px;color:#EC4899"></i>
       </div>
       <div>
        <h3 class="font-heading font-bold text-xl mb-2" style="color:#0F172A">5. Arrival Orientation &amp; Student Integration</h3>
        <p style="color:#64748B">Conducted orientation sessions introducing students to campus life, academic systems, Indonesian culture, safety information, and student support services to help them adapt quickly.</p>
       </div>
      </div>
     </div>
     <div class="card p-8 border-l-4" style="border-color:#0EA5E9">
      <div class="flex items-start gap-5">
       <div class="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0" style="background:rgba(14,165,233,0.1)">
        <i data-lucide="clipboard-check" style="width:28px;height:28px;color:#0EA5E9"></i>
       </div>
       <div>
        <h3 class="font-heading font-bold text-xl mb-2" style="color:#0F172A">6. Semester Monitoring &amp; Student Support</h3>
        <p style="color:#64748B">Monitored academic progress and student well-being throughout the semester by coordinating continuously with faculties, lecturers, and students. Ensured issues were addressed efficiently and student experiences remained positive.</p>
       </div>
      </div>
     </div>
     <div class="card p-8 border-l-4" style="border-color:#14B8A6">
      <div class="flex items-start gap-5">
       <div class="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0" style="background:rgba(20,184,166,0.1)">
        <i data-lucide="mountain" style="width:28px;height:28px;color:#14B8A6"></i>
       </div>
       <div>
        <h3 class="font-heading font-bold text-xl mb-2" style="color:#0F172A">7. Cultural Trips &amp; Cultural Experiences</h3>
        <p style="color:#64748B">Planned and managed cultural immersion activities, local trips, and intercultural experiences to help international students better understand Indonesian culture and strengthen cross-cultural engagement.</p>
       </div>
      </div>
     </div>
     <div class="card p-8 border-l-4" style="border-color:#334155">
      <div class="flex items-start gap-5">
       <div class="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0" style="background:rgba(51,65,85,0.1)">
        <i data-lucide="party-popper" style="width:28px;height:28px;color:#334155"></i>
       </div>
       <div>
        <h3 class="font-heading font-bold text-xl mb-2" style="color:#0F172A">8. Farewell Session &amp; Program Closure</h3>
        <p style="color:#64748B">Organized farewell sessions and program closure activities to celebrate student achievements, gather feedback, and maintain long-term institutional and student relationships.</p>
       </div>
      </div>
     </div>
    </div>
    <div class="card p-8 mt-6">
     <div class="flex items-center gap-3 mb-2"><span class="accent-line"></span><h2 class="font-heading font-semibold text-2xl" style="color:#0F172A">Participant Statistics</h2></div>
     <p class="text-sm mb-6" id="amerta-stats-subtitle" style="color:#64748B">Data compiled from AMERTA XXI–XXIV across 207 participants, 14 nationalities, and 24 partner universities.</p>
     <div class="flex flex-wrap gap-2 mb-8">
      <button class="amerta-batch-tab px-4 py-2 rounded-full text-sm font-semibold border transition-all duration-200" data-batch="all" style="cursor:pointer;background:#2563EB;color:#fff;border-color:#2563EB">All Batches</button>
      <button class="amerta-batch-tab px-4 py-2 rounded-full text-sm font-semibold border transition-all duration-200" data-batch="21" style="cursor:pointer;color:#64748B;border-color:rgba(100,116,139,0.3)">AMERTA XXI</button>
      <button class="amerta-batch-tab px-4 py-2 rounded-full text-sm font-semibold border transition-all duration-200" data-batch="22" style="cursor:pointer;color:#64748B;border-color:rgba(100,116,139,0.3)">AMERTA XXII</button>
      <button class="amerta-batch-tab px-4 py-2 rounded-full text-sm font-semibold border transition-all duration-200" data-batch="23" style="cursor:pointer;color:#64748B;border-color:rgba(100,116,139,0.3)">AMERTA XXIII</button>
      <button class="amerta-batch-tab px-4 py-2 rounded-full text-sm font-semibold border transition-all duration-200" data-batch="24" style="cursor:pointer;color:#64748B;border-color:rgba(100,116,139,0.3)">AMERTA XXIV</button>
     </div>
     <div id="amerta-stats-content"></div>
    </div>
   </div>`;
}

// ── Render ───────────────────────────────────────────────────────────────────

function amertaRenderBatch(key) {
  const d = AMERTA_DATA[key];
  if (!d) return;

  document.querySelectorAll('.amerta-batch-tab').forEach(tab => {
    const active       = tab.dataset.batch === key;
    tab.style.background  = active ? d.color : '';
    tab.style.color       = active ? '#fff'  : '#64748B';
    tab.style.borderColor = active ? d.color : 'rgba(100,116,139,0.3)';
  });

  const sub = document.getElementById('amerta-stats-subtitle');
  if (sub) sub.textContent = key === 'all'
    ? 'Data compiled from AMERTA XXI–XXIV across 207 participants, 14 nationalities, and 24 partner universities.'
    : `${d.label} · ${d.period} · ${d.students} participants from ${d.countries} countries`;

  const el = document.getElementById('amerta-stats-content');
  if (!el) return;
  el.innerHTML = buildOverview(key) + buildNationalities(d) + buildUniversities(d) + buildFaculties(d) + buildAnalysis(d);

  requestAnimationFrame(() => requestAnimationFrame(() => {
    el.querySelectorAll('[data-w]').forEach(bar => { bar.style.width = bar.dataset.w; });
  }));
}

window.amertaSelectBatch = function (key) { amertaRenderBatch(key); };

// ── Init ─────────────────────────────────────────────────────────────────────

document.addEventListener('DOMContentLoaded', function () {
  amertaInitPage();
  if (window.lucide) lucide.createIcons();
  document.querySelectorAll('.amerta-batch-tab').forEach(tab => {
    tab.addEventListener('click', function () { amertaRenderBatch(this.dataset.batch); });
  });
  amertaRenderBatch('all');
});
