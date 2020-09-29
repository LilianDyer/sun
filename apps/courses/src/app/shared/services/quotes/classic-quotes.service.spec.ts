import { TestBed } from '@angular/core/testing';

import { ClassicQuotesService } from './classic-quotes.service';

describe('ClassicQuotesService', () => {
  let service: ClassicQuotesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClassicQuotesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
