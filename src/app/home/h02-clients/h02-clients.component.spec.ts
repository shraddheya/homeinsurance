import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { H02ClientsComponent } from './h02-clients.component';

describe('H02ClientsComponent', () => {
  let component: H02ClientsComponent;
  let fixture: ComponentFixture<H02ClientsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ H02ClientsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(H02ClientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
