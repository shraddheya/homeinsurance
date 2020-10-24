import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { C03typeHomeComponent } from './c03type-home.component';

describe('C03typeHomeComponent', () => {
  let component: C03typeHomeComponent;
  let fixture: ComponentFixture<C03typeHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ C03typeHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(C03typeHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
