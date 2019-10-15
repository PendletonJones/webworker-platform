import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
    enableProdMode();
}

platformBrowserDynamic()
    .bootstrapModule(AppModule)
    .catch((err) => console.error(err));

// enhancement should be progressive
if ('serviceWorker' in navigator) {
    /**
     * Wait for the window to load, then register the service worker.
     * This prevents occupying bandwidth that could be used to load the page
     */
    window.addEventListener('load', async function() {
        /**
         * Wait for the registration to complete, then you can use your
         * service worker
         */
        const registration = await navigator.serviceWorker.register(
            '/service-worker.js',
            { scope: '/' },
        );
        console.log(
            'ServiceWorker registration successful with scope: ',
            registration.scope,
        );
    });
}

/**
 * Note that the cache is available on the window too
 */
caches.open('my-cache').then(function(cache) {
    fetch('/get-my-data')
        .then(function(response) {
            // /get-article-urls returns a JSON-encoded array of
            // resource URLs that a given article depends on
            return response.json();
        })
        .then(function(urls) {
            cache.addAll(urls);
        });
});
