import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoHourslotComponent } from './two-hourslot.component';

describe('TwoHourslotComponent', () => {
  let component: TwoHourslotComponent;
  let fixture: ComponentFixture<TwoHourslotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwoHourslotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwoHourslotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
