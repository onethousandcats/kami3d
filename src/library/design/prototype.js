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
//# sourceMappingURL=prototype.js.map