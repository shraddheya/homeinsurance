import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { C09getQuoteComponent } from './c09get-quote.component';

describe('C09getQuoteComponent', () => {
  let component: C09getQuoteComponent;
  let fixture: ComponentFixture<C09getQuoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ C09getQuoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(C09getQuoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
