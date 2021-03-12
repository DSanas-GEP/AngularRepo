import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
  
  empForm:FormGroup;
  fullname:string='';
  pwd:any='';
 
  // clickSubmit:boolean=false;
  constructor(private route : Router, private _auth : AuthServiceService,private _router: ActivatedRoute) {
    
  }
  userlogged=this._auth.logged;
  path = this._router.snapshot.params.path?this._router.snapshot.params.path:'home';
   credentials = {
  uname:'dipali',
  pwd:'root',
 }
//  {
//    uname:'Sanas',
//    pwd:'root',
//   }];
 message:string='Enter Credentials';

  ngOnInit(): void {
this.empForm = new FormGroup(
  {
    name : new FormControl(),
    password : new FormControl(),
   
  }
);


  }

  // onSubmit(): void
  // {
  //   // this.fullname=this.empForm.value.name;
  //   // this.emailid= this.empForm.value.email;

  // }

  displayInfo()
  {
    // // this.clickSubmit=true;
    console.log(this.fullname.length);
    console.log(this.pwd.length);
    console.log(this.empForm.value.name);


if(this.fullname.length==0)
{

   this.message="enter uname";

}
else if(this.pwd.length==0)
{
  this.message="enter password";
}
else if(this.fullname!=this.credentials.uname)
{
  this.message="enter valid uname"
}
else if  (this.pwd!=this.credentials.pwd)
{
  this.message='Enter valid password';
}
else{
  this.message='Login Successfull';
}

if(this.message=='Login Successfull')
{
  this._auth.setLogged(true);
  console.log(this.path);
this.route.navigate(['/',this.path]);

}

  }

  logout() {
  this._auth.setLogged(false);
  this.userlogged=false;
    this.route.navigate(['/forms']);

  }
 


  }



