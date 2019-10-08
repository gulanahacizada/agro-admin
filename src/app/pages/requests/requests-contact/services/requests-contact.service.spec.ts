import { TestBed } from '@angular/core/testing';

import { RequestsContactService } from './requests-contact.service';

describe('RequestsContactService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RequestsContactService = TestBed.get(RequestsContactService);
    expect(service).toBeTruthy();
  });
});
