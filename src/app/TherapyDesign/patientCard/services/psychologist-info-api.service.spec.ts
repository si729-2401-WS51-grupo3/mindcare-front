import { TestBed } from '@angular/core/testing';

import { PsychologistInfoApiService } from './psychologist-info-api.service';

describe('PsychologistInfoApiService', () => {
  let service: PsychologistInfoApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PsychologistInfoApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
