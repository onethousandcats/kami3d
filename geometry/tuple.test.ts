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
    expect(tuple.times(2)).toEqual(new Tuple(2, 4, 6));
});

test("tuple_methods_multiplyByVector", () => {
    expect(tuple.times(tuple)).toEqual(new Tuple(1, 4, 9));
});

test("tuple_methods_divideByScalar", () => {
    expect(tuple.dividedBy(2)).toEqual(new Tuple(0.5, 1, 1.5));
});

test("tuple_methods_addAnotherTuple", () => {
    expect(tuple.plus(tuple)).toEqual(tuple.times(2));
});

test("tuple_methods_subtractAnotherTuple", () => {
    expect(tuple.minus(tuple)).toEqual(Tuple.zero());
});

test("tuple_methods_magnitude", () => {
    expect(tuple.magnitude()).toEqual(Math.sqrt(14));
    expect(new Tuple(1, 0, 0).magnitude()).toEqual(1);
});

test("tuple_methods_normalize", () => {
    expect(tuple.normalize()).toEqual(new Tuple(0.2672612419124244, 0.5345224838248488, 0.8017837257372732));
    expect(new Tuple(5, 0, 0).normalize()).toEqual(new Tuple(1, 0, 0));
});

test("tuple_methods_dotProduct", () => {
    expect(tuple.dot(new Tuple(2, 3, 4))).toEqual(20.0);
});

test("tuple_methods_crossProduct", () => {
    let t1 = new Tuple(1, 2, 3);
    let t2 = new Tuple(2, 3, 4);
    let t3 = new Tuple(-1, 2, -1);

    expect(t1.cross(t2)).toEqual(t3);
    expect(t2.cross(t1)).toEqual(t3.negate());
});