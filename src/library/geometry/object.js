"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Object3d = void 0;
var uuid_1 = require("uuid");
var matrix_1 = require("../math/matrix");
var material_1 = require("./material");
var point_1 = require("./point");
var Object3d = /** @class */ (function () {
    function Object3d() {
        this.id = (0, uuid_1.v4)();
        this.position = new point_1.Point();
        this.transform = matrix_1.Matrix.identity();
        this.material = new material_1.Material();
    }
    Object3d.prototype.intersect = function (r) {
        var transformedRay = r.transform(this.transform.inverse());
        return transformedRay.intersects(this);
    };
    return Object3d;
}());
exports.Object3d = Object3d;
//# sourceMappingURL=object.js.map