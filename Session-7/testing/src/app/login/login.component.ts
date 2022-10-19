import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  
  constructor(private service:AuthService) { }

  ngOnInit(): void {
  
    this.service.mydata().subscribe({
      next(val){
        console.log('Observer1: '+val)
      }
    })

    this.service.mydata().subscribe({
      next(val){
        console.log('Observer2: '+val)
      }
    })

  }


}
