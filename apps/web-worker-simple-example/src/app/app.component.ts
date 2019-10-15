import { Component } from '@angular/core';

@Component({
    selector: 'worker-platform-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    title = 'web-worker-simple-example';

    sources = [
        '/app/app.component.ts',
        '/app/app.module.ts',
        '/app/prime-generator.worker.ts',
    ];
}

const worker = new Worker('./prime-generator.worker', { type: 'module' });

worker.onmessage = () => {
    console.log('got a message');
};

worker.postMessage('hello world');
