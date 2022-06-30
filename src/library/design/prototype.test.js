"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prototype_1 = require("./prototype");
test("prototype_creates_druid", function () {
    var d = new prototype_1.Druid("Sage");
    expect(d.clone()).toBeInstanceOf(prototype_1.Druid);
    expect(JSON.stringify(d.clone())).toBe('{"name":"Unknown","spells":[],"health":100}');
});
test("prototype_creates_ranger", function () {
    var r = new prototype_1.Ranger("Sybil");
    expect(r.clone()).toBeInstanceOf(prototype_1.Ranger);
    expect(JSON.stringify(r.clone())).toBe('{"name":"Sybil","weapon":"Bare Hands","health":150}');
});
//# sourceMappingURL=prototype.test.js.map