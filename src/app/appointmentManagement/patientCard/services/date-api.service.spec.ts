import { TestBed } from '@angular/core/testing';

import { DateApiService } from './date-api.service';

describe('DateApiService', () => {
  let service: DateApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DateApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
