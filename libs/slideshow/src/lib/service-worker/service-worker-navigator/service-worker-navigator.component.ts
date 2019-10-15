import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'worker-platform-service-worker-navigator',
    templateUrl: './service-worker-navigator.component.html',
    styleUrls: ['./service-worker-navigator.component.scss'],
})
export class ServiceWorkerNavigatorComponent implements OnInit {
    tiles = [
        {
            path: 'lifecycle',
            text: 'lifecycle',
            cols: 1,
            rows: 2,
            color: 'lightblue',
        },
        {
            path: 'network-interception',
            text: 'network-interception',
            cols: 1,
            rows: 1,
            color: 'lightblue',
        },
        {
            path: 'caching',
            text: 'caching',
            cols: 2,
            rows: 1,
            color: 'lightblue',
        },
        {
            path: 'push-notification',
            text: 'push-notification',
            cols: 2,
            rows: 1,
            color: 'lightblue',
        },
        {
            path: 'background-sync',
            text: 'background-sync',
            cols: 1,
            rows: 1,
            color: 'lightblue',
        },
    ];
    constructor() {}

    ngOnInit() {}
}
