import { TestBed } from '@angular/core/testing';

import { ApplicationContactService } from './application-contact.service';

describe('ApplicationContactService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApplicationContactService = TestBed.get(ApplicationContactService);
    expect(service).toBeTruthy();
  });
});
