import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Q01coverageamountComponent } from './q01coverageamount.component';

describe('Q01coverageamountComponent', () => {
  let component: Q01coverageamountComponent;
  let fixture: ComponentFixture<Q01coverageamountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Q01coverageamountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Q01coverageamountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
