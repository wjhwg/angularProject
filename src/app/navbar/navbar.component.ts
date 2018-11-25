import { Component, OnInit } from '@angular/core';
import { Product, ProductsService } from '../shared/products.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private productService: ProductsService) {

   }
  product: Product;
  ngOnInit() {
    this.product = this.productService.getProduct();
  }

}
