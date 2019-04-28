import { TestBed } from '@angular/core/testing';

import { TrasherRattingsService } from './trasher-rattings.service';

describe('TrasherRattingsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TrasherRattingsService = TestBed.get(TrasherRattingsService);
    expect(service).toBeTruthy();
  });
});
