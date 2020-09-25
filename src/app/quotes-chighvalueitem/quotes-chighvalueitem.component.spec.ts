import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuotesChighvalueitemComponent } from './quotes-chighvalueitem.component';

describe('QuotesChighvalueitemComponent', () => {
  let component: QuotesChighvalueitemComponent;
  let fixture: ComponentFixture<QuotesChighvalueitemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuotesChighvalueitemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuotesChighvalueitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
