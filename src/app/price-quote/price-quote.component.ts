import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-price-quote',
  templateUrl: './price-quote.component.html',
  styleUrls: ['./price-quote.component.css']
})
export class PriceQuoteComponent implements OnInit {
  stockCode: string = "IBM";
  price: number

  @Output()
  lastPrice: EventEmitter<PriceQuote> = new EventEmitter();

  @Output()
  buy: EventEmitter<PriceQuote> = new EventEmitter();
  constructor() {
    setInterval(() => {
      let priceQuote: PriceQuote = new PriceQuote(this.stockCode, 1000 * Math.random());
      this.price = priceQuote.lastPrice;
      // console.log(this.lastPrice)
      this.lastPrice.emit(priceQuote);
    }, 1000)
   }
  buyStock(data) {
    this.buy.emit(new PriceQuote(this.stockCode, this.price));
  }
  ngOnInit() {
  }

}
export class PriceQuote {
  constructor(
    public stockCode: string,
    public lastPrice: number
  ) {

   }
}
