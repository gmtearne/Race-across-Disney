self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('mouse-race-v1').then((cache) => {
      return cache.addAll([
        './',
        './index.html',
        './trivia-data.js',
        './locations-data.js'
      ]);
    })
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});
