import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Q02highvalueitemsComponent } from './q02highvalueitems.component';

describe('Q02highvalueitemsComponent', () => {
  let component: Q02highvalueitemsComponent;
  let fixture: ComponentFixture<Q02highvalueitemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Q02highvalueitemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Q02highvalueitemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
