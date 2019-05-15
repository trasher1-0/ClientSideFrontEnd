import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialServiceBookingFormComponent } from './social-service-booking-form.component';

describe('SocialServiceBookingFormComponent', () => {
  let component: SocialServiceBookingFormComponent;
  let fixture: ComponentFixture<SocialServiceBookingFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocialServiceBookingFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialServiceBookingFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
