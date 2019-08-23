import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserNamePasswordUpdateComponent } from './user-name-password-update.component';

describe('UserNamePasswordUpdateComponent', () => {
  let component: UserNamePasswordUpdateComponent;
  let fixture: ComponentFixture<UserNamePasswordUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserNamePasswordUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserNamePasswordUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
