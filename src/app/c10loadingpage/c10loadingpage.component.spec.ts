import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { C10loadingpageComponent } from './c10loadingpage.component';

describe('C10loadingpageComponent', () => {
  let component: C10loadingpageComponent;
  let fixture: ComponentFixture<C10loadingpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ C10loadingpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(C10loadingpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
