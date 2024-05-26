import { TestBed } from '@angular/core/testing';

import { SearchandmatchApiService } from './searchandmatch-api.service';

describe('SearchandmatchApiService', () => {
  let service: SearchandmatchApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchandmatchApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
