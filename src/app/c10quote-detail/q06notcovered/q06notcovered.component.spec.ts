import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Q06notcoveredComponent } from './q06notcovered.component';

describe('Q06notcoveredComponent', () => {
  let component: Q06notcoveredComponent;
  let fixture: ComponentFixture<Q06notcoveredComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Q06notcoveredComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Q06notcoveredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
