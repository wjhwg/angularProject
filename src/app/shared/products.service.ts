import { Injectable } from '@angular/core';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(public logger: LoggerService) {
  }
  getProduct(): Product {
      this.logger.log('hello world!')
      return new Product(0, 'iphone',5000, '最新款！');
    }
}
export class Product {
  constructor(
    public id:number,
    public title: string,
    public price: number,
    public desc: string,
  ) {

  }
}
