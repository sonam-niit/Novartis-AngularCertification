import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  name:string="Sonam Soni";
  url:string="http://www.google.com"
  constructor() { }

  ngOnInit(): void {
  }

}
