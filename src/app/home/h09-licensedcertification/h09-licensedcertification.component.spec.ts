import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { H09LicensedcertificationComponent } from './h09-licensedcertification.component';

describe('H09LicensedcertificationComponent', () => {
  let component: H09LicensedcertificationComponent;
  let fixture: ComponentFixture<H09LicensedcertificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ H09LicensedcertificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(H09LicensedcertificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
