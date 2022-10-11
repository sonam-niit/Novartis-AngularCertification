interface Car{
    name:string;
    modelNo:number;
    //methods without defination
    start():void;
    stop():void;
}

class Tata implements Car{

    name:string;
    modelNo:number;
    constructor(name:string,modelNo:number){
        this.name=name;
        this.modelNo=modelNo
    }
    //methods without defination
    start():void{
        console.log("car started")
    }
    stop():void{
        console.log("car stopped")
    }
    changeGear(n:number):void{
        console.log("Gear chnaged to "+n)
    }
}
class Honda implements Car{

    name:string;
    modelNo:number;
    constructor(name:string,modelNo:number){
        this.name=name;
        this.modelNo=modelNo
    }
    //methods without defination
    start():void{
        console.log("Honda car started")
    }
    stop():void{
        console.log(" Honda car stopped")
    }

}

let car1:Car = new Tata("Altroz",2021);
let car2:Car= new Tata("Nexon",2022);

let car3:Car = new Honda("Honda City",2021);
