import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Q03superpowersComponent } from './q03superpowers.component';

describe('Q03superpowersComponent', () => {
  let component: Q03superpowersComponent;
  let fixture: ComponentFixture<Q03superpowersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Q03superpowersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Q03superpowersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
