import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DilevaryIssueComponent } from './dilevary-issue.component';

describe('DilevaryIssueComponent', () => {
  let component: DilevaryIssueComponent;
  let fixture: ComponentFixture<DilevaryIssueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DilevaryIssueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DilevaryIssueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
