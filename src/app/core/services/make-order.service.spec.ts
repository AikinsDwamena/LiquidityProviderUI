import { TestBed } from '@angular/core/testing';

import { MakeOrderService } from './make-order.service';

describe('MakeOrderService', () => {
  let service: MakeOrderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MakeOrderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
