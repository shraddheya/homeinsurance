import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { H00TopbarComponent } from './h00-topbar.component';

describe('H00TopbarComponent', () => {
  let component: H00TopbarComponent;
  let fixture: ComponentFixture<H00TopbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ H00TopbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(H00TopbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
