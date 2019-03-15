import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyRobotPageComponent } from './buy-robot-page.component';

describe('BuyRobotPageComponent', () => {
  let component: BuyRobotPageComponent;
  let fixture: ComponentFixture<BuyRobotPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuyRobotPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyRobotPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
