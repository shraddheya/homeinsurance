import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { C07membersComponent } from './c07members.component';

describe('C07membersComponent', () => {
  let component: C07membersComponent;
  let fixture: ComponentFixture<C07membersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ C07membersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(C07membersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
