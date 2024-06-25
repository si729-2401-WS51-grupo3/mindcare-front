import { TestBed } from '@angular/core/testing';

import { FinancialManagementApiService } from './financial-management-api.service';

describe('FinancialManagementApiService', () => {
  let service: FinancialManagementApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FinancialManagementApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
