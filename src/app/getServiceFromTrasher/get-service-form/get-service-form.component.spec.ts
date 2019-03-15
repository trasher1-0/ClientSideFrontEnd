import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetServiceFormComponent } from './get-service-form.component';

describe('GetServiceFormComponent', () => {
  let component: GetServiceFormComponent;
  let fixture: ComponentFixture<GetServiceFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetServiceFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetServiceFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
