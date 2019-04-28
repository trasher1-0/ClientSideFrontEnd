import { TestBed } from '@angular/core/testing';

import { SmallTrasherCommentService } from './small-trasher-comment.service';

describe('SmallTrasherCommentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SmallTrasherCommentService = TestBed.get(SmallTrasherCommentService);
    expect(service).toBeTruthy();
  });
});
