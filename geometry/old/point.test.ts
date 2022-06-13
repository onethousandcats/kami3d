import { Point } from "./point";
import { Vector } from "./vector";

const p = new Point(10, 11, 13);
const p2 = new Point(8, 13, 11);

test("point_constructor_returnsValidPoint", () => {
    expect(p).toEqual(new Point(10, 11, 13));
});

test("point_add_returnsSum", () => {
    expect(p._plus(p)).toEqual(new Point(2, 4, 6));
});

test("point_getVector_returnsAVector", () => {
    var v = p.getVectorBetween(p2);

    expect(v).toEqual(new Vector(2, -2, 2));
});

test("point_getVector_returnsAVector", () => {
    let p = new Point();

    expect(p.x).toEqual(0);
});