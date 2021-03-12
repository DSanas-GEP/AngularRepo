import { Component, OnInit,Output } from '@angular/core';

@Component({
  selector: 'app-parent-component',
  templateUrl: './parent-component.component.html',
  styleUrls: ['./parent-component.component.css']
})
export class ParentComponentComponent implements OnInit {

  constructor() { }
 num:number=2000;
 name1="";
childname="";
msg="";
test="";

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
    this.test=e;
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
