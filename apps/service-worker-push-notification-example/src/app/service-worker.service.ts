import { Injectable } from '@angular/core';
import { createServiceWorker } from '../register-service-worker';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
})
export class ServiceWorkerService {
    events: Observable<any>;
    subscription: Observable<any>;

    constructor() {
        const workerLifecycle = createServiceWorker();
        this.subscription = workerLifecycle.pipe(
            filter(({ subscription, event }) => event === 'subscribed'),
            map(({ subscription }) => subscription),
        );
        this.subscription.subscribe((subscription) =>
            console.log('service worker service', subscription),
        );
    }
}
