"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var point_1 = require("./point");
var vector_1 = require("./vector");
var p = new point_1.Point(10, 11, 13);
var p2 = new point_1.Point(8, 13, 11);
test("point_constructor_returnsValidPoint", function () {
    expect(p).toEqual(new point_1.Point(10, 11, 13));
});
test("point_add_returnsSum", function () {
    expect(p._plus(p)).toEqual(new point_1.Point(2, 4, 6));
});
test("point_getVector_returnsAVector", function () {
    var v = p.getVectorBetween(p2);
    expect(v).toEqual(new vector_1.Vector(2, -2, 2));
});
test("point_getVector_returnsAVector", function () {
    var p = new point_1.Point();
    expect(p.x).toEqual(0);
});
//# sourceMappingURL=point.test.js.map