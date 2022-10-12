import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  name:string="Sonam Soni";
  url:string="http://www.google.com"
  imgurl:string="./assets/images/pencil.png";
  flag:boolean=false;
  constructor() { }
  username:string="sonam134";
  ngOnInit(): void {
  }
  show():void{
    this.flag=!this.flag
    console.log("Button clicked "+this.flag)
  }

}
