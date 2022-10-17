import { Component, OnInit } from '@angular/core';
import { User } from '../user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {

  users:User[];
  constructor(private service:UserService) { }

  ngOnInit(): void {
    this.service.getAllUsers().subscribe(x=>this.users=x);
  }

  delete(id:number){
    this.users= this.users.filter(x=> x.id !== id);
    this.service.deleteById(id).subscribe(x=>console.log(x));
  }
}
