import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { C04sizeHomeComponent } from './c04size-home.component';

describe('C04sizeHomeComponent', () => {
  let component: C04sizeHomeComponent;
  let fixture: ComponentFixture<C04sizeHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ C04sizeHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(C04sizeHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
