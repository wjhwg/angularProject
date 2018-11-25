import { Injectable } from '@angular/core';
import { ProductsService, Product } from './products.service';
import { LoggerService } from './logger.service';



@Injectable()
export class AnotherProductsService implements ProductsService{
  constructor(public logger: LoggerService) {
  }
  getProduct(): Product {
    this.logger.log('hello');
      return new Product(1, 'iphonex',6000, '最新款！');
    }



}
