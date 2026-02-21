/* ══════════════════════════════════════════════════════════
   pages.js — ALL page content lives here.
   ══════════════════════════════════════════════════════════ */

/* ── Reddit & social links (change once here) ── */
const LINKS = {
  reddit:  'https://www.reddit.com/r/SHELLHACK/',
  xVL:     'https://x.com/vantalayer',
  xRS:     'https://x.com/theredsig',
  contact: 'index.html#contact',
};

/* ══════════════════════════════════════════════════════════
   DEVLOG ENTRIES
   ─────────────────────────────────────────────────────────
   Add new entries at the TOP of this array.
   ══════════════════════════════════════════════════════════ */
const DEVLOG_ENTRIES = [
  {
    num:   '#003',
    title: 'Everything Is Upgradable Now & Realism Has to Compromise',
    date:  'Feb 17 2026',
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
    title: 'Wrapping up Vynamp — SHELLHACK\'s in-game music & radio system',
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
  download: `<svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><polyline points="8 17 12 21 16 17"/><line x1="12" y1="12" x2="12" y2="21"/><path d="M20.88 18.09A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.29"/></svg>`,
  windows: `<svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801"/></svg>`,
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
            <h2 class="section-title">SHELLHACK</h2>
            <div class="game-status">&#x25CF;&nbsp; Under Development &mdash; Coming Soon</div>
          </div>
          <a href="${LINKS.reddit}" target="_blank" rel="noopener" class="btn-community" data-track="home-join-community">
            ${ICON.reddit} Join the Community
          </a>
        </div>
        <div class="game-desc">
          <p>A deep hacking simulation inspired by Hacknet and Uplink. Infiltrate secure networks,
          manipulate encrypted data and master the system from the shadows, be tested,
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
            <p><strong>VANTA</strong> represents the blackest black, the absolute absence of compromise.
            A small indie studio out of Montréal, Canada, built on the belief that games should go deep,
            not just wide.</p>
            <p>The <strong>LAYER</strong> signifies the depth of the work, games that live mostly in the
            management and simulation niche. Whether you're running a massive corporation or hacking
            into one, there is always another layer to peel back.</p>
            <p>Together, <strong>VANTA + LAYER</strong> represent a core belief: that the best games
            take you to the deepest layer of a subject, not just the surface.</p>
            <p>The <strong>SYSTEMS</strong> are the bedrock. Custom tools, like <strong>VantaCore</strong>
            and other apps exist because off-the-shelf solutions are not always built for us.</p>
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
                <div class="contact-item-value"><a href="${LINKS.xVL}" target="_blank" rel="noopener" data-track="contact-x-vl">@vantalayer</a></div>
              </div>
            </div>
            <div class="contact-item">
              <div class="contact-icon">${ICON.xBig}</div>
              <div>
                <div class="contact-item-label">RedSig - Lead Designer on X</div>
                <div class="contact-item-value"><a href="${LINKS.xRS}" target="_blank" rel="noopener" data-track="contact-x-rs">@theredsig</a></div>
              </div>
            </div>
            <div class="contact-item">
              <div class="contact-icon">${ICON.reddit}</div>
              <div>
                <div class="contact-item-label">SHELLHACK Community</div>
                <div class="contact-item-value"><a href="${LINKS.reddit}" target="_blank" rel="noopener" data-track="contact-reddit">r/SHELLHACK on Reddit</a></div>
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
                  <input type="text" id="f-name" name="name" class="form-input" placeholder="Your name" required minlength="2" autocomplete="name">
                  <div class="form-error" id="err-name">Please enter your name.</div>
                </div>
                <div>
                  <label class="form-label" for="f-email">Email</label>
                  <input type="email" id="f-email" name="email" class="form-input" placeholder="you@example.com" required autocomplete="email">
                  <div class="form-error" id="err-email">Please enter a valid email.</div>
                </div>
              </div>
              <div class="form-group">
                <label class="form-label" for="f-subject">Subject</label>
                <select id="f-subject" name="subject" class="form-select">
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
                <textarea id="f-message" name="message" class="form-textarea" placeholder="Your message..." required minlength="10"></textarea>
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

  /* Init contact form — contact.js exposes window.initContactForm */
  if (typeof window.initContactForm === 'function') {
    window.initContactForm();
  } else {
    /* contact.js not yet loaded — load it then init */
    const s = document.createElement('script');
    s.src = 'js/contact.js';
    s.onload = () => { if (typeof window.initContactForm === 'function') window.initContactForm(); };
    document.body.appendChild(s);
  }

   if (typeof window.initTracker === 'function') {
    window.initTracker();
  }
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

      <!-- Hero banner -->
      <div class="vc-hero-banner">
        <div class="vc-hero-noise"></div>
        <div class="vc-hero-content">
          <img src="img/VantaCore-logo.png" alt="VantaCore" class="vc-logo-img">
          <p class="vc-hero-tagline">Proprietary Game Framework by Vanta Layer Systems</p>
          <div class="vc-hero-tags">
            <span class="vc-tag">In-House</span>
            <span class="vc-tag">2D / Management / Sim</span>
            <span class="vc-tag">Not Publicly Available Yet</span>
          </div>
        </div>
      </div>

      <!-- What is it -->
      <div class="vc-section">
        <div class="vc-two-col">
          <div class="vc-text-block">
            <div class="section-tag">Origin</div>
            <h2 class="vc-section-title">Built Out of Necessity</h2>
            <p>VantaCore was born while building <strong>SHELLHACK</strong>. VB.Net was never designed with game development in mind, and its limitations started showing fast. Rather than fight the tools, we built our own layer on top.</p>
            <p>What started as a set of workarounds became a proper framework. One that handles the exact types of games we make: <strong>management-heavy, simulation-driven, data-rich</strong> experiences where performance, stability and deepness matter.</p>
          </div>
          <div class="vc-stat-stack">
            <div class="vc-stat">
              <div class="vc-stat-value">2D</div>
              <div class="vc-stat-label">Purpose-built for flat, data-driven games. No 3D scope creep.</div>
            </div>
            <div class="vc-stat">
              <div class="vc-stat-value">1</div>
              <div class="vc-stat-label">Game already running on it: SHELLHACK.</div>
            </div>
            <div class="vc-stat">
              <div class="vc-stat-value">∞</div>
              <div class="vc-stat-label">Designed to scale across future VANTA LAYER projects.</div>
            </div>
          </div>
        </div>
      </div>

      <!-- What it does -->
      <div class="vc-section vc-section--dark">
        <div style="max-width:1280px;margin:0 auto;">
        <div class="section-tag">Capabilities</div>
        <h2 class="vc-section-title">What VantaCore Does</h2>
        </div>
        <div class="vc-pillars">
          <div class="vc-pillar">
            <div class="vc-pillar-icon">
              <svg width="28" height="28" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>
            </div>
            <h3>Modular Component System</h3>
            <p>Game systems are built as independent, composable modules. Swap, extend or disable without touching everything else.</p>
          </div>
          <div class="vc-pillar">
            <div class="vc-pillar-icon">
              <svg width="28" height="28" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>
            </div>
            <h3>Scalable System</h3>
            <p>Data-driven architecture that handles complex game states cleanly, designed to evolve as the game grows.</p>
          </div>
          <div class="vc-pillar">
            <div class="vc-pillar-icon">
              <svg width="28" height="28" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
            </div>
            <h3>Performance-First</h3>
            <p>Optimized for management and simulation workloads with many systems, many entities and many state changes.</p>
          </div>
          <div class="vc-pillar">
            <div class="vc-pillar-icon">
              <svg width="28" height="28" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
            </div>
            <h3>Fast Iteration</h3>
            <p>Internal pipelines built to move quickly. Reduce the gap between design ideas and seeing them run in-game.</p>
          </div>
          <div class="vc-pillar">
            <div class="vc-pillar-icon">
              <svg width="28" height="28" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg>
            </div>
            <h3>Data-Driven Design</h3>
            <p>Game content and rules are decoupled from code. Tune, balance and expand through data without recompiling.</p>
          </div>
          <div class="vc-pillar">
            <div class="vc-pillar-icon">
              <svg width="28" height="28" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            </div>
            <h3>Stability First</h3>
            <p>No experimental features for the sake of it. Every addition is tested against real game scenarios before it's committed.</p>
          </div>
        </div>
      </div>

      <!-- Status & roadmap -->
      <div class="vc-section">
        <div class="vc-two-col vc-two-col--flip">
          <div class="vc-status-card">
            <div class="vc-status-header">
              <span class="vc-status-dot"></span>
              <span class="vc-status-label">Current Status: Framework</span>
            </div>
            <p>VantaCore is an active, evolving framework, not a finished product. It is proprietary technology, used exclusively inside VANTA LAYER Systems at this time.</p>
            <div class="vc-status-bar-row">
              <span>Framework</span>
              <div class="vc-progress"><div class="vc-progress-fill" style="width:65%"></div></div>
              <span>Engine</span>
            </div>
            <p class="vc-status-note">Development continues in parallel with SHELLHACK. The roadmap points toward a full engine capable of powering future VANTA LAYER title.</p>
          </div>
          <div class="vc-text-block">
            <div class="section-tag">Roadmap</div>
            <h2 class="vc-section-title">Where It's Going</h2>
            <p>VantaCore will continue to grow alongside our games. Each new feature we need for SHELLHACK or future projects gets built into the framework, making the next game faster to build.</p>
            <p>The goal isn't to compete with Unity or Unreal. It's to have a tool that is <strong>100% shaped around the games we make</strong>, no wasted features, no forced workflows, no license negotiations.</p>
            <p>Proprietary. Focused. Ours.</p>
          </div>
        </div>
      </div>

    </div>
  `;
}

/* ── CRAFTTIMELOG ── */
async function renderCraftTimeLog(el) {
  document.body.classList.add('light-mode');

  const CTL_DOWNLOAD  = 'https://github.com/VANTALAYER/CraftTimeLog/releases/download/CraftTimeLog/CraftTimeLog.zip';
  const VERSION_URL   = 'https://vantalayer.xyz/ctl/version.txt';
  const PATCHNOTE_URL = 'https://vantalayer.xyz/ctl/patchnote.txt';

  /* Fetch version and patch notes in parallel, then render */
  let currentVersion  = '1.1.0';   /* fallback */
  let patchNoteText   = 'Loading patch notes…';

  async function fetchCTLData() {
    try {
      const [vRes, pRes] = await Promise.all([
        fetch(VERSION_URL  + '?t=' + Date.now()),
        fetch(PATCHNOTE_URL + '?t=' + Date.now()),
      ]);
      if (vRes.ok) currentVersion = (await vRes.text()).trim();
      if (pRes.ok) patchNoteText  = (await pRes.text()).trim();
    } catch (_) { /* keep fallbacks */ }
  }

  await fetchCTLData();

  el.innerHTML = `
    <div class="ctl-page">
      <div class="ctl-wrap">

        <!-- Hero -->
        <div class="ctl-hero">
          <div class="ctl-brand">
            <img src="img/CTLicon.png" alt="CraftTimeLog icon" class="ctl-brand-icon">
            <div class="ctl-brand-text">
              <span class="ctl-brand-name">CraftTimeLog</span>
            </div>
          </div>
          <h1 class="ctl-title">Track Your Time.<br><span>Keep Your Privacy.</span></h1>
          <p class="ctl-subtitle">A free, portable, offline-first time tracker built for creators who just want to press a button and get to work without signing up, logging in, or being spied on.</p>
          <a href="${CTL_DOWNLOAD}" target="_blank" rel="noopener" class="ctl-download" data-track="ctl-download">
            ${ICON.download}
            <span>Download Free — v${currentVersion}</span>
            <span class="ctl-dl-os">${ICON.windows} Windows</span>
          </a>
          <div class="ctl-hero-actions">
            <p class="ctl-hero-note">No installation required &nbsp;&middot;&nbsp; No account &nbsp;&middot;&nbsp; No internet &nbsp;&middot;&nbsp; ~150MB</p>
            <div class="ctl-hero-links">
              <button class="ctl-patchnote-btn" onclick="openModal('ctl-patchnote')">Patch Notes</button>
              <span class="ctl-hero-links-sep">·</span>
              <a href="https://github.com/VANTALAYER/CraftTimeLog/releases/latest" target="_blank" rel="noopener" class="ctl-patchnote-btn" data-track="ctl-github">View on GitHub</a>
            </div>
          </div>

        <!-- Screenshots -->
        <div class="ctl-screenshots">
          <div class="ctl-ss-grid">
            <div class="ctl-ss-item" onclick="openLightbox('img/CTL-ss01.jpg')" title="Click to enlarge"><img src="img/CTL-ss01.jpg" alt="CraftTimeLog — Classic Light theme" loading="lazy"></div>
            <div class="ctl-ss-item" onclick="openLightbox('img/CTL-ss02.jpg')" title="Click to enlarge"><img src="img/CTL-ss02.jpg" alt="CraftTimeLog — Classic Dark theme with Pomodoro" loading="lazy"></div>
            <div class="ctl-ss-item" onclick="openLightbox('img/CTL-ss03.jpg')" title="Click to enlarge"><img src="img/CTL-ss03.jpg" alt="CraftTimeLog — Customization panel" loading="lazy"></div>
          </div>
        </div>

        <!-- Philosophy -->
        <div class="ctl-section ctl-section--philosophy">
          <blockquote class="ctl-quote">
            "I didn't want a website, an account, cloud syncing or something spying on me like I'm plotting cybercrime. I wanted portable, lightweight, no tracking, no nonsense. Just press button, track time, done."
          </blockquote>
          <p class="ctl-quote-attr">— RedSig, Lead Designer, about why this exists</p>
        </div>

        <!-- Features -->
        <div class="ctl-section">
          <div class="ctl-section-label">Features</div>
          <h2 class="ctl-section-title">Everything You Need.<br>Nothing You Don't.</h2>
          <p class="ctl-section-sub">Simpler than the competition, not weaker. Every feature is there because it's genuinely useful, not to fill a pricing tier.</p>
          <div class="ctl-features-grid">
            <div class="ctl-feature-item">
              <div class="ctl-feature-icon">
                <svg width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
              </div>
              <div>
                <strong>Multiple Projects</strong>
                <p>Create, edit, reset and delete as many workspaces as you need.</p>
              </div>
            </div>
            <div class="ctl-feature-item">
              <div class="ctl-feature-icon">
                <svg width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              </div>
              <div>
                <strong>Session Logs</strong>
                <p>Full history of every session. Edit, comment or delete individual logs.</p>
              </div>
            </div>
            <div class="ctl-feature-item">
              <div class="ctl-feature-icon">
                <svg width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14"/></svg>
              </div>
              <div>
                <strong>Pomodoro Mode</strong>
                <p>Built-in Pomodoro timer with configurable work/break intervals.</p>
              </div>
            </div>
            <div class="ctl-feature-item">
              <div class="ctl-feature-icon">
                <svg width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>
              </div>
              <div>
                <strong>Alarm System</strong>
                <p>Set an alarm with 6 distinct alert sounds to stay on schedule.</p>
              </div>
            </div>
            <div class="ctl-feature-item">
              <div class="ctl-feature-icon">
                <svg width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><polyline points="8 17 12 21 16 17"/><line x1="12" y1="12" x2="12" y2="21"/><path d="M20.88 18.09A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.29"/></svg>
              </div>
              <div>
                <strong>CSV Export</strong>
                <p>Export any project's log to CSV. Opens in Excel, Google Sheets, LibreOffice.</p>
              </div>
            </div>
            <div class="ctl-feature-item">
              <div class="ctl-feature-icon">
                <svg width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/></svg>
              </div>
              <div>
                <strong>Themes &amp; Customization</strong>
                <p>5 built-in visual themes plus a full custom theme creator.</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Use cases -->
        <div class="ctl-section ctl-section--uses">
          <div class="ctl-section-label">Who It's For</div>
          <h2 class="ctl-section-title">Useful for anyone who makes things.</h2>
          <div class="ctl-uses-row">
            <span class="ctl-use-tag">Game Dev</span>
            <span class="ctl-use-tag">Coding</span>
            <span class="ctl-use-tag">Writing</span>
            <span class="ctl-use-tag">Design</span>
            <span class="ctl-use-tag">Music</span>
            <span class="ctl-use-tag">Freelancing</span>
            <span class="ctl-use-tag">Studying</span>
            <span class="ctl-use-tag">Proving you weren't just "thinking about working" for three hours</span>
          </div>
        </div>

        <!-- System requirements -->
        <div class="ctl-section ctl-section--sysreq">
          <div class="ctl-sysreq-box">
            <div class="ctl-sysreq-icon">${ICON.windows}</div>
            <div class="ctl-sysreq-content">
              <h3>System Requirements</h3>
              <ul class="ctl-sysreq-list">
                <li>Windows 7, 8, 10, or 11 (64-bit)</li>
                <li>No installation - run directly from the folder</li>
                <li>No internet connection required</li>
                <li>~120 MB disk space</li>
                <li>1024×768 minimum resolution</li>
              </ul>
              <p class="ctl-sysreq-note">Save data and preferences are stored locally alongside the app and persist between sessions.</p>
            </div>
          </div>
        </div>

        <!-- CTA -->
        <div class="ctl-cta-section">
          <h2 class="ctl-cta-title">It's free. Just download it.</h2>
          <p class="ctl-cta-sub">Built for personal use, shared because why not. No ads, no upsell, no telemetry.</p>
          <a href="${CTL_DOWNLOAD}" target="_blank" rel="noopener" class="ctl-download ctl-download--large" data-track="ctl-download">
            ${ICON.download}
            <span>Download CraftTimeLog v${currentVersion}</span>
            <span class="ctl-dl-os">${ICON.windows} Windows - Free</span>
          </a>
          <p class="ctl-cta-fine">A free tool by <strong>Vanta Layer Systems</strong></p>
        </div>

      </div>
    </div>
    <!-- Lightbox -->
    <div class="modal-overlay" id="modal-lightbox" onclick="closeLightbox()">
      <div class="lightbox-box">
        <button class="modal-close" onclick="closeLightbox()">&times;</button>
        <img id="lightbox-img" src="" alt="Screenshot">
      </div>
    </div>
    <!-- Patch Note Modal -->
    <div class="modal-overlay" id="modal-ctl-patchnote">
      <div class="modal-box">
        <button class="modal-close" onclick="closeModal('ctl-patchnote')">&times;</button>
        <h2>Patch Notes</h2>
        <pre class="ctl-patchnote-content">${patchNoteText.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</pre>
      </div>
    </div>
  `;

     if (typeof window.initTracker === 'function') {
    window.initTracker();
  }

  /* Re-attach backdrop click for the patch note modal since it renders after DOMContentLoaded */
  const patchModal = document.getElementById('modal-ctl-patchnote');
  if (patchModal) {
    patchModal.addEventListener('click', e => {
      if (e.target === patchModal) { patchModal.classList.remove('open'); document.body.style.overflow = ''; }
    });
  }

  /* Lightbox helpers */
  window.openLightbox = function(src) {
    document.getElementById('lightbox-img').src = src;
    document.getElementById('modal-lightbox').classList.add('open');
    document.body.style.overflow = 'hidden';
  };
  window.closeLightbox = function() {
    document.getElementById('modal-lightbox').classList.remove('open');
    document.body.style.overflow = '';
  };
}

/* ══════════════════════════════════════════════════════════
   ROUTER
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
