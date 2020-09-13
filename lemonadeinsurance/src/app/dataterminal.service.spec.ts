import { TestBed } from '@angular/core/testing';

import { DataterminalService } from './dataterminal.service';

describe('DataterminalService', () => {
  let service: DataterminalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataterminalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
