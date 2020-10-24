import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { C07insuranceClaimCountComponent } from './c07insurance-claim-count.component';

describe('C07insuranceClaimCountComponent', () => {
  let component: C07insuranceClaimCountComponent;
  let fixture: ComponentFixture<C07insuranceClaimCountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ C07insuranceClaimCountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(C07insuranceClaimCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
