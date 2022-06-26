"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Matrix = void 0;
var tuple_1 = require("../geometry/tuple");
var Matrix = /** @class */ (function () {
    function Matrix(m) {
        if (Array.isArray(m)) {
            this.m = m;
        }
        else {
            var size = m !== null && m !== void 0 ? m : 4;
            this.m = Array(size);
            for (var i = 0; i < size; i++) {
                this.m[i] = Array(size).fill(0);
            }
        }
    }
    Matrix.create = function (m) {
        var prototype = Object.create(Matrix.prototype);
        return prototype;
    };
    Object.defineProperty(Matrix.prototype, "columns", {
        get: function () { return this.m[0].length; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Matrix.prototype, "rows", {
        get: function () { return this.m.length; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Matrix.prototype, "size", {
        get: function () { return this.columns; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Matrix.prototype, "invertible", {
        get: function () { return this.determinant() != 0; },
        enumerable: false,
        configurable: true
    });
    Matrix.prototype.times = function (val) {
        var matrix = val instanceof tuple_1.Tuple ? val.toMatrix() : val;
        var result = new Matrix();
        var _loop_1 = function (i) {
            for (var j = 0; j < this_1.rows; j++) {
                var r = this_1.m[j].map(function (n, idx) {
                    return n * matrix.m[idx][i];
                });
                var sum = r.reduce(function (a, c) {
                    return a + c;
                }, 0);
                result.m[j][i] = sum;
            }
        };
        var this_1 = this;
        for (var i = 0; i < this.columns; i++) {
            _loop_1(i);
        }
        return val instanceof tuple_1.Tuple ? result.toTuple() : result;
    };
    Matrix.prototype.transpose = function () {
        var transpose = new Matrix();
        for (var i = 0; i < this.rows; i++) {
            for (var j = 0; j < this.columns; j++) {
                transpose.m[i][j] = this.m[j][i];
            }
        }
        return transpose;
    };
    Matrix.prototype.inverse = function () {
        if (!this.invertible) {
            return new Matrix();
        }
        var m2 = new Matrix(this.size);
        for (var row = 0; row < this.size; row++) {
            for (var col = 0; col < this.size; col++) {
                var c = this.cofactor(row, col);
                m2.m[col][row] = (c / this.determinant());
            }
        }
        return m2;
    };
    Matrix.prototype.determinant = function () {
        var det = 0;
        if (this.size == 2) {
            det = this.m[0][0] * this.m[1][1] - this.m[0][1] * this.m[1][0];
        }
        else {
            for (var i = 0; i < this.size; i++) {
                det += this.m[0][i] * this.cofactor(0, i);
            }
        }
        return det;
    };
    Matrix.prototype.clone = function () {
        return this.m.map(function (o) { return __spreadArray([], o, true); });
    };
    Matrix.prototype.submatrix = function (row, column) {
        var copy = this.clone();
        var arr = copy.map(function (val) {
            val.splice(column, 1);
            return val;
        });
        arr.splice(row, 1);
        return new Matrix(arr);
    };
    Matrix.prototype.minor = function (row, column) {
        return this.submatrix(row, column).determinant();
    };
    Matrix.prototype.cofactor = function (row, column) {
        var minor = this.minor(row, column);
        return (row + column) % 2 == 0 ? minor : -minor;
    };
    Matrix.prototype.toTuple = function () {
        var t = [];
        for (var i = 0; i < 4; i++) {
            t.push(this.m[i][0]);
        }
        return new tuple_1.Tuple(t);
    };
    Matrix.prototype.getIdentity = function () {
        return Matrix.identity().times(this);
    };
    Matrix.prototype.rotate = function (axis, radians) {
        return Matrix.rotate(axis, radians).times(this);
    };
    Matrix.rotate = function (axis, radians) {
        var identity = Matrix.identity();
        switch (axis) {
            case "x":
                return Matrix.rotation_x(radians).times(identity);
            case "y":
                return Matrix.rotation_y(radians).times(identity);
            case "z":
                return Matrix.rotation_z(radians).times(identity);
        }
    };
    Matrix.prototype.scale = function (x, y, z) {
        return Matrix.scale(x, y, z).times(this);
    };
    Matrix.prototype.shear = function (xY, xZ, yX, yZ, zX, zY) {
        return Matrix.shear(xY, xZ, yX, yZ, zX, zY).times(this);
    };
    Matrix.prototype.translate = function (x, y, z) {
        return Matrix.translate(x, y, z).times(this);
    };
    Matrix.identity = function () {
        var m = new Matrix();
        for (var i = 0; i < m.columns; i++) {
            m.m[i][i] = 1;
        }
        return m;
    };
    Matrix.translate = function (x, y, z) {
        var identity = Matrix.identity();
        identity.m[0][3] = x;
        identity.m[1][3] = y;
        identity.m[2][3] = z;
        return identity;
    };
    Matrix.scale = function (x, y, z) {
        var identity = Matrix.identity();
        identity.m[0][0] = x;
        identity.m[1][1] = y;
        identity.m[2][2] = z;
        return identity;
    };
    Matrix.rotation_x = function (radians) {
        var identity = Matrix.identity();
        identity.m[1][1] = Math.cos(radians);
        identity.m[1][2] = -Math.sin(radians);
        identity.m[2][1] = Math.sin(radians);
        identity.m[2][2] = Math.cos(radians);
        return identity;
    };
    Matrix.rotation_y = function (radians) {
        var identity = Matrix.identity();
        identity.m[0][0] = Math.cos(radians);
        identity.m[2][0] = -Math.sin(radians);
        identity.m[0][2] = Math.sin(radians);
        identity.m[2][2] = Math.cos(radians);
        return identity;
    };
    Matrix.rotation_z = function (radians) {
        var identity = Matrix.identity();
        identity.m[0][0] = Math.cos(radians);
        identity.m[0][1] = -Math.sin(radians);
        identity.m[1][0] = Math.sin(radians);
        identity.m[1][1] = Math.cos(radians);
        return identity;
    };
    Matrix.shear = function (xY, xZ, yX, yZ, zX, zY) {
        var identity = Matrix.identity();
        identity.m[0][1] = xY;
        identity.m[0][2] = xZ;
        identity.m[1][0] = yX;
        identity.m[1][2] = yZ;
        identity.m[2][0] = zX;
        identity.m[2][1] = zY;
        return identity;
    };
    return Matrix;
}());
exports.Matrix = Matrix;
//# sourceMappingURL=matrix.js.map