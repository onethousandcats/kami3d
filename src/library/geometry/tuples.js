"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tuples = void 0;
var point_1 = require("./point");
var vector_1 = require("./vector");
var Tuples = /** @class */ (function () {
    function Tuples() {
    }
    Tuples.convertTupleToType = function (tuple) {
        if (tuple.isVector) {
            return new vector_1.Vector(tuple.vals);
        }
        if (tuple.isPoint) {
            return new point_1.Point(tuple.vals);
        }
        return tuple;
    };
    return Tuples;
}());
exports.Tuples = Tuples;
//# sourceMappingURL=tuples.js.map