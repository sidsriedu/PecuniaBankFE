import { TestBed } from '@angular/core/testing';

import { SlipServiceService } from './slip-service.service';

describe('SlipServiceService', () => {
  let service: SlipServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SlipServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
