import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphicBrowserComponent } from './graphic-browser.component';

describe('GraphicBrowserComponent', () => {
    let component: GraphicBrowserComponent;
    let fixture: ComponentFixture<GraphicBrowserComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [GraphicBrowserComponent],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(GraphicBrowserComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
