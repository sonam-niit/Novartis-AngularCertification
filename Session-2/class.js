var Employee = /** @class */ (function () {
    function Employee(empId, empName) {
        this.empId = empId;
        this.empName = empName;
    }
    //member functions
    Employee.prototype.display = function () {
        console.log("Employee Id: ".concat(this.empId));
        console.log("Employee Name: ".concat(this.empName));
    };
    return Employee;
}());
//object of created class
var e1 = new Employee(101, "Alex"); //passing values to constructor
var e2 = new Employee(102, "John");
e1.display(); //caling the function
e2.display();
