class Animal
{
    name:string;
    constructor(name:string){
        this.name=name;
    }

    speak():void{
        console.log(this.name+" can speak")
    }
}
class Dog extends Animal{
    color:string;
    constructor(name:string,color:string='white'){
        super(name);
        this.color=color;
    }
     getAll():void{
        console.log("Color is "+this.color);
     }
}
let d= new Dog('tommy');
d.speak();//child is able to call parent class method
d.getAll();