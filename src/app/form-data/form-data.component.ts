import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-form-data',
  templateUrl: './form-data.component.html',
  styleUrls: ['./form-data.component.css']
})

export class FormDataComponent implements OnInit {
data:any;

  constructor(private _route:ActivatedRoute, private _auth : AuthServiceService, private route : Router) {
    
  }

  // details: {
  //   name:string
  //   email:any
  // }


  ngOnInit(): void {
//  this.details = {
//    name : this._route.snapshot.params['name'],
//    email : this._route.snapshot.params['email'],
this.data= this._route.snapshot.params;
 }

//  Logout()
//  {
// this._auth.isLogged(false);
// this.route.navigate(['/forms']);
//  }
  }

