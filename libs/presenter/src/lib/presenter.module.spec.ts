import { async, TestBed } from '@angular/core/testing';
import { PresenterModule } from './presenter.module';

describe('PresenterModule', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [PresenterModule],
        }).compileComponents();
    }));

    it('should create', () => {
        expect(PresenterModule).toBeDefined();
    });
});
