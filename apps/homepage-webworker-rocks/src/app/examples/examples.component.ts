import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'worker-platform-examples',
    templateUrl: './examples.component.html',
    styleUrls: ['./examples.component.scss'],
})
export class ExamplesComponent implements OnInit {
    constructor() {}

    ngOnInit() {}
    webWorkerCards = [
        {
            useTitle: 'Single Web Worker',
            url: 'https://web-worker-simple-example.webworker.rocks',
        },
        {
            useTitle: 'Multiple Workers',
            url: 'https://web-worker-multiple-workers-example.webworker.rocks',
        },
    ];
    serviceWorkerCards = [
        {
            useTitle: 'Angular PWA',
            url: 'https://service-worker-angular-pwa-example.webworker.rocks',
        },
        {
            useTitle: 'Caching',
            url: 'https://service-worker-caching-example.webworker.rocks',
        },
        {
            useTitle: 'Cross Tab Messaging',
            url:
                'https://service-worker-cross-tab-messaging-example.webworker.rocks',
        },
        {
            useTitle: 'Multiple Scopes',
            url:
                'https://service-worker-multiple-scopes-example.webworker.rocks',
        },
        {
            useTitle: 'Prefetch',
            url: 'https://service-worker-prefetch-example.webworker.rocks',
        },
        {
            useTitle: 'Push Notifications',
            url:
                'https://service-worker-push-notification-example.webworker.rocks',
        },
    ];
    useCaseCards = [];
}
