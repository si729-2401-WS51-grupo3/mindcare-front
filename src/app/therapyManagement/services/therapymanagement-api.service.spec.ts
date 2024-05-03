import { TestBed } from '@angular/core/testing';

import { TherapymanagementApiService } from './therapymanagement-api.service';

describe('TherapymanagementApiService', () => {
  let service: TherapymanagementApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TherapymanagementApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
