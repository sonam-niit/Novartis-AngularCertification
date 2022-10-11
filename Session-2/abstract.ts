abstract class Animal2{

    abstract makeNoise():void; //method without implementation

    move(speed:number):void{
        console.log("Moved with the speed "+speed+" /hour");
    }
}
class Cat extends Animal2{
    makeNoise(): void {
        console.log("cat can make Noise");
    }
}

let c= new Cat();
c.makeNoise();
c.move(10);