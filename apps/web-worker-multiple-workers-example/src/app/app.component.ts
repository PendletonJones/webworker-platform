import { Component, OnInit } from '@angular/core';
import { WorkerServiceService } from './worker-service.service';

@Component({
    selector: 'worker-platform-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent {
    sources: Array<string>;
    constructor(private workerService: WorkerServiceService) {
        this.sources = [
            '/app/app.component.ts',
            '/app/app.module.ts',
            '/app/worker-one.worker.ts',
            '/app/worker-two.worker.ts',
            '/app/worker-service.service.ts',
        ];
    }
}
