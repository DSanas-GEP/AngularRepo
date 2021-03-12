import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
// import { Router } from '@angular/router';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  quantity:number=0;

  constructor( ) { }
  @Input() product;
  @Output() setQuantity = new EventEmitter();
@Output() details = new EventEmitter();


  ngOnInit(): void {}

  updateQuantity(action, id) {
  this.setQuantity.emit({action: action,id:id});
  }

  getDetails(description,title)
  {
        this.details.emit({description:description,title:title});
       console.log(description);
  }
}
