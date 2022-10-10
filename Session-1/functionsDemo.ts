//regular function
function add1(a:number,b:number):number{
    return a+b;
}
//annonymous function
let add2= function(a:number,b:number):number{
    return a-b;
}
//arrow function
let add3=(a:number,b:number)=> a*b;

console.log("Regular: "+add1(10,20));
console.log("Annonymous: "+add2(20,30));
console.log("Arrow: "+add3(2,3));
//write a function to calculate Rateofintrest(I=prn/100)
//Optional Parameter
function fullName(fname:string,lname:string,mname?:string):void{
    if(mname)
    console.log("Welcome "+fname+" "+mname+" "+lname)
    else
    console.log("Welcome "+fname+" "+lname)

}

fullName('test','test','test');
fullName('hello','world')