import { TestBed } from '@angular/core/testing';

import { CedeshopsShopsService } from './cedeshops-shops.service';

describe('CedeshopsShopsService', () => {
  let service: CedeshopsShopsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CedeshopsShopsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
