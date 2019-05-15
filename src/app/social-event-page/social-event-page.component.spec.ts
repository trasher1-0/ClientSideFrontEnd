import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialEventPageComponent } from './social-event-page.component';

describe('SocialEventPageComponent', () => {
  let component: SocialEventPageComponent;
  let fixture: ComponentFixture<SocialEventPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocialEventPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialEventPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
