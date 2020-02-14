import { Component } from '@angular/core';

@Component({
    selector: 'worker-platform-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent {
    title = 'service-worker-angular-pwa-example';
    sources = ['manifest.webmanifest', 'ngsw-config.json'];
}