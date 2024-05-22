import { TestBed } from '@angular/core/testing';

import { AccountManagementApiService } from './account-management-api.service';

describe('AccountManagementApiService', () => {
  let service: AccountManagementApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AccountManagementApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
