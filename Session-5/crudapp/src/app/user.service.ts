import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl:string="https://jsonplaceholder.typicode.com/users/";
  constructor(private http:HttpClient) { }

  getAllUsers():Observable<User[]>{
    return this.http.get<User[]>(this.baseUrl);
  }
  getById(id:number):Observable<User>{
    return this.http.get<User>(this.baseUrl+id)
  }
}
