import { Vector } from "./vector";

test("vector_reflect_at45degrees", () => {
    let v = new Vector(1, -1, 0);
    let n = new Vector(0, 1, 0);

    let expected = new Vector(1, 1, 0);

    expect(v.reflect(n)).toEqual(expected);
});

test("vector_reflect_offSlantedSurface", () => {
    let v = new Vector(0, -1, 0);
    let n = new Vector(Math.sqrt(2) / 2, Math.sqrt(2) / 2, 0);

    let expected = new Vector(1, 0, 0);

    let r = v.reflect(n);

    expect(r.x).toBeCloseTo(expected.x);
    expect(r.y).toBeCloseTo(expected.y);
    expect(r.z).toBeCloseTo(expected.z);
});
