import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuotesIactiveinsuranceComponent } from './quotes-iactiveinsurance.component';

describe('QuotesIactiveinsuranceComponent', () => {
  let component: QuotesIactiveinsuranceComponent;
  let fixture: ComponentFixture<QuotesIactiveinsuranceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuotesIactiveinsuranceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuotesIactiveinsuranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
