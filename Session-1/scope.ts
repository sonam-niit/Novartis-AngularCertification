let num1:number=20;
const num2:number=30;

function test():void{
    let num1:number=10;
    let num2:number=40;
    console.log("Inside the Block")
    console.log("num1: "+num1);
    console.log("num2: "+num2);
}
test();
console.log("Outside the Block")
console.log("num1: "+num1);
console.log("num2: "+num2);
//let and const both are having a same scope (block scope) can access outside of that block
//const value you can't change as it is constant(use where you want to declare gravity, pi)
//let value you can change continusly (use: for loop)

