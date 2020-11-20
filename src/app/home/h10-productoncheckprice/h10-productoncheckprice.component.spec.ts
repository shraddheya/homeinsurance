import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { H10ProductoncheckpriceComponent } from './h10-productoncheckprice.component';

describe('H10ProductoncheckpriceComponent', () => {
  let component: H10ProductoncheckpriceComponent;
  let fixture: ComponentFixture<H10ProductoncheckpriceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ H10ProductoncheckpriceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(H10ProductoncheckpriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
