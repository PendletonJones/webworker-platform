import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OffloadHeavyTasksComponent } from './offload-heavy-tasks.component';

describe('OffloadHeavyTasksComponent', () => {
    let component: OffloadHeavyTasksComponent;
    let fixture: ComponentFixture<OffloadHeavyTasksComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [OffloadHeavyTasksComponent],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(OffloadHeavyTasksComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
