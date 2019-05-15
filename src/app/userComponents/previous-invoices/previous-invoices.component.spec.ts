import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviousInvoicesComponent } from './previous-invoices.component';

describe('PreviousInvoicesComponent', () => {
  let component: PreviousInvoicesComponent;
  let fixture: ComponentFixture<PreviousInvoicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreviousInvoicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviousInvoicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
