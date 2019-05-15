import { TestBed } from '@angular/core/testing';

import { BuyInvoiceService } from './buy-invoice.service';

describe('BuyInvoiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BuyInvoiceService = TestBed.get(BuyInvoiceService);
    expect(service).toBeTruthy();
  });
});
