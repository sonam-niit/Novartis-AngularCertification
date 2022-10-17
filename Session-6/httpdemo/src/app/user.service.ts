import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user.model';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl:string="http://localhost:3000/users";
  constructor(private http:HttpClient) { }

  getAllUsers():Observable<User[]>{
    return this.http.get<User[]>(this.baseUrl);
  }
  getUserById(id:number):Observable<User>{
    return this.http.get<User>(this.baseUrl+"/"+id);
  }
  addUser(user:User){
    return this.http.post(this.baseUrl,user);
  }
  deleteById(id:number){
    return this.http.delete(this.baseUrl+"/"+id);
  }
  updateUser(user:User,id:number){
    return this.http.put(this.baseUrl+"/"+id,user)
  }
}
