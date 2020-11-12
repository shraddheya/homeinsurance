import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { C05sizeHomeComponent } from './c05size-home.component';

describe('C05sizeHomeComponent', () => {
  let component: C05sizeHomeComponent;
  let fixture: ComponentFixture<C05sizeHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ C05sizeHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(C05sizeHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
