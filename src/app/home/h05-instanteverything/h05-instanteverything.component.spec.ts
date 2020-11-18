import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { H05InstanteverythingComponent } from './h05-instanteverything.component';

describe('H05InstanteverythingComponent', () => {
  let component: H05InstanteverythingComponent;
  let fixture: ComponentFixture<H05InstanteverythingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ H05InstanteverythingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(H05InstanteverythingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
