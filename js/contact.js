/* ══════════════════════════════════════════
   contact.js — contact form with Formspree + full metadata
   ══════════════════════════════════════════
   
   SETUP: Replace FORMSPREE_ENDPOINT below with your actual
   Formspree form endpoint. Steps:
   1. Go to https://formspree.io/
   2. Sign up (free tier: 50 submissions/month)
   3. Create a new form, set email to vantalayer@gmail.com
   4. Copy the endpoint like: https://formspree.io/f/xabcdefg
   5. Paste it below

   ══════════════════════════════════════════ */

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/REPLACE_WITH_YOUR_ID';

const sessionStart = Date.now();

/* ── Collect rich user metadata (all client-side, no external calls) ── */
async function collectMetadata() {
  const ms = Date.now() - sessionStart;
  const mins = Math.floor(ms / 60000);
  const secs = Math.floor((ms % 60000) / 1000);

  /* Try to get IP via a tiny free API (ipify) — fires only on submit */
  let ip = 'unavailable';
  let city = '', country = '';
  try {
    const r = await fetch('https://ipapi.co/json/', { signal: AbortSignal.timeout(3000) });
    if (r.ok) {
      const d = await r.json();
      ip      = d.ip      || ip;
      city    = d.city    || '';
      country = d.country_name || '';
    }
  } catch (_) { /* silent fail */ }

  /* Connection type (where available) */
  const conn = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
  const connInfo = conn ? `${conn.effectiveType || ''}${conn.downlink ? ' ' + conn.downlink + 'Mbps' : ''}` : 'unknown';

  return {
    /* Timing */
    timestamp:    new Date().toISOString(),
    sessionTime:  `${mins}m ${secs}s`,

    /* Network / location */
    ip,
    location:     [city, country].filter(Boolean).join(', ') || 'unknown',

    /* Browser */
    userAgent:    navigator.userAgent,
    vendor:       navigator.vendor || 'unknown',
    language:     navigator.language,
    languages:    (navigator.languages || []).join(', '),
    cookiesOn:    navigator.cookieEnabled,
    doNotTrack:   navigator.doNotTrack || 'unset',
    connection:   connInfo,

    /* OS / hardware */
    platform:     navigator.platform,
    cores:        navigator.hardwareConcurrency || 'unknown',
    memory:       navigator.deviceMemory ? navigator.deviceMemory + ' GB' : 'unknown',
    touchPoints:  navigator.maxTouchPoints || 0,

    /* Display */
    screenRes:    `${screen.width}x${screen.height}`,
    colorDepth:   screen.colorDepth + '-bit',
    viewportSize: `${window.innerWidth}x${window.innerHeight}`,
    devicePixelRatio: window.devicePixelRatio || 1,

    /* Page */
    referrer:     document.referrer || 'direct',
    pageUrl:      window.location.href,
    timezone:     Intl.DateTimeFormat().resolvedOptions().timeZone,
  };
}

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email);
}

let cooldown = false;

async function handleContactForm(e) {
  e.preventDefault();

  /* Honeypot */
  if (document.getElementById('hp-field').value) return;

  /* Cooldown */
  if (cooldown) return;

  const name    = document.getElementById('f-name').value.trim();
  const email   = document.getElementById('f-email').value.trim();
  const subject = document.getElementById('f-subject').value;
  const message = document.getElementById('f-message').value.trim();

  /* Clear previous errors */
  document.querySelectorAll('.form-error').forEach(el => el.classList.remove('visible'));
  const statusEl = document.getElementById('form-status');
  statusEl.className = 'form-status';

  /* Validate */
  let valid = true;
  if (name.length < 2)      { document.getElementById('err-name').classList.add('visible');    valid = false; }
  if (!validateEmail(email)) { document.getElementById('err-email').classList.add('visible');   valid = false; }
  if (message.length < 10)   { document.getElementById('err-message').classList.add('visible'); valid = false; }
  if (!valid) return;

  /* Button state */
  const btn = document.getElementById('submitBtn');
  btn.disabled = true;
  btn.textContent = 'Transmitting...';

  /* Collect metadata */
  const meta = await collectMetadata();

  /* Format metadata block */
  const metaBlock = Object.entries(meta)
    .map(([k, v]) => `${k}: ${v}`)
    .join('\n');

  /* ── Try Formspree first ── */
  let sent = false;
  if (!FORMSPREE_ENDPOINT.includes('REPLACE_WITH_YOUR_ID')) {
    try {
      const body = new FormData();
      body.append('name', name);
      body.append('email', email);
      body.append('subject', subject);
      body.append('message', message);
      body.append('_subject', `[VantaLayer] ${subject} — ${name}`);
      body.append('_replyto', email);
      body.append('metadata', metaBlock);

      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body,
        headers: { 'Accept': 'application/json' }
      });

      if (res.ok) {
        sent = true;
        statusEl.textContent = 'Message received. We\'ll get back to you soon.';
        statusEl.className = 'form-status success';
        e.target.reset();
        cooldown = true;
        setTimeout(() => { cooldown = false; }, 15000);
      } else {
        const d = await res.json().catch(() => ({}));
        throw new Error(d.error || 'Server error');
      }
    } catch (err) {
      console.warn('Formspree error, falling back to mailto:', err);
    }
  }

  /* ── Fallback to mailto if Formspree not configured or failed ── */
  if (!sent) {
    const bodyText = [
      '=== VANTA LAYER — CONTACT FORM ===',
      '',
      `Name:    ${name}`,
      `Email:   ${email}`,
      `Subject: ${subject}`,
      '',
      '--- Message ---',
      message,
      '',
      '--- Visitor Metadata ---',
      metaBlock,
    ].join('\n');

    window.location.href =
      'mailto:vantalayer@gmail.com'
      + '?subject=' + encodeURIComponent(`[VantaLayer] ${subject} — ${name}`)
      + '&body=' + encodeURIComponent(bodyText);

    statusEl.textContent = 'Your mail client should open now. Alternatively email vantalayer@gmail.com directly.';
    statusEl.className = 'form-status success';
    cooldown = true;
    setTimeout(() => { cooldown = false; }, 10000);
  }

  btn.disabled = false;
  btn.textContent = 'Transmit Message';
  setTimeout(() => { statusEl.className = 'form-status'; }, 12000);
}

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm');
  if (form) form.addEventListener('submit', handleContactForm);
});
