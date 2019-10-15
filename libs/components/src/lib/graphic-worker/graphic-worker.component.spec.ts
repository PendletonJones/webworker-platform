import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphicWorkerComponent } from './graphic-worker.component';

describe('GraphicWorkerComponent', () => {
    let component: GraphicWorkerComponent;
    let fixture: ComponentFixture<GraphicWorkerComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [GraphicWorkerComponent],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(GraphicWorkerComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
