import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ConclusionComponent } from './conclusion.component';
import { WhatDidWeLearnComponent } from './what-did-we-learn/what-did-we-learn.component';
import { LearnMoreComponent } from './learn-more/learn-more.component';
import { ThanksComponent } from './thanks/thanks.component';

const routes: Routes = [
    {
        path: '',
        component: ConclusionComponent,
        children: [
            {
                path: 'learn-more',
                component: LearnMoreComponent,
            },
            {
                path: 'thanks',
                component: ThanksComponent,
            },
            {
                path: 'what-did-we-learn',
                component: WhatDidWeLearnComponent,
            },
        ],
    },
];

@NgModule({
    declarations: [
        ConclusionComponent,
        WhatDidWeLearnComponent,
        LearnMoreComponent,
        ThanksComponent,
    ],
    imports: [CommonModule, RouterModule.forChild(routes)],
})
export class ConclusionModule {}
