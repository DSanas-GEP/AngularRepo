import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
data:any;
  constructor(private _route:ActivatedRoute) { }

  ngOnInit(): void {

    this.data=this._route.snapshot.params;
    console.log(this.data);


  }

}
