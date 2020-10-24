import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { C01nameComponent } from './c01name.component';

describe('C01nameComponent', () => {
  let component: C01nameComponent;
  let fixture: ComponentFixture<C01nameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ C01nameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(C01nameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
