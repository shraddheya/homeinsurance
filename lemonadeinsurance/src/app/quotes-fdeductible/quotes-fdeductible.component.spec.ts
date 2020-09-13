import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuotesFdeductibleComponent } from './quotes-fdeductible.component';

describe('QuotesFdeductibleComponent', () => {
  let component: QuotesFdeductibleComponent;
  let fixture: ComponentFixture<QuotesFdeductibleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuotesFdeductibleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuotesFdeductibleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
