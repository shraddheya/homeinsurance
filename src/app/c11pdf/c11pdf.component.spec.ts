import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { C11pdfComponent } from './c11pdf.component';

describe('C11pdfComponent', () => {
  let component: C11pdfComponent;
  let fixture: ComponentFixture<C11pdfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ C11pdfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(C11pdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
