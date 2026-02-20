/* ══════════════════════════════════════════════════════════
   pages.js — ALL page content lives here.

   Each HTML page just has: <main id="app" data-page="home">
   This script reads data-page and renders the right content.

   To edit ANY page content, edit here — one file, all pages.
   ══════════════════════════════════════════════════════════ */

/* ── Reddit & social links (change once here) ── */
const LINKS = {
  reddit:    'https://www.reddit.com/r/SHELLHACK/',
  xVL:       'https://x.com/vantalayer',
  xRS:       'https://x.com/theredsig',
  contact:   'index.html#contact',
};

/* ══════════════════════════════════════════════════════════
   DEVLOG ENTRIES
   ─────────────────────────────────────────────────────────
   Add new entries at the TOP of this array.
   Each entry: { num, title, date, url }
   url → your Reddit post link
   ══════════════════════════════════════════════════════════ */
const DEVLOG_ENTRIES = [
  /* Example — uncomment and fill in when you have a real post:*/
   {
    num:   '#003',
    title: 'Everything Is Upgradable Now & Realism Has to Compromise',
    date:  'Feb 8 2026',
    url:   'https://www.reddit.com/r/SHELLHACK/comments/1r7ned8/devlog_003_everything_is_upgradable_now_realism/',
  },
   {
    num:   '#002',
    title: 'The Terminal Gets Serious',
    date:  'Feb 10 2026',
    url:   'https://www.reddit.com/r/SHELLHACK/comments/1r0oxhs/devlog_002_the_terminal_gets_serious/',
  },
  {
    num:   '#001',
    title: 'Wrapping up Vynamp — SHELLHACK\’s in-game music & radio system',
    date:  'Jan 29 2026',
    url:   'https://www.reddit.com/r/SHELLHACK/comments/1qos862/devlog_wrapping_up_vynamp_shellhacks_ingame_music/',
  },
  
];

/* ══════════════════════════════════════════════════════════
   SVG ICONS
   ══════════════════════════════════════════════════════════ */
const ICON = {
  reddit: `<svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
    <path d="M16.67 10a1.46 1.46 0 0 0-2.47-1 7.12 7.12 0 0 0-3.85-1.23l.65-3.08 2.13.45a1 1 0 1 0 .11-.51l-2.38-.5a.25.25 0 0 0-.3.19l-.72 3.44a7.14 7.14 0 0 0-3.89 1.23 1.46 1.46 0 1 0-1.61 2.39 2.87 2.87 0 0 0 0 .44c0 2.24 2.61 4.06 5.83 4.06s5.83-1.82 5.83-4.06a2.87 2.87 0 0 0 0-.44 1.46 1.46 0 0 0 .57-1.38zM7.27 11a1 1 0 1 1 1 1 1 1 0 0 1-1-1zm5.58 2.71a3.58 3.58 0 0 1-2.85.86 3.58 3.58 0 0 1-2.85-.86.25.25 0 0 1 .35-.35 3.13 3.13 0 0 0 2.5.71 3.13 3.13 0 0 0 2.5-.71.25.25 0 0 1 .35.35zm-.19-1.71a1 1 0 1 1 1-1 1 1 0 0 1-1 1z"/>
  </svg>`,
  redditSm: `<svg width="18" height="18" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
    <path d="M16.67 10a1.46 1.46 0 0 0-2.47-1 7.12 7.12 0 0 0-3.85-1.23l.65-3.08 2.13.45a1 1 0 1 0 .11-.51l-2.38-.5a.25.25 0 0 0-.3.19l-.72 3.44a7.14 7.14 0 0 0-3.89 1.23 1.46 1.46 0 1 0-1.61 2.39 2.87 2.87 0 0 0 0 .44c0 2.24 2.61 4.06 5.83 4.06s5.83-1.82 5.83-4.06a2.87 2.87 0 0 0 0-.44 1.46 1.46 0 0 0 .57-1.38zM7.27 11a1 1 0 1 1 1 1 1 1 0 0 1-1-1zm5.58 2.71a3.58 3.58 0 0 1-2.85.86 3.58 3.58 0 0 1-2.85-.86.25.25 0 0 1 .35-.35 3.13 3.13 0 0 0 2.5.71 3.13 3.13 0 0 0 2.5-.71.25.25 0 0 1 .35.35zm-.19-1.71a1 1 0 1 1 1-1 1 1 0 0 1-1 1z"/>
  </svg>`,
  x: `<svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.74l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>`,
  xBig: `<svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.74l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>`,
  pin: `<svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>`,
  arrow: `<svg class="devlog-arrow" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><polyline points="9 18 15 12 9 6"/></svg>`,
  download: `<svg width="22" height="22" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><polyline points="8 17 12 21 16 17"/><line x1="12" y1="12" x2="12" y2="21"/><path d="M20.88 18.09A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.29"/></svg>`,
  clock: `<svg width="64" height="64" fill="none" stroke="#2563eb" stroke-width="1.5" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`,
  layers: `<svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>`,
  bolt: `<svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`,
  shield: `<svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
  code: `<svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`,
  chip: `<svg width="48" height="48" fill="none" stroke="#60a5fa" stroke-width="1.5" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="2" x2="9" y2="4"/><line x1="15" y1="2" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="22"/><line x1="15" y1="20" x2="15" y2="22"/><line x1="20" y1="9" x2="22" y2="9"/><line x1="20" y1="14" x2="22" y2="14"/><line x1="2" y1="9" x2="4" y2="9"/><line x1="2" y1="14" x2="4" y2="14"/></svg>`,
};

/* ══════════════════════════════════════════════════════════
   PAGE RENDERERS
   ══════════════════════════════════════════════════════════ */

/* ── HOME ── */
function renderHome(el) {
  el.innerHTML = `
    <!-- HERO -->
    <section class="hero-section">
      <div class="hero-wrap">
        <div class="hero-img-box">
          <img src="img/shellhack-bg.jpg" alt="SHELLHACK key art" loading="eager">
        </div>
        <div class="hero-meta">
          <div class="hero-title-block">
            <div class="section-title"><h2>SHELLHACK</2></div>
            <div class="game-status">&#x25CF;&nbsp; Under Development &mdash; Coming Soon</div>
          </div>
          <a href="${LINKS.reddit}" target="_blank" rel="noopener" class="btn-community">
            ${ICON.reddit} Join the Community
          </a>
        </div>
        <div class="game-desc">
          <p>A deep hacking simulation inspired by Hacknet and Uplink. Infiltrate secure networks,
          manipulate encrypted data and master the system from the shadows — then be tested,
          pushed to your limits, and gripped by the most thrilling story in the genre yet.</p>
        </div>
      </div>
    </section>

    <!-- ABOUT -->
    <section id="about" class="section about-section">
      <div class="section-inner">
        <div class="about-grid">
          <div class="about-text">
            <div class="section-tag">Core Identity</div>
            <h2 class="section-title">The Vanta<br>Philosophy</h2>
            <p><strong>VANTA</strong> represents the blackest black — the absolute absence of compromise.
            A small indie studio out of Montréal, Canada, built on the belief that games should go deep,
            not just wide.</p>
            <p>The <strong>LAYER</strong> signifies the depth of the work — games that live in the
            management and simulation niche. Whether you're running a massive corporation or hacking
            into one, there is always another layer to peel back and master.</p>
            <p>Together, <strong>VANTA + LAYER</strong> represent a core belief: that the best games
            take you to the deepest layer of a subject — not just the surface. The goal is for players
            to feel like they actually understand something by the time they're done.</p>
            <p>The <strong>SYSTEMS</strong> are the bedrock. Custom tools — like <strong>VantaCore</strong>
            and others — exist because off-the-shelf solutions were never built for this kind of depth.
            Primarily a game studio, the tech built along the way sometimes gets released too.</p>
          </div>
          <div class="about-visual">
            <div class="about-glow"></div>
            <div class="about-box">
              <div class="about-logo-art">
                <img class="logo-rock-img" src="img/logo-rock.png" alt="Vanta Layer stone logo">
                <div class="logo-art-caption">Est. 2025&nbsp;&nbsp;&mdash;&nbsp;&nbsp;Montr&eacute;al, Canada</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CONTACT -->
    <section id="contact" class="section">
      <div class="section-inner">
        <div class="contact-grid">
          <div class="contact-info">
            <h2>Get in Touch</h2>
            <p>Interested in collaborating, licensing or just saying hello? Drop a line!</p>
            <div class="contact-item">
              <div class="contact-icon">${ICON.xBig}</div>
              <div>
                <div class="contact-item-label">Vanta Layer on X</div>
                <div class="contact-item-value"><a href="${LINKS.xVL}" target="_blank" rel="noopener">@vantalayer</a></div>
              </div>
            </div>
            <div class="contact-item">
              <div class="contact-icon">${ICON.xBig}</div>
              <div>
                <div class="contact-item-label">Lead Designer on X</div>
                <div class="contact-item-value"><a href="${LINKS.xRS}" target="_blank" rel="noopener">@theredsig</a></div>
              </div>
            </div>
            <div class="contact-item">
              <div class="contact-icon">${ICON.reddit}</div>
              <div>
                <div class="contact-item-label">SHELLHACK Community</div>
                <div class="contact-item-value"><a href="${LINKS.reddit}" target="_blank" rel="noopener">r/SHELLHACK on Reddit</a></div>
              </div>
            </div>
            <div class="contact-item">
              <div class="contact-icon">${ICON.pin}</div>
              <div>
                <div class="contact-item-label">Location</div>
                <div class="contact-item-value">Montr&eacute;al, Qu&eacute;bec, Canada</div>
              </div>
            </div>
          </div>
          <div class="contact-form">
            <form id="contactForm" novalidate>
              <div class="form-row">
                <div>
                  <label class="form-label" for="f-name">Name</label>
                  <input type="text" id="f-name" class="form-input" placeholder="Your name" required minlength="2" autocomplete="name">
                  <div class="form-error" id="err-name">Please enter your name.</div>
                </div>
                <div>
                  <label class="form-label" for="f-email">Email</label>
                  <input type="email" id="f-email" class="form-input" placeholder="you@example.com" required autocomplete="email">
                  <div class="form-error" id="err-email">Please enter a valid email.</div>
                </div>
              </div>
              <div class="form-group">
                <label class="form-label" for="f-subject">Subject</label>
                <select id="f-subject" class="form-select">
                  <option>Collaboration Opportunity</option>
                  <option>Tech Licensing</option>
                  <option>Press Inquiry</option>
                  <option>Game Feedback</option>
                  <option>Job Application</option>
                  <option>Other</option>
                </select>
              </div>
              <div class="form-group">
                <label class="form-label" for="f-message">Message</label>
                <textarea id="f-message" class="form-textarea" placeholder="Your message..." required minlength="10"></textarea>
                <div class="form-error" id="err-message">Message must be at least 10 characters.</div>
              </div>
              <div style="display:none!important" aria-hidden="true">
                <input type="text" name="website" id="hp-field" tabindex="-1" autocomplete="off">
              </div>
              <div id="form-status" class="form-status"></div>
              <button type="submit" class="btn-submit" id="submitBtn">Transmit Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  `;

  /* Load contact form logic after render */
  const s = document.createElement('script');
  s.src = 'js/contact.js';
  document.body.appendChild(s);
}

/* ── DEVLOG ── */
function renderDevlog(el) {
  const hasEntries = DEVLOG_ENTRIES.length > 0;

  const entriesHTML = hasEntries
    ? DEVLOG_ENTRIES.map(e => `
        <a href="${e.url}" target="_blank" rel="noopener" class="devlog-entry">
          <span class="devlog-num">${e.num}</span>
          <span class="devlog-title">${e.title}</span>
          <span class="devlog-meta">${e.date}</span>
          ${ICON.arrow}
        </a>
      `).join('')
    : `<div class="devlog-empty"><p>First entry coming soon</p></div>`;

  el.innerHTML = `
    <div class="devlog-wrap">
      <div class="devlog-header">
        <div class="section-tag">Development Updates</div>
        <h1 class="section-title">Devlog</h1>
        <p>Behind-the-scenes updates on SHELLHACK and other projects.<br>
        All entries are also posted on
        <a href="${LINKS.reddit}" target="_blank" rel="noopener">r/SHELLHACK</a> — come join the conversation.</p>
      </div>
      <div class="devlog-list">
        ${entriesHTML}
      </div>
      <a href="${LINKS.reddit}" target="_blank" rel="noopener" class="devlog-reddit-link">
        ${ICON.redditSm} Follow on r/SHELLHACK
      </a>
    </div>
  `;
}

/* ── VANTACORE ── */
function renderVantaCore(el) {
  el.innerHTML = `
    <div class="vc-wrap">
      <div class="vc-header">
        <div class="vc-icon">${ICON.chip}</div>
        <div>
          <div class="vc-title">VantaCore</div>
          <div class="vc-version">Management / Sim Framework &nbsp;v3.4.0</div>
        </div>
      </div>
      <div class="vc-grid">
        <div>
          <div class="vc-hero-box">
            <div class="vc-hex-bg" id="hexGrid"></div>
            <div class="vc-hero-text">
              <h3>Deterministic Entity Architecture</h3>
              <p>Optimized for complex management games with massive data points.</p>
            </div>
          </div>
          <div class="vc-features">
            <div class="vc-feature">
              <div class="vc-feature-icon">${ICON.layers}</div>
              <h4>Multi-Layer Logic</h4>
              <p>Abstracted logic layers for complex game systems without coupling concerns.</p>
            </div>
            <div class="vc-feature">
              <div class="vc-feature-icon">${ICON.bolt}</div>
              <h4>Zero Latency</h4>
              <p>Highly optimized memory management for simulation ticks at scale.</p>
            </div>
            <div class="vc-feature">
              <div class="vc-feature-icon">${ICON.shield}</div>
              <h4>Deterministic</h4>
              <p>Frame-perfect state synchronization for multiplayer simulation scenarios.</p>
            </div>
            <div class="vc-feature">
              <div class="vc-feature-icon">${ICON.code}</div>
              <h4>Internal API</h4>
              <p>Easily extendable modular systems for building custom simulations fast.</p>
            </div>
          </div>
        </div>
        <div class="vc-sidebar">
          <div class="vc-cta">
            <h3>License the SDK</h3>
            <p>Built for professional simulation and management game development. Inquire for pricing and access.</p>
            <button onclick="window.location.href='index.html#contact'">Contact Sales</button>
          </div>
          <div class="vc-benchmarks">
            <h4>Core Benchmarks</h4>
            <div class="bench-row"><span class="bench-label">1M Entities</span><span class="bench-val">~1.2ms</span></div>
            <div class="bench-row"><span class="bench-label">Tick Precision</span><span class="bench-val">64-bit</span></div>
            <div class="bench-row"><span class="bench-label">Memory Overhead</span><span class="bench-val">Minimal</span></div>
          </div>
        </div>
      </div>
    </div>
  `;

  /* Populate hex grid */
  const grid = document.getElementById('hexGrid');
  if (grid) {
    for (let i = 0; i < 144; i++) {
      const s = document.createElement('span');
      s.textContent = '0x' + i.toString(16).padStart(4, '0');
      grid.appendChild(s);
    }
  }
}

/* ── CRAFTTIMELOG ── */
function renderCraftTimeLog(el) {
  /* This page uses light-mode */
  document.body.classList.add('light-mode');

  el.innerHTML = `
    <main class="ctl-page">
      <div class="ctl-wrap" style="position:relative;overflow:hidden;">
        <div class="ctl-glow-1"></div>
        <div class="ctl-glow-2"></div>
        <div class="ctl-hero">
          <div class="ctl-icon-wrap">${ICON.clock}</div>
          <div class="ctl-title">Craft<span>Time</span>Log</div>
          <p class="ctl-subtitle">The professional-grade, minimalist, and offline-first time tracker
          designed for creators who value their flow state.</p>
          <button class="ctl-download">${ICON.download} Download Stable V1.0</button>
          <div class="ctl-screenshots">
            <div class="ctl-ss-grid">
              <div class="ctl-ss-item"><img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800" alt="Main Interface" loading="lazy"></div>
              <div class="ctl-ss-item"><img src="https://images.unsplash.com/photo-1551288049-bbbda5366392?auto=format&fit=crop&q=80&w=800" alt="Analytics View" loading="lazy"></div>
              <div class="ctl-ss-item"><img src="https://images.unsplash.com/photo-1484417894907-623942c8ee29?auto=format&fit=crop&q=80&w=800" alt="Settings" loading="lazy"></div>
            </div>
            <div class="ctl-platform-row">
              <div class="ctl-platform"><svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>Desktop Optimized</div>
              <div class="ctl-platform"><svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><rect x="4" y="2" width="16" height="20" rx="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>Tablet Support</div>
              <div class="ctl-platform"><svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>Mobile Sync</div>
            </div>
          </div>
        </div>
        <div class="ctl-features">
          <div class="ctl-feature">
            <div class="ctl-feature-icon"><svg width="28" height="28" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg></div>
            <h3>Zero Friction</h3>
            <p>Forget complex forms. Start tracking instantly with global hotkeys or one-click interactions.</p>
          </div>
          <div class="ctl-feature">
            <div class="ctl-feature-icon"><svg width="28" height="28" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg></div>
            <h3>Vault Storage</h3>
            <p>Your data never leaves your machine. Local-only JSON layers ensure absolute privacy.</p>
          </div>
          <div class="ctl-feature">
            <div class="ctl-feature-icon"><svg width="28" height="28" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg></div>
            <h3>Deep Layers</h3>
            <p>Categorize your work by focus intensity and project hierarchy for granular insights.</p>
          </div>
        </div>
        <div class="ctl-cta">
          <div class="ctl-cta-text">
            <h2>Focus on the Work,<br>Not the Tracker.</h2>
            <p>Built for internal use and now available externally. Professional, proprietary, and precise.</p>
          </div>
          <div class="ctl-timer-box">
            <div class="ctl-timer-display" id="timerDisplay">00:00:00</div>
            <div class="ctl-timer-label">Active Craft Session</div>
            <div class="ctl-progress-bar"><div class="ctl-progress-fill"></div></div>
          </div>
        </div>
      </div>
    </main>
  `;

  /* Timer */
  let secs = 0;
  setInterval(() => {
    secs++;
    const h = String(Math.floor(secs / 3600)).padStart(2, '0');
    const m = String(Math.floor((secs % 3600) / 60)).padStart(2, '0');
    const s = String(secs % 60).padStart(2, '0');
    const disp = document.getElementById('timerDisplay');
    if (disp) disp.textContent = `${h}:${m}:${s}`;
  }, 1000);
}

/* ══════════════════════════════════════════════════════════
   ROUTER — reads data-page on <main> and renders
   ══════════════════════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
  const app = document.getElementById('app');
  if (!app) return;

  const page = app.dataset.page;

  switch (page) {
    case 'home':         renderHome(app);         break;
    case 'devlog':       renderDevlog(app);        break;
    case 'vantacore':    renderVantaCore(app);     break;
    case 'crafttimelog': renderCraftTimeLog(app);  break;
    default:
      app.innerHTML = '<p style="padding:4rem;color:#555;text-align:center;">Page not found.</p>';
  }
});
