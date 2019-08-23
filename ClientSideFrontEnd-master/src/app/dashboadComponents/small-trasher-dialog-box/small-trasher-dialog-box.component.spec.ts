import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallTrasherDialogBoxComponent } from './small-trasher-dialog-box.component';

describe('SmallTrasherDialogBoxComponent', () => {
  let component: SmallTrasherDialogBoxComponent;
  let fixture: ComponentFixture<SmallTrasherDialogBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmallTrasherDialogBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmallTrasherDialogBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
