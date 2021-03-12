import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms'
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private fb: FormBuilder, private _route:Router) { }
regForm:FormGroup;
submitted:boolean;
  ngOnInit(): void {
    this.resetform();
  }

resetform()
{
  this.regForm= this.fb.group({
    fname:['',[Validators.required,
      Validators.minLength(3)]],
    lname:['',[Validators.required,
      Validators.minLength(3)]],
    email:['',[Validators.required,
      Validators.email]],

   });
}

  get f()
  {
    return this.regForm.controls;
  }

  register()
  {
    this.submitted=true;
    if(this.regForm.invalid) return;
    console.log(this.regForm.value);
  }

  validateInfo()
  {
this._route.navigate(['/formdata',this.regForm.value.fname,this.regForm.value.email])
  }
}
