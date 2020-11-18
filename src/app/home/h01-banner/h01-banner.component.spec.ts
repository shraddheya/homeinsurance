import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { H01BannerComponent } from './h01-banner.component';

describe('H01BannerComponent', () => {
  let component: H01BannerComponent;
  let fixture: ComponentFixture<H01BannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ H01BannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(H01BannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
