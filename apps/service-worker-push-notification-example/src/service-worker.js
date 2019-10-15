function getEndpoint() {
    return self.registration.pushManager
        .getSubscription()
        .then(function(subscription) {
            if (subscription) {
                return subscription.endpoint;
            }

            throw new Error('User not subscribed');
        });
}

self.addEventListener('activate', function(evnet) {
    console.log('activate');
});

self.addEventListener('fetch', function(event) {
    // console.log('fetch', event);
    event.respondWith(fetch(event.request));
});

self.addEventListener('push', function(event) {
    console.log('Got Push Event', event);
    event.waitUntil(
        getEndpoint()
            .then(function(endpoint) {
                return fetch('http://localhost:3333/getPayload/');
            })
            .then(function(response) {
                return response.text();
            })
            .then(function(payload) {
                self.registration.showNotification('ServiceWorker Cookbook', {
                    body: payload,
                });
            }),
    );
});
