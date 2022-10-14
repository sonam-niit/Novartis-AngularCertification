import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';
import { Product } from '../productmodel';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {

  products:Product[]
  constructor(private service:ProductService) { }

  ngOnInit(): void {
    this.products= this.service.getAllProducts();
  }
  delete(id:number){
    this.service.deleteProductById(id);
    alert("Product Deleted Successfully");
    this.products=this.service.getAllProducts();
  }
}
