import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { TalkIntroComponent } from './talk-intro.component';
import { TitleSlideComponent } from './title-slide/title-slide.component';
import { TopicSlideComponent } from './topic-slide/topic-slide.component';
import { SynopsisComponent } from './synopsis/synopsis.component';
import { TalkIntroNavigationComponent } from './talk-intro-navigation/talk-intro-navigation.component';

import { MatGridListModule } from '@angular/material/grid-list';
import { ComponentsModule } from '@worker-platform/components';

const routes: Routes = [
    {
        path: '',
        component: TalkIntroComponent,
        children: [
            {
                path: 'title',
                component: TitleSlideComponent,
            },
            {
                path: 'topic',
                component: TopicSlideComponent,
            },
            {
                path: 'synopsis',
                component: SynopsisComponent,
            },
            {
                path: '',
                component: TalkIntroNavigationComponent,
            },
        ],
    },
];

@NgModule({
    declarations: [
        TalkIntroComponent,
        TitleSlideComponent,
        TopicSlideComponent,
        SynopsisComponent,
        TalkIntroNavigationComponent,
    ],
    imports: [
        CommonModule,
        MatGridListModule,
        ComponentsModule,
        RouterModule.forChild(routes),
    ],
})
export class TalkIntroModule {}
