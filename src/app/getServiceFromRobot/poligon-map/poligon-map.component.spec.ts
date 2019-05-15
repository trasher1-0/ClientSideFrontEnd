import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoligonMapComponent } from './poligon-map.component';

describe('PoligonMapComponent', () => {
  let component: PoligonMapComponent;
  let fixture: ComponentFixture<PoligonMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoligonMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoligonMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
