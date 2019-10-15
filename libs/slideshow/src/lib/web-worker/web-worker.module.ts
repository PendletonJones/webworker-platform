import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { ComponentsModule } from '@worker-platform/components';

import { WebWorkerComponent } from './web-worker.component';
import { ParallelExecutionComponent } from './parallel-execution/parallel-execution.component';
import { MessagePassingComponent } from './message-passing/message-passing.component';
import { OffloadHeavyTasksComponent } from './offload-heavy-tasks/offload-heavy-tasks.component';
import { MultipleWorkersComponent } from './multiple-workers/multiple-workers.component';
import { WebWorkerNavigatorComponent } from './web-worker-navigator/web-worker-navigator.component';
import { MatGridListModule } from '@angular/material/grid-list';

const routes: Routes = [
    {
        path: '',
        component: WebWorkerComponent,
        children: [
            {
                path: 'message-passing',
                component: MessagePassingComponent,
            },
            {
                path: 'multiple-workers',
                component: MultipleWorkersComponent,
            },
            {
                path: 'offload-heavy-tasks',
                component: OffloadHeavyTasksComponent,
            },
            {
                path: 'parallel-execution',
                component: ParallelExecutionComponent,
            },
            {
                path: '**',
                component: WebWorkerNavigatorComponent,
            },
        ],
    },
];

@NgModule({
    declarations: [
        WebWorkerComponent,
        ParallelExecutionComponent,
        MessagePassingComponent,
        OffloadHeavyTasksComponent,
        MultipleWorkersComponent,
        WebWorkerNavigatorComponent,
    ],
    imports: [
        CommonModule,
        MatGridListModule,
        ComponentsModule,
        RouterModule.forChild(routes),
    ],
})
export class WebWorkerModule {}
