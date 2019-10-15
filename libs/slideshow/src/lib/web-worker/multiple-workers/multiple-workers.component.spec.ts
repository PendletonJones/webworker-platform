import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipleWorkersComponent } from './multiple-workers.component';

describe('MultipleWorkersComponent', () => {
    let component: MultipleWorkersComponent;
    let fixture: ComponentFixture<MultipleWorkersComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [MultipleWorkersComponent],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(MultipleWorkersComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
