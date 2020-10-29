import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscribepricesComponent } from './subscribeprices.component';

describe('SubscribepricesComponent', () => {
  let component: SubscribepricesComponent;
  let fixture: ComponentFixture<SubscribepricesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubscribepricesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubscribepricesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
