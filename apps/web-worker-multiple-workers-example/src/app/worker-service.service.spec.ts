import { TestBed } from '@angular/core/testing';

import { WorkerServiceService } from './worker-service.service';

describe('WorkerServiceService', () => {
    beforeEach(() => TestBed.configureTestingModule({}));

    it('should be created', () => {
        const service: WorkerServiceService = TestBed.get(WorkerServiceService);
        expect(service).toBeTruthy();
    });
});
