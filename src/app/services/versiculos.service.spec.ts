import { TestBed } from '@angular/core/testing';

import { VersiculosService } from './versiculos.service';

describe('VersiculosService', () => {
  let service: VersiculosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VersiculosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
