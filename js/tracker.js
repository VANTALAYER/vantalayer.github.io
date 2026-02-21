/* ══════════════════════════════════════════
   tracker.js — click analytics + visit tracking
   ══════════════════════════════════════════ */

const TRACKER_URL = 'https://script.google.com/macros/s/AKfycbz6Di4aVpPlDTMKYLy6rs-7ES2SUGrIepemRu9W3w9cVn7r0CkoAdk6mOTOSogSH2yN2g/exec';

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

let _geoCache = null;
async function getGeo() {
  if (_geoCache) return _geoCache;
  try {
    const r = await fetch('https://geolocation-db.com/json/', { signal: AbortSignal.timeout(3000) });
    if (r.ok) {
      const d = await r.json();
      if (d.IPv4) {
        _geoCache = { ip: d.IPv4 || '', country: d.country_name || '', city: d.city || '' };
        return _geoCache;
      }
    }
  } catch (_) {}
  return { ip: '', country: '', city: '' };
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
    ip:       geo.ip,
    country:  geo.country,
    city:     geo.city,
    referrer: document.referrer || 'direct',
  });

  fetch(TRACKER_URL + '?' + params.toString(), {
    method: 'GET',
    mode:   'no-cors',
  }).catch(() => {});
}

function initTracker(scope) {
  const root = scope || document;
  root.querySelectorAll('[data-track]').forEach(el => {
    if (el.dataset.trackBound) return;
    el.dataset.trackBound = '1';
    el.addEventListener('click', () => trackEvent(el.dataset.track));
  });
}

window.initTracker = initTracker;

/* ── Session-based visit tracking — fires once per tab session ── */
async function trackVisit() {
  if (!TRACKER_URL || TRACKER_URL.includes('REPLACE_WITH')) return;
  if (sessionStorage.getItem('vl_visited')) return;

  sessionStorage.setItem('vl_visited', '1');

  const geo = await getGeo();

  const params = new URLSearchParams({
    event:    'visit',
    page:     window.location.pathname.split('/').pop().replace('.html', '') || 'home',
    browser:  getBrowser(),
    os:       getOS(),
    ip:       geo.ip,
    country:  geo.country,
    city:     geo.city,
    referrer: document.referrer || 'direct',
  });

  fetch(TRACKER_URL + '?' + params.toString(), {
    method: 'GET',
    mode:   'no-cors',
  }).catch(() => {});
}

trackVisit();
