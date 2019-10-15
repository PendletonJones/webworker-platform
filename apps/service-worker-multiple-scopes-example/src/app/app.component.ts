import { Component } from '@angular/core';

@Component({
    selector: 'worker-platform-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent {
    title = 'service-worker-multiple-scopes-example';

    sources = [
        '/app/app.component.html',
        '/main.ts',
        '/assets/service-worker-assets.js',
        '/service-worker.js',
    ];
}
