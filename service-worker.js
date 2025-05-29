const CACHE_NAME = "puskesmas-cache-v1";
const urlsToCache = [
  "index.html",
  "style.css",
  "manifest.json",
  "icon.png"
  // Tambahkan gambar lain jika perlu
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
