// ── ACI (Airlangga Cultural Immersion) Page ──────────────────────────────────

const ACI_DATA = {
  all: {
    label: 'All Batches', period: '2024 – 2025',
    participants: 191, batches: 4, countries: 25, locations: 3,
    color: '#4A5235', bg: 'linear-gradient(135deg,#F1F3EE,#E4E8DC)', border: 'rgba(74,82,53,0.15)',
    budgetTotal: 236566376,
    budgetNote: 'Combined realization across 4 batches. Batch 1 2025 budget is estimated from line items.',
    budgetCategories: [
      { name: 'Activities/Events',   amount: 97134000, color: '#4A5235' },
      { name: 'Accommodation',       amount: 60760000, color: '#2563EB' },
      { name: 'Transport',           amount: 37501000, color: '#F97316' },
      { name: 'Food & Beverages',    amount: 26479000, color: '#8B5CF6' },
      { name: 'Consumables/Shirts',  amount: 14363576, color: '#EC4899' },
      { name: 'Emergency',           amount: 2230000,  color: '#64748B' },
    ],
    budgetBatches: [
      { label: '2024 B1 Malang',     spent: 95359000,  budget: 111000000 },
      { label: '2025 B1 Malang',     spent: 50800200,  budget: null      },
      { label: '2025 B2.1 Solo',     spent: 44447176,  budget: 60899800  },
      { label: '2025 B2.2 Mojokerto',spent: 45360000,  budget: null      },
    ],
    nationalities: [
      { country: 'Malaysia',     flag: '🇲🇾', count: 77  },
      { country: 'Philippines',  flag: '🇵🇭', count: 11  },
      { country: 'Pakistan',     flag: '🇵🇰', count: 11  },
      { country: 'Timor-Leste',  flag: '🇹🇱', count: 8   },
      { country: 'Yemen',        flag: '🇾🇪', count: 6   },
      { country: 'Netherlands',  flag: '🇳🇱', count: 5   },
      { country: 'Brunei',       flag: '🇧🇳', count: 5   },
      { country: 'Australia',    flag: '🇦🇺', count: 4   },
      { country: 'Poland',       flag: '🇵🇱', count: 4   },
      { country: 'Sierra Leone', flag: '🇸🇱', count: 3   },
      { country: 'Germany',      flag: '🇩🇪', count: 3   },
      { country: 'Bangladesh',   flag: '🇧🇩', count: 2   },
      { country: 'Belgium',      flag: '🇧🇪', count: 2   },
      { country: 'France',       flag: '🇫🇷', count: 2   },
      { country: 'Myanmar',      flag: '🇲🇲', count: 2   },
      { country: 'Afghanistan',  flag: '🇦🇫', count: 2   },
      { country: 'Nigeria',      flag: '🇳🇬', count: 2   },
      { country: 'United Kingdom',flag:'🇬🇧', count: 1   },
      { country: 'Indonesia',    flag: '🇮🇩', count: 1   },
      { country: 'Belarus',      flag: '🇧🇾', count: 1   },
      { country: 'Kenya',        flag: '🇰🇪', count: 1   },
      { country: 'Gambia',       flag: '🇬🇲', count: 1   },
      { country: 'Others',       flag: '🌍',  count: 8   },
    ],
    natNote: 'Nationality data is fully available for 3 of 4 batches (144 participants). ACI 2025 Batch 1 has partial data due to spreadsheet formula errors; Malaysia (19 via IUP program) is confirmed.',
    programs: [
      { name: 'AMERTA Exchange',              count: 97, color: '#2563EB' },
      { name: 'Regular IUP',                  count: 19, color: '#4A5235' },
      { name: 'ADS (Airlangga Darmasiswa)',    count: 19, color: '#F97316' },
      { name: 'KNB (Kemitraan Negara Berkembang)', count: 25, color: '#8B5CF6' },
      { name: 'TIAS (TIAS Program)',           count: 9,  color: '#EC4899' },
      { name: 'DARMASISWA / Other',            count: 3,  color: '#64748B' },
    ],
    gender: { M: 53, F: 79, note: 'Gender data available for 132 participants across 3 batches.' },
    satisfaction: {
      scale: 'mixed',
      note: '2024 used a 1–10 scale; 2025 used a 1–4 scale. Scores converted to percentage for comparison.',
      batches: [
        { label: '2024 B1 Malang (1–10)',   overall: 8.58,  max: 10, pct: 85.8,  n: 19 },
        { label: '2025 B1 Malang (1–4)',    overall: 3.79,  max: 4,  pct: 94.8,  n: 61 },
        { label: '2025 B2.1 Solo (1–4)',    overall: 3.96,  max: 4,  pct: 99.0,  n: 24 },
        { label: '2025 B2.2 Mojokerto (1–4)',overall: 3.50, max: 4,  pct: 87.5,  n: 12 },
      ],
    },
    analysis: [
      { icon: '👥', text: 'Across 4 batches (2024–2025), ACI reached <strong>191 participants from 25+ countries</strong> across 3 destinations: Malang, Solo, and Mojokerto.' },
      { icon: '🇲🇾', text: '<strong>Malaysian students dominate</strong> ACI enrollment (~40%), primarily from AMERTA and IUP programs — reflecting a strong bilateral academic partnership with Malaysian universities.' },
      { icon: '🌍', text: 'Batch 2.2 Mojokerto featured the <strong>most diverse nationalities</strong> (12 countries) with strong representation from Africa, the Pacific, and Southeast Asia — entirely different from the AMERTA-heavy batches.' },
      { icon: '📈', text: '<strong>Satisfaction consistently high</strong> across all batches — ranging from 85.8% (2024) to 99% (2025 B2.1 Solo), with the Solo batch achieving near-perfect scores.' },
      { icon: '💰', text: 'Total program cost of <strong>IDR 236M across 4 batches</strong> averages IDR 1.24M per participant — demonstrating cost-efficient cultural immersion at scale.' },
    ],
  },

  b1_2024: {
    label: 'ACI 2024', sublabel: 'Batch 1 – Malang',
    period: '4–5 May 2024', location: 'Malang & Batu, East Java',
    participants: 55,
    color: '#2563EB', bg: 'linear-gradient(135deg,#EFF6FF,#DBEAFE)', border: 'rgba(37,99,235,0.15)',
    vendors: [
      { category: 'Hotel',      name: 'Hotel 38frontone, Batu',     desc: 'Accommodation for participants during the 2-night program stay in Batu.' },
      { category: 'Venue',      name: 'Kebun Raya Purwodadi',       desc: 'Botanical garden visit with guided tour, plant science class, and planting workshop — Day 1 cultural activity.' },
      { category: 'Venue',      name: 'Kaliandra Batu Adventure',   desc: 'Jeep off-road adventure through the Batu highlands — highlight activity of Day 2.' },
      { category: 'Food',       name: 'Laritta',                    desc: 'Catering for group meals throughout the program.' },
      { category: 'Food',       name: 'RM Joglo Batu',              desc: 'Traditional Javanese restaurant for evening dinner experience in Batu.' },
    ],
    activities: [
      'Guided botanical tour at Kebun Raya Purwodadi with plant science & planting class',
      'Jeep off-road adventure through Batu highlands (Kaliandra Adventure)',
      'Group cultural dinner at traditional Javanese restaurant (Joglo Batu)',
      'Overnight stay with social bonding activities between participants',
    ],
    budgetTotal: 95359000,
    budgetAlloc: 111000000,
    budgetCategories: [
      { name: 'Transport (Bus)',    amount: 31191000, color: '#F97316' },
      { name: 'Activities/Events', amount: 30094000, color: '#4A5235' },
      { name: 'Accommodation',     amount: 19200000, color: '#2563EB' },
      { name: 'Food & Beverages',  amount: 7150000,  color: '#8B5CF6' },
      { name: 'Consumables',       amount: 5494000,  color: '#EC4899' },
      { name: 'Emergency',         amount: 2230000,  color: '#64748B' },
    ],
    nationalities: [
      { country: 'Malaysia',    flag: '🇲🇾', count: 16 },
      { country: 'Poland',      flag: '🇵🇱', count: 4  },
      { country: 'Netherlands', flag: '🇳🇱', count: 4  },
      { country: 'Yemen',       flag: '🇾🇪', count: 3  },
      { country: 'Sierra Leone',flag: '🇸🇱', count: 3  },
      { country: 'Timor-Leste', flag: '🇹🇱', count: 3  },
      { country: 'Pakistan',    flag: '🇵🇰', count: 3  },
      { country: 'Myanmar',     flag: '🇲🇲', count: 2  },
      { country: 'Afghanistan', flag: '🇦🇫', count: 2  },
      { country: 'Brunei',      flag: '🇧🇳', count: 2  },
      { country: 'Belgium',     flag: '🇧🇪', count: 2  },
      { country: 'France',      flag: '🇫🇷', count: 2  },
      { country: 'Gambia',      flag: '🇬🇲', count: 1  },
      { country: 'Indonesia',   flag: '🇮🇩', count: 1  },
      { country: 'Belarus',     flag: '🇧🇾', count: 1  },
      { country: 'Germany',     flag: '🇩🇪', count: 1  },
      { country: 'China',       flag: '🇨🇳', count: 1  },
      { country: 'Vietnam',     flag: '🇻🇳', count: 1  },
      { country: 'Honduras',    flag: '🇭🇳', count: 1  },
      { country: 'Sri Lanka',   flag: '🇱🇰', count: 1  },
      { country: 'Kazakhstan',  flag: '🇰🇿', count: 1  },
    ],
    programs: [
      { name: 'AMERTA XX',                    count: 21, color: '#2563EB' },
      { name: 'Regular IUP',                  count: 12, color: '#4A5235' },
      { name: 'ADS 2023',                     count: 8,  color: '#F97316' },
      { name: 'KNB 2023',                     count: 7,  color: '#8B5CF6' },
      { name: 'ADS 2024',                     count: 3,  color: '#EC4899' },
      { name: 'DARMASISWA 2023',              count: 3,  color: '#64748B' },
      { name: 'ADS 2025',                     count: 1,  color: '#0EA5E9' },
    ],
    gender: { M: 27, F: 28 },
    satisfaction: {
      scale: '1–10',
      n: 19,
      overall: 8.58,
      max: 10,
      criteria: [
        { label: 'Program information availability', score: 9.11, max: 10 },
        { label: 'Committee helpfulness on trip',     score: 9.05, max: 10 },
        { label: 'Trip was fun & insightful',         score: 8.79, max: 10 },
        { label: 'Registration process',              score: 8.74, max: 10 },
        { label: 'Updated program information',       score: 8.74, max: 10 },
        { label: 'Tour guide explanation',            score: 8.32, max: 10 },
        { label: 'Overall satisfaction',              score: 8.58, max: 10 },
        { label: 'Sites & activities interest',       score: 8.16, max: 10 },
        { label: 'Program content & schedule',        score: 8.16, max: 10 },
        { label: 'Service for inquiries',             score: 8.21, max: 10 },
      ],
    },
    analysis: [
      { icon: '🌍', text: 'The inaugural ACI batch brought together <strong>55 participants from 21 countries</strong> — one of the most diverse single-event cohorts in the program\'s history.' },
      { icon: '🇲🇾', text: '<strong>Malaysian students led at 29%</strong> (16 of 55), primarily through the AMERTA XX exchange. For the first time, ACI also served ADS, KNB, and DARMASISWA scholars.' },
      { icon: '💰', text: '<strong>Transport was the largest cost driver</strong> at IDR 31.2M (33%), reflecting 3 chartered buses needed for 55 participants and longer Purwodadi–Batu route.' },
      { icon: '⭐', text: 'Satisfaction averaged <strong>8.58 / 10</strong> across 19 respondents — strongest on information availability (9.11) and committee helpfulness (9.05). Activities received 8.16/10, signaling room to elevate venue selection.' },
    ],
  },

  b1_2025: {
    label: 'ACI 2025', sublabel: 'Batch 1 – Malang',
    period: '26–27 April 2025', location: 'Malang & Batu, East Java',
    participants: 47,
    color: '#10B981', bg: 'linear-gradient(135deg,#F0FDF4,#DCFCE7)', border: 'rgba(16,185,129,0.15)',
    vendors: [
      { category: 'Hotel',  name: 'Hotel 38FrontOne, Batu',       desc: 'Accommodation for participants. 33 rooms used for the 2-day program.' },
      { category: 'Venue',  name: 'Desa Wisata Pujon Kidul',       desc: 'Eco-tourism village with hands-on farming and livestock education program — featured Day 1 cultural immersion activity.' },
      { category: 'Venue',  name: 'Kaliandra Adventure',           desc: 'Jeep off-road adventure with professional drone documentation — flagship Day 2 outdoor experience.' },
      { category: 'Food',   name: 'Laritta',                       desc: 'Event catering for snacks and group meals.' },
      { category: 'Food',   name: 'RM. Joglo Batu',                desc: 'Traditional Javanese restaurant for dinner on Day 1.' },
      { category: 'Shirts', name: 'Cititex',                       desc: 'Custom program shirts (kaos kegiatan) for all 80 participants + committee.' },
    ],
    activities: [
      'Eco-tourism visit at Desa Wisata Pujon Kidul — farming, livestock, and local UMKM learning',
      'Kaliandra Jeep Adventure — off-road exploration with drone documentation',
      'Dinner at traditional Javanese Joglo restaurant',
      'Overnight stay enabling cross-cultural bonding between AMERTA, IUP, and scholarship students',
    ],
    budgetTotal: 50800200,
    budgetAlloc: null,
    budgetCategories: [
      { name: 'Activities/Events', amount: 28910000, color: '#4A5235' },
      { name: 'Accommodation',     amount: 12860000, color: '#2563EB' },
      { name: 'Food & Beverages',  amount: 3690000,  color: '#8B5CF6' },
      { name: 'Consumables',       amount: 3640200,  color: '#EC4899' },
      { name: 'Transport',         amount: 1700000,  color: '#F97316' },
    ],
    natNote: 'Nationality data is partially unavailable due to spreadsheet formula errors. Malaysia (19) confirmed from IUP 2024 program registrations.',
    nationalities: [
      { country: 'Malaysia', flag: '🇲🇾', count: 19 },
      { country: 'Other / Not Available', flag: '🌍', count: 28 },
    ],
    programs: [
      { name: 'Regular IUP 2024',     count: 19, color: '#4A5235' },
      { name: 'AMERTA XXII',          count: 12, color: '#2563EB' },
      { name: 'KNB 2024',             count: 6,  color: '#8B5CF6' },
      { name: 'TIAS 2024',            count: 5,  color: '#EC4899' },
      { name: 'ADS 2024',             count: 5,  color: '#F97316' },
    ],
    gender: { M: 15, F: 32 },
    satisfaction: {
      scale: '1–4',
      n: 61,
      overall: 3.79,
      max: 4,
      note: 'Survey collected 61 responses (may include participants across 2025 batches sharing the same form).',
      criteria: [
        { label: 'Registration process',             score: 3.84, max: 4 },
        { label: 'Trip was fun & insightful',        score: 3.84, max: 4 },
        { label: 'Program information availability', score: 3.80, max: 4 },
        { label: 'Committee helpfulness on trip',    score: 3.80, max: 4 },
        { label: 'Service for inquiries',            score: 3.79, max: 4 },
        { label: 'Overall satisfaction',             score: 3.79, max: 4 },
        { label: 'Updated program information',      score: 3.79, max: 4 },
        { label: 'Tour guide explanation',           score: 3.74, max: 4 },
        { label: 'Program content & schedule',       score: 3.70, max: 4 },
        { label: 'Sites & activities interest',      score: 3.67, max: 4 },
      ],
    },
    analysis: [
      { icon: '🔄', text: 'ACI 2025 Batch 1 <strong>returned to the same Batu/Malang circuit</strong> but shifted the Day 1 venue from Kebun Raya to the more interactive Desa Wisata Pujon Kidul — a key upgrade based on 2024 feedback.' },
      { icon: '👩', text: '<strong>Female participants dominated</strong> at 68% (32 of 47) — the highest female ratio across all ACI batches, driven primarily by the IUP Veterinary Medicine cohort.' },
      { icon: '💰', text: 'Total spend dropped significantly to <strong>IDR 50.8M</strong> (vs 95.4M in 2024) for a smaller group of 47 — a 46% cost reduction per batch, showing improved financial planning.' },
      { icon: '⭐', text: 'Satisfaction reached <strong>3.79/4 (94.8%)</strong> — markedly higher than 2024\'s 85.8%. The shift to Pujon Kidul\'s interactive village experience was well-received.' },
    ],
  },

  b21_2025: {
    label: 'ACI 2025', sublabel: 'Batch 2.1 – Solo',
    period: '20–21 September 2025', location: 'Solo (Surakarta), Central Java',
    participants: 52,
    color: '#F97316', bg: 'linear-gradient(135deg,#FFF7ED,#FFEDD5)', border: 'rgba(249,115,22,0.15)',
    vendors: [
      { category: 'Hotel',  name: 'Zest Hotel Surakarta',      desc: 'City-center hotel in Solo for 33 rooms. Starting point for all Day 2 activities.' },
      { category: 'Venue',  name: 'Pura Mangkunegaran',         desc: 'Royal Javanese palace — guided cultural heritage tour including traditional dance and Javanese court culture.' },
      { category: 'Venue',  name: 'Kampung Batik Laweyan',      desc: 'Historic batik village — hands-on batik making workshop in one of Java\'s oldest batik production centers.' },
      { category: 'Venue',  name: 'Jeep Kemuning',              desc: 'Jeep adventure + river tubing through the Kemuning tea plantation area — Day 2 outdoor adventure.' },
      { category: 'Food',   name: 'Laritta',                    desc: 'Event catering services.' },
      { category: 'Food',   name: 'Sari Degan Ijo, Solo',       desc: 'Local Solo restaurant for Day 1 lunch — authentic Central Javanese cuisine experience.' },
      { category: 'Food',   name: 'Balekambang Resto',          desc: 'Dinner venue near Balekambang park for Day 1 evening.' },
      { category: 'Shirts', name: 'CITITEX',                    desc: 'Custom program shirts for all participants and committee.' },
    ],
    activities: [
      'Royal cultural tour at Pura Mangkunegaran — Javanese palace architecture and court heritage',
      'Hands-on batik making workshop at Kampung Batik Laweyan — UNESCO-recognized craft tradition',
      'Jeep adventure + river tubing at Kemuning tea plantation',
      'Authentic Solo cuisine experiences at local restaurants',
    ],
    budgetTotal: 44447176,
    budgetAlloc: 60899800,
    budgetCategories: [
      { name: 'Activities/Events', amount: 19530000, color: '#4A5235' },
      { name: 'Accommodation',     amount: 13200000, color: '#2563EB' },
      { name: 'Transport',         amount: 3310000,  color: '#F97316' },
      { name: 'Food & Beverages',  amount: 5478000,  color: '#8B5CF6' },
      { name: 'Consumables',       amount: 2929176,  color: '#EC4899' },
    ],
    nationalities: [
      { country: 'Malaysia',     flag: '🇲🇾', count: 41 },
      { country: 'Australia',    flag: '🇦🇺', count: 4  },
      { country: 'Brunei',       flag: '🇧🇳', count: 3  },
      { country: 'Germany',      flag: '🇩🇪', count: 2  },
      { country: 'United Kingdom',flag:'🇬🇧', count: 1  },
      { country: 'Netherlands',  flag: '🇳🇱', count: 1  },
    ],
    programs: [
      { name: 'AMERTA XXIII', count: 52, color: '#F97316' },
    ],
    gender: { M: 13, F: 39 },
    satisfaction: {
      scale: '1–4',
      n: 24,
      overall: 3.96,
      max: 4,
      criteria: [
        { label: 'Registration process',             score: 3.96, max: 4 },
        { label: 'Updated program information',      score: 3.96, max: 4 },
        { label: 'Tour guide explanation',           score: 3.96, max: 4 },
        { label: 'Program content & schedule',       score: 3.96, max: 4 },
        { label: 'Overall satisfaction',             score: 3.96, max: 4 },
        { label: 'Program information availability', score: 3.92, max: 4 },
        { label: 'Service for inquiries',            score: 3.92, max: 4 },
        { label: 'Trip was fun & insightful',        score: 3.92, max: 4 },
        { label: 'Committee helpfulness on trip',    score: 3.92, max: 4 },
        { label: 'Sites & activities interest',      score: 3.75, max: 4 },
      ],
    },
    analysis: [
      { icon: '🏛️', text: 'ACI 2025 Batch 2.1 was the <strong>first Solo edition</strong> — shifting the program from East to Central Java and introducing Javanese royal culture through Pura Mangkunegaran and Kampung Batik Laweyan.' },
      { icon: '🇲🇾', text: 'All 52 participants were <strong>AMERTA XXIII students</strong>, with Malaysia at 79% (41) — the highest single-batch concentration from a Western partner cohort.' },
      { icon: '💰', text: 'Best budget efficiency at <strong>IDR 44.4M spent vs IDR 60.9M allocated</strong> — 27% underspend (IDR 16.5M saved). Per-participant cost of IDR 854K was the lowest across all batches.' },
      { icon: '⭐', text: '<strong>Highest satisfaction at 3.96/4 (99%)</strong> across all ACI batches. Every criteria scored ≥3.75 — the Javanese cultural content resonated strongly with participants.' },
    ],
  },

  b22_2025: {
    label: 'ACI 2025', sublabel: 'Batch 2.2 – Mojokerto',
    period: '15–16 November 2025', location: 'Mojokerto & Trawas, East Java',
    participants: 37,
    color: '#A855F7', bg: 'linear-gradient(135deg,#FDF4FF,#FAE8FF)', border: 'rgba(168,85,247,0.15)',
    vendors: [
      { category: 'Hotel',  name: 'Hotel Royal Tretes',          desc: 'Hotel stay in Trawas hill resort area — cool mountain setting for overnight stay.' },
      { category: 'Venue',  name: 'Desa Wisata Bejijong',        desc: 'Traditional Majapahit heritage village — cultural activities, traditional crafts, and community interaction.' },
      { category: 'Venue',  name: 'Coklat Majapahit Mojokerto',  desc: 'Chocolate production workshop inspired by Majapahit-era cacao trade — hands-on making and tasting experience.' },
      { category: 'Food',   name: 'Café Santuy Prigen',          desc: 'Casual café in Prigen for group dining in a scenic mountain environment.' },
      { category: 'Food',   name: 'Laritta',                     desc: 'Event catering for group meals.' },
      { category: 'Shirts', name: 'CITITEX',                     desc: 'Custom program shirts for all participants and committee.' },
    ],
    activities: [
      'Museum Trowulan — free entry to Majapahit empire archaeological museum (72 participants; budgeted at IDR 0)',
      'Desa Wisata Bejijong — cultural village visit with traditional Majapahit crafts and community engagement',
      'Coklat Majapahit workshop — chocolate-making experience rooted in Majapahit cacao heritage',
      'Outbound team activities at Trawas mountain resort',
    ],
    budgetTotal: 45360000,
    budgetAlloc: null,
    budgetCategories: [
      { name: 'Activities/Events', amount: 19500000, color: '#4A5235' },
      { name: 'Accommodation',     amount: 15500000, color: '#2563EB' },
      { name: 'Food & Beverages',  amount: 6060000,  color: '#8B5CF6' },
      { name: 'Consumables',       amount: 2700000,  color: '#EC4899' },
      { name: 'Transport',         amount: 1300000,  color: '#F97316' },
    ],
    nationalities: [
      { country: 'Philippines',  flag: '🇵🇭', count: 11 },
      { country: 'Pakistan',     flag: '🇵🇰', count: 8  },
      { country: 'Timor-Leste',  flag: '🇹🇱', count: 5  },
      { country: 'Yemen',        flag: '🇾🇪', count: 3  },
      { country: 'Bangladesh',   flag: '🇧🇩', count: 2  },
      { country: 'Nigeria',      flag: '🇳🇬', count: 2  },
      { country: 'Malawi',       flag: '🇲🇼', count: 1  },
      { country: 'Suriname',     flag: '🇸🇷', count: 1  },
      { country: 'Kenya',        flag: '🇰🇪', count: 1  },
      { country: 'Ethiopia',     flag: '🇪🇹', count: 1  },
      { country: 'Vanuatu',      flag: '🇻🇺', count: 1  },
      { country: 'Malaysia',     flag: '🇲🇾', count: 1  },
    ],
    programs: [
      { name: 'KNB 2025',              count: 12, color: '#8B5CF6' },
      { name: 'AMERTA (Batangas)',      count: 11, color: '#2563EB' },
      { name: 'ADS 2025',              count: 10, color: '#F97316' },
      { name: 'TIAS 2025',             count: 4,  color: '#EC4899' },
    ],
    gender: null,
    satisfaction: {
      scale: '1–4',
      n: 12,
      overall: 3.50,
      max: 4,
      criteria: [
        { label: 'Registration process',             score: 3.58, max: 4 },
        { label: 'Trip was fun & insightful',        score: 3.58, max: 4 },
        { label: 'Program information availability', score: 3.50, max: 4 },
        { label: 'Service for inquiries',            score: 3.50, max: 4 },
        { label: 'Updated program information',      score: 3.50, max: 4 },
        { label: 'Committee helpfulness on trip',    score: 3.50, max: 4 },
        { label: 'Overall satisfaction',             score: 3.50, max: 4 },
        { label: 'Program content & schedule',       score: 3.42, max: 4 },
        { label: 'Sites & activities interest',      score: 3.42, max: 4 },
        { label: 'Tour guide explanation',           score: 3.33, max: 4 },
      ],
    },
    analysis: [
      { icon: '🏺', text: 'Batch 2.2 was the most historically rich edition — built around <strong>Majapahit Empire heritage</strong> through Museum Trowulan, Desa Bejijong crafts, and Coklat Majapahit, all in Mojokerto, the empire\'s capital region.' },
      { icon: '🌍', text: 'The <strong>most globally diverse batch</strong> with 12 nationalities. For the first time, ACI welcomed participants from Philippines (11), Vanuatu, Ethiopia, Suriname, and Malawi.' },
      { icon: '💸', text: 'Museum Trowulan provided a <strong>zero-cost venue</strong> (public museum, free entry for 72 participants) — a creative cost-saving measure that still delivered historical depth.' },
      { icon: '⭐', text: 'Satisfaction at <strong>3.50/4 (87.5%)</strong> — lowest across 2025 batches. Tour guide explanation (3.33) and activity interest (3.42) scored lowest, suggesting further curation of the heritage village experience is needed.' },
    ],
  },
};

// ── Helpers ───────────────────────────────────────────────────────────────────

function aciEsc(s) {
  return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function aciFormatIDR(n) {
  if (n >= 1000000) return 'IDR ' + (n / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
  return 'IDR ' + n.toLocaleString();
}

// ── Section Builders ──────────────────────────────────────────────────────────

function aciBuildOverview(key) {
  const d = ACI_DATA[key];
  if (key === 'all') {
    const cards = ['b1_2024', 'b1_2025', 'b21_2025', 'b22_2025'].map(k => {
      const b = ACI_DATA[k];
      return `<div onclick="aciSelectBatch('${k}')" class="rounded-xl p-5 text-center cursor-pointer hover:shadow-md transition-all duration-200" style="background:${b.bg};border:1px solid ${b.border}">
        <p class="font-heading font-bold text-2xl mb-1" style="color:${b.color}">${b.participants}</p>
        <p class="font-heading font-semibold text-sm mb-0.5" style="color:#0F172A">${b.label}</p>
        <p class="text-xs mb-2" style="color:#0F172A;font-weight:500">${b.sublabel}</p>
        <p class="text-xs" style="color:#64748B">${b.period}</p>
      </div>`;
    }).join('');
    return `<div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">${cards}</div>`;
  }
  return `<div class="rounded-xl p-6 mb-8 flex flex-wrap gap-8 items-center" style="background:${d.bg};border:1px solid ${d.border}">
    <div class="text-center">
      <p class="font-heading font-bold text-3xl" style="color:${d.color}">${d.participants}</p>
      <p class="text-xs mt-1" style="color:#64748B">Participants</p>
    </div>
    <div class="text-center">
      <p class="font-heading font-bold text-xl" style="color:${d.color}">${d.location}</p>
      <p class="text-xs mt-1" style="color:#64748B">Destination</p>
    </div>
    <div class="ml-auto text-right">
      <p class="font-heading font-bold text-xl" style="color:#0F172A">${d.label} · ${d.sublabel}</p>
      <p class="text-sm" style="color:#64748B">${d.period}</p>
    </div>
  </div>`;
}

function aciBuildVendors(d) {
  if (!d.vendors) return '';
  const catColors = { Hotel: '#1E3A5F', Venue: '#4A5235', Food: '#F97316', Shirts: '#8B5CF6', Konsumsi: '#F97316' };
  const rows = d.vendors.map(v => {
    const col = catColors[v.category] || '#64748B';
    return `<div class="rounded-lg p-4" style="background:#F8FAFC;border:1px solid rgba(74,107,138,0.1)">
      <div class="flex items-start gap-3">
        <span class="text-xs font-semibold px-2 py-0.5 rounded-full flex-shrink-0 mt-0.5" style="background:${col}18;color:${col}">${aciEsc(v.category)}</span>
        <div>
          <p class="text-sm font-semibold mb-1" style="color:#0F172A">${aciEsc(v.name)}</p>
          <p class="text-xs leading-relaxed" style="color:#64748B">${aciEsc(v.desc)}</p>
        </div>
      </div>
    </div>`;
  }).join('');
  const acts = d.activities ? d.activities.map(a =>
    `<li class="flex gap-2 text-sm" style="color:#475569"><span style="color:#4A5235;flex-shrink:0">▸</span>${aciEsc(a)}</li>`
  ).join('') : '';
  return `<h3 class="font-heading font-semibold text-lg mb-4" style="color:#0F172A">Vendors</h3>
  <div class="grid md:grid-cols-2 gap-3 mb-8">${rows}</div>
  ${acts ? `<h3 class="font-heading font-semibold text-lg mb-3" style="color:#0F172A">Key Activities</h3><ul class="space-y-2 mb-8">${acts}</ul>` : ''}`;
}

function aciBuildVendorsOverall() {
  const allVendors = [
    { batch: '2024 Malang',   name: 'Hotel 38frontone Batu',     category: 'Hotel',  desc: 'Both 2024 & 2025 Malang batches used this same hotel, reflecting ongoing vendor partnership.' },
    { batch: '2024 Malang',   name: 'Kebun Raya Purwodadi',       category: 'Venue',  desc: 'Botanical garden with tour + planting class. Used in 2024; replaced by Pujon Kidul in 2025.' },
    { batch: '2024 & 2025',   name: 'Kaliandra Adventure (Batu)', category: 'Venue',  desc: 'Jeep adventure used in both Malang batches (2024 & 2025). Core outdoor experience.' },
    { batch: '2025 Malang',   name: 'Desa Wisata Pujon Kidul',    category: 'Venue',  desc: 'Replaced Kebun Raya in 2025 — more interactive farming & eco-tourism village.' },
    { batch: '2025 Solo',     name: 'Pura Mangkunegaran',          category: 'Venue',  desc: 'Royal Javanese palace in Solo — introduced Javanese court culture to AMERTA XXIII batch.' },
    { batch: '2025 Solo',     name: 'Kampung Batik Laweyan',       category: 'Venue',  desc: 'Historic batik village — hands-on traditional textile craft experience.' },
    { batch: '2025 Solo',     name: 'Jeep Kemuning',               category: 'Venue',  desc: 'Jeep + tubing through Kemuning tea plantation. Solo\'s equivalent of Kaliandra adventure.' },
    { batch: '2025 Mojokerto',name: 'Museum Trowulan',              category: 'Venue',  desc: 'Free Majapahit museum. Zero-cost heritage experience for 72 attendees.' },
    { batch: '2025 Mojokerto',name: 'Desa Wisata Bejijong',         category: 'Venue',  desc: 'Traditional Majapahit craft village with community cultural activities.' },
    { batch: '2025 Mojokerto',name: 'Coklat Majapahit',             category: 'Venue',  desc: 'Chocolate workshop inspired by Majapahit cacao trade — unique experiential activity.' },
    { batch: 'All Batches',   name: 'Laritta',                     category: 'Food',   desc: 'Recurring catering vendor across all 4 batches. Reliable large-group food service partner.' },
    { batch: '2024–2025',     name: 'Cititex',                     category: 'Shirts', desc: 'Custom program shirt vendor for 2025 batches (Solo & Mojokerto).' },
    { batch: '2025 Solo',     name: 'Zest Hotel Surakarta',         category: 'Hotel',  desc: 'Central Solo hotel for Batch 2.1. City-center location enabled walkable access to Mangkunegaran.' },
    { batch: '2025 Mojokerto',name: 'Hotel Royal Tretes',           category: 'Hotel',  desc: 'Mountain resort hotel in Trawas area for Batch 2.2. Scenic highland setting.' },
  ];
  const catColors = { Hotel: '#1E3A5F', Venue: '#4A5235', Food: '#F97316', Shirts: '#8B5CF6' };
  const rows = allVendors.map(v => {
    const col = catColors[v.category] || '#64748B';
    return `<div class="rounded-lg p-4" style="background:#F8FAFC;border:1px solid rgba(74,107,138,0.1)">
      <div class="flex items-start gap-3">
        <span class="text-xs font-semibold px-2 py-0.5 rounded-full flex-shrink-0 mt-0.5" style="background:${col}18;color:${col}">${aciEsc(v.category)}</span>
        <div class="flex-1">
          <div class="flex justify-between items-start gap-2">
            <p class="text-sm font-semibold mb-1" style="color:#0F172A">${aciEsc(v.name)}</p>
            <span class="text-xs px-2 py-0.5 rounded-full flex-shrink-0" style="background:#F1F5F9;color:#64748B">${aciEsc(v.batch)}</span>
          </div>
          <p class="text-xs leading-relaxed" style="color:#64748B">${aciEsc(v.desc)}</p>
        </div>
      </div>
    </div>`;
  }).join('');
  return `<h3 class="font-heading font-semibold text-lg mb-4" style="color:#0F172A">All Vendors — Across 4 Batches</h3>
  <div class="grid md:grid-cols-2 gap-3 mb-8">${rows}</div>`;
}

function aciBuildBudget(key, d) {
  const cats = d.budgetCategories;
  const total = d.budgetTotal;
  const alloc = d.budgetAlloc;
  const maxAmt = Math.max(...cats.map(c => c.amount));
  const bars = cats.map(c => {
    const pct = ((c.amount / maxAmt) * 100).toFixed(1);
    const share = ((c.amount / total) * 100).toFixed(0);
    return `<div class="flex items-center gap-3">
      <span class="text-sm w-40 flex-shrink-0" style="color:#0F172A">${aciEsc(c.name)}</span>
      <div class="flex-1 rounded-full overflow-hidden" style="background:#F1F5F9;height:10px">
        <div class="h-full rounded-full" data-w="${pct}%" style="width:0;background:${c.color};transition:width .55s ease"></div>
      </div>
      <span class="text-sm font-semibold w-16 text-right" style="color:${c.color}">${aciFormatIDR(c.amount)}</span>
      <span class="text-xs w-8 text-right" style="color:#94A3B8">${share}%</span>
    </div>`;
  }).join('');

  let summaryHtml = `<div class="flex flex-wrap gap-6 mb-6">
    <div><p class="font-heading font-bold text-2xl" style="color:#0F172A">${aciFormatIDR(total)}</p><p class="text-xs" style="color:#64748B">Total Spent</p></div>`;
  if (alloc) {
    const efficiency = ((1 - total / alloc) * 100).toFixed(0);
    summaryHtml += `<div><p class="font-heading font-bold text-2xl" style="color:#64748B">${aciFormatIDR(alloc)}</p><p class="text-xs" style="color:#64748B">Budget Allocated</p></div>
    <div><p class="font-heading font-bold text-2xl" style="color:#4A5235">${efficiency}% saved</p><p class="text-xs" style="color:#64748B">Budget Efficiency</p></div>`;
  }
  if (d.participants) {
    const perPax = Math.round(total / d.participants);
    summaryHtml += `<div><p class="font-heading font-bold text-2xl" style="color:#1E3A5F">${aciFormatIDR(perPax)}</p><p class="text-xs" style="color:#64748B">Per Participant</p></div>`;
  }
  summaryHtml += '</div>';

  let overallBatches = '';
  if (key === 'all' && d.budgetBatches) {
    const bRows = d.budgetBatches.map(b => {
      const note = b.budget ? ` / ${aciFormatIDR(b.budget)} alloc` : ' (no formal allocation recorded)';
      return `<div class="flex items-center justify-between py-2 border-b" style="border-color:rgba(241,245,249,1)">
        <span class="text-sm" style="color:#0F172A">${aciEsc(b.label)}</span>
        <span class="text-sm font-semibold" style="color:#4A5235">${aciFormatIDR(b.spent)}<span class="font-normal text-xs ml-1" style="color:#94A3B8">${note}</span></span>
      </div>`;
    }).join('');
    overallBatches = `<h3 class="font-heading font-semibold text-base mb-3 mt-6" style="color:#0F172A">By Batch</h3>${bRows}`;
  }

  const noteHtml = d.budgetNote ? `<p class="text-xs mt-3" style="color:#94A3B8">${aciEsc(d.budgetNote)}</p>` : '';

  return `<h3 class="font-heading font-semibold text-lg mb-4" style="color:#0F172A">Budget Analysis</h3>
  ${summaryHtml}
  <div class="space-y-3 mb-4">${bars}</div>
  ${noteHtml}
  ${overallBatches}
  <div class="mt-8"></div>`;
}

function aciBuildDemographics(key, d) {
  const nats = d.nationalities;
  const maxNat = nats[0].count;
  const totalPax = d.participants;
  const natRows = nats.map(n => {
    const barPct = ((n.count / maxNat) * 100).toFixed(1);
    const share = ((n.count / totalPax) * 100).toFixed(0);
    return `<div class="flex items-center gap-3">
      <span class="text-base w-7 flex-shrink-0">${n.flag}</span>
      <span class="text-sm w-32 flex-shrink-0" style="color:#0F172A">${aciEsc(n.country)}</span>
      <div class="flex-1 rounded-full overflow-hidden" style="background:#F1F5F9;height:10px">
        <div class="h-full rounded-full" data-w="${barPct}%" style="width:0;background:linear-gradient(90deg,#4A5235,#6B7455);transition:width .55s ease"></div>
      </div>
      <span class="text-sm font-semibold w-8 text-right" style="color:#4A5235">${n.count}</span>
      <span class="text-xs w-9 text-right" style="color:#94A3B8">${share}%</span>
    </div>`;
  }).join('');

  const natNote = d.natNote ? `<p class="text-xs mb-5" style="color:#94A3B8">${aciEsc(d.natNote)}</p>` : '';

  const progs = d.programs;
  const maxProg = progs[0].count;
  const progRows = progs.map(p => {
    const pct = ((p.count / maxProg) * 100).toFixed(1);
    return `<div class="flex items-center gap-3">
      <span class="text-sm w-52 flex-shrink-0" style="color:#0F172A">${aciEsc(p.name)}</span>
      <div class="flex-1 rounded-full overflow-hidden" style="background:#F1F5F9;height:10px">
        <div class="h-full rounded-full" data-w="${pct}%" style="width:0;background:${p.color};transition:width .55s ease"></div>
      </div>
      <span class="text-sm font-semibold w-8 text-right" style="color:${p.color}">${p.count}</span>
    </div>`;
  }).join('');

  let genderHtml = '';
  if (d.gender && d.gender.M !== undefined) {
    const total = d.gender.M + d.gender.F;
    const fPct = ((d.gender.F / total) * 100).toFixed(0);
    const mPct = 100 - fPct;
    const note = d.gender.note ? `<p class="text-xs mt-1" style="color:#94A3B8">${aciEsc(d.gender.note)}</p>` : '';
    genderHtml = `<h3 class="font-heading font-semibold text-lg mb-4" style="color:#0F172A">Gender Distribution</h3>
    <div class="flex items-center gap-4 mb-2">
      <div class="flex-1">
        <div class="flex rounded-full overflow-hidden" style="height:20px">
          <div style="width:${fPct}%;background:#EC4899" title="Female ${d.gender.F}"></div>
          <div style="width:${mPct}%;background:#1E3A5F" title="Male ${d.gender.M}"></div>
        </div>
      </div>
    </div>
    <div class="flex gap-6 mb-8">
      <div class="flex items-center gap-2"><span class="inline-block w-3 h-3 rounded-full" style="background:#EC4899"></span><span class="text-sm" style="color:#0F172A">Female <strong>${d.gender.F}</strong> (${fPct}%)</span></div>
      <div class="flex items-center gap-2"><span class="inline-block w-3 h-3 rounded-full" style="background:#1E3A5F"></span><span class="text-sm" style="color:#0F172A">Male <strong>${d.gender.M}</strong> (${mPct}%)</span></div>
    </div>${note}`;
  } else if (d.gender === null) {
    genderHtml = `<h3 class="font-heading font-semibold text-lg mb-2" style="color:#0F172A">Gender Distribution</h3>
    <div class="rounded-lg p-4 mb-8 text-center" style="background:#F8FAFC;border:1px dashed rgba(100,116,139,0.3)">
      <p class="text-sm" style="color:#94A3B8">📋 Gender data was not recorded for this batch.</p>
    </div>`;
  }

  return `<h3 class="font-heading font-semibold text-lg mb-2" style="color:#0F172A">
    Nationalities <span class="text-sm font-normal ml-2" style="color:#64748B">— ${nats.length} countries</span>
  </h3>
  ${natNote}
  <div class="space-y-3 mb-8">${natRows}</div>
  <h3 class="font-heading font-semibold text-lg mb-4" style="color:#0F172A">Enrolled Programs</h3>
  <div class="space-y-3 mb-8">${progRows}</div>
  ${genderHtml}`;
}

function aciBuildSatisfaction(d) {
  const sat = d.satisfaction;
  if (!sat) return '';

  const sortedCriteria = [...sat.criteria].sort((a, b) => b.score - a.score);
  const scoreColor = (pct) => pct >= 95 ? '#4A5235' : pct >= 85 ? '#1E3A5F' : pct >= 75 ? '#F97316' : '#EF4444';

  const bars = sortedCriteria.map(c => {
    const pct = ((c.score / c.max) * 100).toFixed(1);
    const col = scoreColor(parseFloat(pct));
    return `<div class="flex items-center gap-3">
      <span class="text-sm flex-1" style="color:#0F172A">${aciEsc(c.label)}</span>
      <div class="w-32 rounded-full overflow-hidden flex-shrink-0" style="background:#F1F5F9;height:10px">
        <div class="h-full rounded-full" data-w="${pct}%" style="width:0;background:${col};transition:width .55s ease"></div>
      </div>
      <span class="text-sm font-semibold w-12 text-right flex-shrink-0" style="color:${col}">${c.score}/${c.max}</span>
      <span class="text-xs w-10 text-right flex-shrink-0" style="color:#94A3B8">${pct}%</span>
    </div>`;
  }).join('');

  const overallPct = ((sat.overall / sat.max) * 100).toFixed(1);
  const overallCol = scoreColor(parseFloat(overallPct));
  const noteHtml = sat.note ? `<p class="text-xs mb-4" style="color:#94A3B8">${aciEsc(sat.note)}</p>` : '';

  const gaugeFill = overallPct;
  const gaugeHtml = `<div class="flex items-center gap-6 mb-6">
    <div class="relative" style="width:80px;height:80px">
      <svg viewBox="0 0 80 80" style="width:80px;height:80px;transform:rotate(-90deg)">
        <circle cx="40" cy="40" r="32" fill="none" stroke="#F1F5F9" stroke-width="8"/>
        <circle cx="40" cy="40" r="32" fill="none" stroke="${overallCol}" stroke-width="8"
          stroke-dasharray="${(gaugeFill * 2.01).toFixed(1)} 201"
          stroke-linecap="round"/>
      </svg>
      <div class="absolute inset-0 flex items-center justify-center">
        <span class="font-heading font-bold text-sm" style="color:${overallCol}">${overallPct}%</span>
      </div>
    </div>
    <div>
      <p class="font-heading font-bold text-3xl mb-1" style="color:${overallCol}">${sat.overall} / ${sat.max}</p>
      <p class="text-sm" style="color:#64748B">Overall Satisfaction · Scale ${sat.scale} · <strong>${sat.n}</strong> responses</p>
    </div>
  </div>`;

  return `<h3 class="font-heading font-semibold text-lg mb-4" style="color:#0F172A">Satisfaction Analysis</h3>
  ${noteHtml}${gaugeHtml}
  <div class="space-y-3 mb-10">${bars}</div>`;
}

function aciBuildSatisfactionOverall(d) {
  const batches = d.satisfaction.batches;
  const scoreColor = (pct) => pct >= 95 ? '#4A5235' : pct >= 85 ? '#1E3A5F' : pct >= 75 ? '#F97316' : '#EF4444';
  const cards = batches.map(b => {
    const col = scoreColor(b.pct);
    const gaugeFill = b.pct;
    return `<div class="rounded-xl p-5 text-center" style="background:#F8FAFC;border:1px solid rgba(74,107,138,0.1)">
      <div class="relative mx-auto mb-3" style="width:72px;height:72px">
        <svg viewBox="0 0 80 80" style="width:72px;height:72px;transform:rotate(-90deg)">
          <circle cx="40" cy="40" r="32" fill="none" stroke="#F1F5F9" stroke-width="8"/>
          <circle cx="40" cy="40" r="32" fill="none" stroke="${col}" stroke-width="8"
            stroke-dasharray="${(gaugeFill * 2.01).toFixed(1)} 201"
            stroke-linecap="round"/>
        </svg>
        <div class="absolute inset-0 flex items-center justify-center">
          <span class="font-heading font-bold text-xs" style="color:${col}">${b.pct}%</span>
        </div>
      </div>
      <p class="font-heading font-bold text-xl mb-1" style="color:${col}">${b.overall}/${b.max}</p>
      <p class="text-xs font-semibold mb-1" style="color:#0F172A">${aciEsc(b.label)}</p>
      <p class="text-xs" style="color:#64748B">${b.n} responses</p>
    </div>`;
  }).join('');
  const note = `<p class="text-xs mt-4" style="color:#94A3B8">${aciEsc(d.satisfaction.note)}</p>`;
  return `<h3 class="font-heading font-semibold text-lg mb-4" style="color:#0F172A">Satisfaction Analysis — All Batches</h3>
  <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">${cards}</div>
  ${note}
  <div class="mt-8"></div>`;
}

function aciBuildAnalysis(d) {
  const items = d.analysis.map(a =>
    `<div class="flex gap-3 items-start">
      <span class="text-xl flex-shrink-0 mt-0.5">${a.icon}</span>
      <p class="text-sm leading-relaxed" style="color:#475569">${a.text}</p>
    </div>`
  ).join('');
  return `<div class="rounded-xl p-6" style="background:linear-gradient(135deg,#F1F3EE,#E4E8DC);border:1px solid rgba(74,82,53,0.12)">
    <h3 class="font-heading font-semibold text-base mb-4" style="color:#0F172A">Batch Analysis</h3>
    <div class="space-y-3">${items}</div>
  </div>`;
}

// ── Page Shell ────────────────────────────────────────────────────────────────

function aciInitPage() {
  const el = document.getElementById('page-aci');
  if (!el) return;

  const steps = [
    { n:'01', icon:'map-pin',        title:'Destination Planning & Venue Curation',           desc:'Selected culturally meaningful and logistically feasible destinations each batch — from botanical gardens and royal palaces to Majapahit heritage villages and mountain adventure parks. Venue selection balanced cultural depth, accessibility, and budget constraints.' },
    { n:'02', icon:'handshake',      title:'Vendor Coordination & Contract Management',       desc:'Managed relationships with hotels, venues, catering services, transport providers, and activity organizers. Negotiated pricing, confirmed logistics, and ensured services aligned with program needs within the allocated budget.' },
    { n:'03', icon:'users',          title:'Participant Registration & Communication',         desc:'Managed participant sign-ups, program guidebooks, pre-trip briefings, and all communications. Coordinated shirt sizing, dietary needs, and participant readiness across diverse student populations from 25+ countries.' },
    { n:'04', icon:'clipboard-list', title:'Budget Planning & Financial Reporting',            desc:'Prepared Rencana Anggaran Biaya (RAB) for each batch, tracked realization against allocations, and submitted post-event financial reports. Maintained cost efficiency from IDR 95M (2024) down to IDR 44–50M per batch in 2025.' },
    { n:'05', icon:'mountain-snow',  title:'On-Site Program Delivery',                        desc:'Led on-ground operations during each 2-day program: coordinating transport arrivals, managing time schedules at each venue, facilitating intercultural interaction, and ensuring participant safety and comfort throughout the trip.' },
    { n:'06', icon:'star',           title:'Post-Event Reporting & Continuous Improvement',   desc:'Collected satisfaction surveys after each batch, analyzed feedback, and applied learnings to subsequent programs — such as replacing Kebun Raya with the more interactive Desa Wisata Pujon Kidul based on 2024 participant input.' },
  ];

  const stepsHtml = steps.map(s => `
   <div class="flex gap-6 py-8" style="border-top:1px solid rgba(28,28,30,0.07)">
    <div class="flex-shrink-0 w-10 pt-0.5">
     <span class="font-heading font-bold text-3xl select-none" style="color:rgba(28,28,30,0.1);line-height:1">${s.n}</span>
    </div>
    <div class="flex gap-4 flex-1">
     <div class="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5" style="background:rgba(74,82,53,0.1)">
      <i data-lucide="${s.icon}" style="width:18px;height:18px;color:#4A5235"></i>
     </div>
     <div>
      <h3 class="font-heading font-semibold text-lg mb-2" style="color:#1C1C1E">${s.title}</h3>
      <p class="text-sm leading-relaxed" style="color:#5C5C5C">${s.desc}</p>
     </div>
    </div>
   </div>
  `).join('');

  el.innerHTML = `
   <div class="page-hero-banner relative overflow-hidden" style="padding:64px 0 48px">
    <div class="absolute inset-0"><img src="assets/images/aci/aci-4.JPEG" alt="ACI" style="width:100%;height:100%;object-fit:cover;object-position:center"><div style="position:absolute;inset:0;background:linear-gradient(135deg,rgba(74,82,53,0.88) 0%,rgba(92,102,66,0.82) 60%,rgba(107,116,85,0.77) 100%)"></div></div>
    <div class="absolute -right-16 -top-16 w-80 h-80 rounded-full" style="background:rgba(255,255,255,0.04)"></div>
    <div class="absolute right-24 bottom-8 w-48 h-48 rounded-full" style="border:2px solid rgba(255,255,255,0.06)"></div>
    <div class="absolute inset-0 flex items-center justify-end overflow-hidden pr-8 pointer-events-none select-none" aria-hidden="true">
     <span class="font-heading font-bold" style="font-size:clamp(6rem,20vw,16rem);color:rgba(255,255,255,0.05);letter-spacing:-.04em;line-height:1">ACI</span>
    </div>
    <div class="relative z-10 max-w-6xl mx-auto px-6">
     <button onclick="goToPage('projects-overview')" class="flex items-center gap-2 mb-8" style="color:rgba(255,255,255,0.7)"><i data-lucide="arrow-left" style="width:16px;height:16px"></i> Back</button>
     <span class="inline-block px-4 py-1.5 rounded-full text-xs font-semibold mb-5 uppercase tracking-wider" style="background:rgba(255,255,255,0.12);color:#fff">Project Management</span>
     <h1 class="font-heading font-bold mb-3 text-white" style="font-size:clamp(2.5rem,6vw,4rem);letter-spacing:-.02em">ACI</h1>
     <p class="text-base max-w-2xl" style="color:rgba(255,255,255,0.75)">Airlangga Cultural Immersion — 2-day cultural immersion trips for international students, managed end-to-end across 4 batches and 3 destinations in Java.</p>
    </div>
   </div>
   <div class="max-w-6xl mx-auto px-6">
    <div class="flex flex-wrap gap-10 py-10" style="border-bottom:1px solid rgba(28,28,30,0.08)">
     <div><div class="font-heading font-bold text-4xl" style="color:#1C1C1E">191</div><div class="text-xs uppercase tracking-wider mt-1" style="color:#9A9A9A">Total Participants</div></div>
     <div><div class="font-heading font-bold text-4xl" style="color:#1C1C1E">4</div><div class="text-xs uppercase tracking-wider mt-1" style="color:#9A9A9A">Batches</div></div>
     <div><div class="font-heading font-bold text-4xl" style="color:#1C1C1E">25+</div><div class="text-xs uppercase tracking-wider mt-1" style="color:#9A9A9A">Nationalities</div></div>
     <div><div class="font-heading font-bold text-4xl" style="color:#1C1C1E">IDR 236M</div><div class="text-xs uppercase tracking-wider mt-1" style="color:#9A9A9A">Total Budget</div></div>
    </div>
   </div>
   <div class="max-w-6xl mx-auto px-6 py-14">
    <p class="text-lg max-w-3xl leading-relaxed mb-14" style="color:#5C5C5C">As coordinator of ACI at Airlangga Global Engagement, I managed the full delivery of 4 cultural immersion trips for international students — spanning logistics, vendor management, participant coordination, budget planning, and post-event reporting across Malang, Solo, and Mojokerto.</p>
    <div class="flex items-center gap-3 mb-3"><span class="accent-line"></span><span class="text-sm font-semibold" style="color:#4A5235">Program Process</span></div>
    <h2 class="font-heading font-bold text-3xl mb-2" style="color:#1C1C1E">End-to-End Responsibilities</h2>
    <div class="mt-6">${stepsHtml}</div>
   </div>
   <div style="background:#F2ECE4;border-top:1px solid rgba(28,28,30,0.07)">
    <div class="max-w-6xl mx-auto px-6 py-16">
     <div class="flex items-center gap-3 mb-3"><span class="accent-line"></span><span class="text-sm font-semibold" style="color:#4A5235">Data &amp; Analytics</span></div>
     <h2 class="font-heading font-bold text-3xl mb-2" style="color:#1C1C1E">Program Data &amp; Analytics</h2>
     <p class="text-sm mb-8" id="aci-stats-subtitle" style="color:#5C5C5C">Data compiled from 4 ACI batches across 191 participants, 25+ nationalities, and 3 destinations.</p>
     <div class="flex flex-wrap gap-2 mb-8">
      <button class="aci-batch-tab px-4 py-2 rounded-full text-sm font-semibold border transition-all duration-200" data-batch="all" style="cursor:pointer;background:#4A5235;color:#fff;border-color:#4A5235">All Batches</button>
      <button class="aci-batch-tab px-4 py-2 rounded-full text-sm font-semibold border transition-all duration-200" data-batch="b1_2024" style="cursor:pointer;color:#5C5C5C;border-color:rgba(28,28,30,0.2)">2024 Malang</button>
      <button class="aci-batch-tab px-4 py-2 rounded-full text-sm font-semibold border transition-all duration-200" data-batch="b1_2025" style="cursor:pointer;color:#5C5C5C;border-color:rgba(28,28,30,0.2)">2025 Malang</button>
      <button class="aci-batch-tab px-4 py-2 rounded-full text-sm font-semibold border transition-all duration-200" data-batch="b21_2025" style="cursor:pointer;color:#5C5C5C;border-color:rgba(28,28,30,0.2)">2025 Solo</button>
      <button class="aci-batch-tab px-4 py-2 rounded-full text-sm font-semibold border transition-all duration-200" data-batch="b22_2025" style="cursor:pointer;color:#5C5C5C;border-color:rgba(28,28,30,0.2)">2025 Mojokerto</button>
     </div>
     <div id="aci-stats-content"></div>
    </div>
   </div>`;
}

// ── Render ────────────────────────────────────────────────────────────────────

function aciRenderBatch(key) {
  const d = ACI_DATA[key];
  if (!d) return;

  document.querySelectorAll('.aci-batch-tab').forEach(tab => {
    const active = tab.dataset.batch === key;
    tab.style.background  = active ? d.color : '';
    tab.style.color       = active ? '#fff'  : '#5C5C5C';
    tab.style.borderColor = active ? d.color : 'rgba(28,28,30,0.2)';
  });

  const sub = document.getElementById('aci-stats-subtitle');
  if (sub) sub.textContent = key === 'all'
    ? 'Data compiled from 4 ACI batches across 191 participants, 25+ nationalities, and 3 destinations.'
    : `${d.label} · ${d.sublabel} · ${d.period} · ${d.participants} participants`;

  const el = document.getElementById('aci-stats-content');
  if (!el) return;

  let html = aciBuildOverview(key);

  if (key === 'all') {
    html += `<div class="card p-6 mb-6">${aciBuildVendorsOverall()}</div>`;
    html += `<div class="card p-6 mb-6">${aciBuildBudget(key, d)}</div>`;
    html += `<div class="card p-6 mb-6">${aciBuildDemographics(key, d)}</div>`;
    html += `<div class="card p-6 mb-6">${aciBuildSatisfactionOverall(d)}</div>`;
  } else {
    html += `<div class="card p-6 mb-6">${aciBuildVendors(d)}</div>`;
    html += `<div class="card p-6 mb-6">${aciBuildBudget(key, d)}</div>`;
    html += `<div class="card p-6 mb-6">${aciBuildDemographics(key, d)}</div>`;
    html += `<div class="card p-6 mb-6">${aciBuildSatisfaction(d)}</div>`;
  }

  html += `<div class="mb-6">${aciBuildAnalysis(d)}</div>`;
  el.innerHTML = html;

  requestAnimationFrame(() => requestAnimationFrame(() => {
    el.querySelectorAll('[data-w]').forEach(bar => { bar.style.width = bar.dataset.w; });
  }));
}

window.aciSelectBatch = function (key) { aciRenderBatch(key); };

// ── Init ──────────────────────────────────────────────────────────────────────

document.addEventListener('DOMContentLoaded', function () {
  aciInitPage();
  if (window.lucide) lucide.createIcons();
  document.querySelectorAll('.aci-batch-tab').forEach(tab => {
    tab.addEventListener('click', function () { aciRenderBatch(this.dataset.batch); });
  });
  aciRenderBatch('all');
});
