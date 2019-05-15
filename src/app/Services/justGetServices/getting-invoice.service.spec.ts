import { TestBed } from '@angular/core/testing';

import { GettingInvoiceService } from './getting-invoice.service';

describe('GettingInvoiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GettingInvoiceService = TestBed.get(GettingInvoiceService);
    expect(service).toBeTruthy();
  });
});
