import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherActiviesComponent } from './other-activies.component';

describe('OtherActiviesComponent', () => {
  let component: OtherActiviesComponent;
  let fixture: ComponentFixture<OtherActiviesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtherActiviesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherActiviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
