import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OneHourslotComponent } from './one-hourslot.component';

describe('OneHourslotComponent', () => {
  let component: OneHourslotComponent;
  let fixture: ComponentFixture<OneHourslotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OneHourslotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OneHourslotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
