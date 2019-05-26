import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LargeTrasherCommentBoxComponent } from './large-trasher-comment-box.component';

describe('LargeTrasherCommentBoxComponent', () => {
  let component: LargeTrasherCommentBoxComponent;
  let fixture: ComponentFixture<LargeTrasherCommentBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LargeTrasherCommentBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LargeTrasherCommentBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
