import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-gc',
  templateUrl: './gc.component.html',
  styleUrls: ['./gc.component.css']
})
export class GCComponent implements OnInit {
list:any;
  constructor( private _route: ActivatedRoute) { }

  ngOnInit(): void {

   this.list = this._route.snapshot.params;
  }

}
