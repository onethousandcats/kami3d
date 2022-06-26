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
exports.Color = void 0;
var tuple_1 = require("./tuple");
var Color = /** @class */ (function (_super) {
    __extends(Color, _super);
    function Color(r, g, b, a) {
        var _this = this;
        if (r instanceof Array) {
            _this = _super.call(this, r) || this;
        }
        else if (typeof (r) === "number") {
            _this = _super.call(this, [r, g, b, a !== null && a !== void 0 ? a : 0]) || this;
        }
        else {
            _this = _super.call(this, [0, 0, 0, a !== null && a !== void 0 ? a : 0]) || this;
        }
        return _this;
    }
    Object.defineProperty(Color.prototype, "red", {
        get: function () { return this.x; },
        set: function (val) { this.x = val; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Color.prototype, "green", {
        get: function () { return this.y; },
        set: function (val) { this.y = val; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Color.prototype, "blue", {
        get: function () { return this.z; },
        set: function (val) { this.z = val; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Color.prototype, "alpha", {
        get: function () { return this.w; },
        set: function (val) { this.w = val; },
        enumerable: false,
        configurable: true
    });
    Color.prototype.plus = function (val) {
        return new Color(_super.prototype.plus.call(this, val).vals);
    };
    Color.prototype.minus = function (val) {
        return new Color(_super.prototype.minus.call(this, val).vals);
    };
    Color.prototype.times = function (val) {
        return new Color(_super.prototype.times.call(this, val).vals);
    };
    Color.black = function () {
        return new Color(0, 0, 0);
    };
    return Color;
}(tuple_1.Tuple));
exports.Color = Color;
//# sourceMappingURL=color.js.map