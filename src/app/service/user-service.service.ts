import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private  http : HttpClient) { }

  // getUsers()

  // {
  // this.http.get("https://jsonplaceholder.typicode.com/users/");
  // }

  getUser(id='')
  {
      return this.http.get("https://jsonplaceholder.typicode.com/users/" +id);
  }

  postUser(data,name='')

  {
    return this.http.post("https://jsonplaceholder.typicode.com/posts",data + name);
  }
}

