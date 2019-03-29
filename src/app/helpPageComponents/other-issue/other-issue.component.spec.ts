import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherIssueComponent } from './other-issue.component';

describe('OtherIssueComponent', () => {
  let component: OtherIssueComponent;
  let fixture: ComponentFixture<OtherIssueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtherIssueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherIssueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
