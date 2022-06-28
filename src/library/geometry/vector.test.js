"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vector_1 = require("./vector");
test("vector_reflect_at45degrees", function () {
    var v = new vector_1.Vector(1, -1, 0);
    var n = new vector_1.Vector(0, 1, 0);
    var expected = new vector_1.Vector(1, 1, 0);
    expect(v.reflect(n)).toEqual(expected);
});
test("vector_reflect_offSlantedSurface", function () {
    var v = new vector_1.Vector(0, -1, 0);
    var n = new vector_1.Vector(Math.sqrt(2) / 2, Math.sqrt(2) / 2, 0);
    var expected = new vector_1.Vector(1, 0, 0);
    var r = v.reflect(n);
    expect(r.x).toBeCloseTo(expected.x);
    expect(r.y).toBeCloseTo(expected.y);
    expect(r.z).toBeCloseTo(expected.z);
});
//# sourceMappingURL=vector.test.js.map