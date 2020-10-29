import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomesizeComponent } from './homesize.component';

describe('HomesizeComponent', () => {
  let component: HomesizeComponent;
  let fixture: ComponentFixture<HomesizeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomesizeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomesizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
