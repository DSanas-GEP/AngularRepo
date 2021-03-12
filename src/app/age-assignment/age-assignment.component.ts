import { asLiteral } from '@angular/compiler/src/render3/view/util';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-age-assignment',
  templateUrl: './age-assignment.component.html',
  styleUrls: ['./age-assignment.component.css']
})
export class AgeAssignmentComponent implements OnInit {
num:number=0;
  constructor() { }

  ngOnInit(): void {
  }


  updateAge(e)
  {
      if(e.target.value>50)
      {
        alert("Enter the age between 20 to 50");
      }
      else if(e.target.value<20)
      {
        alert("Enter the age between 20 to 50");
      }
   
  }
}
