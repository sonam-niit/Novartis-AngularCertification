import { Injectable } from '@angular/core';
import { User } from './usermodel';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  //this data is coming from ajax call
  users:User[]=[
    {id:1,name:"alex",email:"alex@gmail.com"},
    {id:2,name:"bob",email:"bob@gmail.com"},
    {id:3,name:"john",email:"john@gmail.com"}
  ]

  getAllUsers(){
    return this.users;
  }
}
