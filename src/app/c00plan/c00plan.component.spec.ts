import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { C00planComponent } from './c00plan.component';

describe('C00planComponent', () => {
  let component: C00planComponent;
  let fixture: ComponentFixture<C00planComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ C00planComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(C00planComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
