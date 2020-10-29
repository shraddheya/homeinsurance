import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Q08activeinsuranceComponent } from './q08activeinsurance.component';

describe('Q08activeinsuranceComponent', () => {
  let component: Q08activeinsuranceComponent;
  let fixture: ComponentFixture<Q08activeinsuranceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Q08activeinsuranceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Q08activeinsuranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
