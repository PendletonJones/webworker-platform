import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SlideshowContainerComponent } from './slideshow-container/slideshow-container.component';
import { PresenterModule } from '@worker-platform/presenter';
import { ComponentsModule } from '@worker-platform/components';

@NgModule({
    imports: [
        CommonModule,
        PresenterModule,
        ComponentsModule,
        RouterModule.forChild([
            {
                path: '',
                component: SlideshowContainerComponent,
                children: [
                    {
                        path: 'talk-intro',
                        loadChildren: () =>
                            import('./talk-intro/talk-intro.module').then(
                                (m) => m.TalkIntroModule,
                            ),
                    },
                    {
                        path: 'service-worker',
                        loadChildren: () =>
                            import('./service-worker/service-worker.module').then(
                                (m) => m.ServiceWorkerModule,
                            ),
                    },
                    {
                        path: 'web-worker',
                        loadChildren: () =>
                            import('./web-worker/web-worker.module').then(
                                (m) => m.WebWorkerModule,
                            ),
                    },
                    {
                        path: 'conclusion',
                        loadChildren: () =>
                            import('./conclusion/conclusion.module').then(
                                (m) => m.ConclusionModule,
                            ),
                    },
                ],
            },
        ]),
    ],
    declarations: [SlideshowContainerComponent],
})
export class SlideshowModule {}
