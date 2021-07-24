import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NestedProductRowComponent } from './nested-product-row.component';

describe('NestedProductRowComponent', () => {
  let component: NestedProductRowComponent;
  let fixture: ComponentFixture<NestedProductRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NestedProductRowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NestedProductRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
