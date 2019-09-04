import { TestBed } from '@angular/core/testing';

import { AgronomistsService } from './agronomists.service';

describe('AgronomistsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AgronomistsService = TestBed.get(AgronomistsService);
    expect(service).toBeTruthy();
  });
});
