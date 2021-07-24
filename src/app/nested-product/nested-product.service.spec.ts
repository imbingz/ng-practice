import { TestBed } from '@angular/core/testing';

import { NestedProductService } from './nested-product.service';

describe('NestedProductService', () => {
  let service: NestedProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NestedProductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
