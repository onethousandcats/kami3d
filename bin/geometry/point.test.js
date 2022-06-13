"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var point_1 = require("./point");
var p1 = new point_1.Point(10, 11, 13);
var p2 = new point_1.Point(8, 13, 11);
test("point_new_pointWithValues", function () {
    expect(p1.x).toEqual(10);
    expect(p1.y).toEqual(11);
    expect(p1.z).toEqual(13);
});
test("point_add_returnsSum", function () {
    expect(p1._plus(p2)).toEqual(new point_1.Point(18, 24, 24));
});
test("point_hello_canCallParentMethod", function () {
    expect(p1.helloTest()).toEqual("test");
});
//# sourceMappingURL=point.test.js.map