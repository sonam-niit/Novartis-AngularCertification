import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {

  constructor() { }
  subject = new Subject<number>();
  
  ngOnInit(): void {
    this.subject.next(1);
    let subscriber1= this.subject.subscribe({
      next(value){
        console.log('subscriber1: '+value)
      }
    })
    this.subject.next(2);
    let subscriber2= this.subject.subscribe({
      next(value){
        console.log('subscriber2: '+value)
      }
    })
    this.subject.next(3);
  }

}
