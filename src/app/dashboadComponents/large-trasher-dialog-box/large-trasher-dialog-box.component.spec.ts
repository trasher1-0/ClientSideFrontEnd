import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LargeTrasherDialogBoxComponent } from './large-trasher-dialog-box.component';

describe('LargeTrasherDialogBoxComponent', () => {
  let component: LargeTrasherDialogBoxComponent;
  let fixture: ComponentFixture<LargeTrasherDialogBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LargeTrasherDialogBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LargeTrasherDialogBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
