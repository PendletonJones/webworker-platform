import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NetworkInterceptionComponent } from './network-interception.component';

describe('NetworkInterceptionComponent', () => {
    let component: NetworkInterceptionComponent;
    let fixture: ComponentFixture<NetworkInterceptionComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [NetworkInterceptionComponent],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(NetworkInterceptionComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
