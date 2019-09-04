import { TestBed } from '@angular/core/testing';

import { ApplicationMembersService } from './application-members.service';

describe('ApplicationMembersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApplicationMembersService = TestBed.get(ApplicationMembersService);
    expect(service).toBeTruthy();
  });
});
