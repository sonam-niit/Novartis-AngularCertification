class Shape{

    height:number;
    width:number;
    constructor(height:number,width:number){
        this.height=height;
        this.width=width
    }
    area():number{
        return this.height*this.width;
    }
}

class Rectangle extends Shape{

    reactArea:number;
    constructor(height:number,width:number){
        super(height,width);
        this.reactArea= this.area();
    }

    display(){
        console.log("Area is "+this.reactArea)
    }
}
let r1= new Rectangle(2.3,3.4);
r1.display();