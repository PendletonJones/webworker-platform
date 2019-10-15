import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, fromEvent, Subject, BehaviorSubject, from } from 'rxjs';
import { filter, mergeMap, tap } from 'rxjs/operators';
import { ServiceWorkerService } from './service-worker.service';

@Component({
    selector: 'worker-platform-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, AfterViewInit {
    title = 'service-worker-push-notification-example';

    sources = [
        '/register-service-worker.ts',
        '/app/service-worker.service.ts',
        '/app/app.component.ts',
        '/app/app.module.ts',
        '/service-worker.js',
    ];

    @ViewChild('button', { static: false }) button;

    subscription: BehaviorSubject<any>;

    ngAfterViewInit() {
        fromEvent(this.button.nativeElement, 'click')
            .pipe(
                mergeMap(() => this.workerService.subscription),
                tap(console.log),
            )
            .subscribe(this.sendNotification);
    }

    ngOnInit() {}

    constructor(
        private http: HttpClient,
        private workerService: ServiceWorkerService,
    ) {
        this.workerService.subscription.subscribe((event) =>
            console.log('app component got event', event),
        );
    }

    sendNotification(subscription) {
        if (subscription) {
            return fetch('http://localhost:3333/sendNotification', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                },
                body: JSON.stringify({
                    subscription: subscription,
                    payload: 'hello world',
                    delay: 1,
                    ttl: 5000,
                }),
            });
        } else {
            console.log('subscription undefined');
            return [];
        }
    }
}
