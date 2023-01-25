import { TestBed } from '@angular/core/testing';

import { FetchmeService } from './fetchme.service';

describe('FetchmeService', () => {
  let service: FetchmeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchmeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
