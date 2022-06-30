"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ranger = exports.Druid = void 0;
var Druid = /** @class */ (function () {
    function Druid(name) {
        this.name = name;
        this.spells = [];
        this.health = 100;
    }
    Druid.prototype.clone = function () {
        var _this = this;
        var cloned = Object.create(Druid.prototype || null);
        Object.getOwnPropertyNames(this).map(function (key) {
            if (key === "name") {
                cloned[key] = "Unknown";
            }
            else {
                cloned[key] = _this[key];
            }
        });
        return cloned;
    };
    return Druid;
}());
exports.Druid = Druid;
var Ranger = /** @class */ (function () {
    function Ranger(name) {
        this.name = name;
        this.weapon = "Dagger";
        this.health = 150;
    }
    Ranger.prototype.clone = function () {
        var _this = this;
        var cloned = Object.create(Ranger.prototype || null);
        Object.getOwnPropertyNames(this).map(function (key) {
            if (key === "weapon") {
                cloned[key] = "Bare Hands";
            }
            else {
                cloned[key] = _this[key];
            }
        });
        return cloned;
    };
    return Ranger;
}());
exports.Ranger = Ranger;
//# sourceMappingURL=prototype.js.map