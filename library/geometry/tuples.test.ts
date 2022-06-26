import { Point } from "./point";
import { Tuple } from "./tuple";
import { Tuples } from "./tuples";

test("tuples_tuple_convertToPoint", () => {
    let tuple = new Tuple(1, 2, 3, 1);

    let point = Tuples.convertTupleToType(tuple);

    expect(tuple.isPoint).toBeTruthy();
    expect(point instanceof Point).toBeTruthy();
});