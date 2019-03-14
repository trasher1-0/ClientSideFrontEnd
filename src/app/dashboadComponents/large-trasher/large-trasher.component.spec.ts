import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LargeTrasherComponent } from './large-trasher.component';

describe('LargeTrasherComponent', () => {
  let component: LargeTrasherComponent;
  let fixture: ComponentFixture<LargeTrasherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LargeTrasherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LargeTrasherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
