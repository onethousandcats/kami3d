
import { Vector } from './vector';

const v = new Vector(2, -3, 4);

test("vector_constructor_returnsValidVector", () => {
    expect(v instanceof Vector).toEqual(true);
});

test("vector_constructor_canBeNegated", () => {
    let vNegative = v._negate();

    expect(vNegative).toEqual(new Vector(-2, 3, -4))
});