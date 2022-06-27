"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sphere = void 0;
var object_1 = require("./object");
var Sphere = /** @class */ (function (_super) {
    __extends(Sphere, _super);
    function Sphere() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Sphere;
}(object_1.Object3d));
exports.Sphere = Sphere;
//# sourceMappingURL=sphere.js.map