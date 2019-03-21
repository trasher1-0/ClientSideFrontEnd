import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LargeTrasherVideoComponent } from './large-trasher-video.component';

describe('LargeTrasherVideoComponent', () => {
  let component: LargeTrasherVideoComponent;
  let fixture: ComponentFixture<LargeTrasherVideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LargeTrasherVideoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LargeTrasherVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
