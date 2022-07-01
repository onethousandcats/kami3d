"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.World = void 0;
var matrix_1 = require("../math/matrix");
var color_1 = require("./color");
var intersectionGroup_1 = require("./intersectionGroup");
var point_1 = require("./point");
var pointLight_1 = require("./pointLight");
var sphere_1 = require("./sphere");
var _ = require('lodash');
var World = /** @class */ (function () {
    function World() {
        this.objects = [];
        this.lightSource = null;
    }
    World.Default = function () {
        var w = new World();
        var light = new pointLight_1.PointLight(new color_1.Color(1, 1, 1), new point_1.Point(-10, 10, -10));
        var s1 = new sphere_1.Sphere();
        s1.material.color = new color_1.Color(0.8, 1.0, 0.6);
        s1.material.diffuse = 0.7;
        s1.material.specular = 0.2;
        var s2 = new sphere_1.Sphere();
        s2.transform = matrix_1.Matrix.scale(0.5, 0.5, 0.5);
        w.lightSource = light;
        w.objects.push(s1);
        w.objects.push(s2);
        return w;
    };
    World.prototype.intersect = function (ray) {
        var xs = new intersectionGroup_1.IntersectionGroup();
        for (var _i = 0, _a = this.objects; _i < _a.length; _i++) {
            var obj = _a[_i];
            xs.combine(obj.intersect(ray));
        }
        xs.sort();
        return xs;
    };
    World.prototype.contains = function (obj) {
        var _this = this;
        return this.objects.some(function (o) { return _this.shallowEqual(o, obj); });
    };
    World.prototype.shallowEqual = function (obj1, obj2) {
        var keys1 = Object.keys(obj1);
        var keys2 = Object.keys(obj2);
        if (keys1.length !== keys2.length) {
            return false;
        }
        for (var _i = 0, keys1_1 = keys1; _i < keys1_1.length; _i++) {
            var key = keys1_1[_i];
            if (key != "id" && _.isEqual(obj1[key], obj2[2])) {
                return false;
            }
        }
        return true;
    };
    return World;
}());
exports.World = World;
//# sourceMappingURL=world.js.map