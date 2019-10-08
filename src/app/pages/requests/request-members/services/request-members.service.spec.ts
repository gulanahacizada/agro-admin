import { TestBed } from '@angular/core/testing';

import { RequestMembersService } from './request-members.service';

describe('RequestMembersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RequestMembersService = TestBed.get(RequestMembersService);
    expect(service).toBeTruthy();
  });
});
