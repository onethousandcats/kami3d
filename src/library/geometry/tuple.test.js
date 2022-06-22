"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tuple_1 = require("./tuple");
var tuple = new tuple_1.Tuple(1, 2, 3);
test("tuple_new_returnsZeroedTuple", function () {
    var zeroedTuple = new tuple_1.Tuple();
    expect(zeroedTuple.x).toEqual(0);
});
test("tuple_zero_returnsZeroedTuple", function () {
    var zeroedTuple = tuple_1.Tuple.zero();
    expect(zeroedTuple.x).toEqual(0);
});
test("tuple_new_tupleWithValues", function () {
    expect(tuple.x).toEqual(1);
    expect(tuple.y).toEqual(2);
    expect(tuple.z).toEqual(3);
});
test("tuple_methods_multiplyByScalar", function () {
    expect(tuple.times(2)).toEqual(new tuple_1.Tuple(2, 4, 6));
});
test("tuple_methods_multiplyByVector", function () {
    expect(tuple.times(tuple)).toEqual(new tuple_1.Tuple(1, 4, 9));
});
test("tuple_methods_divideByScalar", function () {
    expect(tuple.dividedBy(2)).toEqual(new tuple_1.Tuple(0.5, 1, 1.5));
});
test("tuple_methods_addAnotherTuple", function () {
    expect(tuple.plus(tuple)).toEqual(tuple.times(2));
});
test("tuple_methods_subtractAnotherTuple", function () {
    expect(tuple.minus(tuple)).toEqual(tuple_1.Tuple.zero());
});
test("tuple_methods_magnitude", function () {
    expect(tuple.magnitude()).toEqual(Math.sqrt(14));
    expect(new tuple_1.Tuple(1, 0, 0).magnitude()).toEqual(1);
});
test("tuple_methods_normalize", function () {
    expect(tuple.normalize()).toEqual(new tuple_1.Tuple(0.2672612419124244, 0.5345224838248488, 0.8017837257372732));
    expect(new tuple_1.Tuple(5, 0, 0).normalize()).toEqual(new tuple_1.Tuple(1, 0, 0));
});
test("tuple_methods_dotProduct", function () {
    expect(tuple.dot(new tuple_1.Tuple(2, 3, 4))).toEqual(20.0);
});
test("tuple_methods_crossProduct", function () {
    var t1 = new tuple_1.Tuple(1, 2, 3);
    var t2 = new tuple_1.Tuple(2, 3, 4);
    var t3 = new tuple_1.Tuple(-1, 2, -1);
    expect(t1.cross(t2)).toEqual(t3);
    expect(t2.cross(t1)).toEqual(t3.negate());
});
//# sourceMappingURL=tuple.test.js.map