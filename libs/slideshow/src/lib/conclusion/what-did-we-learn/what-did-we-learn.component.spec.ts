import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatDidWeLearnComponent } from './what-did-we-learn.component';

describe('WhatDidWeLearnComponent', () => {
    let component: WhatDidWeLearnComponent;
    let fixture: ComponentFixture<WhatDidWeLearnComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [WhatDidWeLearnComponent],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(WhatDidWeLearnComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
