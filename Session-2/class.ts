class Employee{

    //member variables
    empId:number;
    empName:string;

    constructor(empId:number,empName:string){
        this.empId=empId;
        this.empName=empName;
    }

    //member functions
    display():void{
        console.log(`Employee Id: ${this.empId}`)
        console.log(`Employee Name: ${this.empName}`)
    }

}

//object of created class
let e1= new Employee(101,"Alex"); //passing values to constructor
let e2= new Employee(102,"John");
e1.display(); //caling the function
e2.display();