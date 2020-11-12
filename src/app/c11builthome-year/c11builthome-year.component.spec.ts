import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { C11builthomeYearComponent } from './c11builthome-year.component';

describe('C11builthomeYearComponent', () => {
  let component: C11builthomeYearComponent;
  let fixture: ComponentFixture<C11builthomeYearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ C11builthomeYearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(C11builthomeYearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
