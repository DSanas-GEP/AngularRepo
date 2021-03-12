import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import data from '../data/data'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {


  constructor(private _route : Router) {}

  products=data;
  total: number = 0;
  ngOnInit(): void {
    this.getTotal();
  }
  getTotal() {
    this.products.forEach((product) => {
      this.total = this.total + product.quantity * product.price;
    });

    this.products.splic
  }
  setProductQuantity(e) {
    console.log(e);
    this.products
      .filter((product) => product.id == e.id)
      .forEach((product) => {
        product.quantity =
          e.action == 'add'
            ? ++product.quantity
            : product.quantity > 0
            ? --product.quantity
            : 0;
        this.total = 0;
        this.getTotal();
      });
    // console.log(product);
    // product[0].quantity =
    //   e.action == 'add' ? product[0].quantity++ : product[0].quantity--;
    // this.products.push(product[0]);
  }

  gDetails(e)
  {
    console.log(e.description);
   this._route.navigate(['/products',e.description,e.title]);

  
  }
}