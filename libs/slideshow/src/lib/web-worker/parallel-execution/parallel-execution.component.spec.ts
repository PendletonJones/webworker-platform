import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParallelExecutionComponent } from './parallel-execution.component';

describe('ParallelExecutionComponent', () => {
    let component: ParallelExecutionComponent;
    let fixture: ComponentFixture<ParallelExecutionComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ParallelExecutionComponent],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ParallelExecutionComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
