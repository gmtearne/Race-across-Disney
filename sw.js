// Service worker for The Amazing Mouse Race
// - Pages/scripts: network-first, so players always get your latest update when they have signal
//   (falls back to the saved copy offline, e.g. deep in a park with bad reception).
// - Images: cache-first (they rarely change).
// - Common CDN libraries (Tailwind, Font Awesome, Firebase SDK, fonts): stale-while-revalidate,
//   so the app can still open offline after the first visit.
// BUMP `VERSION` whenever you add files to CORE below, so phones pick up the new list.
const VERSION = 'mouse-race-v2';

const CORE = [
  './',
  './index.html',
  './trivia-data.js',
  './locations-data.js',
  './fun-facts.js',
  './img/bg-placeholder.jpg'
];

const CDN_HOSTS = [
  'cdn.tailwindcss.com',
  'cdnjs.cloudflare.com',
  'www.gstatic.com',        // Firebase SDK modules
  'fonts.googleapis.com',
  'fonts.gstatic.com'
];

self.addEventListener('install', (event) => {
  event.waitUntil((async () => {
    const cache = await caches.open(VERSION);
    // One missing file must not break the whole install
    await Promise.allSettled(CORE.map((url) => cache.add(url)));
    await self.skipWaiting();
  })());
});

self.addEventListener('activate', (event) => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.filter((key) => key !== VERSION).map((key) => caches.delete(key)));
    await self.clients.claim();
  })());
});

self.addEventListener('fetch', (event) => {
  const request = event.request;
  if (request.method !== 'GET') return;
  const url = new URL(request.url);

  if (url.origin === self.location.origin) {
    const isImage = /\.(png|jpe?g|webp|gif|svg|ico)$/i.test(url.pathname);
    event.respondWith(isImage ? cacheFirst(request) : networkFirst(request));
  } else if (CDN_HOSTS.includes(url.hostname)) {
    event.respondWith(staleWhileRevalidate(request));
  }
  // Everything else (Firestore, auth, etc.) goes straight to the network untouched.
});

async function networkFirst(request) {
  const cache = await caches.open(VERSION);
  try {
    // Give up on slow park Wi-Fi after 4s and use the saved copy if we have one
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 4000);
    let response;
    try {
      response = await fetch(request, { cache: 'no-cache', signal: controller.signal });
    } finally {
      clearTimeout(timer);
    }
    if (response && response.ok) cache.put(request, response.clone());
    return response;
  } catch (err) {
    const saved = (await cache.match(request, { ignoreSearch: true })) ||
                  (request.mode === 'navigate' ? await cache.match('./index.html') : null);
    if (saved) return saved;
    throw err;
  }
}

async function cacheFirst(request) {
  const cache = await caches.open(VERSION);
  const saved = await cache.match(request);
  if (saved) return saved;
  const response = await fetch(request);
  if (response && response.ok) cache.put(request, response.clone());
  return response;
}

async function staleWhileRevalidate(request) {
  const cache = await caches.open(VERSION);
  const saved = await cache.match(request);
  const refresh = fetch(request)
    .then((response) => {
      if (response && (response.ok || response.type === 'opaque')) cache.put(request, response.clone());
      return response;
    })
    .catch(() => null);
  return saved || (await refresh) || Response.error();
}
