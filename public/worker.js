var CACHE_NAME = 'pwa-news';
var urlsToCache = [
  '/',
  '/index.html',
  '/static/js/bundle.js'

];

// Install a service worker
self.addEventListener('install', event => {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

// Cache and return requests
// self.addEventListener('fetch', function(event) {
//   event.respondWith(caches.match(event.request));
// });

// self.addEventListener('fetch', function(event) {
//   event.respondWith(
//     caches.open(CACHE_NAME).then(function(cache) {
//       console.log("its here", event.request)
//       return cache.match(event.request).then(function (response) {
//         console.log("response", response)
//         console.log("event", event)
//         return response || fetch(event.request).then(function(response) {
//           cache.put(event.request, response.clone());
//           return response;
//         });
//       });
//     })
//   );
// });

// Update a service worker
self.addEventListener('activate', event => {
  var cacheWhitelist = ['pwa-task-manager'];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});