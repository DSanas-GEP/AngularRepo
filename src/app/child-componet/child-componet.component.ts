import { Component, OnInit ,Input,EventEmitter,Output} from '@angular/core';


@Component({
  selector: 'app-child-componet',
  templateUrl: './child-componet.component.html',
  styleUrls: ['./child-componet.component.css']
})
export class ChildComponetComponent implements OnInit {
 childnum=100;
name="";

  @Input() Parentnum=100;
  @Input() parentInput="parentInput";

@Output() Eventchild = new EventEmitter();
@Output() inputChild = new EventEmitter();
 

  constructor() { }


  ngOnInit(): void {
  }

  toParent()
  {
    this.Eventchild.emit(++this.childnum);
  }

  call()
  {
    this.inputChild.emit(this.name);
  }
 
}
