import { Component, OnInit, Input } from '@angular/core';
import { PriceQuote } from '../price-quote/price-quote.component';

@Component({
  selector: 'app-myson',
  templateUrl: './myson.component.html',
  styleUrls: ['./myson.component.css']
})
export class MysonComponent implements OnInit {
  // @Input()
  // sendStock: string

  // @Input()
  // sendAmount: number
  sendAmount: number;
  sendStock: string;
  @Input()
    priceQuote: PriceQuote
  constructor() {
    // setInterval(() => {
    //   this.sendStock = this.priceQuote.stockCode;
    //   this.sendAmount = this.priceQuote.lastPrice;
    // }, 2000);
  }

  ngOnInit() {

  }

}
