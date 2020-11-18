import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { H06PlansubscribeComponent } from './h06-plansubscribe.component';

describe('H06PlansubscribeComponent', () => {
  let component: H06PlansubscribeComponent;
  let fixture: ComponentFixture<H06PlansubscribeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ H06PlansubscribeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(H06PlansubscribeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
