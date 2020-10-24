import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { C10quoteDetailComponent } from './c10quote-detail.component';

describe('C10quoteDetailComponent', () => {
  let component: C10quoteDetailComponent;
  let fixture: ComponentFixture<C10quoteDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ C10quoteDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(C10quoteDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
