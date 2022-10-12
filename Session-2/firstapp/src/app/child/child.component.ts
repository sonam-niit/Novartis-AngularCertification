import { Component, OnInit,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  inputs:['pemail','pfname','plname'],
  outputs:['cevent']
})
export class ChildComponent implements OnInit {

  constructor() { }
  pemail:string="";
  pfname:string="";
  plname:string="";
  ngOnInit(): void {
  }
  cevent= new EventEmitter<string>();
  sendData(value:string){
    this.cevent.emit(value);
  }
}
