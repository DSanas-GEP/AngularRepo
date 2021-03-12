import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {
uname:string ="";
lname:string="";
email:any="";
  constructor() { }

  ngOnInit(): void {
  }

  login(form:NgForm)
  {
if(!form.valid) return;

this.uname = form.value.uname;
this.lname = form.value.lname;
this.email = form.value.email;
  }
}
