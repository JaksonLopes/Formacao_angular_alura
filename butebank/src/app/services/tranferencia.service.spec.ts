/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TranferenciaService } from './tranferencia.service';

describe('Service: Tranferencia', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TranferenciaService]
    });
  });

  it('should ...', inject([TranferenciaService], (service: TranferenciaService) => {
    expect(service).toBeTruthy();
  }));
});
