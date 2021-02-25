import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-validator',
  templateUrl: './input-validator.component.html',
  styleUrls: ['./input-validator.component.css']
})
export class InputValidatorComponent implements OnInit {
name:string;
msg:string;
msgCol:string;

  constructor() { }

  ngOnInit(): void {
    this.msg="Enter the name";
    this.msgCol="black";
   
  }

  Validation(e)
  {
this.msg =e.target.value.length<3?'Minimum 3 characters are allowded':this.updateName(e.target.value);
this.msgCol = e.target.value.length<3?'red':'green';
  }

  blurMethod(e)
  {
    if (e.target.value.length < 3) 
    {
      this.msg = 'Name should be minimum 3 characters';
      }
    this.msg="Name Saved";

    }
  
updateName(n){
  this.name=n;
return 'updating name...'
}
}

