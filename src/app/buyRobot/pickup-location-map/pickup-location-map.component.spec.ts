import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PickupLocationMapComponent } from './pickup-location-map.component';

describe('PickupLocationMapComponent', () => {
  let component: PickupLocationMapComponent;
  let fixture: ComponentFixture<PickupLocationMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PickupLocationMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PickupLocationMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
