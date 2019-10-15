import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'worker-platform-slideshow-container',
    templateUrl: './slideshow-container.component.html',
    styleUrls: ['./slideshow-container.component.scss'],
})
export class SlideshowContainerComponent implements OnInit {
    bookmarks = [
        { name: 'Intro', url: '/slideshow/talk-intro/title' },
        { name: 'Service Worker', url: '/slideshow/service-worker' },
        { name: 'Web Worker', url: '/slideshow/web-worker' },
        { name: 'Conclusion', url: '/slideshow/conclusion/learn-more' },
    ];

    slides = [
        '/slideshow',
        '/slideshow/talk-intro/title',
        '/slideshow/talk-intro/topic',
        '/slideshow/talk-intro/synopsis',
        '/slideshow/service-worker',
        '/slideshow/service-worker/lifecycle',
        '/slideshow/service-worker/network-interception',
        '/slideshow/service-worker/caching',
        '/slideshow/service-worker/push-notification',
        '/slideshow/service-worker/background-sync',
        '/slideshow/web-worker',
        '/slideshow/web-worker/parallel-execution',
        '/slideshow/web-worker/offload-heavy-tasks',
        '/slideshow/web-worker/message-passing',
        '/slideshow/web-worker/multiple-workers',
        // '/slideshow/conclusion',
        '/slideshow/conclusion/learn-more',
        '/slideshow/conclusion/what-did-we-learn',
        '/slideshow/conclusion/thanks',
    ];
    constructor() {}

    ngOnInit() {}
}
