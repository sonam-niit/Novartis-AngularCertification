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
var Shape = /** @class */ (function () {
    function Shape(height, width) {
        this.height = height;
        this.width = width;
    }
    Shape.prototype.area = function () {
        return this.height * this.width;
    };
    return Shape;
}());
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle(height, width) {
        var _this = _super.call(this, height, width) || this;
        _this.reactArea = _this.area();
        return _this;
    }
    Rectangle.prototype.display = function () {
        console.log("Area is " + this.reactArea);
    };
    return Rectangle;
}(Shape));
var r1 = new Rectangle(2.3, 3.4);
r1.display();
