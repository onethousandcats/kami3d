"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var matrix_1 = require("../math/matrix");
var point_1 = require("./point");
var ray_1 = require("./ray");
var sphere_1 = require("./sphere");
var vector_1 = require("./vector");
test("sphere_cotr_isUnique", function () {
    var s1 = new sphere_1.Sphere();
    var s2 = new sphere_1.Sphere();
    expect(s1.id).not.toEqual(s2.id);
});
test("sphere_cotr_startsAtOrigin", function () {
    var s1 = new sphere_1.Sphere();
    var origin = new point_1.Point(0, 0, 0);
    expect(s1.position).toEqual(origin);
});
test("sphere_transform_default", function () {
    var s = new sphere_1.Sphere();
    expect(s.transform).toEqual(matrix_1.Matrix.identity());
});
test("sphere_transform_changed", function () {
    var s = new sphere_1.Sphere();
    var t = matrix_1.Matrix.translate(2, 3, 4);
    s.transform = t;
    expect(s.transform).toEqual(t);
});
test("sphere_scaled_intersectWithRay", function () {
    var r = new ray_1.Ray(new point_1.Point(0, 0, -5), new vector_1.Vector(0, 0, 1));
    var s = new sphere_1.Sphere();
    s.transform = matrix_1.Matrix.scale(2, 2, 2);
    var xs = s.intersect(r);
    expect(xs.count).toEqual(2);
    expect(xs.xs[0].t).toEqual(3);
    expect(xs.xs[1].t).toEqual(7);
});
test("sphere_translated_intersectWithRay", function () {
    var r = new ray_1.Ray(new point_1.Point(0, 0, -5), new vector_1.Vector(0, 0, 1));
    var s = new sphere_1.Sphere();
    s.transform = matrix_1.Matrix.translate(5, 0, 0);
    var xs = s.intersect(r);
    expect(xs.count).toEqual(0);
});
//# sourceMappingURL=sphere.test.js.map