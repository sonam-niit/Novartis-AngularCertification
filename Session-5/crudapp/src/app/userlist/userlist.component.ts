import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {

  users:User[]
  constructor(private service:UserService) { }

  ngOnInit(): void {
      this.service.getAllUsers().subscribe(x=> this.users=x);
  }

}
