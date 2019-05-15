import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboadpanelComponent } from './dashboadpanel.component';

describe('DashboadpanelComponent', () => {
  let component: DashboadpanelComponent;
  let fixture: ComponentFixture<DashboadpanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboadpanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboadpanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
