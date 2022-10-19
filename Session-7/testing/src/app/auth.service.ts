import { Injectable } from '@angular/core';
import { observable, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  i:number=1;
  mydata(){
    return new Observable(observer=>{
      try {
        observer.next(this.i);
        observer.complete();
        this.i+=1;
      } catch (error) {
        observer.error(error);
      }
    })
  //   let myObservable= 
  //   Observable.create((observer:any)=>{
    
  //     observer.next('Hello World');
  //     observer.next('Hello Again');
  //     observer.complete();
  //     observer.next('Bye Bye');
  // })
  // return myObservable;
  }
}
