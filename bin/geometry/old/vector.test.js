"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vector_1 = require("./vector");
var v = new vector_1.Vector(2, -3, 4);
test("vector_constructor_returnsValidVector", function () {
    expect(v instanceof vector_1.Vector).toEqual(true);
});
test("vector_constructor_canBeNegated", function () {
    var vNegative = v._negate();
    expect(vNegative).toEqual(new vector_1.Vector(-2, 3, -4));
});
//# sourceMappingURL=vector.test.js.map