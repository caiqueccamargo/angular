import { TestBed } from '@angular/core/testing';

import { Info.ServiceService } from './info.service.service';

describe('Info.ServiceService', () => {
  let service: Info.ServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Info.ServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
