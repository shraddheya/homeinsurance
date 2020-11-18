import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { H03RattinggreelComponent } from './h03-rattinggreel.component';

describe('H03RattinggreelComponent', () => {
  let component: H03RattinggreelComponent;
  let fixture: ComponentFixture<H03RattinggreelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ H03RattinggreelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(H03RattinggreelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
