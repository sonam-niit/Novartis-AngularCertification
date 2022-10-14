import { Injectable } from '@angular/core';
import { Product } from './productmodel';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products:Product[]=[];
  constructor() { }

  addProduct(product:Product){
    this.products.push(product);
  }
  getAllProducts(){
    return this.products;
  }
}
