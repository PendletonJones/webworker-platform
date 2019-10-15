import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { ServiceWorkerComponent } from './service-worker.component';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { NetworkInterceptionComponent } from './network-interception/network-interception.component';
import { CachingComponent } from './caching/caching.component';
import { PushNotificationComponent } from './push-notification/push-notification.component';
import { BackgroundSyncComponent } from './background-sync/background-sync.component';
import { ServiceWorkerNavigatorComponent } from './service-worker-navigator/service-worker-navigator.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTabsModule } from '@angular/material/tabs';
import { ComponentsModule } from '@worker-platform/components';

const routes: Routes = [
    {
        path: '',
        component: ServiceWorkerComponent,
        children: [
            {
                path: 'background-sync',
                component: BackgroundSyncComponent,
            },
            {
                path: 'caching',
                component: CachingComponent,
            },
            {
                path: 'lifecycle',
                component: LifecycleComponent,
            },
            {
                path: 'network-interception',
                component: NetworkInterceptionComponent,
            },
            {
                path: 'push-notification',
                component: PushNotificationComponent,
            },
            {
                path: '**',
                component: ServiceWorkerNavigatorComponent,
            },
        ],
    },
];

@NgModule({
    declarations: [
        ServiceWorkerComponent,
        LifecycleComponent,
        NetworkInterceptionComponent,
        CachingComponent,
        PushNotificationComponent,
        BackgroundSyncComponent,
        ServiceWorkerNavigatorComponent,
    ],
    imports: [
        CommonModule,
        MatGridListModule,
        MatTabsModule,
        ComponentsModule,
        RouterModule.forChild(routes),
    ],
})
export class ServiceWorkerModule {}
