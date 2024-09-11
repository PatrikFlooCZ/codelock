const cacheName = 'codelock-v1';
const offlinePage = 'offline.html';
const assets = [
  '/codelock/',
  '/codelock/style.css',
  '/codelock/script.js',
  '/codelock/favicon.png',
  '/codelock/font/font1.woff2',
  '/codelock/manifest.json',
  '/codelock/logo.png',
];

self.addEventListener('install', event =>
  {
  event.waitUntil(
    caches.open(cacheName).then(cache =>
      {
      return cache.addAll(assets);
    })
  );
});

self.addEventListener('fetch', event =>
  {
  event.respondWith(
    caches.match(event.request).then(response =>
      {
      return response || fetch(event.request);
      }).catch(() =>
      {
      return caches.match(offlinePage);
    })
  );
});
