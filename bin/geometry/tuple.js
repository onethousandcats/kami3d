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
exports.Tuple = void 0;
var Tuple = /** @class */ (function (_super) {
    __extends(Tuple, _super);
    function Tuple(x, y, z) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        if (z === void 0) { z = 0; }
        var _this = _super.call(this, 3) || this;
        _this.x = x;
        _this.y = y;
        _this.z = z;
        return _this;
    }
    Object.defineProperty(Tuple.prototype, "x", {
        get: function () { return this[0]; },
        set: function (val) { this[0] = val; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tuple.prototype, "y", {
        get: function () { return this[1]; },
        set: function (val) { this[1] = val; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tuple.prototype, "z", {
        get: function () { return this[2]; },
        set: function (val) { this[2] = val; },
        enumerable: false,
        configurable: true
    });
    ;
    Tuple.prototype.helloTest = function () {
        return "test";
    };
    Tuple.prototype._plus = function (val) {
        return this.map(function (n, i) {
            return n + val[i];
        });
    };
    Tuple.prototype._minus = function (val) {
        return this.map(function (n, i) {
            return n - val[i];
        });
    };
    Tuple.prototype._negate = function () {
        return Tuple.zero()._minus(this);
    };
    Tuple.prototype._times = function (scalar) {
        return this.map(function (o) { return o * scalar; });
    };
    Tuple.zero = function () {
        return new Tuple();
    };
    return Tuple;
}(Array));
exports.Tuple = Tuple;
//# sourceMappingURL=tuple.js.map