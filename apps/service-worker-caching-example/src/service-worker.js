/**
 * Cache static assets and the application shell on install
 */
self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open(cacheName).then(function(cache) {
            return cache.addAll([
                '/css/bootstrap.css',
                '/css/main.css',
                '/js/bootstrap.min.js',
                '/js/jquery.min.js',
                '/offline.html',
            ]);
        }),
    );
});

/**
 * Cache Only
 */
self.addEventListener('fetch', function(event) {
    event.respondWith(caches.match(event.request));
});

/**
 * Network only
 */
self.addEventListener('fetch', function(event) {
    event.respondWith(fetch(event.request));
});

/**
 * Respond from cache with fallback to the network
 */
self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request).then(function(response) {
            return response || fetch(event.request);
        }),
    );
});

/**
 * Respond from the network but fallback to the cache
 */
self.addEventListener('fetch', function(event) {
    event.respondWith(
        fetch(event.request).catch(function() {
            return caches.match(event.request);
        }),
    );
});

/**
 * Respond from cache with fallback to the network
 * Populate the cache with the response
 */
self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.open('my-cache-service-worker').then(function(cache) {
            return cache.match(event.request).then(function(response) {
                return (
                    response ||
                    fetch(event.request).then(function(response) {
                        cache.put(event.request, response.clone());
                        return response;
                    })
                );
            });
        }),
    );
});

/**
 * Remove the stale caches when a new version of the service worker activates
 */
self.addEventListener('activate', function(event) {
    event.waitUntil(
        caches.keys().then(function(cacheNames) {
            return Promise.all(
                cacheNames
                    .filter(function(cacheName) {
                        // Return true if you want to remove this cache,
                        // but remember that caches are shared across
                        // the whole origin
                    })
                    .map(function(cacheName) {
                        return caches.delete(cacheName);
                    }),
            );
        }),
    );
});
