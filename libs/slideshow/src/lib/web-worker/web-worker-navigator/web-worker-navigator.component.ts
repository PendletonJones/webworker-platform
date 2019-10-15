import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'worker-platform-web-worker-navigator',
    templateUrl: './web-worker-navigator.component.html',
    styleUrls: ['./web-worker-navigator.component.scss'],
})
export class WebWorkerNavigatorComponent implements OnInit {
    tiles = [
        {
            path: './message-passing',
            text: 'Message Passing',
            cols: 3,
            rows: 1,
        },
        {
            path: './multiple-workers',
            text: 'Multiple Workers',
            cols: 1,
            rows: 2,
        },
        {
            path: './offload-heavy-tasks',
            text: 'Offload Heavy Tasks',
            cols: 1,
            rows: 1,
        },
        {
            path: './parallel-execution',
            text: 'Parallel Execution',
            cols: 2,
            rows: 1,
        },
    ];
    constructor() {}

    ngOnInit() {}
}
