import { Component, OnInit } from '@angular/core';

const workerThreadCode = `
var CACHE_VERSION = 1;

// Shorthand identifier mapped to specific versioned cache.
var CURRENT_CACHES = {
  font: 'font-cache-v' + CACHE_VERSION
};

self.addEventListener('activate', function(event) {
  var expectedCacheNames = Object.values(CURRENT_CACHES);

  // Active worker won't be treated as activated until promise
  // resolves successfully.
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(cacheName) {
          if (!expectedCacheNames.includes(cacheName)) {
            console.log('Deleting out of date cache:', cacheName);

            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

self.addEventListener('fetch', function(event) {
  console.log('Handling fetch event for', event.request.url);

  event.respondWith(

    // Opens Cache objects that start with 'font'.
    caches.open(CURRENT_CACHES['font']).then(function(cache) {
      return cache.match(event.request).then(function(response) {
        if (response) {
          console.log('Found response in cache:', response);

          return response;
        }

        console.log('Fetching request from the network');

        return fetch(event.request).then(function(networkResponse) {
          cache.put(event.request, networkResponse.clone());

          return networkResponse;
        });
      }).catch(function(error) {

        // Handles exceptions that arise from match() or fetch().
        console.error('Error in fetch handler:', error);

        throw error;
      });
    })
  );
});
`;

const mainThreadCode = `
document.querySelector('.cache-article').addEventListener('click', function(event) {
    event.preventDefault();
    var id = this.dataset.articleId;
    caches.open('mysite-article-' + id).then(function(cache) {
      fetch('/get-article-urls?id=' + id).then(function(response) {
        // /get-article-urls returns a JSON-encoded array of
        // resource URLs that a given article depends on
        return response.json();
      }).then(function(urls) {
        cache.addAll(urls);
      });
    });
  });
`;

@Component({
    selector: 'worker-platform-caching',
    templateUrl: './caching.component.html',
    styleUrls: ['./caching.component.scss'],
})
export class CachingComponent implements OnInit {

    Show = false;
    Hide = true;

    workerThreadCode = workerThreadCode;
    mainThreadCode = mainThreadCode;

    constructor() {}

    ngOnInit() {}
}


