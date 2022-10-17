import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.css']
})
export class EdituserComponent implements OnInit {
  registerForm: FormGroup;
  submitted: boolean = false;
  user: User;
  id:string|null;
  constructor(private builder: FormBuilder, private service: UserService,
    private router: Router,private route:ActivatedRoute) { }

  ngOnInit(): void {

    this.id= this.route.snapshot.paramMap.get('id');
    this.service.getUserById(Number(this.id)).subscribe(x=>this.user=x)

    this.registerForm = this.builder.group({
      //id: ['', Validators.required],
      name: ['', Validators.required],
      email: ['', Validators.required],
      country: ['', Validators.required]
    })
  }

  get form() {
    return this.registerForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.registerForm.invalid)
      return;
    else {
      this.service.updateUser(this.user,Number(this.id)).subscribe(x => console.log(x))
      alert("User Updated successfully")
      this.router.navigate(['list'])
    }
  }
}
