import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimumTrasherComponent } from './primum-trasher.component';

describe('PrimumTrasherComponent', () => {
  let component: PrimumTrasherComponent;
  let fixture: ComponentFixture<PrimumTrasherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimumTrasherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimumTrasherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
