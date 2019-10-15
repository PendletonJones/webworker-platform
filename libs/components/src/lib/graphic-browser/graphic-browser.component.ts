import { Component, OnInit, ViewChild, ViewEncapsulation, Input } from '@angular/core';

@Component({
    selector: 'worker-platform-graphic-browser',
    templateUrl: './graphic-browser.component.html',
    styleUrls: ['./graphic-browser.component.scss'],
})
export class GraphicBrowserComponent implements OnInit {
    @Input()
    primaryBrowser: boolean;

    @Input()
    secondBrowser: boolean;

    @Input()
    secondBrowserMessageLabel: boolean;

    @Input()
    serviceWorker: boolean;

    @Input()
    serviceWorkerPostMessage: boolean;

    @Input()
    serviceWorkerFetchEvent: boolean;

    @Input()
    serviceWorkerSyncEvent: boolean;

    @Input()
    serviceWorkerFetchLabel: boolean;

    @Input()
    serviceWorkerMessageLabel: boolean;

    @Input()
    serviceWorkerSyncLabel: boolean;

    @Input()
    backendServer: boolean;

    @Input()
    backendPushEvent: boolean;

    @Input()
    backendFetchEvent: boolean;

    @Input()
    backendServerPushLabel: boolean;

    @Input()
    backendServerPushFetch: boolean;

    @Input()
    pushNotificationVisible: boolean;

    @Input()
    swCache: boolean;

    @Input()
    swCacheLabel: boolean;

    @Input()
    primaryWorker: boolean;

    @Input()
    primaryWorkerMessageLabel: boolean;

    @Input()
    secondWorker: boolean;

    @Input()
    secondWorkerMessageChannel: boolean;

    @Input()
    secondWorkerMessageLabel: boolean;

    @Input()
    dbWorker: boolean;

    @Input()
    dbWorkerMessageLabel: boolean;

    constructor() {}

    ngOnInit() {}
}
