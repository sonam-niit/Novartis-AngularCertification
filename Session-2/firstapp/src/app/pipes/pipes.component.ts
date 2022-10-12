import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  name:string="sonam soni"
  message:string="WELCOME TO THE WORLD OF ANGULAR"
  number1:number=3.00101999;
  a:number=2010.7845;
  today= new Date();
  object={fname:"sonam",lname:"soni",
email:"sonam@gmail.com"}
  constructor() { }

  ngOnInit(): void {
  }

}
