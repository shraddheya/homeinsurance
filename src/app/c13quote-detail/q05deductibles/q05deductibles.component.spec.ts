import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Q05deductiblesComponent } from './q05deductibles.component';

describe('Q05deductiblesComponent', () => {
  let component: Q05deductiblesComponent;
  let fixture: ComponentFixture<Q05deductiblesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Q05deductiblesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Q05deductiblesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
