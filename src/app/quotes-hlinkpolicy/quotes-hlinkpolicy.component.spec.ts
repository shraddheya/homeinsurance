import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuotesHlinkpolicyComponent } from './quotes-hlinkpolicy.component';

describe('QuotesHlinkpolicyComponent', () => {
  let component: QuotesHlinkpolicyComponent;
  let fixture: ComponentFixture<QuotesHlinkpolicyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuotesHlinkpolicyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuotesHlinkpolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
