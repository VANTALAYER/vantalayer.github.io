/* ══════════════════════════════════════════
   tracker.js — click analytics via Google Sheets
   ══════════════════════════════════════════ */

const TRACKER_URL = 'https://script.google.com/macros/s/AKfycbyqUevV5bAG_MtkY39O4RGm66yaIg-E18luZ3-bKBj6a0ilTKkA3Prinz-xmWyiz6BXtA/exec';

function getOS() {
  const ua = navigator.userAgent;
  if (ua.includes('Windows'))  return 'Windows';
  if (ua.includes('Mac'))      return 'Mac';
  if (ua.includes('Linux'))    return 'Linux';
  if (ua.includes('Android'))  return 'Android';
  if (ua.includes('iPhone') || ua.includes('iPad')) return 'iOS';
  return 'Unknown';
}

function getBrowser() {
  const ua = navigator.userAgent;
  if (ua.includes('Edg'))     return 'Edge';
  if (ua.includes('OPR'))     return 'Opera';
  if (ua.includes('Chrome'))  return 'Chrome';
  if (ua.includes('Firefox')) return 'Firefox';
  if (ua.includes('Safari'))  return 'Safari';
  return 'Unknown';
}

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

async function trackEvent(eventName) {
  if (!TRACKER_URL || TRACKER_URL.includes('REPLACE_WITH')) return;

  const page = window.location.pathname.split('/').pop() || 'index.html';
  const geo  = await getGeo();

  const params = new URLSearchParams({
    event:    eventName,
    page:     page.replace('.html', '') || 'home',
    browser:  getBrowser(),
    os:       getOS(),
    country:  geo.country,
    city:     geo.city,
    referrer: document.referrer || 'direct',
  });

  /* GET + no-cors: fires cleanly through GAS redirects, no CORS block */
  fetch(TRACKER_URL + '?' + params.toString(), {
    method: 'GET',
    mode:   'no-cors',
  }).catch(() => {});
}

function initTracker() {
  document.querySelectorAll('[data-track]').forEach(el => {
    el.addEventListener('click', () => trackEvent(el.dataset.track));
  });
}

window.initTracker = initTracker;
