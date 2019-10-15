import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphicCacheComponent } from './graphic-cache.component';

describe('GraphicCacheComponent', () => {
    let component: GraphicCacheComponent;
    let fixture: ComponentFixture<GraphicCacheComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [GraphicCacheComponent],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(GraphicCacheComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
