import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../user.model';
import { UserService } from '../user.service';
@Component({
  selector: 'app-userform',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.css']
})
export class UserformComponent implements OnInit {
  registerForm:FormGroup;
  submitted:boolean=false;
  user:User= new User();
  constructor(private builder:FormBuilder, private service:UserService,
    private router:Router) { }

  ngOnInit(): void {
    this.registerForm= this.builder.group({
      id:['',Validators.required],
      name:['',Validators.required],
      email:['',Validators.required],
      country:['',Validators.required]
    })
  }

  get form(){
    return this.registerForm.controls;
  }

  onSubmit(){
    this.submitted=true;
    if(this.registerForm.invalid)
      return;
    else{
        this.service.addUser(this.user).subscribe(x=>console.log(x))
        alert("product added successfully")
        this.router.navigate(['list'])
    }
  }
}
