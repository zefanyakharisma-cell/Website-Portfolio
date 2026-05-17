// ── CroissantsMoon — Creative Universe Page ──────────────────────────────────

function cmInjectFonts() {
  if (document.querySelector('[data-cm-fonts]')) return;
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = 'https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Caveat:wght@400;500;600;700&display=swap';
  link.setAttribute('data-cm-fonts', '1');
  document.head.appendChild(link);
}

const CM = {
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

const CM_WORKS = [
  {
    emoji: '🌐', title: 'PCU Global', cat: 'Web Experience',
    desc: "A full-stack rebuild of PCU's International Office — clean architecture, live CMS, mobile-first design.",
    bg: CM.blue, textColor: '#0369A1', page: 'pcu-global', rotate: '-1.5deg',
  },
  {
    emoji: '✦', title: 'This Portfolio', cat: 'Editorial Design',
    desc: 'Premium editorial aesthetic — typography-led, intentional. International education storytelling through design.',
    bg: CM.yellow, textColor: '#854D0E', page: 'home', rotate: '2deg',
  },
  {
    emoji: '✈', title: 'AERO Exhibition', cat: 'Creative Direction',
    desc: 'Visual identity and event design for an annual global partnership exhibition at Universitas Airlangga.',
    bg: CM.pink, textColor: '#9F1239', page: 'aero', rotate: '-0.8deg',
  },
  {
    emoji: '◈', title: 'Graphic Design', cat: 'Visual Design',
    desc: 'Institutional identity, event collateral, and visual materials for international education programs.',
    bg: CM.mint, textColor: '#065F46', page: 'designs', rotate: '1.2deg',
  },
  {
    emoji: '◉', title: 'Brand Systems', cat: 'Branding',
    desc: 'Visual language and identity design for thoughtful organizations. Currently in development.',
    bg: CM.lavender, textColor: '#5B21B6', page: 'croissantsmoon', rotate: '-2deg', soon: true,
  },
  {
    emoji: '◎', title: 'Motion Studies', cat: 'Exploration',
    desc: 'Animation concepts, transition experiments, and interactive web explorations. Slowly growing.',
    bg: CM.peach, textColor: '#9A3412', page: 'croissantsmoon', rotate: '0.8deg', soon: true,
  },
];

const CM_PROCESS = [
  { icon: '✦', label: 'Inspiration', color: CM.yellow, desc: 'Absorbing the world — architecture, film, type, travel. Ideas live everywhere.' },
  { icon: '◉', label: 'Sketching',   color: CM.pink,    desc: 'Rough ideas, no judgment. Capturing what the mind sees before it disappears.' },
  { icon: '◈', label: 'Exploration', color: CM.blue,    desc: 'Testing directions in code and design. One idea becomes five, then back to one.' },
  { icon: '⬡', label: 'Building',    color: CM.mint,    desc: 'Turning vision into systems, components, interactions. Craft over speed.' },
  { icon: '◎', label: 'Refining',    color: CM.lavender,desc: 'The details. Spacing, weight, timing. The work that happens when big work is done.' },
  { icon: '✺', label: 'Releasing',   color: CM.peach,   desc: 'Letting go of perfect. Shipping with intention and telling the story behind it.' },
];

const CM_INSPO = [
  { text: 'Dieter Rams',           color: CM.yellow   },
  { text: 'Internet aesthetics',   color: CM.blue     },
  { text: 'Wes Anderson',          color: CM.pink     },
  { text: 'Brutalist typography',  color: CM.lavender },
  { text: 'Japanese minimalism',   color: CM.mint     },
  { text: 'Gen Z digital culture', color: CM.peach    },
  { text: 'Film cinematography',   color: CM.coral    },
  { text: 'Editorial print',       color: CM.purple   },
  { text: 'Generative art',        color: CM.blue     },
  { text: 'Muji & quiet design',   color: CM.yellow   },
  { text: 'Motion & transition',   color: CM.pink     },
  { text: 'Indie micro-studios',   color: CM.mint     },
  { text: 'Architecture',          color: CM.lavender },
  { text: 'Street photography',    color: CM.peach    },
  { text: 'Typography obsession',  color: CM.coral    },
];

const CM_STICKERS = [
  { text: '✦ ideas',  bg: CM.yellow,   rotate: '-8deg',  x: '8%',  y: '12%' },
  { text: 'design',   bg: CM.pink,     rotate: '5deg',   x: '58%', y: '7%'  },
  { text: '◎ create', bg: CM.mint,     rotate: '-3deg',  x: '28%', y: '58%' },
  { text: 'explore',  bg: CM.blue,     rotate: '10deg',  x: '72%', y: '43%' },
  { text: '✺ build',  bg: CM.lavender, rotate: '-6deg',  x: '4%',  y: '68%' },
  { text: 'play',     bg: CM.peach,    rotate: '4deg',   x: '48%', y: '72%' },
  { text: '⬡ craft',  bg: CM.coral,    rotate: '-12deg', x: '78%', y: '18%' },
  { text: 'dream',    bg: CM.purple,   rotate: '7deg',   x: '18%', y: '28%' },
];

const CM_MARQUEE_ITEMS = [
  '✦ Creative Ideas', '◈ Digital Experiences', '◉ Experiments in Progress',
  '⬡ Branding', '◎ Motion Design', '✺ Web Experience', '✦ Editorial',
];

// ── Section Builders ─────────────────────────────────────────────────────────

function cmBuildHero() {
  const blobs = [
    { color: CM.yellow,   size: 380, x: '-80px', y: '-60px', opacity: 0.5,  delay: '0s'  },
    { color: CM.blue,     size: 280, x: '65%',   y: '-40px', opacity: 0.4,  delay: '2s'  },
    { color: CM.pink,     size: 220, x: '38%',   y: '55%',   opacity: 0.35, delay: '4s'  },
    { color: CM.mint,     size: 200, x: '-40px', y: '50%',   opacity: 0.3,  delay: '1s'  },
  ].map(b => `
    <div class="cm-blob" style="
      position:absolute;width:${b.size}px;height:${b.size}px;
      left:${b.x};top:${b.y};background:${b.color};
      opacity:${b.opacity};filter:blur(70px);
      animation-delay:${b.delay};pointer-events:none;z-index:0
    "></div>`).join('');

  const heroTags = [
    ['UI/UX Design',       CM.blue,     '#0369A1'],
    ['Branding',           CM.pink,     '#9F1239'],
    ['Creative Direction', CM.mint,     '#065F46'],
    ['Web Experience',     CM.yellow,   '#854D0E'],
    ['Digital Strategy',   CM.lavender, '#5B21B6'],
  ].map(([tag, bg, tc]) => `
    <span style="
      background:${bg}28;color:${tc};
      padding:6px 16px;border-radius:999px;
      font-size:.72rem;font-weight:600;letter-spacing:.04em;
      border:1px solid ${bg}50
    ">${tag}</span>`).join('');

  return `
    <div id="cm-hero" style="
      position:relative;overflow:hidden;
      padding:clamp(5rem,12vh,9rem) 24px clamp(4rem,8vh,7rem);
      background:${CM.cream};min-height:90vh;
      display:flex;align-items:center
    ">
      <div id="cm-cursor-glow" class="cm-cursor-glow"></div>
      ${blobs}
      <div class="cm-float"  style="position:absolute;right:8%;top:22%;font-size:3rem;opacity:0.45;pointer-events:none;z-index:1">✦</div>
      <div class="cm-float-2" style="position:absolute;right:22%;top:68%;font-size:2rem;opacity:0.38;pointer-events:none;z-index:1;color:${CM.coral}">◈</div>
      <div class="cm-float-3" style="position:absolute;left:6%;top:42%;font-size:1.5rem;opacity:0.32;pointer-events:none;z-index:1;color:${CM.purple}">◎</div>
      <div class="cm-spin-slow" style="position:absolute;right:14%;bottom:22%;width:72px;height:72px;border:2px solid ${CM.yellow}44;border-radius:50%;pointer-events:none;z-index:1"></div>
      <div class="cm-spin-slow" style="position:absolute;left:16%;top:14%;width:44px;height:44px;border:2px dashed ${CM.blue}44;border-radius:50%;pointer-events:none;z-index:1;animation-direction:reverse"></div>
      <div class="max-w-5xl mx-auto relative z-10 w-full">
        <button onclick="goToPage('home')" style="
          display:inline-flex;align-items:center;gap:8px;margin-bottom:3rem;
          font-size:.875rem;color:rgba(28,28,30,0.4);
          background:none;border:none;cursor:pointer;padding:0
        ">
          <i data-lucide="arrow-left" style="width:16px;height:16px"></i> Back
        </button>
        <div style="display:flex;align-items:center;gap:12px;margin-bottom:1.5rem">
          <span style="display:inline-block;width:28px;height:3px;background:${CM.orange};border-radius:2px"></span>
          <span style="font-size:.68rem;font-weight:700;letter-spacing:.18em;text-transform:uppercase;color:${CM.orange}">Creative Universe</span>
        </div>
        <h1 style="
          font-family:'Space Grotesk',Inter,sans-serif;
          font-size:clamp(3.5rem,9vw,8rem);
          font-weight:700;line-height:.95;
          letter-spacing:-.04em;color:#1C1C1E;
          margin-bottom:1.5rem
        ">Croissants<span style="color:${CM.orange}">Moon</span></h1>
        <p style="
          font-family:'Space Grotesk',Inter,sans-serif;
          font-size:clamp(1.1rem,2.5vw,1.55rem);font-weight:400;
          color:rgba(28,28,30,0.52);max-width:540px;
          line-height:1.45;margin-bottom:1.25rem
        ">Creative Ideas, Digital Experiences,<br>and Experiments in Progress.</p>
        <p style="max-width:490px;font-size:.95rem;line-height:1.7;color:rgba(28,28,30,0.45);margin-bottom:2.75rem">
          A growing creative identity exploring web experiences, visual storytelling, branding, and digital creativity. Not a finished studio — an honest, evolving beginning.
        </p>
        <div style="display:flex;flex-wrap:wrap;gap:12px;align-items:center;margin-bottom:2.5rem">
          <button onclick="document.getElementById('cm-works').scrollIntoView({behavior:'smooth'})" style="
            background:#1C1C1E;color:#fff;
            padding:14px 28px;border-radius:999px;
            font-size:.875rem;font-weight:600;
            border:none;cursor:pointer;
            display:inline-flex;align-items:center;gap:8px;
            transition:opacity .2s
          " onmouseover="this.style.opacity='.8'" onmouseout="this.style.opacity='1'">
            See the Work <i data-lucide="arrow-right" style="width:15px;height:15px"></i>
          </button>
          <button onclick="goToPage('contact')" style="
            border:1.5px solid rgba(28,28,30,0.2);color:#1C1C1E;
            background:transparent;padding:14px 28px;border-radius:999px;
            font-size:.875rem;font-weight:600;cursor:pointer;transition:all .2s
          " onmouseover="this.style.background='rgba(28,28,30,0.05)'"
            onmouseout="this.style.background='transparent'">
            Let's Collaborate
          </button>
        </div>
        <div style="display:flex;flex-wrap:wrap;gap:10px">${heroTags}</div>
      </div>
    </div>`;
}

function cmBuildMarquee() {
  const doubled = [...CM_MARQUEE_ITEMS, ...CM_MARQUEE_ITEMS];
  const colors  = [CM.orange, '#1C1C1E', CM.coral, '#4A6B8A', '#8B7355'];
  const items   = doubled.map((t, i) => `
    <span style="
      display:inline-block;padding:0 32px;
      font-family:'Space Grotesk',Inter,sans-serif;
      font-size:1.05rem;font-weight:600;
      color:${colors[i % colors.length]};
      white-space:nowrap;letter-spacing:.01em
    ">${t}</span>
    <span style="color:rgba(255,255,255,0.18);font-size:1.1rem;padding:0 4px">·</span>
  `).join('');

  return `
    <div style="background:#1C1C1E;padding:20px 0;overflow:hidden">
      <div style="display:flex;overflow:hidden">
        <div class="cm-marquee-track">${items}</div>
      </div>
    </div>`;
}

function cmBuildManifesto() {
  const pillars = [
    ['Curiosity', 'Every project starts with genuine curiosity — not a brief.', '✦'],
    ['Craft',     'Attention to the details most people skip over.',            '◈'],
    ['Courage',   'Shipping before feeling fully ready.',                       '◉'],
  ].map(([title, desc, icon]) => `
    <div style="
      background:rgba(255,255,255,0.45);
      border:1px solid rgba(255,255,255,0.6);
      border-radius:16px;padding:24px;
      backdrop-filter:blur(4px)
    ">
      <span style="font-size:1.4rem;display:block;margin-bottom:12px">${icon}</span>
      <h4 style="
        font-family:'Space Grotesk',Inter,sans-serif;
        font-weight:700;font-size:1.05rem;color:#1C1C1E;margin-bottom:8px
      ">${title}</h4>
      <p style="font-size:.83rem;line-height:1.6;color:rgba(28,28,30,0.65)">${desc}</p>
    </div>`).join('');

  return `
    <div style="
      padding:clamp(4rem,10vh,7rem) 24px;
      background:${CM.yellow};position:relative;overflow:hidden
    ">
      <div style="position:absolute;right:-60px;top:-60px;width:280px;height:280px;border-radius:50%;background:rgba(255,255,255,0.15);pointer-events:none"></div>
      <div style="position:absolute;left:-30px;bottom:-40px;width:180px;height:180px;border-radius:50%;background:rgba(255,140,0,0.1);pointer-events:none"></div>
      <div class="max-w-5xl mx-auto">
        <div style="display:flex;align-items:center;gap:12px;margin-bottom:2.5rem">
          <span style="display:inline-block;width:28px;height:3px;background:rgba(28,28,30,0.35);border-radius:2px"></span>
          <span style="font-size:.68rem;font-weight:700;letter-spacing:.18em;text-transform:uppercase;color:rgba(28,28,30,0.45)">Creative Manifesto</span>
        </div>
        <p style="
          font-family:'Space Grotesk',Inter,sans-serif;
          font-size:clamp(2.5rem,6vw,5rem);
          font-weight:700;line-height:1.05;
          letter-spacing:-.03em;color:#1C1C1E;
          margin-bottom:2.5rem
        ">This is where<br><em style="font-style:italic;color:#C05C11">ideas play.</em></p>
        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:2rem;align-items:start">
          <div>
            <p style="font-size:1.1rem;line-height:1.7;color:rgba(28,28,30,0.72);font-weight:500">
              CroissantsMoon exists because creativity is an act of exploration — not execution. It's the space where questions matter more than answers, and unfinished work is still honest work.
            </p>
          </div>
          <div style="display:flex;flex-direction:column;gap:14px">
            <div class="cm-sticky-note" style="transform:rotate(-2deg)">"Ideas don't wait for permission." ✦</div>
            <div class="cm-sticky-note" style="transform:rotate(1.5deg);background:${CM.pink};margin-top:6px;align-self:flex-end">combining tech with storytelling ◈</div>
            <div class="cm-sticky-note" style="transform:rotate(-1deg);background:#fff">embrace the experiment ◉</div>
          </div>
        </div>
        <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));gap:14px;margin-top:2.5rem">
          ${pillars}
        </div>
      </div>
    </div>`;
}

function cmBuildWorks() {
  const cards = CM_WORKS.map(w => `
    <button onclick="${w.soon ? 'void(0)' : `goToPage('${w.page}')`}" class="cm-work-card text-left" style="
      background:#fff;border-radius:20px;overflow:hidden;
      border:1px solid rgba(28,28,30,0.07);
      cursor:${w.soon ? 'default' : 'pointer'};
      transform:rotate(${w.rotate});
      box-shadow:0 4px 24px rgba(0,0,0,0.06);
      position:relative
    ">
      ${w.soon ? `<div style="position:absolute;top:12px;right:12px;background:#1C1C1E;color:#fff;font-size:.6rem;font-weight:700;letter-spacing:.1em;padding:4px 10px;border-radius:999px;z-index:2">SOON</div>` : ''}
      <div style="height:130px;background:${w.bg};display:flex;align-items:center;justify-content:center;font-size:2.4rem">
        ${w.emoji}
      </div>
      <div style="padding:18px 20px 22px">
        <div style="font-size:.65rem;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:${w.textColor};opacity:.8;margin-bottom:7px">${w.cat}</div>
        <h4 style="font-family:'Space Grotesk',Inter,sans-serif;font-weight:700;font-size:1rem;color:#1C1C1E;margin-bottom:7px;line-height:1.2">${w.title}</h4>
        <p style="font-size:.79rem;line-height:1.55;color:rgba(28,28,30,0.52)">${w.desc}</p>
        ${!w.soon ? `<div style="display:inline-flex;align-items:center;gap:6px;margin-top:14px;font-size:.78rem;font-weight:600;color:${w.textColor}">View <i data-lucide="arrow-right" style="width:12px;height:12px"></i></div>` : ''}
      </div>
    </button>`).join('');

  return `
    <div id="cm-works" style="padding:clamp(4rem,8vh,6rem) 24px;background:${CM.cream}">
      <div class="max-w-5xl mx-auto">
        <div style="display:flex;align-items:center;gap:12px;margin-bottom:1rem">
          <span style="display:inline-block;width:28px;height:3px;background:${CM.coral};border-radius:2px"></span>
          <span style="font-size:.68rem;font-weight:700;letter-spacing:.18em;text-transform:uppercase;color:${CM.coral}">Selected Works</span>
        </div>
        <h2 style="font-family:'Space Grotesk',Inter,sans-serif;font-size:clamp(2rem,4vw,3rem);font-weight:700;color:#1C1C1E;margin-bottom:.6rem;letter-spacing:-.03em">The Creative Lab</h2>
        <p style="font-size:.93rem;color:rgba(28,28,30,0.48);margin-bottom:2.5rem;max-width:420px;line-height:1.65">
          Not a polished portfolio. A creative lab showcase — websites, branding, experiments, and ideas in motion.
        </p>
        <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(255px,1fr));gap:20px">${cards}</div>
      </div>
    </div>`;
}

function cmBuildProcess() {
  const stages = CM_PROCESS.map((s, i) => `
    <div class="cm-process-card" style="
      background:#fff;border-radius:16px;padding:28px 22px;
      border:1px solid rgba(28,28,30,0.07);position:relative;overflow:hidden
    ">
      <div style="position:absolute;top:0;left:0;right:0;height:4px;background:${s.color}"></div>
      <span style="font-size:1.8rem;display:block;margin-bottom:14px">${s.icon}</span>
      <div style="font-size:.62rem;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:rgba(28,28,30,0.28);margin-bottom:7px">Step ${String(i+1).padStart(2,'0')}</div>
      <h4 style="font-family:'Space Grotesk',Inter,sans-serif;font-weight:700;font-size:1rem;color:#1C1C1E;margin-bottom:10px">${s.label}</h4>
      <p style="font-size:.81rem;line-height:1.6;color:rgba(28,28,30,0.52)">${s.desc}</p>
    </div>`).join('');

  return `
    <div style="padding:clamp(4rem,8vh,6rem) 24px;background:linear-gradient(135deg,#F2ECE4 0%,${CM.cream} 100%)">
      <div class="max-w-5xl mx-auto">
        <div style="display:flex;align-items:center;gap:12px;margin-bottom:1rem">
          <span style="display:inline-block;width:28px;height:3px;background:${CM.purple};border-radius:2px"></span>
          <span style="font-size:.68rem;font-weight:700;letter-spacing:.18em;text-transform:uppercase;color:${CM.purple}">Creative Process</span>
        </div>
        <h2 style="font-family:'Space Grotesk',Inter,sans-serif;font-size:clamp(2rem,4vw,3rem);font-weight:700;color:#1C1C1E;margin-bottom:.6rem;letter-spacing:-.03em">How Ideas Evolve</h2>
        <p style="font-size:.93rem;color:rgba(28,28,30,0.48);margin-bottom:2.5rem;max-width:420px;line-height:1.65">Organic, not linear. This is how creative work actually happens.</p>
        <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(240px,1fr));gap:16px">${stages}</div>
      </div>
    </div>`;
}

function cmBuildExperiments() {
  const cards = [
    { icon: 'monitor',  title: 'Frontend Experiments', desc: 'Interactive UI concepts and web animation studies — built in vanilla JS and CSS.',       color: CM.blue,     tag: 'HTML + CSS + JS' },
    { icon: 'code-2',   title: 'Creative Coding',       desc: 'Generative visuals, canvas sketches, and algorithmic art experiments.',                   color: CM.mint,     tag: 'Canvas API'      },
    { icon: 'layers',   title: 'Interface Explorations', desc: 'Prototypes and design experiments — trying ideas that might become real projects.',       color: CM.lavender, tag: 'Figma + Code'    },
    { icon: 'zap',      title: 'Micro-Interactions',    desc: 'Hover effects, transitions, and the tiny animations that make experiences feel alive.',    color: CM.peach,    tag: 'CSS Animations'  },
  ].map(e => `
    <div style="
      background:rgba(255,255,255,0.05);
      border:1px solid rgba(255,255,255,0.09);
      border-radius:16px;padding:28px 22px;
      transition:background .2s
    " onmouseover="this.style.background='rgba(255,255,255,0.08)'"
       onmouseout="this.style.background='rgba(255,255,255,0.05)'">
      <div style="width:46px;height:46px;border-radius:12px;background:${e.color}22;display:flex;align-items:center;justify-content:center;margin-bottom:18px">
        <i data-lucide="${e.icon}" style="width:22px;height:22px;color:${e.color}"></i>
      </div>
      <h4 style="font-family:'Space Grotesk',Inter,sans-serif;font-weight:700;font-size:.98rem;color:#fff;margin-bottom:9px">${e.title}</h4>
      <p style="font-size:.81rem;line-height:1.6;color:rgba(255,255,255,0.43);margin-bottom:14px">${e.desc}</p>
      <span style="background:${e.color}1A;color:${e.color};padding:4px 12px;border-radius:999px;font-size:.67rem;font-weight:600;letter-spacing:.06em">${e.tag}</span>
    </div>`).join('');

  return `
    <div style="padding:clamp(4rem,8vh,6rem) 24px;background:#1C1C1E;position:relative;overflow:hidden">
      <div style="position:absolute;top:-100px;right:-100px;width:420px;height:420px;border-radius:50%;background:${CM.blue};opacity:.04;pointer-events:none"></div>
      <div style="position:absolute;bottom:-80px;left:-60px;width:340px;height:340px;border-radius:50%;background:${CM.purple};opacity:.05;pointer-events:none"></div>
      <div class="max-w-5xl mx-auto relative" style="z-index:1">
        <div style="display:flex;align-items:center;gap:12px;margin-bottom:1rem">
          <span style="display:inline-block;width:28px;height:3px;background:${CM.mint};border-radius:2px"></span>
          <span style="font-size:.68rem;font-weight:700;letter-spacing:.18em;text-transform:uppercase;color:${CM.mint}">Digital Experiments</span>
        </div>
        <h2 style="font-family:'Space Grotesk',Inter,sans-serif;font-size:clamp(2rem,4vw,3rem);font-weight:700;color:#fff;margin-bottom:.6rem;letter-spacing:-.03em">The Sandbox</h2>
        <p style="font-size:.93rem;color:rgba(255,255,255,0.42);margin-bottom:2.5rem;max-width:420px;line-height:1.65">Frontend experiments, creative coding, and interface explorations. The digital playground.</p>
        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:18px">
          ${cards}
        </div>
        <div style="margin-top:2.5rem;padding:26px 28px;background:rgba(255,255,255,0.03);border:1px dashed rgba(255,255,255,0.12);border-radius:16px;display:flex;align-items:center;gap:14px;flex-wrap:wrap">
          <span style="width:8px;height:8px;border-radius:50%;background:${CM.mint};display:inline-block;animation:cmPulseDot 2s ease-in-out infinite;flex-shrink:0"></span>
          <span style="font-family:'Space Grotesk',Inter,sans-serif;font-size:.88rem;font-weight:600;color:rgba(255,255,255,0.55);flex:1">This portfolio is itself an experiment in editorial web design.</span>
          <button onclick="goToPage('websites')" style="
            background:${CM.mint}22;color:${CM.mint};
            border:1px solid ${CM.mint}40;
            padding:8px 18px;border-radius:999px;
            font-size:.77rem;font-weight:600;cursor:pointer;
            display:inline-flex;align-items:center;gap:6px;
            transition:background .2s;white-space:nowrap
          " onmouseover="this.style.background='${CM.mint}33'" onmouseout="this.style.background='${CM.mint}22'">
            Explore web work <i data-lucide="arrow-right" style="width:12px;height:12px"></i>
          </button>
        </div>
      </div>
    </div>`;
}

function cmBuildMoodboard() {
  const rotations = ['-2deg','1deg','-1.5deg','2.5deg','0deg','-0.8deg','1.2deg','-1deg','0.5deg','-1.2deg','1.8deg','-0.5deg','2deg','-1.8deg','0.8deg'];
  const fontSizes = ['.77rem', '.9rem', '1.05rem'];
  const paddings  = ['5px 14px', '7px 18px', '9px 22px'];

  const tags = CM_INSPO.map((item, i) => {
    const sz  = i % 3;
    const rot = rotations[i % rotations.length];
    const textColor = (item.color === CM.yellow || item.color === CM.mint || item.color === CM.peach)
      ? '#1C1C1E' : '#2A1A4A';
    return `
      <span style="
        display:inline-block;
        background:${item.color}28;color:${textColor};
        padding:${paddings[sz]};border-radius:999px;
        font-size:${fontSizes[sz]};font-weight:600;
        border:1.5px solid ${item.color}55;
        transform:rotate(${rot});
        transition:transform .22s cubic-bezier(0.34,1.56,0.64,1),box-shadow .22s;
        cursor:default;margin:6px
      " onmouseover="this.style.transform='scale(1.09) rotate(0deg)';this.style.boxShadow='0 8px 24px rgba(0,0,0,0.1)'"
         onmouseout="this.style.transform='rotate(${rot})';this.style.boxShadow='none'"
      >${item.text}</span>`;
  }).join('');

  return `
    <div style="padding:clamp(4rem,8vh,6rem) 24px;background:${CM.cream}">
      <div class="max-w-5xl mx-auto">
        <div style="display:flex;align-items:center;gap:12px;margin-bottom:1rem">
          <span style="display:inline-block;width:28px;height:3px;background:${CM.orange};border-radius:2px"></span>
          <span style="font-size:.68rem;font-weight:700;letter-spacing:.18em;text-transform:uppercase;color:${CM.orange}">Moodboard & Inspirations</span>
        </div>
        <h2 style="font-family:'Space Grotesk',Inter,sans-serif;font-size:clamp(2rem,4vw,3rem);font-weight:700;color:#1C1C1E;margin-bottom:.6rem;letter-spacing:-.03em">What Feeds the Work</h2>
        <p style="font-size:.93rem;color:rgba(28,28,30,0.48);margin-bottom:2.5rem;max-width:420px;line-height:1.65">A living collage of influences — architecture, type, film, internet culture, and design traditions that shape how I see.</p>
        <div style="display:flex;flex-wrap:wrap;align-items:center;padding:28px;background:#fff;border-radius:24px;border:1px solid rgba(28,28,30,0.07);box-shadow:0 4px 24px rgba(0,0,0,0.04)">
          ${tags}
        </div>
      </div>
    </div>`;
}

function cmBuildFunSection() {
  const stickers = CM_STICKERS.map(s => {
    const lightBg  = [CM.yellow, CM.mint, CM.peach, CM.blue].includes(s.bg);
    const textColor = lightBg ? '#1C1C1E' : (s.bg === CM.purple ? '#fff' : '#1C1C1E');
    return `
      <div class="cm-sticker" style="
        left:${s.x};top:${s.y};
        background:${s.bg};color:${textColor};
        padding:10px 18px;border-radius:8px;
        font-family:'Caveat',cursive;font-size:1.15rem;font-weight:600;
        transform:rotate(${s.rotate});
        box-shadow:2px 4px 14px rgba(0,0,0,0.12),0 1px 0 rgba(255,255,255,0.28) inset;
        z-index:10;white-space:nowrap;position:absolute
      ">${s.text}</div>`;
  }).join('');

  const reactions = [['✨','Inspired'],['🎨','Creative'],['🌙','Dreamy'],['🔥','Energized']]
    .map(([emoji, label]) => `
      <button onclick="cmReact(this,'${label}')" style="
        background:#fff;border:1.5px solid rgba(28,28,30,0.1);
        padding:8px 16px;border-radius:999px;
        font-size:.85rem;cursor:pointer;
        display:inline-flex;align-items:center;gap:6px;
        transition:background .18s
      " onmouseover="this.style.background='#f5f5f5'" onmouseout="this.style.background='#fff'">
        ${emoji} <span style="font-size:.74rem;font-weight:500;color:rgba(28,28,30,0.58)">${label}</span>
      </button>`).join('');

  return `
    <div style="padding:clamp(4rem,8vh,6rem) 24px;background:linear-gradient(135deg,${CM.lavender}2A,${CM.blue}1A)">
      <div class="max-w-5xl mx-auto">
        <div style="display:flex;align-items:center;gap:12px;margin-bottom:1rem">
          <span style="display:inline-block;width:28px;height:3px;background:${CM.purple};border-radius:2px"></span>
          <span style="font-size:.68rem;font-weight:700;letter-spacing:.18em;text-transform:uppercase;color:${CM.purple}">Just for Fun</span>
        </div>
        <h2 style="font-family:'Space Grotesk',Inter,sans-serif;font-size:clamp(2rem,4vw,3rem);font-weight:700;color:#1C1C1E;margin-bottom:.6rem;letter-spacing:-.03em">Drag the Stickers ✦</h2>
        <p style="font-size:.93rem;color:rgba(28,28,30,0.52);margin-bottom:2rem;max-width:420px;line-height:1.65">Every creative space needs a corkboard. This one is interactive — drag the stickers around.</p>
        <div id="cm-sticker-board" style="
          position:relative;height:420px;
          background:rgba(255,255,255,0.52);
          border:1.5px dashed rgba(28,28,30,0.12);
          border-radius:24px;overflow:hidden;
          backdrop-filter:blur(8px)
        ">
          <div style="
            position:absolute;inset:0;pointer-events:none;
            background-image:radial-gradient(circle,rgba(28,28,30,0.055) 1px,transparent 1px);
            background-size:28px 28px
          "></div>
          ${stickers}
          <div style="position:absolute;bottom:18px;right:20px;font-family:'Caveat',cursive;font-size:.95rem;color:rgba(28,28,30,0.22);pointer-events:none">← drag to rearrange</div>
        </div>
        <div style="display:flex;gap:12px;margin-top:22px;flex-wrap:wrap;align-items:center">
          <span style="font-size:.8rem;font-weight:600;color:rgba(28,28,30,0.38)">How does this page make you feel?</span>
          ${reactions}
          <span id="cm-react-msg" style="font-family:'Caveat',cursive;font-size:1.15rem;color:${CM.orange};display:none"></span>
        </div>
      </div>
    </div>`;
}

function cmBuildFutureVision() {
  const visionTags = [
    ['◉ Web Experiences', CM.blue],
    ['◈ Brand Identities', CM.mint],
    ['✦ Editorial Design', CM.yellow],
    ['⬡ Digital Strategy', CM.lavender],
  ].map(([tag, color]) => `
    <span style="
      background:rgba(255,255,255,0.18);
      border:1.5px solid rgba(255,255,255,0.35);
      color:#fff;padding:8px 20px;border-radius:999px;
      font-size:.79rem;font-weight:600
    ">${tag}</span>`).join('');

  return `
    <div style="padding:clamp(4rem,10vh,7rem) 24px;background:${CM.orange};position:relative;overflow:hidden">
      <div style="position:absolute;top:-60px;left:-60px;width:300px;height:300px;border-radius:50%;background:rgba(255,255,255,0.1);pointer-events:none"></div>
      <div style="position:absolute;bottom:-40px;right:-40px;width:240px;height:240px;border-radius:50%;background:rgba(0,0,0,0.06);pointer-events:none"></div>
      <div class="max-w-4xl mx-auto text-center relative" style="z-index:1">
        <div style="display:flex;align-items:center;justify-content:center;gap:12px;margin-bottom:2rem">
          <span style="display:inline-block;width:28px;height:3px;background:rgba(255,255,255,0.5);border-radius:2px"></span>
          <span style="font-size:.68rem;font-weight:700;letter-spacing:.18em;text-transform:uppercase;color:rgba(255,255,255,0.6)">Future Vision</span>
          <span style="display:inline-block;width:28px;height:3px;background:rgba(255,255,255,0.5);border-radius:2px"></span>
        </div>
        <h2 style="
          font-family:'Space Grotesk',Inter,sans-serif;
          font-size:clamp(2rem,5vw,3.8rem);
          font-weight:700;color:#fff;
          line-height:1.1;letter-spacing:-.04em;margin-bottom:1.5rem
        ">"A creative ecosystem where education,<br>technology, and design converge."</h2>
        <p style="font-size:1rem;line-height:1.7;color:rgba(255,255,255,0.72);max-width:500px;margin:0 auto 2.5rem">
          CroissantsMoon will grow into a boutique creative practice specializing in experiences for education, culture, and institutions that value craft over noise. This is the beginning.
        </p>
        <div style="display:flex;flex-wrap:wrap;gap:12px;justify-content:center">${visionTags}</div>
      </div>
    </div>`;
}

function cmBuildContact() {
  return `
    <div style="padding:clamp(5rem,10vh,7rem) 24px;background:${CM.cream};border-top:1px solid rgba(28,28,30,0.06)">
      <div class="max-w-4xl mx-auto text-center">
        <span style="font-size:2.5rem;display:block;margin-bottom:24px">✉</span>
        <h2 style="
          font-family:'Space Grotesk',Inter,sans-serif;
          font-size:clamp(2rem,5vw,3.8rem);
          font-weight:700;color:#1C1C1E;
          margin-bottom:1rem;letter-spacing:-.04em
        ">Got an idea?<br><span style="color:${CM.orange}">Let's make something fun.</span></h2>
        <p style="font-size:.98rem;line-height:1.7;color:rgba(28,28,30,0.48);max-width:440px;margin:0 auto 2.5rem">
          Whether it's a wild concept, a half-formed idea, or a clear brief — the conversation starts the same way. Say hello.
        </p>
        <div style="display:flex;flex-wrap:wrap;gap:16px;justify-content:center;align-items:center">
          <button onclick="goToPage('contact')" style="
            background:#1C1C1E;color:#fff;
            padding:16px 36px;border-radius:999px;
            font-family:'Space Grotesk',Inter,sans-serif;
            font-size:.92rem;font-weight:700;
            border:none;cursor:pointer;
            display:inline-flex;align-items:center;gap:10px;
            transition:opacity .2s;
            box-shadow:0 4px 20px rgba(28,28,30,0.18)
          " onmouseover="this.style.opacity='.8'" onmouseout="this.style.opacity='1'">
            Start a Conversation <i data-lucide="arrow-right" style="width:16px;height:16px"></i>
          </button>
          <a href="mailto:zefanya.kharisma@gmail.com" style="
            border:1.5px solid rgba(28,28,30,0.2);
            color:#1C1C1E;background:transparent;
            padding:16px 28px;border-radius:999px;
            font-size:.86rem;font-weight:600;
            cursor:pointer;text-decoration:none;
            display:inline-flex;align-items:center;gap:8px;
            transition:background .2s
          " onmouseover="this.style.background='rgba(28,28,30,0.05)'" onmouseout="this.style.background='transparent'">
            <i data-lucide="mail" style="width:15px;height:15px"></i>
            zefanya.kharisma@gmail.com
          </a>
        </div>
        <div style="display:flex;justify-content:center;margin-top:48px">
          <button onclick="goToPage('home')" style="
            display:inline-flex;align-items:center;gap:6px;
            background:none;border:none;cursor:pointer;
            font-size:.8rem;color:rgba(28,28,30,0.32);
            padding:8px 12px;border-radius:8px;transition:color .18s
          " onmouseover="this.style.color='rgba(28,28,30,0.6)'" onmouseout="this.style.color='rgba(28,28,30,0.32)'">
            <i data-lucide="arrow-left" style="width:14px;height:14px"></i> Back to main portfolio
          </button>
        </div>
      </div>
    </div>`;
}

// ── Interactive JS ────────────────────────────────────────────────────────────

function cmInitCursorGlow() {
  const glow = document.getElementById('cm-cursor-glow');
  const hero  = document.getElementById('cm-hero');
  if (!glow || !hero) return;
  hero.addEventListener('mousemove', e => {
    const rect = hero.getBoundingClientRect();
    glow.style.left = (e.clientX - rect.left) + 'px';
    glow.style.top  = (e.clientY - rect.top)  + 'px';
  });
}

function cmInitDraggableStickers() {
  const board = document.getElementById('cm-sticker-board');
  if (!board) return;

  board.querySelectorAll('.cm-sticker').forEach(sticker => {
    let dragging = false, sx, sy, sl, st;

    const onStart = (cx, cy) => {
      dragging = true;
      sx = cx; sy = cy;
      const cs = window.getComputedStyle(sticker);
      sl = parseFloat(cs.left) || 0;
      st = parseFloat(cs.top)  || 0;
      sticker.style.zIndex     = '100';
      sticker.style.transition = 'none';
    };
    const onMove = (cx, cy) => {
      if (!dragging) return;
      sticker.style.left = (sl + cx - sx) + 'px';
      sticker.style.top  = (st + cy - sy) + 'px';
    };
    const onEnd = () => {
      dragging = false;
      sticker.style.zIndex     = '10';
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

function cmReact(btn, label) {
  const msgs = {
    Inspired: "That's what this is all about! ✨",
    Creative: "Yes! Let's make something together. 🎨",
    Dreamy:   "CroissantsMoon vibes. 🌙",
    Energized:"Let's channel that energy into something. 🔥",
  };
  const el = document.getElementById('cm-react-msg');
  if (!el) return;
  el.textContent = msgs[label] || '✦';
  el.style.display = 'inline';
  setTimeout(() => { el.style.display = 'none'; }, 3200);
}

window.cmReact = cmReact;

// ── Page Init ─────────────────────────────────────────────────────────────────

function cmInitPage() {
  cmInjectFonts();
  const el = document.getElementById('page-croissantsmoon');
  if (!el) return;

  el.style.background = CM.cream;
  el.innerHTML = [
    cmBuildHero(),
    cmBuildMarquee(),
    cmBuildManifesto(),
    cmBuildWorks(),
    cmBuildProcess(),
    cmBuildExperiments(),
    cmBuildMoodboard(),
    cmBuildFunSection(),
    cmBuildFutureVision(),
    cmBuildContact(),
  ].join('');

  if (window.lucide) lucide.createIcons();

  setTimeout(() => {
    cmInitCursorGlow();
    cmInitDraggableStickers();
  }, 80);
}

document.addEventListener('DOMContentLoaded', cmInitPage);
