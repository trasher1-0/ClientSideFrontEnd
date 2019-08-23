import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PickupPointForBookingComponent } from './pickup-point-for-booking.component';

describe('PickupPointForBookingComponent', () => {
  let component: PickupPointForBookingComponent;
  let fixture: ComponentFixture<PickupPointForBookingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PickupPointForBookingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PickupPointForBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
