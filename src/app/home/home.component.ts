import {Component, OnInit} from '@angular/core';


@Component (
    {
        selector:'app-home',
        templateUrl:'./home.component.html',
        styleUrls:['./home.component.css']
    }
)

export class HomeComponent implements OnInit{
    constructor() { }
    // images : any = images;
username : string="";
email : string="";
age:number=45;
total:any=50;
str:string;


 


ngOnInit()
{
this.username="John";
this.email="John@cbn.com"

}

increaseAge()
{ 
    //Trenary operators
    this.age<50 ? this.age=this.age+1: alert("Age should not be greater than 50");
    
}

decreaseAge()
{
    if(this.age>20){
        this.age=this.age-1;
    }
   
    else{
        alert("Age should not be less than 20");
    }
}

}