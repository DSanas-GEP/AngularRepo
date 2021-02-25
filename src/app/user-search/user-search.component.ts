import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.css']
})
export class UserSearchComponent implements OnInit {
  

  constructor() { }

  users = [
    { fname: 'tom', lname: 'simit', mname: 'jerry' },
    { fname: 'joe', lname: 'michael', mname: 'wills' },
    { fname: 'jose', lname: 'mona', mname: 'dany' },
    { fname: 'tim', lname: 'eli', mname: 'david' },
    { fname: 'mike', lname: 'bony', mname: 'doe' },
  ];

  key = '';
  ngOnInit(): void {
   
  }

}
