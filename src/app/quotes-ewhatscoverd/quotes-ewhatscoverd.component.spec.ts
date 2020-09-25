import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuotesEwhatscoverdComponent } from './quotes-ewhatscoverd.component';

describe('QuotesEwhatscoverdComponent', () => {
  let component: QuotesEwhatscoverdComponent;
  let fixture: ComponentFixture<QuotesEwhatscoverdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuotesEwhatscoverdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuotesEwhatscoverdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
