import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyfeedbackBoxComponent } from './myfeedback-box.component';

describe('MyfeedbackBoxComponent', () => {
  let component: MyfeedbackBoxComponent;
  let fixture: ComponentFixture<MyfeedbackBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyfeedbackBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyfeedbackBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
