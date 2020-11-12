import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { C12insuranceClaimCountComponent } from './c12insurance-claim-count.component';

describe('C12insuranceClaimCountComponent', () => {
  let component: C12insuranceClaimCountComponent;
  let fixture: ComponentFixture<C12insuranceClaimCountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ C12insuranceClaimCountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(C12insuranceClaimCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
