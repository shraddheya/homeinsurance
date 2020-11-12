import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Q07linkpolicyComponent } from './q07linkpolicy.component';

describe('Q07linkpolicyComponent', () => {
  let component: Q07linkpolicyComponent;
  let fixture: ComponentFixture<Q07linkpolicyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Q07linkpolicyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Q07linkpolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
