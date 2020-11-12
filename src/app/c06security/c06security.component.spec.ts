import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { C06securityComponent } from './c06security.component';

describe('C06securityComponent', () => {
  let component: C06securityComponent;
  let fixture: ComponentFixture<C06securityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ C06securityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(C06securityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
