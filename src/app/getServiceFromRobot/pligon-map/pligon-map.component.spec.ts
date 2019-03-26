import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PligonMapComponent } from './pligon-map.component';

describe('PligonMapComponent', () => {
  let component: PligonMapComponent;
  let fixture: ComponentFixture<PligonMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PligonMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PligonMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
