"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Point = void 0;
var matrix_1 = require("../math/matrix");
var tuple_1 = require("./tuple");
var Point = /** @class */ (function (_super) {
    __extends(Point, _super);
    function Point(x, y, z) {
        var _this = this;
        if (x instanceof Array) {
            _this = _super.call(this, x) || this;
        }
        else if (typeof (x) === "number") {
            _this = _super.call(this, [x, y, z, 1]) || this;
        }
        else {
            _this = _super.call(this, [0, 0, 0, 1]) || this;
        }
        return _this;
    }
    Point.prototype.plus = function (val) {
        return _super.prototype.plus.call(this, val);
    };
    Point.prototype.minus = function (val) {
        return _super.prototype.minus.call(this, val);
    };
    Point.prototype.negate = function () {
        return Point.zero().minus(this);
    };
    Point.zero = function () {
        return new Point();
    };
    Point.prototype.toMatrix = function () {
        var m = [];
        this.vals.map(function (n, i) {
            m.push([n]);
        });
        m.push([1]);
        return new matrix_1.Matrix(m);
    };
    return Point;
}(tuple_1.Tuple));
exports.Point = Point;
//# sourceMappingURL=point.js.map