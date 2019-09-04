import { TestBed } from '@angular/core/testing';

import { KindsService } from './kinds.service';

describe('KindsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: KindsService = TestBed.get(KindsService);
    expect(service).toBeTruthy();
  });
});
