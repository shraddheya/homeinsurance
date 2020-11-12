import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { C04primaryresidenceComponent } from './c04primaryresidence.component';

describe('C04primaryresidenceComponent', () => {
  let component: C04primaryresidenceComponent;
  let fixture: ComponentFixture<C04primaryresidenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ C04primaryresidenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(C04primaryresidenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
