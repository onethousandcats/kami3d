"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var point_1 = require("./point");
var vector_1 = require("./vector");
var p1 = new point_1.Point(10, 11, 13);
var p2 = new point_1.Point(8, 13, 11);
test("point_new_pointWithValues", function () {
    expect(p1.x).toEqual(10);
    expect(p1.y).toEqual(11);
    expect(p1.z).toEqual(13);
});
test("point_add_makesNoSense", function () {
    expect(p1.plus(p2).w).not.toEqual(1);
});
test("point_subtract_returnsSum", function () {
    expect(p1.minus(p2)).toEqual(new vector_1.Vector(2, -2, 2));
});
test("point_negate_returnsNegation", function () {
    expect(p1.negate()).toEqual(new vector_1.Vector(-10, -11, -13));
});
//# sourceMappingURL=point.test.js.map