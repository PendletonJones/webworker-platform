import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'worker-platform-resources',
    templateUrl: './resources.component.html',
    styleUrls: ['./resources.component.scss'],
})
export class ResourcesComponent implements OnInit {
    links = [
        {
            href:
                'https://developers.google.com/web/fundamentals/primers/service-workers/lifecycle',
            title:
                'https://developers.google.com/web/fundamentals/primers/service-workers/lifecycle',
        },
        {
            href: 'https://github.com/GoogleChromeLabs/sw-precache',
            title: 'https://github.com/GoogleChromeLabs/sw-precache',
        },
        {
            href: 'https://developers.google.com/web/tools/workbox/',
            title: 'https://developers.google.com/web/tools/workbox/',
        },
        {
            href: 'https://github.com/GoogleChromeLabs/sw-testing-helpers',
            title: 'https://github.com/GoogleChromeLabs/sw-testing-helpers',
        },
        {
            href:
                'https://github.com/googlearchive/Propel/tree/worker-get-windows/test/browser-tests/push-worker/get-open-windows',
            title:
                'https://github.com/googlearchive/Propel/tree/worker-get-windows/test/browser-tests/push-worker/get-open-windows',
        },
        {
            href:
                'https://github.com/GoogleChromeLabs/sw-toolbox/tree/master/test',
            title:
                'https://github.com/GoogleChromeLabs/sw-toolbox/tree/master/test',
        },
        {
            href:
                'https://medium.com/@nit3watch/angular-shared-assets-with-multiple-apps-nrwl-nx-b4801c05c771',
            title:
                'https://medium.com/@nit3watch/angular-shared-assets-with-multiple-apps-nrwl-nx-b4801c05c771',
        },
        {
            href: 'https://github.com/redux-observable/redux-observable',
            title: 'https://github.com/redux-observable/redux-observable',
        },
        {
            href: 'https://v8.dev/blog/code-caching-for-devs',
            title: 'https://v8.dev/blog/code-caching-for-devs',
        },
        {
            href:
                'https://developers.google.com/web/fundamentals/primers/service-workers/high-performance-loading',
            title:
                'https://developers.google.com/web/fundamentals/primers/service-workers/high-performance-loading',
        },
        {
            href:
                'https://developers.google.com/web/fundamentals/push-notifications/sending-messages-with-web-push-libraries',
            title:
                'https://developers.google.com/web/fundamentals/push-notifications/sending-messages-with-web-push-libraries',
        },
        {
            href:
                'https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerRegistration/update',
            title:
                'https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerRegistration/update',
        },
        {
            href: 'https://ponyfoo.com/articles/backgroundsync',
            title: 'https://ponyfoo.com/articles/backgroundsync',
        },
        {
            href: 'https://developer.mozilla.org/en-US/docs/Web/API/Clients',
            title: 'https://developer.mozilla.org/en-US/docs/Web/API/Clients',
        },
        {
            href:
                'https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerContainer',
            title:
                'https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerContainer',
        },
        {
            href:
                'https://blog.angularindepth.com/asynchronous-modules-and-components-in-angular-ivy-1c1d79d45bd3',
            title:
                'https://blog.angularindepth.com/asynchronous-modules-and-components-in-angular-ivy-1c1d79d45bd3',
        },
        {
            href:
                'https://developers.google.com/web/updates/2018/06/fresher-sw',
            title:
                'https://developers.google.com/web/updates/2018/06/fresher-sw',
        },
        {
            href:
                'https://developers.google.com/web/fundamentals/primers/service-workers/lifecycle',
            title:
                'https://developers.google.com/web/fundamentals/primers/service-workers/lifecycle',
        },
        {
            href: 'https://jakearchibald.com/2016/caching-best-practices/',
            title: 'https://jakearchibald.com/2016/caching-best-practices/',
        },
        {
            href:
                'https://developers.google.com/web/tools/workbox/guides/advanced-recipes',
            title:
                'https://developers.google.com/web/tools/workbox/guides/advanced-recipes',
        },
        {
            href:
                'https://developers.google.com/web/updates/2016/06/sw-readablestreams',
            title:
                'https://developers.google.com/web/updates/2016/06/sw-readablestreams',
        },
        {
            href:
                'https://developers.google.com/web/updates/2015/12/background-sync',
            title:
                'https://developers.google.com/web/updates/2015/12/background-sync',
        },
        {
            href: 'https://pwa-workshop.js.org/6-pwa-setup/',
            title: 'https://pwa-workshop.js.org/6-pwa-setup/',
        },
        {
            href:
                'https://medium.com/@dhormale/install-pwa-on-windows-desktop-via-google-chrome-browser-6907c01eebe4',
            title:
                'https://medium.com/@dhormale/install-pwa-on-windows-desktop-via-google-chrome-browser-6907c01eebe4',
        },
        {
            href:
                'https://developers.google.com/web/fundamentals/app-install-banners',
            title:
                'https://developers.google.com/web/fundamentals/app-install-banners',
        },
        {
            href:
                'https://developers.google.com/web/ilt/pwa/caching-files-with-service-worker',
            title:
                'https://developers.google.com/web/ilt/pwa/caching-files-with-service-worker',
        },
        {
            href:
                'https://github.com/GoogleChromeLabs/web-push-codelab/blob/master/completed/08-push-subscription-change/scripts/main.js',
            title:
                'https://github.com/GoogleChromeLabs/web-push-codelab/blob/master/completed/08-push-subscription-change/scripts/main.js',
        },
        {
            href: 'https://github.com/bahmutov/bottle-service',
            title: 'https://github.com/bahmutov/bottle-service',
        },
        {
            href: 'https://codelabs.developers.google.com/dev-pwa-training/',
            title: 'https://codelabs.developers.google.com/dev-pwa-training/',
        },
        {
            href: 'https://developers.google.com/web/showcase/',
            title: 'https://developers.google.com/web/showcase/',
        },
        {
            href: 'https://developers.google.com/web/ilt/pwa/',
            title: 'https://developers.google.com/web/ilt/pwa/',
        },
        {
            href:
                'https://github.com/GoogleChromeLabs/web-push-codelab/tree/master/completed/08-push-subscription-change',
            title:
                'https://github.com/GoogleChromeLabs/web-push-codelab/tree/master/completed/08-push-subscription-change',
        },
        {
            href: 'https://developers.google.com/web/fundamentals/codelabs/',
            title: 'https://developers.google.com/web/fundamentals/codelabs/',
        },
        {
            href:
                'https://developers.google.com/web/fundamentals/primers/service-workers/',
            title:
                'https://developers.google.com/web/fundamentals/primers/service-workers/',
        },
        {
            href: 'https://github.com/bahmutov/express-service',
            title: 'https://github.com/bahmutov/express-service',
        },
        {
            href:
                'https://medium.com/applantic/4-creative-service-worker-use-cases-58953a1e85ac',
            title:
                'https://medium.com/applantic/4-creative-service-worker-use-cases-58953a1e85ac',
        },
        {
            href:
                'https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers',
            title:
                'https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers',
        },
        {
            href: 'https://github.com/webpack-contrib/worker-loader',
            title: 'https://github.com/webpack-contrib/worker-loader',
        },
        {
            href:
                'https://blog.angularindepth.com/angular-platforms-in-depth-part-3-rendering-angular-applications-in-terminal-117e4da9c0cc',
            title:
                'https://blog.angularindepth.com/angular-platforms-in-depth-part-3-rendering-angular-applications-in-terminal-117e4da9c0cc',
        },
    ];

    constructor() {}

    ngOnInit() {}
}
