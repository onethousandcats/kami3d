"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./number.extensions");
test("math_helpers_degreesToRadians", function () {
    var degrees = 180;
    var radians = Math.PI;
    expect(degrees.toRadians()).toEqual(radians);
});
test("math_helpers_degreesToRadians", function () {
    var degrees = 90;
    var radians = Math.PI / 2;
    expect(degrees.toRadians()).toEqual(radians);
});
test("math_helpers_radiansToDegrees", function () {
    var radians = Math.PI;
    var degrees = 180;
    expect(radians.toDegrees()).toEqual(degrees);
});
test("math_helpers_radiansToDegrees", function () {
    var radians = 2 * Math.PI;
    var degrees = 360;
    expect(radians.toDegrees()).toEqual(degrees);
});
//# sourceMappingURL=helpers.test.js.map