import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimumTrasherCommentBoxComponent } from './primum-trasher-comment-box.component';

describe('PrimumTrasherCommentBoxComponent', () => {
  let component: PrimumTrasherCommentBoxComponent;
  let fixture: ComponentFixture<PrimumTrasherCommentBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimumTrasherCommentBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimumTrasherCommentBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
