/* ══════════════════════════════════════════
   tracker.js — click analytics via Google Sheets
   Set TRACKER_URL to your Apps Script deployment URL
   ══════════════════════════════════════════ */

const TRACKER_URL = 'https://script.google.com/macros/s/REPLACE_WITH_YOUR_APPS_SCRIPT_URL/exec';

/* ── Detect OS from user agent ── */
function getOS() {
  const ua = navigator.userAgent;
  if (ua.includes('Windows'))  return 'Windows';
  if (ua.includes('Mac'))      return 'Mac';
  if (ua.includes('Linux'))    return 'Linux';
  if (ua.includes('Android'))  return 'Android';
  if (ua.includes('iPhone') || ua.includes('iPad')) return 'iOS';
  return 'Unknown';
}

/* ── Detect browser from user agent ── */
function getBrowser() {
  const ua = navigator.userAgent;
  if (ua.includes('Edg'))     return 'Edge';
  if (ua.includes('OPR'))     return 'Opera';
  if (ua.includes('Chrome'))  return 'Chrome';
  if (ua.includes('Firefox')) return 'Firefox';
  if (ua.includes('Safari'))  return 'Safari';
  return 'Unknown';
}

/* ── Get country/city from ipapi (same service contact form uses) ── */
async function getGeo() {
  try {
    const r = await fetch('https://ipapi.co/json/', { signal: AbortSignal.timeout(3000) });
    if (r.ok) {
      const d = await r.json();
      return { country: d.country_name || '', city: d.city || '' };
    }
  } catch (_) {}
  return { country: '', city: '' };
}

/* ── Fire a tracking event ── */
async function trackEvent(eventName) {
  if (!TRACKER_URL || TRACKER_URL.includes('REPLACE_WITH')) return;

  const page = window.location.pathname.split('/').pop() || 'index.html';
  const geo  = await getGeo();

  const payload = {
    event:    eventName,
    page:     page.replace('.html', '') || 'home',
    browser:  getBrowser(),
    os:       getOS(),
    country:  geo.country,
    city:     geo.city,
    referrer: document.referrer || 'direct',
  };

  /* Use sendBeacon for reliability — fires even if user navigates away immediately */
  const blob = new Blob([JSON.stringify(payload)], { type: 'application/json' });
  if (navigator.sendBeacon) {
    navigator.sendBeacon(TRACKER_URL, blob);
  } else {
    fetch(TRACKER_URL, { method: 'POST', body: JSON.stringify(payload) }).catch(() => {});
  }
}

/* ── Auto-attach to elements with data-track attribute ── */
function initTracker() {
  document.querySelectorAll('[data-track]').forEach(el => {
    el.addEventListener('click', () => trackEvent(el.dataset.track));
  });
}

/* ── Re-run after pages.js renders content (content is injected dynamically) ── */
window.initTracker = initTracker;
