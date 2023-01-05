import { TestBed } from '@angular/core/testing';

import { CedeshopsUserService } from './cedeshops-user.service';

describe('CedeshopsUserService', () => {
  let service: CedeshopsUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CedeshopsUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
