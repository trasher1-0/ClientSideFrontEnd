import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallTraserComponent } from './small-traser.component';

describe('SmallTraserComponent', () => {
  let component: SmallTraserComponent;
  let fixture: ComponentFixture<SmallTraserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmallTraserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmallTraserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
