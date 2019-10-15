import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TalkIntroNavigationComponent } from './talk-intro-navigation.component';

describe('TalkIntroNavigationComponent', () => {
    let component: TalkIntroNavigationComponent;
    let fixture: ComponentFixture<TalkIntroNavigationComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [TalkIntroNavigationComponent],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(TalkIntroNavigationComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
