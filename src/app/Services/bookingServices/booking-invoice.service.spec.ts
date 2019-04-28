import { TestBed } from '@angular/core/testing';

import { BookingInvoiceService } from './booking-invoice.service';

describe('BookingInvoiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BookingInvoiceService = TestBed.get(BookingInvoiceService);
    expect(service).toBeTruthy();
  });
});
