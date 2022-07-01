"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IntersectionGroup = void 0;
var intersection_1 = require("./intersection");
var IntersectionGroup = /** @class */ (function () {
    function IntersectionGroup(intersections) {
        var _a;
        this.sortByT = function (a, b) {
            return a.t > b.t ? 1 : -1;
        };
        this.intersections = (_a = intersections === null || intersections === void 0 ? void 0 : intersections.sort(this.sortByT)) !== null && _a !== void 0 ? _a : [];
    }
    Object.defineProperty(IntersectionGroup.prototype, "count", {
        get: function () { return this.intersections.length; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IntersectionGroup.prototype, "xs", {
        get: function () { return this.intersections; },
        enumerable: false,
        configurable: true
    });
    IntersectionGroup.prototype.add = function (t, obj) {
        this.pushSort(t instanceof intersection_1.Intersection ? t : new intersection_1.Intersection(obj, t));
    };
    IntersectionGroup.prototype.hit = function () {
        for (var i = 0; i < this.count; i++) {
            if (this.intersections[i].t > 0) {
                return this.intersections[i];
            }
        }
        return null;
    };
    IntersectionGroup.prototype.sort = function () {
        this.xs.sort(this.sortByT);
    };
    IntersectionGroup.prototype.combine = function (xs) {
        this.intersections = [].concat(this.intersections, xs.intersections);
    };
    IntersectionGroup.prototype.pushSort = function (i) {
        this.intersections.push(i);
        this.sort();
        return this.count;
    };
    return IntersectionGroup;
}());
exports.IntersectionGroup = IntersectionGroup;
//# sourceMappingURL=intersectionGroup.js.map