import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentIssueComponent } from './payment-issue.component';

describe('PaymentIssueComponent', () => {
  let component: PaymentIssueComponent;
  let fixture: ComponentFixture<PaymentIssueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentIssueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentIssueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
