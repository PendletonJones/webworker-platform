import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebWorkerNavigatorComponent } from './web-worker-navigator.component';

describe('WebWorkerNavigatorComponent', () => {
    let component: WebWorkerNavigatorComponent;
    let fixture: ComponentFixture<WebWorkerNavigatorComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [WebWorkerNavigatorComponent],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(WebWorkerNavigatorComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
