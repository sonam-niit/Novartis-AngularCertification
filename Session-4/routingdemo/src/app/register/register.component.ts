import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,Validators} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private builder: FormBuilder) { }
  submitted:boolean=false;
  registerForm:FormGroup;
  ngOnInit(): void {
    this.registerForm= this.builder.group({
      firstName:['',Validators.required],
      lastName:['',Validators.required],
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(8)]]
    })
  }
  get form(){
    return this.registerForm.controls;
  }
  onSubmit(){
    this.submitted=true;
    if(this.registerForm.invalid)
      return;
    else
    alert("Form Submitted for Approval")
  }

}
