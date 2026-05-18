// ── AMERTA Participant Statistics ────────────────────────────────────────────

const AMERTA_DATA = {
  all: {
    label: 'All Batches', period: '2024 – 2027',
    students: 207, countries: 14, uniCount: 24,
    color: '#1E3A5F', bg: 'linear-gradient(135deg,#EEF2F7,#D8E5EF)', border: 'rgba(30,58,95,0.15)',
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
        <div class="h-full rounded-full" data-w="${barPct}%" style="width:0;background:linear-gradient(90deg,#1E3A5F,#4A6B8A);transition:width .55s ease"></div>
      </div>
      <span class="text-sm font-semibold w-8 text-right" style="color:#1E3A5F">${n.count}</span>
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
        ? `<span class="text-xs font-semibold px-2 py-0.5 rounded-full flex-shrink-0" style="background:rgba(30,58,95,0.1);color:#1E3A5F">${item.count}</span>`
        : '';
      return `<div class="flex justify-between items-center gap-2">
        <span class="text-sm" style="color:#0F172A">${esc(item.name)}</span>${badge}
      </div>`;
    }).join('');
    return `<div class="rounded-lg p-4" style="background:#F8FAFC;border:1px solid rgba(74,107,138,0.12)">
      <p class="text-xs font-semibold mb-2" style="color:#1E3A5F">${esc(g.region)}</p>
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
        <div class="h-full rounded-full" data-w="${pct}%" style="width:0;background:linear-gradient(90deg,#1E3A5F,#4A6B8A);transition:width .55s ease"></div>
      </div>
      <span class="text-sm font-semibold w-8 text-right" style="color:#1E3A5F">${f.count}</span>
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
  return `<div class="rounded-xl p-6" style="background:linear-gradient(135deg,#EEF2F7,#D8E5EF);border:1px solid rgba(30,58,95,0.12)">
    <h3 class="font-heading font-semibold text-base mb-4" style="color:#0F172A">Batch Analysis</h3>
    <div class="space-y-3">${items}</div>
  </div>`;
}

// ── Page Shell ───────────────────────────────────────────────────────────────

function amertaInitPage() {
  const el = document.getElementById('page-amerta');
  if (!el) return;

  const steps = [
    { n:'01', icon:'mail',            title:'Institutional Outreach & Student Recruitment',   desc:'Coordinated with international partner universities regarding program promotion, student nominations, application processes, and recruitment timelines. Managed communication with both institutional representatives and prospective exchange students.' },
    { n:'02', icon:'presentation',    title:'Pre-Departure Orientation',                      desc:'Organized pre-departure orientation sessions covering academic systems, Indonesian culture, immigration procedures, accommodation guidance, and student preparedness before arrival in Indonesia.' },
    { n:'03', icon:'book-open-check', title:'Academic Coordination & Credit Transfer',        desc:'Managed course mapping and credit transfer processes between Universitas Airlangga and international partner institutions. Bridged communication between faculties, academic coordinators, and students to ensure smooth academic recognition.' },
    { n:'04', icon:'plane-landing',   title:'Arrival, Visa, Immigration & Accommodation',     desc:'Managed airport pick-up services, accommodation arrangements, visa documentation, immigration coordination, and arrival logistics to ensure students experienced a smooth transition into Indonesia.' },
    { n:'05', icon:'users',           title:'Arrival Orientation & Student Integration',       desc:'Conducted orientation sessions introducing students to campus life, academic systems, Indonesian culture, safety information, and student support services to help them adapt quickly.' },
    { n:'06', icon:'clipboard-check', title:'Semester Monitoring & Student Support',           desc:'Monitored academic progress and student well-being throughout the semester by coordinating continuously with faculties, lecturers, and students. Ensured issues were addressed efficiently and student experiences remained positive.' },
    { n:'07', icon:'mountain',        title:'Cultural Trips & Cultural Experiences',           desc:'Planned and managed cultural immersion activities, local trips, and intercultural experiences to help international students better understand Indonesian culture and strengthen cross-cultural engagement.' },
    { n:'08', icon:'party-popper',    title:'Farewell Session & Program Closure',             desc:'Organized farewell sessions and program closure activities to celebrate student achievements, gather feedback, and maintain long-term institutional and student relationships.' },
  ];

  const stepsHtml = steps.map(s => `
   <div class="flex gap-6 py-8" style="border-top:1px solid rgba(28,28,30,0.07)">
    <div class="flex-shrink-0 w-10 pt-0.5">
     <span class="font-heading font-bold text-3xl select-none" style="color:rgba(28,28,30,0.1);line-height:1">${s.n}</span>
    </div>
    <div class="flex gap-4 flex-1">
     <div class="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5" style="background:rgba(74,107,138,0.1)">
      <i data-lucide="${s.icon}" style="width:18px;height:18px;color:#4A6B8A"></i>
     </div>
     <div>
      <h3 class="font-heading font-semibold text-lg mb-2" style="color:#1C1C1E">${s.title}</h3>
      <p class="text-sm leading-relaxed" style="color:#5C5C5C">${s.desc}</p>
     </div>
    </div>
   </div>
  `).join('');

  el.innerHTML = `
   <div class="page-hero-banner relative overflow-hidden" style="background:linear-gradient(135deg,#1E3A5F 0%,#2D5A8A 60%,#4A6B8A 100%);padding:64px 0 48px">
    <div class="absolute -right-16 -top-16 w-80 h-80 rounded-full" style="background:rgba(255,255,255,0.04)"></div>
    <div class="absolute right-24 bottom-8 w-48 h-48 rounded-full" style="border:2px solid rgba(255,255,255,0.06)"></div>
    <div class="absolute inset-0 flex items-center justify-end overflow-hidden pr-8 pointer-events-none select-none" aria-hidden="true">
     <span class="font-heading font-bold" style="font-size:clamp(5rem,16vw,13rem);color:rgba(255,255,255,0.05);letter-spacing:-.04em;line-height:1">AMERTA</span>
    </div>
    <div class="relative z-10 max-w-6xl mx-auto px-6">
     <button onclick="goToPage('projects-overview')" class="flex items-center gap-2 mb-8" style="color:rgba(255,255,255,0.7)"><i data-lucide="arrow-left" style="width:16px;height:16px"></i> Back</button>
     <span class="inline-block px-4 py-1.5 rounded-full text-xs font-semibold mb-5 uppercase tracking-wider" style="background:rgba(255,255,255,0.12);color:#fff">Project Management</span>
     <h1 class="font-heading font-bold mb-3 text-white" style="font-size:clamp(2.5rem,6vw,4rem);letter-spacing:-.02em">AMERTA</h1>
     <p class="text-base max-w-2xl" style="color:rgba(255,255,255,0.75)">Airlangga Mobility, Exchange, Research &amp; Transfer Academic — Universitas Airlangga's flagship semester exchange, managed end-to-end across 4 batches.</p>
    </div>
   </div>
   <div class="max-w-6xl mx-auto px-6">
    <div class="flex flex-wrap gap-10 py-10" style="border-bottom:1px solid rgba(28,28,30,0.08)">
     <div><div class="font-heading font-bold text-4xl" style="color:#1C1C1E">207</div><div class="text-xs uppercase tracking-wider mt-1" style="color:#9A9A9A">Students (XXI–XXIV)</div></div>
     <div><div class="font-heading font-bold text-4xl" style="color:#1C1C1E">14</div><div class="text-xs uppercase tracking-wider mt-1" style="color:#9A9A9A">Countries</div></div>
     <div><div class="font-heading font-bold text-4xl" style="color:#1C1C1E">24</div><div class="text-xs uppercase tracking-wider mt-1" style="color:#9A9A9A">Partner Universities</div></div>
     <div><div class="font-heading font-bold text-4xl" style="color:#1C1C1E">IDR 50–100M</div><div class="text-xs uppercase tracking-wider mt-1" style="color:#9A9A9A">Budget / cohort</div></div>
    </div>
   </div>
   <div class="max-w-6xl mx-auto px-6 py-14">
    <p class="text-lg max-w-3xl leading-relaxed mb-14" style="color:#5C5C5C">As Project Manager of AMERTA at Airlangga Global Engagement, I oversaw the entire student mobility journey — from institutional outreach and student recruitment to academic coordination, cultural programming, and program closure across 4 cohorts with IDR 50–100M budgets per program.</p>
    <div class="flex items-center gap-3 mb-3"><span class="accent-line"></span><span class="text-sm font-semibold" style="color:#4A6B8A">Program Process</span></div>
    <h2 class="font-heading font-bold text-3xl mb-2" style="color:#1C1C1E">End-to-End Responsibilities</h2>
    <div class="mt-6">${stepsHtml}</div>
   </div>
   <div style="background:#F2ECE4;border-top:1px solid rgba(28,28,30,0.07)">
    <div class="max-w-6xl mx-auto px-6 py-16">
     <div class="flex items-center gap-3 mb-3"><span class="accent-line"></span><span class="text-sm font-semibold" style="color:#4A6B8A">Data &amp; Analytics</span></div>
     <h2 class="font-heading font-bold text-3xl mb-2" style="color:#1C1C1E">Participant Statistics</h2>
     <p class="text-sm mb-8" id="amerta-stats-subtitle" style="color:#5C5C5C">Data compiled from AMERTA XXI–XXIV across 207 participants, 14 nationalities, and 24 partner universities.</p>
     <div class="flex flex-wrap gap-2 mb-8">
      <button class="amerta-batch-tab px-4 py-2 rounded-full text-sm font-semibold border transition-all duration-200" data-batch="all" style="cursor:pointer;background:#1E3A5F;color:#fff;border-color:#1E3A5F">All Batches</button>
      <button class="amerta-batch-tab px-4 py-2 rounded-full text-sm font-semibold border transition-all duration-200" data-batch="21" style="cursor:pointer;color:#5C5C5C;border-color:rgba(28,28,30,0.2)">AMERTA XXI</button>
      <button class="amerta-batch-tab px-4 py-2 rounded-full text-sm font-semibold border transition-all duration-200" data-batch="22" style="cursor:pointer;color:#5C5C5C;border-color:rgba(28,28,30,0.2)">AMERTA XXII</button>
      <button class="amerta-batch-tab px-4 py-2 rounded-full text-sm font-semibold border transition-all duration-200" data-batch="23" style="cursor:pointer;color:#5C5C5C;border-color:rgba(28,28,30,0.2)">AMERTA XXIII</button>
      <button class="amerta-batch-tab px-4 py-2 rounded-full text-sm font-semibold border transition-all duration-200" data-batch="24" style="cursor:pointer;color:#5C5C5C;border-color:rgba(28,28,30,0.2)">AMERTA XXIV</button>
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
    tab.style.color       = active ? '#fff'  : '#5C5C5C';
    tab.style.borderColor = active ? d.color : 'rgba(28,28,30,0.2)';
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
