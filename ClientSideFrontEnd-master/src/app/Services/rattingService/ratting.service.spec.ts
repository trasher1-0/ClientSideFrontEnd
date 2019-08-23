import { TestBed } from '@angular/core/testing';

import { RattingService } from './ratting.service';

describe('RattingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RattingService = TestBed.get(RattingService);
    expect(service).toBeTruthy();
  });
});
