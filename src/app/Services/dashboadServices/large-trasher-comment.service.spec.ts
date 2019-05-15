import { TestBed } from '@angular/core/testing';

import { LargeTrasherCommentService } from './large-trasher-comment.service';

describe('LargeTrasherCommentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LargeTrasherCommentService = TestBed.get(LargeTrasherCommentService);
    expect(service).toBeTruthy();
  });
});
