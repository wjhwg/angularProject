import { Component, OnInit } from '@angular/core';
import { ProductsService, Product } from '../shared/products.service';
import { AnotherProductsService } from '../shared/another-products.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  // providers: [{
  //   provide: ProductsService, useClass: AnotherProductsService
  // }]
})
export class FooterComponent implements OnInit {

  constructor(private productService : ProductsService) { }
  product: Product;
  ngOnInit() {
    this.product = this.productService.getProduct();
  }
}
