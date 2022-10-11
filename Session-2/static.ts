class Test{

   static number1:number=20;
   static helloWorld():void{
        console.log("Hello World from static method")
    }
}

Test.helloWorld(); //static method can call directly
console.log(Test.number1);

