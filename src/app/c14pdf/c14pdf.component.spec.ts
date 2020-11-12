import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { C14pdfComponent } from './c14pdf.component';

describe('C14pdfComponent', () => {
  let component: C14pdfComponent;
  let fixture: ComponentFixture<C14pdfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ C14pdfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(C14pdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
