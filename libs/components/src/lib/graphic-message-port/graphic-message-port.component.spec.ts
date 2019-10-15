import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphicMessagePortComponent } from './graphic-message-port.component';

describe('GraphicMessagePortComponent', () => {
    let component: GraphicMessagePortComponent;
    let fixture: ComponentFixture<GraphicMessagePortComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [GraphicMessagePortComponent],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(GraphicMessagePortComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
