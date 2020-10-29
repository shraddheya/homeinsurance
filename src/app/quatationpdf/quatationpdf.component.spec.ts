import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuatationpdfComponent } from './quatationpdf.component';

describe('QuatationpdfComponent', () => {
  let component: QuatationpdfComponent;
  let fixture: ComponentFixture<QuatationpdfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuatationpdfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuatationpdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
