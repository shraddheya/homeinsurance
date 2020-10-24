import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { C06membersComponent } from './c06members.component';

describe('C06membersComponent', () => {
  let component: C06membersComponent;
  let fixture: ComponentFixture<C06membersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ C06membersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(C06membersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
