import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideshowContainerComponent } from './slideshow-container.component';

describe('SlideshowContainerComponent', () => {
    let component: SlideshowContainerComponent;
    let fixture: ComponentFixture<SlideshowContainerComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [SlideshowContainerComponent],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SlideshowContainerComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
