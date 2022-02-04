import { TestBed } from '@angular/core/testing';

import { GetCryptosService } from './get-cryptos.service';

describe('GetCryptosService', () => {
  let service: GetCryptosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetCryptosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
