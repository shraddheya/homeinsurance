import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuotesGnotcoveredComponent } from './quotes-gnotcovered.component';

describe('QuotesGnotcoveredComponent', () => {
  let component: QuotesGnotcoveredComponent;
  let fixture: ComponentFixture<QuotesGnotcoveredComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuotesGnotcoveredComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuotesGnotcoveredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
