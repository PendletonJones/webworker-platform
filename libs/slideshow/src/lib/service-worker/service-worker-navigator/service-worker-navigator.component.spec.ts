import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceWorkerNavigatorComponent } from './service-worker-navigator.component';

describe('ServiceWorkerNavigatorComponent', () => {
    let component: ServiceWorkerNavigatorComponent;
    let fixture: ComponentFixture<ServiceWorkerNavigatorComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ServiceWorkerNavigatorComponent],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ServiceWorkerNavigatorComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
