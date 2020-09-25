import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuotesdetailComponent } from './quotesdetail.component';

describe('QuotesdetailComponent', () => {
  let component: QuotesdetailComponent;
  let fixture: ComponentFixture<QuotesdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuotesdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuotesdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
