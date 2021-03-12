import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {UserServiceService} from '../service/user-service.service'

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})
export class HttpComponent implements OnInit {
users:any;
id :number;
title:string;
body:string;
response:any;

  constructor(private http :HttpClient, private route:Router,private _get :UserServiceService ) { }

  ngOnInit(): void {

    this._get.getUser().subscribe((data)=>
    {
      this.users=data;
    })
  }

//     submit()
//     {
//       let data1= {
//         id:this.id,
//         title:this.title,
//         body:this.body,
//       };
//       this._get.postUser(data1).subscribe((data:any)=>
//     {console.log(data);
//   }) ;
// }



submit() {
  const data1 = [{
    id:this.id,
            title:this.title,
            body:this.body,
  }];
  this._get.postUser(data1).subscribe(data => {
this.response= data;
  })
 ;
   
}
onSelect(userid :number,username:string)
{
this.route.navigate(['/http',userid,username])

}

}



     


