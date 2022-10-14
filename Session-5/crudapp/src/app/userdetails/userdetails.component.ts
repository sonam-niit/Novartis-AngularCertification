import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {

  user:User;
  constructor(private service:UserService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    const id= this.route.snapshot.paramMap.get('id')
    this.service.getById(Number(id)).subscribe(x=>this.user=x)
  }

}
