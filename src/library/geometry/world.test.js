"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var matrix_1 = require("../math/matrix");
var color_1 = require("./color");
var point_1 = require("./point");
var pointLight_1 = require("./pointLight");
var ray_1 = require("./ray");
var sphere_1 = require("./sphere");
var vector_1 = require("./vector");
var world_1 = require("./world");
test("world_cotr_isEmpty", function () {
    var w = new world_1.World();
    expect(w.objects.length).toBe(0);
    expect(w.lightSource).toBe(null);
});
test("world_default_isDefaultWorld", function () {
    var light = new pointLight_1.PointLight(new color_1.Color(1, 1, 1), new point_1.Point(-10, 10, -10));
    var s1 = new sphere_1.Sphere();
    s1.material.color = new color_1.Color(0.8, 1.0, 0.6);
    s1.material.diffuse = 0.7;
    s1.material.specular = 0.2;
    var s2 = new sphere_1.Sphere();
    s2.transform = matrix_1.Matrix.scale(0.5, 0.5, 0.5);
    var w = world_1.World.Default();
    expect(w.lightSource).toEqual(light);
    expect(w.contains(s1)).toBeTruthy();
    expect(w.contains(s2)).toBeTruthy();
});
test("world_intersect_withRay", function () {
    var w = world_1.World.Default();
    var r = new ray_1.Ray(new point_1.Point(0, 0, -5), new vector_1.Vector(0, 0, 1));
    var xs = w.intersect(r);
    expect(xs.count).toBe(4);
    expect(xs.xs[0].t).toBe(4);
    expect(xs.xs[1].t).toBe(4.5);
    expect(xs.xs[2].t).toBe(5.5);
    expect(xs.xs[3].t).toBe(6);
});
//# sourceMappingURL=world.test.js.map