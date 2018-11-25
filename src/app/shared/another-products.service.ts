import { Injectable } from '@angular/core';
import { ProductsService, Product } from './products.service';



@Injectable()
export class AnotherProductsService implements ProductsService{
  // getProduct() : Product {
  //   return new Product(1, 'xiaomi', 5678, 'good!')
  // }
  getProduct() : Product {
    return new Product(1, 'iphone5',500, '最新款！');
  }
  constructor() { }
}
