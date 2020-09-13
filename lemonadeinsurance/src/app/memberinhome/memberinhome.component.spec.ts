import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberinhomeComponent } from './memberinhome.component';

describe('MemberinhomeComponent', () => {
  let component: MemberinhomeComponent;
  let fixture: ComponentFixture<MemberinhomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemberinhomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberinhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
