import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';
import { Product } from '../productmodel';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  registerForm:FormGroup;
  submitted:boolean=false;
  product:Product= new Product();
  constructor(private builder:FormBuilder, private service:ProductService,
    private router:Router) { }

  ngOnInit(): void {
    this.registerForm= this.builder.group({
      id:['',Validators.required],
      name:['',Validators.required],
      price:['',Validators.required],
      available:['',Validators.required],
      rating:['', Validators.required]
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
        console.log(this.product);
        this.service.addProduct(this.product);
        alert("product added successfully")
        this.router.navigate(['list'])
    }
  }
}
