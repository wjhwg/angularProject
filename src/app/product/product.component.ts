import { Component, OnInit,  } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  private activeId: number;
  private name: any;
  constructor(private active: ActivatedRoute) { }

  ngOnInit() {
    //参数快照
   // this.activeId = this.active.snapshot.queryParams['id'];
  //  this.name = this.active.snapshot.params['name'];
    //参数订阅
   // this.active.params.subscribe((params: Params) => {
 //     this.name = params['name']
   // })
  }

}
