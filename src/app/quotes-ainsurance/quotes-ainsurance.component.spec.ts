import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuotesAinsuranceComponent } from './quotes-ainsurance.component';

describe('QuotesAinsuranceComponent', () => {
  let component: QuotesAinsuranceComponent;
  let fixture: ComponentFixture<QuotesAinsuranceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuotesAinsuranceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuotesAinsuranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
