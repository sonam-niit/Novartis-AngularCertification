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
  deleteProductById(id:number){
    for(let i=0;i<this.products.length;i++){
      if(this.products[i].id===id){
        this.products.splice(i,1);
      }
    }
  }
  findById(id:number){
    let product=this.products[0];
    for(let i=0;i<this.products.length;i++){
      if(Number(this.products[i].id)===id){
        product= this.products[i];
      }
    }
   return product;
  }
}
