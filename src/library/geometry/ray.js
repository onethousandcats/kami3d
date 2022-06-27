"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ray = void 0;
var intersectionGroup_1 = require("./intersectionGroup");
var Ray = /** @class */ (function () {
    function Ray(origin, direction) {
        this.origin = origin;
        this.direction = direction;
    }
    Ray.prototype.position = function (t) {
        return this.origin.plus(this.direction.times(t));
    };
    Ray.prototype.intersects = function (object) {
        var intersections = new intersectionGroup_1.IntersectionGroup();
        var oToRay = this.origin.minus(object.position);
        var a = this.direction.dot(this.direction);
        var b = 2 * this.direction.dot(oToRay);
        var c = oToRay.dot(oToRay) - 1;
        var d = this.discriminant(a, b, c);
        if (d < 0) {
            return intersections;
        }
        var t1 = (-b - Math.sqrt(d)) / (2 * a);
        var t2 = (-b + Math.sqrt(d)) / (2 * a);
        intersections.add(t1, object);
        intersections.add(t2, object);
        return intersections;
    };
    Ray.prototype.discriminant = function (a, b, c) {
        return Math.pow(b, 2) - 4 * a * c;
    };
    Ray.prototype.transform = function (m) {
        var d = m.times(this.direction);
        var o = m.times(this.origin);
        return new Ray(o, d);
    };
    return Ray;
}());
exports.Ray = Ray;
//# sourceMappingURL=ray.js.map