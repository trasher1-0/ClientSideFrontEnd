import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimumTrasherPanelComponent } from './primum-trasher-panel.component';

describe('PrimumTrasherPanelComponent', () => {
  let component: PrimumTrasherPanelComponent;
  let fixture: ComponentFixture<PrimumTrasherPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimumTrasherPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimumTrasherPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
