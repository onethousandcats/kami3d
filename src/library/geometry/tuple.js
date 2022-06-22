"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tuple = void 0;
var Tuple = /** @class */ (function () {
    function Tuple(x, y, z) {
        if (x instanceof Array) {
            this.vals = x;
        }
        else if (typeof (x) === "number") {
            this.vals = [x, y, z];
        }
        else {
            this.vals = [0, 0, 0];
        }
    }
    Object.defineProperty(Tuple.prototype, "x", {
        get: function () { return this.vals[0]; },
        set: function (val) { this.vals[0] = val; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tuple.prototype, "y", {
        get: function () { return this.vals[1]; },
        set: function (val) { this.vals[1] = val; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tuple.prototype, "z", {
        get: function () { return this.vals[2]; },
        set: function (val) { this.vals[2] = val; },
        enumerable: false,
        configurable: true
    });
    ;
    Tuple.prototype.plus = function (val) {
        var results = this.vals.map(function (n, i) {
            return n + val.vals[i];
        });
        return new Tuple(results);
    };
    Tuple.prototype.minus = function (val) {
        var results = this.vals.map(function (n, i) {
            return n - val.vals[i];
        });
        return new Tuple(results);
    };
    Tuple.prototype.negate = function () {
        return Tuple.zero().minus(this);
    };
    Tuple.prototype.times = function (val) {
        if (val instanceof Tuple) {
            var results = this.vals.map(function (n, i) {
                return n * val.vals[i];
            });
            return new Tuple(results);
        }
        return new Tuple(this.vals.map(function (o) { return o * val; }));
    };
    Tuple.prototype.dividedBy = function (scalar) {
        return new Tuple(this.vals.map(function (o) { return o / scalar; }));
    };
    Tuple.prototype.magnitude = function () {
        var sumOfCoordinates = this.vals.map(function (o) { return o * o; })
            .reduce(function (sum, current) { return sum + current; });
        return Math.sqrt(sumOfCoordinates);
    };
    Tuple.prototype.normalize = function () {
        var magnitude = this.magnitude();
        return new Tuple(this.vals.map(function (o) { return o / magnitude; }));
    };
    Tuple.prototype.dot = function (val) {
        return this.vals.map(function (n, i) {
            return n * val.vals[i];
        }).reduce(function (sum, current) { return sum + current; });
    };
    Tuple.prototype.cross = function (val) {
        var _this = this;
        var crossProduct = [0, 1, 2].map(function (i) {
            var j = (i + 1) % 3;
            var k = (j + 1) % 3;
            return _this.vals[j] * val.vals[k] - _this.vals[k] * val.vals[j];
        });
        return new Tuple(crossProduct);
    };
    Tuple.zero = function () {
        return new Tuple();
    };
    return Tuple;
}());
exports.Tuple = Tuple;
//# sourceMappingURL=tuple.js.map