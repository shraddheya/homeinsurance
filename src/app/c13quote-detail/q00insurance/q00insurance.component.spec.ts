import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Q00insuranceComponent } from './q00insurance.component';

describe('Q00insuranceComponent', () => {
  let component: Q00insuranceComponent;
  let fixture: ComponentFixture<Q00insuranceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Q00insuranceComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Q00insuranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
