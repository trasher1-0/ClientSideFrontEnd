import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyrobotformComponent } from './buyrobotform.component';

describe('BuyrobotformComponent', () => {
  let component: BuyrobotformComponent;
  let fixture: ComponentFixture<BuyrobotformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuyrobotformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyrobotformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
