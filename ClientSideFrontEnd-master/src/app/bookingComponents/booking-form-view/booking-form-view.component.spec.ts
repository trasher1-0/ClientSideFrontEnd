import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingFormViewComponent } from './booking-form-view.component';

describe('BookingFormViewComponent', () => {
  let component: BookingFormViewComponent;
  let fixture: ComponentFixture<BookingFormViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookingFormViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingFormViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
