import { Matrix } from "../math/matrix";
import { Point } from "./point";
import { Transformations } from "./transformations";
import { Vector } from "./vector";

test("transformations_view_default", () => {
    let from = new Point();
    let to = new Point(0, 0, -1);
    let up = new Vector(0, 1, 0);

    let vt = Transformations.View(from, to, up);

    expect(vt).toEqual(Matrix.identity());
});

test("transformations_view_positiveZ", () => {
    let from = new Point();
    let to = new Point(0, 0, 1);
    let up = new Vector(0, 1, 0);

    let vt = Transformations.View(from, to, up);

    expect(vt).toEqual(Matrix.scale(-1, 1, -1));
});

test("transformations_view_doesMoveTheWorld", () => {
    let from = new Point(0, 0, 8);
    let to = new Point();
    let up = new Vector(0, 1, 0);

    let vt = Transformations.View(from, to, up);

    expect(vt).toEqual(Matrix.translate(0, 0, -8));
});

test("transformations_view_arbitraryTransformation", () => {
    const result = new Matrix([
        [-0.5070925528371099, 0.5070925528371099, 0.6761234037828132, -2.366431913239846],
        [0.7677159338596801, 0.6060915267313263, 0.12121830534626524, -2.8284271247461894],
        [-0.35856858280031806, 0.5976143046671968, -0.7171371656006361, 0],
        [0, 0, 0, 1]
    ]);
    
    let from = new Point(1, 3, 2);
    let to = new Point(4, -2, 8);
    let up = new Vector(1, 1, 0);

    let vt = Transformations.View(from, to, up);

    expect(vt).toEqual(result);
});