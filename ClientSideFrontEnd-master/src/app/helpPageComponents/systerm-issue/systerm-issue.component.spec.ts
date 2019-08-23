import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SystermIssueComponent } from './systerm-issue.component';

describe('SystermIssueComponent', () => {
  let component: SystermIssueComponent;
  let fixture: ComponentFixture<SystermIssueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SystermIssueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SystermIssueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
