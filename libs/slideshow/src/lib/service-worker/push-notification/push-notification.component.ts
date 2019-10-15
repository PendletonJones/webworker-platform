import { Component, OnInit } from '@angular/core';

const serviceWorkerThread = `
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
`;

const expressServer = `
import webPush from 'web-push';

function getVapidKeys() {
    const keys = webPush.generateVAPIDKeys();

    const VAPID_PUBLIC_KEY = process.env.VAPID_PUBLIC_KEY || keys.publicKey;
    const VAPID_PRIVATE_KEY = process.env.VAPID_PRIVATE_KEY || keys.privateKey;

    return {
        VAPID_PUBLIC_KEY,
        VAPID_PRIVATE_KEY,
    };
}

const { VAPID_PRIVATE_KEY, VAPID_PUBLIC_KEY } = getVapidKeys();

webPush.setVapidDetails(
    'https://webworker.rocks/',
    VAPID_PUBLIC_KEY,
    VAPID_PRIVATE_KEY,
);

export async function vapidPublicKeyHandler() {
    const response = {
        statusCode: 201,
        headers: {
            'Content-Type': 'application/json; charset=utf-8',
        },
        body: JSON.stringify({ VAPID_PUBLIC_KEY }),
    };

    return response;
}
`;

@Component({
    selector: 'worker-platform-push-notification',
    templateUrl: './push-notification.component.html',
    styleUrls: ['./push-notification.component.scss'],
})
export class PushNotificationComponent implements OnInit {
    constructor() {}

    serviceWorkerThread = serviceWorkerThread;
    expressServer = expressServer;

    Show = false;
    Hide = true;

    ngOnInit() {}
}
