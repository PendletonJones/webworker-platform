import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphicServiceWorkerComponent } from './graphic-service-worker.component';

describe('GraphicServiceWorkerComponent', () => {
    let component: GraphicServiceWorkerComponent;
    let fixture: ComponentFixture<GraphicServiceWorkerComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [GraphicServiceWorkerComponent],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(GraphicServiceWorkerComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
