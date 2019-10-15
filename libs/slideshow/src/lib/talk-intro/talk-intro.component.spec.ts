import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TalkIntroComponent } from './talk-intro.component';

describe('TalkIntroComponent', () => {
    let component: TalkIntroComponent;
    let fixture: ComponentFixture<TalkIntroComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [TalkIntroComponent],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(TalkIntroComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
