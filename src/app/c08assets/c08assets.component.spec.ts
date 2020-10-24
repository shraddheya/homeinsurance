import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { C08assetsComponent } from './c08assets.component';

describe('C08assetsComponent', () => {
  let component: C08assetsComponent;
  let fixture: ComponentFixture<C08assetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ C08assetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(C08assetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
