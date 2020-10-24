import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtBackComponent } from './butt-back.component';

describe('ButtBackComponent', () => {
  let component: ButtBackComponent;
  let fixture: ComponentFixture<ButtBackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtBackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
