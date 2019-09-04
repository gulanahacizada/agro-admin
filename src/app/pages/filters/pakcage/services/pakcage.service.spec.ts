import { TestBed } from '@angular/core/testing';

import { PakcageService } from './pakcage.service';

describe('PakcageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PakcageService = TestBed.get(PakcageService);
    expect(service).toBeTruthy();
  });
});
