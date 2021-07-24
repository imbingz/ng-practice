import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NestedProductComponent } from './nested-product.component';

describe('NestedProductComponent', () => {
  let component: NestedProductComponent;
  let fixture: ComponentFixture<NestedProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NestedProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NestedProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
