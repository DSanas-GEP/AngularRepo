import { Component, OnInit } from '@angular/core';
// import { timeStamp } from 'console';
// import { runInThisContext } from 'vm';

@Component({
  selector: 'app-age-validator',
  templateUrl: './age-validator.component.html',
  styleUrls: ['./age-validator.component.css']
})
export class AgeValidatorComponent implements OnInit {
  age:number;
  num:number;
header : string ;
headcolor:string;
showAgeBox :boolean;
btnText : string;
options = [{name:'age',enable:true},{name:'number',enable:false}]

  ngOnInit(): void {
    this.header='Enter your age';
    this.headcolor='black';
    this.showAgeBox= false;
    this.btnText="Show age text";


  }

  ageUpdate(e)
{ 
   
this.header = e.target.value >18 ? 'Valid age' : 'Invalid age';
this.headcolor = e.target.value>18? 'Green':'Red';
    
}
isString()
{
  return isNaN(this.num);
}

checkEven()
{
  return this.num % 2 == 0 ?'Even':'odd';
}

toggleBoxes()
{
  this.showAgeBox = !this.showAgeBox;
  this.btnText = this.showAgeBox?'Show input for age':'Show input for num';

}



}
