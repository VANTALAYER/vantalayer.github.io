/* ══════════════════════════════════════════
   nav.js — injects shared navbar & footer, handles modals
   ══════════════════════════════════════════ */

const SHELLHACK_REDDIT = 'https://www.reddit.com/r/SHELLHACK/';
const X_VANTALAYER     = 'https://x.com/vantalayer';
const X_THEREDSIG      = 'https://x.com/theredsig';

/* ── Detect root path so links work from any sub-page ── */
function root(path) {
  const base = document.querySelector('meta[name="site-root"]');
  const r = base ? base.content : './';
  return r.replace(/\/$/, '') + '/' + path.replace(/^\//, '');
}

/* ── SVG icons ── */
const SVG = {
  reddit: `<svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
    <path d="M16.67 10a1.46 1.46 0 0 0-2.47-1 7.12 7.12 0 0 0-3.85-1.23l.65-3.08 2.13.45a1 1 0 1 0 .11-.51l-2.38-.5a.25.25 0 0 0-.3.19l-.72 3.44a7.14 7.14 0 0 0-3.89 1.23 1.46 1.46 0 1 0-1.61 2.39 2.87 2.87 0 0 0 0 .44c0 2.24 2.61 4.06 5.83 4.06s5.83-1.82 5.83-4.06a2.87 2.87 0 0 0 0-.44 1.46 1.46 0 0 0 .57-1.38zM7.27 11a1 1 0 1 1 1 1 1 1 0 0 1-1-1zm5.58 2.71a3.58 3.58 0 0 1-2.85.86 3.58 3.58 0 0 1-2.85-.86.25.25 0 0 1 .35-.35 3.13 3.13 0 0 0 2.5.71 3.13 3.13 0 0 0 2.5-.71.25.25 0 0 1 .35.35zm-.19-1.71a1 1 0 1 1 1-1 1 1 0 0 1-1 1z"/>
  </svg>`,
  xIcon: `<svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.74l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>`,
  chevron: `<svg class="nav-chevron" width="11" height="11" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9"/></svg>`,
};

/* ── Build navbar HTML ── */
function buildNav() {
  const nav = document.createElement('nav');
  nav.innerHTML = `
    <div class="nav-inner">
      <a class="logo-lockup" href="${root('index.html')}" aria-label="Vanta Layer home">
        <div class="logo-img-wrap">
          <img class="logo-dark"  src="${root('img/logo-white.png')}" alt="Vanta Layer">
          <img class="logo-light" src="${root('img/logo-black.png')}" alt="Vanta Layer">
        </div>
        <div class="logo-wordmark">
          <span class="logo-name">VANTA LAYER</span>
          <span class="logo-sub">S&nbsp;Y&nbsp;S&nbsp;T&nbsp;E&nbsp;M&nbsp;S</span>
        </div>
      </a>

      <ul class="nav-links">
        <li class="nav-item">
          <button aria-haspopup="true" aria-expanded="false">
            Game ${SVG.chevron}
          </button>
          <div class="dropdown" role="menu">
            <a href="${SHELLHACK_REDDIT}" target="_blank" rel="noopener" class="dd-item" role="menuitem">
              <div class="dd-thumb">
                <img src="${root('img/shellhack-logo-small.png')}" alt="SHELLHACK">
              </div>
              <div>
                <span class="dd-label">SHELLHACK</span>
                <span class="dd-sub">Hacking Sim</span>
              </div>
            </a>
          </div>
        </li>

        <li class="nav-item">
          <button aria-haspopup="true" aria-expanded="false">
            Tech ${SVG.chevron}
          </button>
          <div class="dropdown" role="menu">
            <a href="${root('vantacore.html')}" class="dd-item" role="menuitem">
              <div>
                <span class="dd-label">VantaCore</span>
                <span class="dd-sub">Management / Sim Framework</span>
              </div>
            </a>
            <a href="${root('crafttimelog.html')}" class="dd-item" role="menuitem">
              <div>
                <span class="dd-label">CraftTimeLog</span>
                <span class="dd-sub">Time Tracking App</span>
              </div>
            </a>
          </div>
        </li>

        <li class="nav-item"><a href="${root('index.html')}#about">About</a></li>
        <li class="nav-item"><a href="${root('index.html')}#contact">Contact</a></li>
        <li style="padding:0 6px;"><div class="nav-sep"></div></li>
        <li class="nav-item"><a href="${root('devlog.html')}">Devlog</a></li>
      </ul>

      <div style="display:flex;align-items:center;gap:8px;">
        <div class="nav-sep"></div>
        <div class="nav-socials">
          <a href="${SHELLHACK_REDDIT}" target="_blank" rel="noopener" title="r/SHELLHACK on Reddit">
            ${SVG.reddit}
          </a>
          <a href="${X_VANTALAYER}" target="_blank" rel="noopener" title="@vantalayer on X">
            ${SVG.xIcon}<span class="x-badge">VL</span>
          </a>
          <a href="${X_THEREDSIG}" target="_blank" rel="noopener" title="@theredsig on X">
            ${SVG.xIcon}<span class="x-badge">RS</span>
          </a>
        </div>
      </div>
    </div>
  `;
  document.body.prepend(nav);
}

/* ── Build footer HTML ──
   On light-mode pages (CraftTimeLog) the CSS already shows logo-black via mix-blend-mode:multiply.
   We additionally swap the src to logo-black.png on light-mode pages for browsers
   where blend-mode doesn't apply to images the same way. ── */
function buildFooter() {
  const isLight = document.body.classList.contains('light-mode')
                  || document.querySelector('[data-page="crafttimelog"]') !== null;
  const footerLogo = isLight ? root('img/logo-black.png') : root('img/logo-white.png');
  const footerLogoClass = isLight ? 'footer-logo-img footer-logo-img--dark' : 'footer-logo-img';

  const footer = document.createElement('footer');
  footer.innerHTML = `
    <div class="footer-inner">
      <div class="footer-left">
        <div class="footer-logo-row">
          <img class="${footerLogoClass}" src="${footerLogo}" alt="Vanta Layer">
          <span class="footer-wordmark">VANTA LAYER</span>
        </div>
        <div class="footer-copy">&copy; 2025&ndash;${new Date().getFullYear()}&ensp;Vanta Layer Systems&ensp;&mdash;&ensp;All Rights Reserved</div>
      </div>
      <div class="footer-links">
        <a href="javascript:void(0)" onclick="openModal('privacy')">Privacy Policy</a>
        <a href="javascript:void(0)" onclick="openModal('terms')">Terms of Use</a>
        <a href="javascript:void(0)" onclick="openModal('cookies')">Cookie Policy</a>
      </div>
    </div>
  `;
  document.body.appendChild(footer);
}

/* ── Build policy modals ── */
function buildModals() {
  const wrap = document.createElement('div');
  wrap.innerHTML = `
    <div class="modal-overlay" id="modal-privacy">
      <div class="modal-box">
        <button class="modal-close" onclick="closeModal('privacy')">&times;</button>
        <h2>Privacy Policy</h2>
        <p><strong>Effective:</strong> January 1, 2025</p>
        <p>Vanta Layer Systems is a game studio based in Montréal, Québec, Canada.</p>
        <p><strong>Data collected via contact form:</strong> name, email, message, and technical metadata (browser, OS, screen resolution, timezone, approximate session duration, referrer URL) for the purpose of responding to inquiries and filtering spam.</p>
        <p><strong>Usage:</strong> Contact data is used solely to respond to your message. It is never sold or shared with third parties except as required by law.</p>
        <p><strong>Third-party platforms:</strong> Links to Reddit and X/Twitter are governed by their own privacy policies.</p>
        <p><strong>Retention:</strong> Contact submissions are retained for up to 12 months.</p>
        <p><strong>Your rights:</strong> You may request deletion of your data at any time at vantalayer@gmail.com.</p>
      </div>
    </div>
    <div class="modal-overlay" id="modal-terms">
      <div class="modal-box">
        <button class="modal-close" onclick="closeModal('terms')">&times;</button>
        <h2>Terms of Use</h2>
        <p><strong>Effective:</strong> January 1, 2025</p>
        <p>By using this site you agree to these terms. This site is operated by Vanta Layer Systems, Montréal, Canada.</p>
        <p><strong>Intellectual property:</strong> All content — logos, images, game assets, text — is the property of Vanta Layer Systems and may not be reproduced without written permission.</p>
        <p><strong>No warranties:</strong> This site is provided as-is. No guarantees are made regarding availability, accuracy, or completeness.</p>
        <p><strong>External links:</strong> Vanta Layer Systems is not responsible for content on external platforms.</p>
        <p><strong>Changes:</strong> These terms may be updated at any time. Continued use constitutes acceptance.</p>
      </div>
    </div>
    <div class="modal-overlay" id="modal-cookies">
      <div class="modal-box">
        <button class="modal-close" onclick="closeModal('cookies')">&times;</button>
        <h2>Cookie Policy</h2>
        <p><strong>Effective:</strong> January 1, 2025</p>
        <p>This website does not use tracking cookies, analytics cookies, or advertising cookies.</p>
        <p>No Google Analytics, Facebook Pixel, or similar third-party tracking is present on this site.</p>
        <p>External platforms (Reddit, X/Twitter) linked from this site may set their own cookies when you visit them.</p>
      </div>
    </div>
  `;
  document.body.appendChild(wrap);
}

/* ── Modal helpers ── */
window.openModal = function(id) {
  document.getElementById('modal-' + id).classList.add('open');
  document.body.style.overflow = 'hidden';
};
window.closeModal = function(id) {
  document.getElementById('modal-' + id).classList.remove('open');
  document.body.style.overflow = '';
};

function initModalBackdrop() {
  document.querySelectorAll('.modal-overlay').forEach(el => {
    el.addEventListener('click', e => {
      if (e.target === el) { el.classList.remove('open'); document.body.style.overflow = ''; }
    });
  });
}

function highlightNav() {
  const current = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(link => {
    const href = link.getAttribute('href');
    if (href && href.includes(current) && !href.includes('#')) {
      link.style.color = '#fff';
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  buildNav();
  buildFooter();
  buildModals();
  initModalBackdrop();
  highlightNav();
});
