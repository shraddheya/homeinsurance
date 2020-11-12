import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { C13quoteDetailComponent } from './c13quote-detail.component';

describe('C13quoteDetailComponent', () => {
  let component: C13quoteDetailComponent;
  let fixture: ComponentFixture<C13quoteDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ C13quoteDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(C13quoteDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
