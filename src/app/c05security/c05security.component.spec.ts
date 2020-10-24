import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { C05securityComponent } from './c05security.component';

describe('C05securityComponent', () => {
  let component: C05securityComponent;
  let fixture: ComponentFixture<C05securityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ C05securityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(C05securityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
