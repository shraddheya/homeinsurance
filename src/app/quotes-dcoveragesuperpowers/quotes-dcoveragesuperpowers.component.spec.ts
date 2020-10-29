import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuotesDcoveragesuperpowersComponent } from './quotes-dcoveragesuperpowers.component';

describe('QuotesDcoveragesuperpowersComponent', () => {
  let component: QuotesDcoveragesuperpowersComponent;
  let fixture: ComponentFixture<QuotesDcoveragesuperpowersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuotesDcoveragesuperpowersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuotesDcoveragesuperpowersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
