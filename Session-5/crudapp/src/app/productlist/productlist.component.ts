import { Component, OnInit } from '@angular/core';
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

}
