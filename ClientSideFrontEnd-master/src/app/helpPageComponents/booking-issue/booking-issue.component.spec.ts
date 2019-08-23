import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingIssueComponent } from './booking-issue.component';

describe('BookingIssueComponent', () => {
  let component: BookingIssueComponent;
  let fixture: ComponentFixture<BookingIssueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookingIssueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingIssueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
