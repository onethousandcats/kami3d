"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var point_1 = require("./point");
var tuple_1 = require("./tuple");
var tuples_1 = require("./tuples");
test("tuples_tuple_convertToPoint", function () {
    var tuple = new tuple_1.Tuple(1, 2, 3, 1);
    var point = tuples_1.Tuples.convertTupleToType(tuple);
    expect(tuple.isPoint).toBeTruthy();
    expect(point instanceof point_1.Point).toBeTruthy();
});
//# sourceMappingURL=tuples.test.js.map