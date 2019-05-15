import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetServicePageComponent } from './get-service-page.component';

describe('GetServicePageComponent', () => {
  let component: GetServicePageComponent;
  let fixture: ComponentFixture<GetServicePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetServicePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetServicePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
