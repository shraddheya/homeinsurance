import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { H08HowworkComponent } from './h08-howwork.component';

describe('H08HowworkComponent', () => {
  let component: H08HowworkComponent;
  let fixture: ComponentFixture<H08HowworkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ H08HowworkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(H08HowworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
