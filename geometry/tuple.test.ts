import { Tuple } from "./tuple";

const tuple = new Tuple(1, 2, 3);

test("tuple_new_returnsZeroedTuple", () => {
    var zeroedTuple = new Tuple();
    
    expect(zeroedTuple.x).toEqual(0);
});

test("tuple_zero_returnsZeroedTuple", () => {
    var zeroedTuple = Tuple.zero();
    
    expect(zeroedTuple.x).toEqual(0);
});

test("tuple_new_tupleWithValues", () => {
    expect(tuple.x).toEqual(1);
    expect(tuple.y).toEqual(2);
    expect(tuple.z).toEqual(3);
});

test("tuple_methods_multiplyByScalar", () => {
    expect(tuple._times(2)).toEqual(new Tuple(2, 4, 6));
});

test("tuple_methods_divideByScalar", () => {
    expect(tuple._dividedBy(2)).toEqual(new Tuple(0.5, 1, 1.5));
});

test("tuple_methods_addAnotherVector", () => {
    expect(tuple._plus(tuple)).toEqual(tuple._times(2));
});

test("tuple_methods_subtractAnotherVector", () => {
    expect(tuple._minus(tuple)).toEqual(Tuple.zero());
});