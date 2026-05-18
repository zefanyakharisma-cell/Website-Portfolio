// Project Management — PCU Global page (creative redesign)

function pcuInjectFonts() {
  if (document.querySelector('[data-pcu-fonts]')) return;
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = 'https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Caveat:wght@400;500;600;700&display=swap';
  link.setAttribute('data-pcu-fonts', '1');
  document.head.appendChild(link);
}

const PCU_C = {
  cream:     '#FFFBF5',
  blue:      '#003087',
  midBlue:   '#1a56a0',
  lightBlue: '#7BC8F6',
  mint:      '#6EE7B7',
  coral:     '#FF6B6B',
  yellow:    '#F5D05E',
  orange:    '#F4874B',
  lavender:  '#C4B5FD',
  peach:     '#FDBA8C',
};

const PCU_PROBLEMS = [
  { sym: '✕', color: PCU_C.coral,     title: 'No Value Proposition',    tag: 'Identity Crisis',  desc: 'The homepage has zero introductory text — visitors arrive to a menu of links with no explanation of who the International Office serves or why it matters.' },
  { sym: '∅', color: PCU_C.orange,    title: 'Incomplete Development',   tag: 'Dead Links',       desc: 'Multiple navigation links use javascript:void(0) as their href — shipped half-built and never finished. Dead links erode institutional trust immediately.' },
  { sym: '◻', color: PCU_C.yellow,    title: 'Abandoned Content Systems',tag: 'Empty CMS',        desc: '"Recent Posts" and "Category" sections display 0 entries — a blog feature built into the CMS but never populated. The skeleton exists; the content never arrived.' },
  { sym: '≡', color: PCU_C.lavender,  title: 'Redundant Navigation',     tag: 'UX Overload',      desc: 'The same menu structure repeats identically multiple times on a single page — cognitive overload without adding hierarchy or value.' },
  { sym: '☐', color: PCU_C.lightBlue, title: 'No Mobile-First Design',   tag: 'Not Responsive',   desc: 'No evidence of responsive design patterns. International students on mobile encounter a desktop-only experience — a critical gap in 2025.' },
  { sym: '→', color: PCU_C.mint,      title: 'Zero Calls to Action',     tag: 'No CTA',           desc: 'Not a single button, form, or prompt guides visitors toward any next step. A pure directory with no conversion path whatsoever.' },
];

const PCU_SOLUTIONS = [
  { icon: 'layers',          color: PCU_C.blue,      tag: 'Architecture', title: 'Audience-First Architecture',     desc: 'Dedicated sections for Inbound, Outbound, Partnership, and Life at PCU — each with dynamic color theming so every visitor immediately knows where they are and what to explore.' },
  { icon: 'route',           color: PCU_C.lightBlue, tag: 'Navigation',   title: 'Complete Hash-Based Routing',     desc: 'Every page has a real, shareable URL via client-side hash routing — enabling deep-linking, browser back/forward, and bookmarking. No placeholder links, no dead ends.' },
  { icon: 'rss',             color: PCU_C.mint,      tag: 'Content',      title: 'Live News Management System',     desc: 'Full admin CMS with article CRUD, trending tracking by visit count, image upload via base64, and role-based access — so the IO team keeps content fresh without touching code.' },
  { icon: 'smartphone',      color: PCU_C.peach,     tag: 'Responsive',   title: 'Mobile-Responsive Design',        desc: 'Built mobile-first with a slide-in drawer navigation, responsive grid layouts, and touch-friendly interactions — accessible to prospective students on any device.' },
  { icon: 'calendar-check',  color: PCU_C.orange,    tag: 'Conversion',   title: 'Multi-Step Meeting Request Form', desc: 'Structured multi-step form with automatic email notification to the IO team — turning passive visitors into active contacts and institutional leads.' },
  { icon: 'globe',           color: PCU_C.lavender,  tag: 'Partnership',  title: 'Partnership Directory by Continent', desc: 'Interactive partnership modal organized by continent and country — replacing link-lists with a visual, explorable map of PCU\'s full global network.' },
];

const PCU_TECH = [
  { name: 'HTML5',              tag: 'Markup',     color: PCU_C.orange    },
  { name: 'Tailwind CSS v3.4',  tag: 'Styling',    color: PCU_C.lightBlue },
  { name: 'Vanilla JavaScript', tag: 'Logic',      color: PCU_C.yellow    },
  { name: 'Flask + Python 3',   tag: 'Backend',    color: PCU_C.mint      },
  { name: 'SQLite',             tag: 'Database',   color: PCU_C.lavender  },
  { name: 'Gunicorn',           tag: 'Server',     color: PCU_C.coral     },
  { name: 'Lucide Icons',       tag: 'Icons',      color: PCU_C.peach     },
  { name: 'Playfair + DM Sans', tag: 'Typography', color: PCU_C.blue      },
];

const PCU_MARQUEE = [
  '✦ Rebuilt from Zero', '◈ Live CMS', '◉ Hash Routing',
  '⬡ Mobile-First', '◎ Open Source', '✺ Flask + Python', '✦ 6 Core Features',
];

// ── Section Builders ─────────────────────────────────────────────────────────

function pcuBuildHero() {
  const blobs = [
    { color: PCU_C.lightBlue, size: 380, x: '-80px', y: '-60px',  opacity: 0.45, delay: '0s' },
    { color: PCU_C.blue,      size: 260, x: '65%',   y: '-30px',  opacity: 0.3,  delay: '2s' },
    { color: PCU_C.mint,      size: 210, x: '38%',   y: '58%',    opacity: 0.28, delay: '4s' },
    { color: PCU_C.lavender,  size: 190, x: '-30px', y: '52%',    opacity: 0.25, delay: '1s' },
  ].map(b => `
    <div class="cm-blob" style="
      position:absolute;width:${b.size}px;height:${b.size}px;
      left:${b.x};top:${b.y};background:${b.color};
      opacity:${b.opacity};filter:blur(72px);
      animation-delay:${b.delay};pointer-events:none;z-index:0
    "></div>`).join('');

  const heroTags = [
    ['UI/UX Design',   PCU_C.lightBlue, '#0369A1'],
    ['Full-Stack',     PCU_C.mint,      '#065F46'],
    ['Live CMS',       PCU_C.yellow,    '#854D0E'],
    ['Mobile-First',   PCU_C.lavender,  '#5B21B6'],
    ['Open Source',    PCU_C.peach,     '#9A3412'],
  ].map(([tag, bg, tc]) => `
    <span style="
      background:${bg}28;color:${tc};
      padding:6px 16px;border-radius:999px;
      font-size:.72rem;font-weight:600;letter-spacing:.04em;
      border:1px solid ${bg}50
    ">${tag}</span>`).join('');

  return `
    <div id="pcu-hero" style="
      position:relative;overflow:hidden;
      padding:clamp(5rem,12vh,9rem) 24px clamp(4rem,8vh,7rem);
      background:${PCU_C.cream};min-height:90vh;
      display:flex;align-items:center
    ">
      <div id="pcu-cursor-glow" class="cm-cursor-glow" style="background:radial-gradient(circle,rgba(123,200,246,0.18) 0%,transparent 60%)"></div>
      ${blobs}
      <div class="cm-float"   style="position:absolute;right:8%;top:22%;font-size:3rem;opacity:0.4;pointer-events:none;z-index:1;color:${PCU_C.blue}">✦</div>
      <div class="cm-float-2" style="position:absolute;right:22%;top:68%;font-size:2rem;opacity:0.32;pointer-events:none;z-index:1;color:${PCU_C.mint}">◈</div>
      <div class="cm-float-3" style="position:absolute;left:6%;top:42%;font-size:1.5rem;opacity:0.26;pointer-events:none;z-index:1;color:${PCU_C.lavender}">◎</div>
      <div class="cm-spin-slow" style="position:absolute;right:14%;bottom:22%;width:72px;height:72px;border:2px solid ${PCU_C.lightBlue}44;border-radius:50%;pointer-events:none;z-index:1"></div>
      <div class="cm-spin-slow" style="position:absolute;left:16%;top:14%;width:44px;height:44px;border:2px dashed ${PCU_C.blue}44;border-radius:50%;pointer-events:none;z-index:1;animation-direction:reverse"></div>
      <div class="max-w-5xl mx-auto relative z-10 w-full">
        <button onclick="goToPage('projects-overview')" style="
          display:inline-flex;align-items:center;gap:8px;margin-bottom:3rem;
          font-size:.875rem;color:rgba(28,28,30,0.4);
          background:none;border:none;cursor:pointer;padding:0
        ">
          <i data-lucide="arrow-left" style="width:16px;height:16px"></i> Back
        </button>
        <div style="display:flex;align-items:center;gap:12px;margin-bottom:1.5rem">
          <span style="display:inline-block;width:28px;height:3px;background:${PCU_C.blue};border-radius:2px"></span>
          <span style="font-size:.68rem;font-weight:700;letter-spacing:.18em;text-transform:uppercase;color:${PCU_C.blue}">Digital Transformation</span>
        </div>
        <h1 style="
          font-family:'Space Grotesk',Inter,sans-serif;
          font-size:clamp(3.5rem,9vw,8rem);
          font-weight:700;line-height:.95;
          letter-spacing:-.04em;color:#1C1C1E;
          margin-bottom:1.5rem
        ">PCU<span style="color:${PCU_C.blue}">Global</span></h1>
        <p style="
          font-family:'Space Grotesk',Inter,sans-serif;
          font-size:clamp(1.1rem,2.5vw,1.55rem);font-weight:400;
          color:rgba(28,28,30,0.52);max-width:560px;
          line-height:1.45;margin-bottom:1.25rem
        ">Rebuilding the front door of<br>international education.</p>
        <p style="max-width:490px;font-size:.95rem;line-height:1.7;color:rgba(28,28,30,0.45);margin-bottom:2.75rem">
          PCU's International Office needed more than a refresh — it needed a complete rethink. PCU Global is the ground-up redesign that answers every failure of the original site, live and open source.
        </p>
        <div style="display:flex;flex-wrap:wrap;gap:12px;align-items:center;margin-bottom:2.5rem">
          <button onclick="document.getElementById('pcu-preview').scrollIntoView({behavior:'smooth'})" style="
            background:#1C1C1E;color:#fff;
            padding:14px 28px;border-radius:999px;
            font-size:.875rem;font-weight:600;
            border:none;cursor:pointer;
            display:inline-flex;align-items:center;gap:8px;
            transition:opacity .2s
          " onmouseover="this.style.opacity='.8'" onmouseout="this.style.opacity='1'">
            See the Site <i data-lucide="arrow-right" style="width:15px;height:15px"></i>
          </button>
          <a href="https://zefanyakharisma-cell.github.io/international-office-website/" target="_blank" rel="noopener" style="
            border:1.5px solid rgba(28,28,30,0.2);color:#1C1C1E;
            background:transparent;padding:14px 28px;border-radius:999px;
            font-size:.875rem;font-weight:600;cursor:pointer;
            text-decoration:none;
            display:inline-flex;align-items:center;gap:8px;
            transition:all .2s
          " onmouseover="this.style.background='rgba(28,28,30,0.05)'" onmouseout="this.style.background='transparent'">
            <i data-lucide="external-link" style="width:14px;height:14px"></i>
            Open Live Site
          </a>
        </div>
        <div style="display:flex;flex-wrap:wrap;gap:10px">${heroTags}</div>
      </div>
    </div>`;
}

function pcuBuildMarquee() {
  const doubled = [...PCU_MARQUEE, ...PCU_MARQUEE];
  const colors  = [PCU_C.lightBlue, '#fff', PCU_C.mint, PCU_C.yellow, PCU_C.lavender];
  const items = doubled.map((t, i) => `
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

function pcuBuildBuildStory() {
  const pillars = [
    ['✦', 'Diagnose', 'Before building anything, we mapped every failure of the existing site — six systemic problems, zero assumptions.'],
    ['◈', 'Design',   'Architecture for three distinct audiences. Clear visual hierarchy. Real calls to action. Mobile-first from the first commit.'],
    ['◉', 'Deploy',   'Not just a design file — a live, full-stack system. Flask backend, live CMS, hash routing. Shipped and working.'],
  ].map(([icon, title, desc]) => `
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
      background:${PCU_C.blue};position:relative;overflow:hidden
    ">
      <div style="position:absolute;right:-60px;top:-60px;width:280px;height:280px;border-radius:50%;background:rgba(255,255,255,0.06);pointer-events:none"></div>
      <div style="position:absolute;left:-30px;bottom:-40px;width:180px;height:180px;border-radius:50%;background:rgba(123,200,246,0.1);pointer-events:none"></div>
      <div class="max-w-5xl mx-auto">
        <div style="display:flex;align-items:center;gap:12px;margin-bottom:2.5rem">
          <span style="display:inline-block;width:28px;height:3px;background:rgba(255,255,255,0.35);border-radius:2px"></span>
          <span style="font-size:.68rem;font-weight:700;letter-spacing:.18em;text-transform:uppercase;color:rgba(255,255,255,0.5)">The Build Story</span>
        </div>
        <p style="
          font-family:'Space Grotesk',Inter,sans-serif;
          font-size:clamp(2.5rem,6vw,5rem);
          font-weight:700;line-height:1.05;
          letter-spacing:-.03em;color:#fff;
          margin-bottom:2.5rem
        ">A dead website.<br><em style="font-style:italic;color:${PCU_C.lightBlue}">Made live.</em></p>
        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:2rem;align-items:start">
          <div>
            <p style="font-size:1.1rem;line-height:1.7;color:rgba(255,255,255,0.65);font-weight:400">
              io.petra.ac.id — PCU's existing International Office website — was the digital front door for one of Surabaya's leading universities. It had been shipped half-built and left to decay. PCU Global is what happens when you treat that problem seriously.
            </p>
          </div>
          <div style="display:flex;flex-direction:column;gap:14px">
            <div class="cm-sticky-note" style="transform:rotate(-2deg)">"zero CTAs? not anymore." ✦</div>
            <div class="cm-sticky-note" style="transform:rotate(1.5deg);background:${PCU_C.lightBlue};margin-top:6px;align-self:flex-end">rebuilt the whole thing ◈</div>
            <div class="cm-sticky-note" style="transform:rotate(-1deg);background:#fff">live &amp; open source ◉</div>
          </div>
        </div>
        <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));gap:14px;margin-top:2.5rem">
          ${pillars}
        </div>
      </div>
    </div>`;
}

function pcuBuildProblems() {
  const cards = PCU_PROBLEMS.map(p => `
    <div style="
      background:#fff;border-radius:16px;
      padding:22px;position:relative;overflow:hidden;
      border:1px solid rgba(28,28,30,0.07);
      transition:transform .22s cubic-bezier(0.34,1.56,0.64,1),box-shadow .22s
    " onmouseover="this.style.transform='translateY(-4px)';this.style.boxShadow='0 16px 40px rgba(0,0,0,0.08)'"
       onmouseout="this.style.transform='none';this.style.boxShadow='none'">
      <div style="position:absolute;top:0;left:0;right:0;height:3px;background:${p.color}"></div>
      <div style="
        width:40px;height:40px;border-radius:10px;
        background:${p.color}18;display:flex;align-items:center;justify-content:center;
        font-size:1.15rem;font-weight:700;color:${p.color};margin-bottom:14px
      ">${p.sym}</div>
      <div style="font-size:.6rem;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:${p.color};margin-bottom:8px">${p.tag}</div>
      <h4 style="
        font-family:'Space Grotesk',Inter,sans-serif;
        font-weight:700;font-size:.98rem;color:#1C1C1E;margin-bottom:10px;line-height:1.3
      ">${p.title}</h4>
      <p style="font-size:.8rem;line-height:1.6;color:rgba(28,28,30,0.55)">${p.desc}</p>
    </div>`).join('');

  return `
    <div style="padding:clamp(4rem,8vh,6rem) 24px;background:${PCU_C.cream}">
      <div class="max-w-5xl mx-auto">
        <div style="display:flex;align-items:center;gap:12px;margin-bottom:1rem">
          <span style="display:inline-block;width:28px;height:3px;background:${PCU_C.coral};border-radius:2px"></span>
          <span style="font-size:.68rem;font-weight:700;letter-spacing:.18em;text-transform:uppercase;color:${PCU_C.coral}">Diagnostic Audit</span>
        </div>
        <h2 style="font-family:'Space Grotesk',Inter,sans-serif;font-size:clamp(2rem,4vw,3rem);font-weight:700;color:#1C1C1E;margin-bottom:.6rem;letter-spacing:-.03em">Six Things That Were Broken</h2>
        <p style="font-size:.93rem;color:rgba(28,28,30,0.48);margin-bottom:2.5rem;max-width:480px;line-height:1.65">A diagnostic audit of io.petra.ac.id revealed six systemic failures — documented, diagnosed, then fixed one by one.</p>
        <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:18px">${cards}</div>
      </div>
    </div>`;
}

function pcuBuildResponse() {
  return `
    <div style="padding:clamp(3rem,6vh,5rem) 24px;background:${PCU_C.cream}">
      <div class="max-w-4xl mx-auto text-center">
        <div style="display:flex;align-items:center;justify-content:center;gap:16px;margin-bottom:2rem">
          <span style="flex:1;max-width:80px;height:1px;background:rgba(28,28,30,0.12)"></span>
          <span style="font-size:.7rem;font-weight:700;letter-spacing:.15em;text-transform:uppercase;color:${PCU_C.blue}">Our Response</span>
          <span style="flex:1;max-width:80px;height:1px;background:rgba(28,28,30,0.12)"></span>
        </div>
        <h2 style="
          font-family:'Space Grotesk',Inter,sans-serif;
          font-weight:700;line-height:1.05;letter-spacing:-.03em;
          font-size:clamp(1.8rem,4vw,2.8rem);color:#1C1C1E;margin-bottom:1rem
        ">So we built this.</h2>
        <p style="font-size:.95rem;max-width:440px;margin:0 auto 2rem;line-height:1.7;color:rgba(28,28,30,0.5)">A ground-up redesign that answers every failure above — live, explorable, and open source.</p>
        <button onclick="document.getElementById('pcu-preview').scrollIntoView({behavior:'smooth'})" style="
          background:${PCU_C.blue};color:#fff;
          padding:12px 28px;border-radius:999px;
          font-size:.88rem;font-weight:600;
          border:none;cursor:pointer;
          display:inline-flex;align-items:center;gap:8px;
          transition:opacity .2s
        " onmouseover="this.style.opacity='.8'" onmouseout="this.style.opacity='1'">
          Explore the Build <i data-lucide="arrow-down" style="width:14px;height:14px"></i>
        </button>
      </div>
    </div>`;
}

function pcuBuildPreview() {
  return `
    <div id="pcu-preview" style="padding:clamp(4rem,8vh,6rem) 24px;background:#1C1C1E;position:relative;overflow:hidden">
      <div style="position:absolute;top:-80px;right:-80px;width:360px;height:360px;border-radius:50%;background:${PCU_C.lightBlue};opacity:.04;pointer-events:none"></div>
      <div style="position:absolute;bottom:-60px;left:-50px;width:300px;height:300px;border-radius:50%;background:${PCU_C.lavender};opacity:.05;pointer-events:none"></div>
      <div class="max-w-5xl mx-auto relative" style="z-index:1">
        <div style="display:flex;align-items:center;gap:12px;margin-bottom:1rem">
          <span style="display:inline-block;width:28px;height:3px;background:${PCU_C.lightBlue};border-radius:2px"></span>
          <span style="font-size:.68rem;font-weight:700;letter-spacing:.18em;text-transform:uppercase;color:${PCU_C.lightBlue}">Live Preview</span>
        </div>
        <h2 style="font-family:'Space Grotesk',Inter,sans-serif;font-size:clamp(2rem,4vw,3rem);font-weight:700;color:#fff;margin-bottom:.6rem;letter-spacing:-.03em">Explore the Site</h2>
        <p style="font-size:.93rem;color:rgba(255,255,255,0.42);margin-bottom:2.5rem;max-width:420px;line-height:1.65">The prototype is live — explore the full interface below or open it in a new tab.</p>
        <div style="border-radius:20px;overflow:hidden;border:1px solid rgba(255,255,255,0.08);box-shadow:0 16px 64px rgba(0,0,0,0.4)">
          <div style="display:flex;align-items:center;gap:12px;padding:14px 20px;background:#111">
            <div style="display:flex;gap:6px;flex-shrink:0">
              <span style="width:12px;height:12px;border-radius:50%;background:#FF5F57;display:inline-block"></span>
              <span style="width:12px;height:12px;border-radius:50%;background:#FFBD2E;display:inline-block"></span>
              <span style="width:12px;height:12px;border-radius:50%;background:#28CA41;display:inline-block"></span>
            </div>
            <div style="flex:1;display:flex;align-items:center;justify-content:center">
              <div style="display:flex;align-items:center;gap:8px;padding:6px 14px;border-radius:999px;background:rgba(255,255,255,0.06);color:rgba(255,255,255,0.4);font-size:.75rem;max-width:400px;width:100%">
                <i data-lucide="lock" style="width:10px;height:10px;flex-shrink:0;color:rgba(255,255,255,0.3)"></i>
                <span style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap">zefanyakharisma-cell.github.io/international-office-website/</span>
              </div>
            </div>
            <a href="https://zefanyakharisma-cell.github.io/international-office-website/" target="_blank" rel="noopener"
              style="color:rgba(255,255,255,0.35);flex-shrink:0;transition:color .2s"
              onmouseover="this.style.color='rgba(255,255,255,0.7)'" onmouseout="this.style.color='rgba(255,255,255,0.35)'">
              <i data-lucide="external-link" style="width:14px;height:14px"></i>
            </a>
          </div>
          <div style="position:relative;height:580px;background:#1a1a1a">
            <iframe
              src="https://zefanyakharisma-cell.github.io/international-office-website/"
              style="width:100%;height:100%;border:none;display:block"
              loading="lazy"
              title="PCU Global — International Office Website Preview"
              sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox"
            ></iframe>
          </div>
        </div>
        <div style="display:flex;justify-content:center;margin-top:20px">
          <a href="https://zefanyakharisma-cell.github.io/international-office-website/" target="_blank" rel="noopener"
            style="
              background:${PCU_C.lightBlue};color:#0369A1;
              padding:12px 28px;border-radius:999px;
              font-family:'Space Grotesk',Inter,sans-serif;
              font-size:.875rem;font-weight:700;
              text-decoration:none;
              display:inline-flex;align-items:center;gap:8px;
              transition:opacity .2s
            " onmouseover="this.style.opacity='.85'" onmouseout="this.style.opacity='1'">
            <i data-lucide="external-link" style="width:14px;height:14px"></i>
            Open Full Site
          </a>
        </div>
      </div>
    </div>`;
}

function pcuBuildSolutions() {
  const cards = PCU_SOLUTIONS.map((s, i) => `
    <div class="cm-process-card" style="
      background:#fff;border-radius:16px;padding:28px 22px;
      border:1px solid rgba(28,28,30,0.07);position:relative;overflow:hidden
    ">
      <div style="position:absolute;top:0;left:0;right:0;height:4px;background:${s.color}"></div>
      <div style="font-size:.6rem;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:rgba(28,28,30,0.28);margin-bottom:7px">Fix ${String(i + 1).padStart(2, '0')} · ${s.tag}</div>
      <div style="width:44px;height:44px;border-radius:12px;background:${s.color}18;display:flex;align-items:center;justify-content:center;margin-bottom:16px">
        <i data-lucide="${s.icon}" style="width:22px;height:22px;color:${s.color}"></i>
      </div>
      <h4 style="font-family:'Space Grotesk',Inter,sans-serif;font-weight:700;font-size:.98rem;color:#1C1C1E;margin-bottom:10px;line-height:1.3">${s.title}</h4>
      <p style="font-size:.81rem;line-height:1.6;color:rgba(28,28,30,0.52)">${s.desc}</p>
    </div>`).join('');

  return `
    <div style="padding:clamp(4rem,8vh,6rem) 24px;background:linear-gradient(135deg,#F2ECE4 0%,${PCU_C.cream} 100%)">
      <div class="max-w-5xl mx-auto">
        <div style="display:flex;align-items:center;gap:12px;margin-bottom:1rem">
          <span style="display:inline-block;width:28px;height:3px;background:${PCU_C.blue};border-radius:2px"></span>
          <span style="font-size:.68rem;font-weight:700;letter-spacing:.18em;text-transform:uppercase;color:${PCU_C.blue}">The Fix</span>
        </div>
        <h2 style="font-family:'Space Grotesk',Inter,sans-serif;font-size:clamp(2rem,4vw,3rem);font-weight:700;color:#1C1C1E;margin-bottom:.6rem;letter-spacing:-.03em">Six Problems. Six Solutions.</h2>
        <p style="font-size:.93rem;color:rgba(28,28,30,0.48);margin-bottom:2.5rem;max-width:440px;line-height:1.65">Every failure in the diagnostic had a direct answer in the build.</p>
        <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(260px,1fr));gap:18px">${cards}</div>
      </div>
    </div>`;
}

function pcuBuildTechStack() {
  const cards = PCU_TECH.map(t => `
    <div style="
      background:rgba(255,255,255,0.05);
      border:1px solid rgba(255,255,255,0.09);
      border-radius:14px;padding:20px 18px;
      transition:background .2s
    " onmouseover="this.style.background='rgba(255,255,255,0.09)'"
       onmouseout="this.style.background='rgba(255,255,255,0.05)'">
      <div style="width:10px;height:10px;border-radius:50%;background:${t.color};margin-bottom:14px"></div>
      <div style="font-size:.6rem;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:${t.color};margin-bottom:6px">${t.tag}</div>
      <h4 style="font-family:'Space Grotesk',Inter,sans-serif;font-weight:700;font-size:.9rem;color:#fff;line-height:1.3">${t.name}</h4>
    </div>`).join('');

  return `
    <div style="padding:clamp(4rem,8vh,6rem) 24px;background:#1C1C1E;position:relative;overflow:hidden">
      <div style="position:absolute;top:-100px;right:-100px;width:420px;height:420px;border-radius:50%;background:${PCU_C.lightBlue};opacity:.04;pointer-events:none"></div>
      <div style="position:absolute;bottom:-80px;left:-60px;width:340px;height:340px;border-radius:50%;background:${PCU_C.lavender};opacity:.04;pointer-events:none"></div>
      <div class="max-w-5xl mx-auto relative" style="z-index:1">
        <div style="display:flex;align-items:center;gap:12px;margin-bottom:1rem">
          <span style="display:inline-block;width:28px;height:3px;background:${PCU_C.mint};border-radius:2px"></span>
          <span style="font-size:.68rem;font-weight:700;letter-spacing:.18em;text-transform:uppercase;color:${PCU_C.mint}">Tech Stack</span>
        </div>
        <h2 style="font-family:'Space Grotesk',Inter,sans-serif;font-size:clamp(2rem,4vw,3rem);font-weight:700;color:#fff;margin-bottom:.6rem;letter-spacing:-.03em">What Powers It</h2>
        <p style="font-size:.93rem;color:rgba(255,255,255,0.42);margin-bottom:2.5rem;max-width:420px;line-height:1.65">Eight technologies, zero frontend frameworks — a deliberate choice for performance and control.</p>
        <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(170px,1fr));gap:14px">${cards}</div>
        <div style="margin-top:2.5rem;padding:26px 28px;background:rgba(255,255,255,0.03);border:1px dashed rgba(255,255,255,0.12);border-radius:16px;display:flex;align-items:center;gap:14px;flex-wrap:wrap">
          <span style="width:8px;height:8px;border-radius:50%;background:${PCU_C.mint};display:inline-block;animation:cmPulseDot 2s ease-in-out infinite;flex-shrink:0"></span>
          <span style="font-family:'Space Grotesk',Inter,sans-serif;font-size:.88rem;font-weight:600;color:rgba(255,255,255,0.55);flex:1">No build steps, no bundlers. Just clear code that anyone on the IO team can read and modify.</span>
        </div>
      </div>
    </div>`;
}

function pcuBuildGithub() {
  return `
    <div style="padding:clamp(4rem,10vh,7rem) 24px;background:${PCU_C.orange};position:relative;overflow:hidden">
      <div style="position:absolute;top:-60px;left:-60px;width:300px;height:300px;border-radius:50%;background:rgba(255,255,255,0.1);pointer-events:none"></div>
      <div style="position:absolute;bottom:-40px;right:-40px;width:240px;height:240px;border-radius:50%;background:rgba(0,0,0,0.06);pointer-events:none"></div>
      <div class="max-w-4xl mx-auto text-center relative" style="z-index:1">
        <div style="display:flex;align-items:center;justify-content:center;gap:12px;margin-bottom:2rem">
          <span style="display:inline-block;width:28px;height:3px;background:rgba(255,255,255,0.5);border-radius:2px"></span>
          <span style="font-size:.68rem;font-weight:700;letter-spacing:.18em;text-transform:uppercase;color:rgba(255,255,255,0.65)">Open Source</span>
          <span style="display:inline-block;width:28px;height:3px;background:rgba(255,255,255,0.5);border-radius:2px"></span>
        </div>
        <h2 style="
          font-family:'Space Grotesk',Inter,sans-serif;
          font-size:clamp(2rem,5vw,3.8rem);
          font-weight:700;color:#fff;
          line-height:1.1;letter-spacing:-.04em;margin-bottom:1.5rem
        ">Built to be forked,<br>adapted, and deployed.</h2>
        <p style="font-size:1rem;line-height:1.7;color:rgba(255,255,255,0.72);max-width:440px;margin:0 auto 2.5rem">
          The full source code is on GitHub — for any international office team that wants to start from here instead of from zero.
        </p>
        <div style="display:flex;flex-wrap:wrap;gap:16px;justify-content:center">
          <a href="https://github.com/zefanyakharisma-cell/international-office-website" target="_blank" rel="noopener" style="
            background:#fff;color:${PCU_C.orange};
            padding:14px 32px;border-radius:999px;
            font-family:'Space Grotesk',Inter,sans-serif;
            font-size:.9rem;font-weight:700;
            text-decoration:none;
            display:inline-flex;align-items:center;gap:10px;
            transition:opacity .2s;
            box-shadow:0 4px 20px rgba(0,0,0,0.15)
          " onmouseover="this.style.opacity='.88'" onmouseout="this.style.opacity='1'">
            <i data-lucide="github" style="width:16px;height:16px"></i>
            Open Repository
          </a>
          <button onclick="goToPage('projects-overview')" style="
            border:1.5px solid rgba(255,255,255,0.4);color:#fff;
            background:transparent;padding:14px 28px;border-radius:999px;
            font-size:.88rem;font-weight:600;cursor:pointer;
            display:inline-flex;align-items:center;gap:8px;
            transition:background .2s
          " onmouseover="this.style.background='rgba(255,255,255,0.12)'" onmouseout="this.style.background='transparent'">
            <i data-lucide="arrow-left" style="width:14px;height:14px"></i>
            Back to Projects
          </button>
        </div>
      </div>
    </div>`;
}

function pcuBuildReactions() {
  const reactions = [
    ['🌐', 'Impressed'],
    ['💡', 'Inspired'],
    ['🔧', 'Technical'],
    ['🚀', 'Amazing'],
  ].map(([emoji, label]) => `
    <button onclick="pcuReact(this,'${label}')" style="
      background:rgba(255,255,255,0.08);border:1.5px solid rgba(255,255,255,0.12);
      padding:8px 16px;border-radius:999px;
      font-size:.85rem;cursor:pointer;
      display:inline-flex;align-items:center;gap:6px;
      transition:background .18s;color:#fff
    " onmouseover="this.style.background='rgba(255,255,255,0.14)'" onmouseout="this.style.background='rgba(255,255,255,0.08)'">
      ${emoji} <span style="font-size:.74rem;font-weight:500;color:rgba(255,255,255,0.55)">${label}</span>
    </button>`).join('');

  return `
    <div style="padding:clamp(4rem,8vh,5rem) 24px;background:#1C1C1E;border-top:1px solid rgba(255,255,255,0.06)">
      <div class="max-w-5xl mx-auto">
        <div style="display:flex;flex-wrap:wrap;gap:12px;align-items:center">
          <span style="font-family:'Space Grotesk',Inter,sans-serif;font-size:.85rem;font-weight:600;color:rgba(255,255,255,0.38)">How does this project make you feel?</span>
          ${reactions}
          <span id="pcu-react-msg" style="font-family:'Caveat',cursive;font-size:1.15rem;color:${PCU_C.lightBlue};display:none"></span>
        </div>
        <div style="display:flex;justify-content:center;margin-top:48px">
          <button onclick="goToPage('home')" style="
            display:inline-flex;align-items:center;gap:6px;
            background:none;border:none;cursor:pointer;
            font-size:.8rem;color:rgba(255,255,255,0.28);
            padding:8px 12px;border-radius:8px;transition:color .18s
          " onmouseover="this.style.color='rgba(255,255,255,0.55)'" onmouseout="this.style.color='rgba(255,255,255,0.28)'">
            <i data-lucide="arrow-left" style="width:14px;height:14px"></i> Back to main portfolio
          </button>
        </div>
      </div>
    </div>`;
}

// ── Interactive ───────────────────────────────────────────────────────────────

function pcuInitCursorGlow() {
  const glow = document.getElementById('pcu-cursor-glow');
  const hero  = document.getElementById('pcu-hero');
  if (!glow || !hero) return;
  hero.addEventListener('mousemove', e => {
    const rect = hero.getBoundingClientRect();
    glow.style.left = (e.clientX - rect.left) + 'px';
    glow.style.top  = (e.clientY - rect.top)  + 'px';
  });
}

function pcuReact(btn, label) {
  const msgs = {
    Impressed:  'This is what digital transformation looks like. 🌐',
    Inspired:   "That's the point — real problems deserve real solutions. 💡",
    Technical:  'Flask + vanilla JS + SQLite — deliberate and clean. 🔧',
    Amazing:    "Shipped and live. That's the goal. 🚀",
  };
  const el = document.getElementById('pcu-react-msg');
  if (!el) return;
  el.textContent = msgs[label] || '✦';
  el.style.display = 'inline';
  setTimeout(() => { el.style.display = 'none'; }, 3200);
}

window.pcuReact = pcuReact;

// ── Page Init ─────────────────────────────────────────────────────────────────

function pcuInitPage() {
  pcuInjectFonts();
  const el = document.getElementById('page-pcu-global');
  if (!el) return;

  el.style.background = PCU_C.cream;
  el.innerHTML = [
    pcuBuildHero(),
    pcuBuildMarquee(),
    pcuBuildBuildStory(),
    pcuBuildProblems(),
    pcuBuildResponse(),
    pcuBuildPreview(),
    pcuBuildSolutions(),
    pcuBuildTechStack(),
    pcuBuildGithub(),
    pcuBuildReactions(),
  ].join('');

  if (window.lucide) lucide.createIcons();

  setTimeout(() => {
    pcuInitCursorGlow();
  }, 80);
}

document.addEventListener('DOMContentLoaded', function () {
  pcuInitPage();
});
