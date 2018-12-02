import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-myson',
  templateUrl: './myson.component.html',
  styleUrls: ['./myson.component.css']
})
export class MysonComponent implements OnInit {
  @Input()
  sendStock: string

  @Input()
  sendAmount: number

  constructor() {
    setInterval(() => {
      this.sendStock = 'yinhang'
    }, 2000);
  }

  ngOnInit() {

  }

}
