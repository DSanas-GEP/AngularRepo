import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-q2-a1',
  templateUrl: './q2-a1.component.html',
  styleUrls: ['./q2-a1.component.css']
})
export class Q2A1Component implements OnInit {
  num:number;
  evenOddMsg:string="To check even or Odd";
  Prime:string='Check prime';
  isprime:boolean=true;

  constructor() { }

  ngOnInit(): void {
   
  }

  checkEven() {
  this.evenOddMsg=this.num % 2 == 0 ? 'Even number' : 'Odd number';
    return this.evenOddMsg;
  }

//   primeNumber() {
//     for (let i = 2; i < this.num; i++) {
//       if (this.num % i == 0) {
//        this.isprime = false;
//        this.Prime  =  this.isprime?'Prime Number':'Not a prime number';
      
//     }
  
  
//   }
//   return   this.Prime;
// }

    countDigits()
    {

     return  this.num.toString().length;
        
    }
    }

