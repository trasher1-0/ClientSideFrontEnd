import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimumTrasherDialogBoxComponent } from './primum-trasher-dialog-box.component';

describe('PrimumTrasherDialogBoxComponent', () => {
  let component: PrimumTrasherDialogBoxComponent;
  let fixture: ComponentFixture<PrimumTrasherDialogBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimumTrasherDialogBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimumTrasherDialogBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
