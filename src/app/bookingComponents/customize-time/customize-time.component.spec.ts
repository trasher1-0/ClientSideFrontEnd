import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomizeTimeComponent } from './customize-time.component';

describe('CustomizeTimeComponent', () => {
  let component: CustomizeTimeComponent;
  let fixture: ComponentFixture<CustomizeTimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomizeTimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomizeTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
