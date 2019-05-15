import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimumTrasherVideoComponent } from './primum-trasher-video.component';

describe('PrimumTrasherVideoComponent', () => {
  let component: PrimumTrasherVideoComponent;
  let fixture: ComponentFixture<PrimumTrasherVideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimumTrasherVideoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimumTrasherVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
