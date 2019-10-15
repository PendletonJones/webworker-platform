import { Component } from '@angular/core';

@Component({
    selector: 'worker-platform-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent {
    title = 'service-worker-workbox-example';

    sources = ['/service-worker.js', '/app/app.components.ts', '/main.ts'];
}
