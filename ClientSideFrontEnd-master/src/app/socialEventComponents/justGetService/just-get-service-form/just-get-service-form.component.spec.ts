import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JustGetServiceFormComponent } from './just-get-service-form.component';

describe('JustGetServiceFormComponent', () => {
  let component: JustGetServiceFormComponent;
  let fixture: ComponentFixture<JustGetServiceFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JustGetServiceFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JustGetServiceFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
