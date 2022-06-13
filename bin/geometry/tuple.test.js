"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tuple_1 = require("./tuple");
test("tuple_new_returnsZeroedTuple", function () {
    var zeroedTuple = new tuple_1.Tuple();
    expect(zeroedTuple.x).toEqual(0);
});
test("tuple_zero_returnsZeroedTuple", function () {
    var zeroedTuple = tuple_1.Tuple.zero();
    expect(zeroedTuple.x).toEqual(0);
});
test("tuple_new_tupleWithValues", function () {
    var tuple = new tuple_1.Tuple(1, 2, 3);
    expect(tuple.x).toEqual(1);
    expect(tuple.y).toEqual(2);
    expect(tuple.z).toEqual(3);
});
test("tuple_hello_canCallMethod", function () {
    var tuple = new tuple_1.Tuple();
    expect(tuple.helloTest()).toEqual("test");
});
//# sourceMappingURL=tuple.test.js.map