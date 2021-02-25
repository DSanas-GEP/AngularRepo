import { Component, OnInit,Output } from '@angular/core';

@Component({
  selector: 'app-parent-component',
  templateUrl: './parent-component.component.html',
  styleUrls: ['./parent-component.component.css']
})
export class ParentComponentComponent implements OnInit {

  constructor() { }
 num:number=100;
 name1="";
childname="";
msg=""

  ngOnInit(): void {
  }
  incrementChild()
  {
    this.num= ++this.num;
  }

  callParent(e)
  {
this.childname = e.target.value;
  }

  callChild(e)
  {
    this.name1=e;
  }

//   message1(e)
//   {
// this.message=e;
//   }
  
//   updateParent()
//   {
//     this.num = ++this.num;
//   }
}
