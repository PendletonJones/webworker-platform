import { async, TestBed } from '@angular/core/testing';
import { SlideshowModule } from './slideshow.module';

describe('SlideshowModule', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [SlideshowModule],
        }).compileComponents();
    }));

    it('should create', () => {
        expect(SlideshowModule).toBeDefined();
    });
});
