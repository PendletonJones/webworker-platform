import { Component, OnInit } from '@angular/core';

const sourceExample = `
self.addEventListener('fetch', function(event) {
   event.respondWith(caches.match(event.request));
   // - OR -
   event.respondWith(fetch(event.request));
});
`

@Component({
    selector: 'worker-platform-network-interception',
    templateUrl: './network-interception.component.html',
    styleUrls: ['./network-interception.component.scss'],
})
export class NetworkInterceptionComponent implements OnInit {

    Show = false;
    Hide = true;

    sourceExample = sourceExample;

    constructor() {}

    ngOnInit() {}
}
