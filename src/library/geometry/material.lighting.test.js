"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var color_1 = require("./color");
var material_1 = require("./material");
var point_1 = require("./point");
var pointLight_1 = require("./pointLight");
var vector_1 = require("./vector");
var m, p;
beforeEach(function () {
    m = new material_1.Material();
    p = new point_1.Point();
});
test("material_lighting_eyeBetweenLightandSurface", function () {
    var eyev = new vector_1.Vector(0, 0, -1);
    var normalv = new vector_1.Vector(0, 0, -1);
    var light = new pointLight_1.PointLight(new color_1.Color(1, 1, 1), new point_1.Point(0, 0, -10));
    var result = m.lighting(light, p, eyev, normalv);
    expect(result).toEqual(new color_1.Color(1.9, 1.9, 1.9));
});
test("material_lighting_eyeBetweenLightandSurfaceOffset45", function () {
    var eyev = new vector_1.Vector(0, Math.sqrt(2) / 2, -Math.sqrt(2) / 2);
    var normalv = new vector_1.Vector(0, 0, -1);
    var light = new pointLight_1.PointLight(new color_1.Color(1, 1, 1), new point_1.Point(0, 0, -10));
    var result = m.lighting(light, p, eyev, normalv);
    expect(result).toEqual(new color_1.Color(1.0, 1.0, 1.0));
});
//# sourceMappingURL=material.lighting.test.js.map