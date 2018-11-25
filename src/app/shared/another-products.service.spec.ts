import { TestBed } from '@angular/core/testing';

import { AnotherProductsService } from './another-products.service';

describe('AnotherProductsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AnotherProductsService = TestBed.get(AnotherProductsService);
    expect(service).toBeTruthy();
  });
});
