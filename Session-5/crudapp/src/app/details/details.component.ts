import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';
import { Product } from '../productmodel';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  product:Product;
  constructor(private route:ActivatedRoute,private service:ProductService) { }

  ngOnInit(): void {
    const id= this.route.snapshot.paramMap.get('id');
    this.product=this.service.findById(Number(id));
  }

}
