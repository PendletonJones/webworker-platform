import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'worker-platform-background-sync',
    templateUrl: './background-sync.component.html',
    styleUrls: ['./background-sync.component.scss'],
})
export class BackgroundSyncComponent implements OnInit {

    Show = false;
    Hide = true;

    codeSample = `
self.addEventListener('sync', function(event) {
    if (event.tag == 'myFirstSync') {
        event.waitUntil(doSomeStuff());
    }
});
`
    codeSample2 = `
// Register your service worker:
navigator.serviceWorker.register('/sw.js');

// Then later, request a one-off sync:
navigator.serviceWorker.ready.then(function(swRegistration) {
    return swRegistration.sync.register('myFirstSync');
});
`
    constructor() {}

    ngOnInit() {}
}
