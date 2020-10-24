import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { C02adderssComponent } from './c02adderss.component';

describe('C02adderssComponent', () => {
  let component: C02adderssComponent;
  let fixture: ComponentFixture<C02adderssComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ C02adderssComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(C02adderssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
