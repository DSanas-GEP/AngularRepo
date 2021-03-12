import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from '../service/user-service.service';

@Component({
  selector: 'app-gp',
  templateUrl: './gp.component.html',
  styleUrls: ['./gp.component.css']
})
export class GPComponent implements OnInit {

  constructor(private getuser : UserServiceService, private route : Router) { }
  users:any;
  ngOnInit(): void {

    // this.getuser.getUser().subscribe(data =>{
    //        console.log(data);
    //   this.userlist=data;
    // }
    //   )


      this.getuser.getUser().subscribe((data)=>
      {console.log(data);
        this.users=data;
      })
    }


    getid(id)
    {
// console.log(e);
this.route.navigate(['/GP',id])

    }
  }



