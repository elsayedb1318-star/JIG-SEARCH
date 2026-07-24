const CACHE_NAME = "jig-search-v1";

const urlsToCache = [
  "/JIG-SEARCH/",
  "/JIG-SEARCH/index.html",
  "/JIG-SEARCH/manifest.json"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
