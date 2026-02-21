/* ══════════════════════════════════════════
   contact.js — Formspree contact form
   Endpoint: https://formspree.io/f/mlgwwlyb
   ══════════════════════════════════════════ */

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mlgwwlyb';

const sessionStart = Date.now();

async function collectMetadata() {
  const ms = Date.now() - sessionStart;
  const mins = Math.floor(ms / 60000);
  const secs = Math.floor((ms % 60000) / 1000);

  let ip = 'unavailable', city = '', country = '';
  try {
    const r = await fetch('https://ipwho.is/', { signal: AbortSignal.timeout(3000) });
    if (r.ok) {
      const d = await r.json();
      ip = d.ip || ip;
      city = d.city || '';
      country = d.country || '';
    }
  } catch (_) {}

  const conn = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
  const connInfo = conn ? `${conn.effectiveType || ''}${conn.downlink ? ' ' + conn.downlink + 'Mbps' : ''}` : 'unknown';

  return {
    timestamp:        new Date().toISOString(),
    sessionTime:      `${mins}m ${secs}s`,
    ip,
    location:         [city, country].filter(Boolean).join(', ') || 'unknown',
    userAgent:        navigator.userAgent,
    language:         navigator.language,
    platform:         navigator.platform,
    cores:            navigator.hardwareConcurrency || 'unknown',
    memory:           navigator.deviceMemory ? navigator.deviceMemory + ' GB' : 'unknown',
    screenRes:        `${screen.width}x${screen.height}`,
    viewportSize:     `${window.innerWidth}x${window.innerHeight}`,
    devicePixelRatio: window.devicePixelRatio || 1,
    colorDepth:       screen.colorDepth + '-bit',
    timezone:         Intl.DateTimeFormat().resolvedOptions().timeZone,
    referrer:         document.referrer || 'direct',
    connection:       connInfo,
  };
}

function validateEmail(e) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(e);
}

/* ── Called once the form is in the DOM ── */
function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  form.addEventListener('submit', async function (e) {
    e.preventDefault();
    e.stopPropagation();

    /* Honeypot */
    if (document.getElementById('hp-field').value) return;

    const nameEl    = document.getElementById('f-name');
    const emailEl   = document.getElementById('f-email');
    const subjectEl = document.getElementById('f-subject');
    const msgEl     = document.getElementById('f-message');
    const btn       = document.getElementById('submitBtn');
    const statusEl  = document.getElementById('form-status');

    const name    = nameEl.value.trim();
    const email   = emailEl.value.trim();
    const subject = subjectEl.value;
    const message = msgEl.value.trim();

    /* Clear errors */
    document.querySelectorAll('.form-error').forEach(el => el.classList.remove('visible'));
    statusEl.className = 'form-status';
    statusEl.textContent = '';

    /* Validate */
    let valid = true;
    if (name.length < 2)       { document.getElementById('err-name').classList.add('visible');    valid = false; }
    if (!validateEmail(email)) { document.getElementById('err-email').classList.add('visible');   valid = false; }
    if (message.length < 10)   { document.getElementById('err-message').classList.add('visible'); valid = false; }
    if (!valid) return;

    btn.disabled = true;
    btn.textContent = 'Transmitting...';

    /* Metadata */
    const meta = await collectMetadata();
    const metaBlock = Object.entries(meta).map(([k, v]) => `${k}: ${v}`).join('\n');

    try {
      /* Formspree requires name="" attributes OR JSON body.
         We send JSON so we control field names exactly. */
      const payload = {
        name:     name,
        email:    email,
        subject:  subject,
        message:  message,
        _subject: `[VantaLayer] ${subject} — ${name}`,
        _replyto: email,
        metadata: metaBlock,
      };

      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json().catch(() => ({}));

      if (res.ok) {
        statusEl.textContent = '✓ Message received. We\'ll get back to you soon.';
        statusEl.className = 'form-status success';
        form.reset();
        statusEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        if (typeof trackEvent === 'function') trackEvent('contact-form-success');
      } else {
        const errMsg = data.errors ? data.errors.map(e => e.message).join(', ') : (data.error || 'Submission failed.');
        statusEl.textContent = '✕ ' + errMsg;
        statusEl.className = 'form-status error';
        statusEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        if (typeof trackEvent === 'function') trackEvent('contact-form-error');
      }
    } catch (err) {
      statusEl.textContent = '✕ Network error. Please try again or email contact+form@vantalayer.xyz directly.';
      statusEl.className = 'form-status error';
      statusEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }

    btn.disabled = false;
    btn.textContent = 'Transmit Message';
  });
}

/* ── Export so pages.js can call it after rendering the form ── */
window.initContactForm = initContactForm;
