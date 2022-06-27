"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var intersection_1 = require("./intersection");
var intersectionGroup_1 = require("./intersectionGroup");
var point_1 = require("./point");
var ray_1 = require("./ray");
var sphere_1 = require("./sphere");
var vector_1 = require("./vector");
test("intersections_cotr_returnsCorrectProperties", function () {
    var s = new sphere_1.Sphere();
    var i = new intersection_1.Intersection(s, 3.5);
    expect(i.t).toEqual(3.5);
    expect(i.obj).toEqual(s);
});
test("intersections_aggregation_intersections", function () {
    var s = new sphere_1.Sphere();
    var i1 = new intersection_1.Intersection(s, 1);
    var i2 = new intersection_1.Intersection(s, 2);
    var ig = new intersectionGroup_1.IntersectionGroup([i1, i2]);
    expect(ig.intersections.length).toEqual(2);
    expect(ig.intersections[0].t).toEqual(1);
    expect(ig.intersections[1].t).toEqual(2);
});
test("intersections_functions_setObjectOnIntersection", function () {
    var r = new ray_1.Ray(new point_1.Point(0, 0, -5), new vector_1.Vector(0, 0, 1));
    var s = new sphere_1.Sphere();
    var xs = r.intersects(s);
    expect(xs.count).toEqual(2);
    expect(xs.intersections[0].obj).toEqual(s);
    expect(xs.intersections[1].obj).toEqual(s);
});
test("intersections_hit_allPositiveT", function () {
    var s = new sphere_1.Sphere();
    var i1 = new intersection_1.Intersection(s, 1);
    var i2 = new intersection_1.Intersection(s, 2);
    var xs = new intersectionGroup_1.IntersectionGroup([i1, i2]);
    expect(xs.hit()).toEqual(i1);
});
test("intersections_hit_someNegativeT", function () {
    var s = new sphere_1.Sphere();
    var i1 = new intersection_1.Intersection(s, -1);
    var i2 = new intersection_1.Intersection(s, 1);
    var xs = new intersectionGroup_1.IntersectionGroup([i1, i2]);
    expect(xs.hit()).toEqual(i2);
});
test("intersections_hit_allNegativeT", function () {
    var s = new sphere_1.Sphere();
    var i1 = new intersection_1.Intersection(s, -2);
    var i2 = new intersection_1.Intersection(s, -1);
    var xs = new intersectionGroup_1.IntersectionGroup([i1, i2]);
    expect(xs.hit()).toEqual(null);
});
test("intersections_hit_alwaysLowestNonnegative", function () {
    var s = new sphere_1.Sphere();
    var i1 = new intersection_1.Intersection(s, 5);
    var i2 = new intersection_1.Intersection(s, 7);
    var i3 = new intersection_1.Intersection(s, -3);
    var i4 = new intersection_1.Intersection(s, 2);
    var xs = new intersectionGroup_1.IntersectionGroup([i1, i2, i3, i4]);
    expect(xs.hit()).toEqual(i4);
});
test("intersections_add_putsInCorrectOrder", function () {
    var s = new sphere_1.Sphere();
    var i1 = new intersection_1.Intersection(s, 5);
    var i2 = new intersection_1.Intersection(s, 7);
    var i3 = new intersection_1.Intersection(s, -3);
    var i4 = new intersection_1.Intersection(s, 2);
    var xs = new intersectionGroup_1.IntersectionGroup([i1, i2, i3]);
    xs.add(i4);
    console.log(xs.intersections);
    expect(xs.intersections[1]).toEqual(i4);
});
//# sourceMappingURL=intersection.test.js.map