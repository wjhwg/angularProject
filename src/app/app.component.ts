import { Component } from '@angular/core';
import { Router} from '@angular/router'
import { PriceQuote } from './price-quote/price-quote.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  stock = "";
  amount: number;
  priceQuote: PriceQuote = new PriceQuote('', 0);

  priceQuoteHander(data) {
    this.priceQuote = data;
    // console.log(data)
  }
}
