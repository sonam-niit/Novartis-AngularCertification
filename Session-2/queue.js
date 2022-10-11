var Queue = /** @class */ (function () {
    function Queue() {
        var _this = this;
        this.data = [];
        this.push = function (item) { return _this.data.push(item); }; // add new element at the end of the array
        this.pop = function () { return _this.data.shift(); }; // remove the first element from the array
    }
    return Queue;
}());
var numberQueue = new Queue();
numberQueue.push(10);
numberQueue.push(20);
numberQueue.push(30);
console.log(numberQueue);
console.log("Removed " + numberQueue.pop());
console.log(numberQueue);
var stringQueue = new Queue();
stringQueue.push("Alex");
stringQueue.push("Bob");
stringQueue.push("catty");
console.log(stringQueue);
console.log("Removed " + stringQueue.pop());
console.log(stringQueue);
