import { createInjectable } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-math-table',
  templateUrl: './math-table.component.html',
  styleUrls: ['./math-table.component.css']
})
export class MathTableComponent implements OnInit {
num:number;
range:number;
table:any;
listview = true;

  constructor() { }

  ngOnInit(): void {
 this.num=1;
 this.range=5;
 this.table=[];
  }


  createTable()
  {

  }


}
