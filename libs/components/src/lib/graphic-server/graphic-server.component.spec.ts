import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphicServerComponent } from './graphic-server.component';

describe('GraphicServerComponent', () => {
    let component: GraphicServerComponent;
    let fixture: ComponentFixture<GraphicServerComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [GraphicServerComponent],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(GraphicServerComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
