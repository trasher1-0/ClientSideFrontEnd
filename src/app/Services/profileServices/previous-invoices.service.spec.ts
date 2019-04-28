import { TestBed } from '@angular/core/testing';

import { PreviousInvoicesService } from './previous-invoices.service';

describe('PreviousInvoicesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PreviousInvoicesService = TestBed.get(PreviousInvoicesService);
    expect(service).toBeTruthy();
  });
});
