import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { H07AlreadyinsuredComponent } from './h07-alreadyinsured.component';

describe('H07AlreadyinsuredComponent', () => {
  let component: H07AlreadyinsuredComponent;
  let fixture: ComponentFixture<H07AlreadyinsuredComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ H07AlreadyinsuredComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(H07AlreadyinsuredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
