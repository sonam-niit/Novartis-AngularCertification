var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animal1 = /** @class */ (function () {
    function Animal1(name) {
        this.name1 = name;
    }
    Animal1.prototype.speak = function () {
        console.log(this.name1 + " can speak");
    };
    return Animal1;
}());
var Dog1 = /** @class */ (function (_super) {
    __extends(Dog1, _super);
    function Dog1(name, color) {
        if (color === void 0) { color = 'white'; }
        var _this = _super.call(this, name) || this;
        _this.color = color;
        return _this;
    }
    Dog1.prototype.speak = function () {
        console.log(this.name1 + " can speak from child class");
    };
    Dog1.prototype.getAll = function () {
        console.log("Color is " + this.color);
    };
    return Dog1;
}(Animal1));
var d1 = new Dog1('tommy');
d1.speak();
d1.getAll();
