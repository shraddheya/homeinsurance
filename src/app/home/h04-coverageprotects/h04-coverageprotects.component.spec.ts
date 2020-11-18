import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { H04CoverageprotectsComponent } from './h04-coverageprotects.component';

describe('H04CoverageprotectsComponent', () => {
  let component: H04CoverageprotectsComponent;
  let fixture: ComponentFixture<H04CoverageprotectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ H04CoverageprotectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(H04CoverageprotectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
