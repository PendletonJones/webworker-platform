import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from '@worker-platform/components';
import { ExamplesComponent } from './examples/examples.component';
import { ResourcesComponent } from './resources/resources.component';

@NgModule({
    declarations: [AppComponent, ExamplesComponent, ResourcesComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        ComponentsModule,
        RouterModule.forRoot(
            [
                {
                    path: 'resources',
                    pathMatch: 'full',
                    component: ResourcesComponent,
                },
                {
                    path: 'examples',
                    pathMatch: 'full',
                    component: ExamplesComponent,
                },
                {
                    path: 'slideshow',
                    loadChildren: () =>
                        import('@worker-platform/slideshow').then(
                            (module) => module.SlideshowModule,
                        ),
                },
                {
                    path: '**',
                    redirectTo: '/examples',
                },
            ],
            { initialNavigation: 'enabled' },
        ),
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
