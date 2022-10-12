import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../usermodel';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {

  users:User[] //default value
  //let's inject the service in constructor
  constructor(private service: UserService) { }

  ngOnInit(): void {
    this.users=this.service.getAllUsers();
  }

}
