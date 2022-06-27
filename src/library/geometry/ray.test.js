"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var matrix_1 = require("../math/matrix");
var point_1 = require("./point");
var ray_1 = require("./ray");
var sphere_1 = require("./sphere");
var vector_1 = require("./vector");
test("rays_function_createAndQuery", function () {
    var origin = new point_1.Point(1, 2, 3);
    var direction = new vector_1.Vector(4, 5, 6);
    var r = new ray_1.Ray(origin, direction);
    expect(r.origin).toEqual(origin);
    expect(r.direction).toEqual(direction);
});
test("rays_position_computePointFromADistance", function () {
    var r = new ray_1.Ray(new point_1.Point(2, 3, 4), new vector_1.Vector(1, 0, 0));
    expect(r.position(0)).toEqual(new point_1.Point(2, 3, 4));
    expect(r.position(1)).toEqual(new point_1.Point(3, 3, 4));
    expect(r.position(-1)).toEqual(new point_1.Point(1, 3, 4));
    expect(r.position(2.5)).toEqual(new point_1.Point(4.5, 3, 4));
});
test("rays_intersect_sphereAtTwoPoints", function () {
    var p = new point_1.Point(0, 0, -5);
    var v = new vector_1.Vector(0, 0, 1);
    var r = new ray_1.Ray(p, v);
    var s = new sphere_1.Sphere();
    var xs = r.intersects(s);
    expect(xs.count).toEqual(2);
    expect(xs.intersections[0].t).toEqual(4.0);
    expect(xs.intersections[1].t).toEqual(6.0);
});
test("rays_intersect_sphereAtTangent", function () {
    var p = new point_1.Point(0, 1, -5);
    var v = new vector_1.Vector(0, 0, 1);
    var r = new ray_1.Ray(p, v);
    var s = new sphere_1.Sphere();
    var xs = r.intersects(s);
    expect(xs.count).toEqual(2);
    expect(xs.intersections[0].t).toEqual(5.0);
    expect(xs.intersections[1].t).toEqual(5.0);
});
test("rays_intersect_nothing", function () {
    var p = new point_1.Point(0, 2, -5);
    var v = new vector_1.Vector(0, 0, 1);
    var r = new ray_1.Ray(p, v);
    var s = new sphere_1.Sphere();
    var xs = r.intersects(s);
    expect(xs.count).toEqual(0);
});
test("rays_intersect_insideSphere", function () {
    var p = new point_1.Point(0, 0, 0);
    var v = new vector_1.Vector(0, 0, 1);
    var r = new ray_1.Ray(p, v);
    var s = new sphere_1.Sphere();
    var xs = r.intersects(s);
    expect(xs.count).toEqual(2);
    expect(xs.intersections[0].t).toEqual(-1.0);
    expect(xs.intersections[1].t).toEqual(1.0);
});
test("rays_intersect_inFrontOfSphere", function () {
    var p = new point_1.Point(0, 0, 5);
    var v = new vector_1.Vector(0, 0, 1);
    var r = new ray_1.Ray(p, v);
    var s = new sphere_1.Sphere();
    var xs = r.intersects(s);
    expect(xs.count).toEqual(2);
    expect(xs.intersections[0].t).toEqual(-6.0);
    expect(xs.intersections[1].t).toEqual(-4.0);
});
test("rays_transform_translate", function () {
    var r = new ray_1.Ray(new point_1.Point(1, 2, 3), new vector_1.Vector(0, 1, 0));
    var m = matrix_1.Matrix.translate(3, 4, 5);
    var r2 = r.transform(m);
    expect(r2.origin).toEqual(new point_1.Point(4, 6, 8));
    expect(r2.direction).toEqual(new vector_1.Vector(0, 1, 0));
});
test("rays_transform_scale", function () {
    var r = new ray_1.Ray(new point_1.Point(1, 2, 3), new vector_1.Vector(0, 1, 0));
    var m = matrix_1.Matrix.scale(2, 3, 4);
    var r2 = r.transform(m);
    expect(r2.origin).toEqual(new point_1.Point(2, 6, 12));
    expect(r2.direction).toEqual(new vector_1.Vector(0, 3, 0));
});
//# sourceMappingURL=ray.test.js.map