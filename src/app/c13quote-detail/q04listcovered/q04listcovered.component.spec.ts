import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Q04listcoveredComponent } from './q04listcovered.component';

describe('Q04listcoveredComponent', () => {
  let component: Q04listcoveredComponent;
  let fixture: ComponentFixture<Q04listcoveredComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Q04listcoveredComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Q04listcoveredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
