import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SequrityComponent } from './sequrity.component';

describe('SequrityComponent', () => {
  let component: SequrityComponent;
  let fixture: ComponentFixture<SequrityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SequrityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SequrityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
