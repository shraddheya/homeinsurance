import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypehomeComponent } from './typehome.component';

describe('TypehomeComponent', () => {
  let component: TypehomeComponent;
  let fixture: ComponentFixture<TypehomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypehomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypehomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
