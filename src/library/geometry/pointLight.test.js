"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var color_1 = require("./color");
var point_1 = require("./point");
var pointLight_1 = require("./pointLight");
test("pointlight_cotr_hasIntensityPosition", function () {
    var i = new color_1.Color(1, 1, 1);
    var p = new point_1.Point(0, 0, 0);
    var l = new pointLight_1.PointLight(i, p);
    expect(l.position).toBe(p);
    expect(l.intensity).toBe(i);
});
//# sourceMappingURL=pointLight.test.js.map