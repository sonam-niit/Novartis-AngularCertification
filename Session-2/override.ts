class Animal1
{
    name1:string;
    constructor(name:string){
        this.name1=name;
    }

    speak():void{
        console.log(this.name1+" can speak")
    }
}
class Dog1 extends Animal1{
    color:string;
    constructor(name:string,color:string='white'){
        super(name);
        this.color=color;
    }
    speak():void{
        super.speak();
        console.log(this.name1+" can speak from child class")
    }
     getAll():void{
        console.log("Color is "+this.color);
     }
}
let d1= new Dog1('tommy');
d1.speak();
d1.getAll();