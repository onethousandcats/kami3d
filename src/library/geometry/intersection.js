"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Intersection = void 0;
var Intersection = /** @class */ (function () {
    function Intersection(obj, t) {
        this.obj = obj;
        this.t = t;
    }
    Intersection.prototype.prepareComputations = function (r) {
        var p = r.position(this.t);
        var eyev = r.direction.negate();
        var normalv = this.obj.normalAt(p);
        var inside = false;
        if (normalv.dot(eyev) < 0) {
            inside = true;
            normalv = normalv.negate();
        }
        var comps = {
            t: this.t,
            obj: this.obj,
            point: p,
            eyev: eyev,
            normalv: normalv,
            inside: inside,
        };
        return comps;
    };
    return Intersection;
}());
exports.Intersection = Intersection;
//# sourceMappingURL=intersection.js.map