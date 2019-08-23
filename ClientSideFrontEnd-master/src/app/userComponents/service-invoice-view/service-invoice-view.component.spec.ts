import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceInvoiceViewComponent } from './service-invoice-view.component';

describe('ServiceInvoiceViewComponent', () => {
  let component: ServiceInvoiceViewComponent;
  let fixture: ComponentFixture<ServiceInvoiceViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceInvoiceViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceInvoiceViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
