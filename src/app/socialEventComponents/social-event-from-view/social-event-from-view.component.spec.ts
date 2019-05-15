import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialEventFromViewComponent } from './social-event-from-view.component';

describe('SocialEventFromViewComponent', () => {
  let component: SocialEventFromViewComponent;
  let fixture: ComponentFixture<SocialEventFromViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocialEventFromViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialEventFromViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
