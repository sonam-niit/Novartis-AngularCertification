import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {

  products=[
    {id:1,name:"pencil",price:4.5,available:"22-10-2022",rating:4.5},
    {id:2,name:"pen",price:15,available:"2-10-2022",rating:4.7},
    {id:3,name:"scale",price:20,available:"27-10-2022",rating:4.3},
    {id:4,name:"Eraser",price:2.5,available:"22-10-2022",rating:4.9}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
