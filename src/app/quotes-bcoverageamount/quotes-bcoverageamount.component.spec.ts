import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuotesBcoverageamountComponent } from './quotes-bcoverageamount.component';

describe('QuotesBcoverageamountComponent', () => {
  let component: QuotesBcoverageamountComponent;
  let fixture: ComponentFixture<QuotesBcoverageamountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuotesBcoverageamountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuotesBcoverageamountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
