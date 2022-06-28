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
exports.Vector = void 0;
var matrix_1 = require("../math/matrix");
var tuple_1 = require("./tuple");
var Vector = /** @class */ (function (_super) {
    __extends(Vector, _super);
    function Vector(x, y, z) {
        var _this = this;
        if (x instanceof Array) {
            _this = _super.call(this, x) || this;
        }
        else if (typeof (x) === "number") {
            _this = _super.call(this, [x, y, z, 0]) || this;
        }
        else {
            _this = _super.call(this, [0, 0, 0, 0]) || this;
        }
        return _this;
    }
    Vector.prototype.plus = function (val) {
        return _super.prototype.plus.call(this, val);
    };
    Vector.prototype.minus = function (val) {
        return _super.prototype.minus.call(this, val);
    };
    Vector.prototype.times = function (val) {
        return _super.prototype.times.call(this, val);
    };
    Vector.prototype.negate = function () {
        return _super.prototype.negate.call(this);
    };
    Vector.prototype.reflect = function (normal) {
        return _super.prototype.reflect.call(this, normal);
    };
    Vector.prototype.toMatrix = function () {
        var m = [];
        this.vals.map(function (n, i) {
            m.push([n]);
        });
        m.push([0]);
        return new matrix_1.Matrix(m);
    };
    return Vector;
}(tuple_1.Tuple));
exports.Vector = Vector;
//# sourceMappingURL=vector.js.map