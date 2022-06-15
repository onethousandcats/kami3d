import { Point } from "./point";

const p1 = new Point(10, 11, 13);
const p2 = new Point(8, 13, 11);

test("point_new_pointWithValues", () => {
    expect(p1.x).toEqual(10);
    expect(p1.y).toEqual(11);
    expect(p1.z).toEqual(13);
});

test("point_add_returnsSum", () => {
    expect(p1.plus(p2)).toEqual(new Point(18, 24, 24));
});

test("point_subtract_returnsSum", () => {
    expect(p1.minus(p2)).toEqual(new Point(2, -2, 2));
});

test("point_negate_returnsNegation", () => {
    expect(p1.negate()).toEqual(new Point(-10, -11, -13));
});
