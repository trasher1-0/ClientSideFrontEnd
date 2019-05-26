import { TestBed } from '@angular/core/testing';

import { HelpServiceService } from './help-service.service';

describe('HelpServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HelpServiceService = TestBed.get(HelpServiceService);
    expect(service).toBeTruthy();
  });
});
