import { Tuple } from "./tuple";

test("tuple_new_returnsZeroedTuple", () => {
    var zeroedTuple = new Tuple();
    
    expect(zeroedTuple.x).toEqual(0);
});

test("tuple_zero_returnsZeroedTuple", () => {
    var zeroedTuple = Tuple.zero();
    
    expect(zeroedTuple.x).toEqual(0);
});

test("tuple_new_tupleWithValues", () => {
    var tuple = new Tuple(1, 2, 3);
    
    expect(tuple.x).toEqual(1);
    expect(tuple.y).toEqual(2);
    expect(tuple.z).toEqual(3);
});

test("tuple_hello_canCallMethod", () => {
    var tuple = new Tuple();
    expect(tuple.helloTest()).toEqual("test");
});