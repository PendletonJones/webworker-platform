import { Component, OnInit } from '@angular/core';

const mainThreadLifecycle = `
navigator.serviceWorker.register('/sw.js').then(reg => {
    reg.installing; // the installing worker, or undefined
    reg.waiting; // the waiting worker, or undefined
    reg.active; // the active worker, or undefined

    reg.addEventListener('updatefound', () => {
        // A wild service worker has appeared in reg.installing!
        const newWorker = reg.installing;

        newWorker.state;
        // "installing" - the install event has fired, but not yet complete
        // "installed"  - install complete
        // "activating" - the activate event has fired, but not yet complete
        // "activated"  - fully active
        // "redundant"  - discarded. Either failed install, or it's been
        //                replaced by a newer version

        newWorker.addEventListener('statechange', () => {
            // newWorker.state has changed
        });
    });
});

navigator.serviceWorker.addEventListener('controllerchange', () => {
// This fires when the service worker controlling this page
// changes, eg a new worker has skipped waiting and become
// the new active worker.
});

navigator.serviceWorker.postMessage({ hello: 'world' });
`;

const workerThreadCode = `
self.addEventListener('install', function(event) {

});

self.addEventListener('activate', function(event) {

});

self.addEventListener('fetch', function(event) {

});

self.addEventListener('sync', function(event) {

});

self.addEventListener('message', function(event) {

});
`;

@Component({
    selector: 'worker-platform-lifecycle',
    templateUrl: './lifecycle.component.html',
    styleUrls: ['./lifecycle.component.scss'],
})
export class LifecycleComponent implements OnInit {
    mainCode = mainThreadLifecycle;
    workerThreadCode = workerThreadCode;

    Show = false;
    Hide = true;

    constructor() {}

    ngOnInit() {}
}
