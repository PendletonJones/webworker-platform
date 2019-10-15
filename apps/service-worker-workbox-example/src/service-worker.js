importScripts(
    'https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js',
)
    .then(() => {
        if (workbox) {
            console.log(`Workbox is loaded!!`);
        } else {
            console.log(`Workbox failed to load`);
            throw new Error('workbox failed to load');
        }

        const precacheController = new workbox.precaching.PrecacheController();
        precacheController.addToCacheList([
            '/styles/example-1.abcd.css',
            '/styles/example-2.1234.css',
            '/scripts/example-1.abcd.js',
            '/scripts/example-2.1234.js',
        ]);

        precacheController.addToCacheList([
            {
                url: '/index.html',
                revision: 'abcd',
            },
            {
                url: '/about.html',
                revision: '1234',
            },
        ]);

        self.addEventListener('install', (event) => {
            event.waitUntil(precacheController.install());
        });
        self.addEventListener('activate', (event) => {
            event.waitUntil(precacheController.activate());
        });
        self.addEventListener('fetch', (event) => {
            const cacheKey = precacheController.getCacheKeyForURL(
                event.request.url,
            );
            event.respondWith(
                caches.match(cacheKey).then((value) => {
                    console.log(value);
                }),
            );
        });
    })
    .catch((err) => {
        console.error(err);
    });
