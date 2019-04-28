import { TestBed } from '@angular/core/testing';

import { SocialEventService } from './social-event.service';

describe('SocialEventService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SocialEventService = TestBed.get(SocialEventService);
    expect(service).toBeTruthy();
  });
});
