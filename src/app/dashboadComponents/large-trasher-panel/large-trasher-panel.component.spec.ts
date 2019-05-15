import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LargeTrasherPanelComponent } from './large-trasher-panel.component';

describe('LargeTrasherPanelComponent', () => {
  let component: LargeTrasherPanelComponent;
  let fixture: ComponentFixture<LargeTrasherPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LargeTrasherPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LargeTrasherPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
