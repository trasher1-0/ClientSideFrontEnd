import { TestBed } from '@angular/core/testing';

import { PrimumTrasherCommentService } from './primum-trasher-comment.service';

describe('PrimumTrasherCommentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PrimumTrasherCommentService = TestBed.get(PrimumTrasherCommentService);
    expect(service).toBeTruthy();
  });
});
