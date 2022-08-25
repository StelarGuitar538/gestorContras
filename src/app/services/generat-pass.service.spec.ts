import { TestBed } from '@angular/core/testing';

import { GeneratPassService } from './generat-pass.service';

describe('GeneratPassService', () => {
  let service: GeneratPassService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GeneratPassService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
