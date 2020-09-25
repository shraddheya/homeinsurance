import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetspurchaseComponent } from './assetspurchase.component';

describe('AssetspurchaseComponent', () => {
  let component: AssetspurchaseComponent;
  let fixture: ComponentFixture<AssetspurchaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssetspurchaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssetspurchaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
