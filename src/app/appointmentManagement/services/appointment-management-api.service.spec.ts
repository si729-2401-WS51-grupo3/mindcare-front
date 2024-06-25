import { TestBed } from '@angular/core/testing';

import { AppointmentManagementApiService } from './appointment-management-api.service';

describe('AppointmentManagementApiService', () => {
  let service: AppointmentManagementApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppointmentManagementApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
