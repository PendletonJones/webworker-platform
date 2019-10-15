import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicSlideComponent } from './topic-slide.component';

describe('TopicSlideComponent', () => {
    let component: TopicSlideComponent;
    let fixture: ComponentFixture<TopicSlideComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [TopicSlideComponent],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(TopicSlideComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
