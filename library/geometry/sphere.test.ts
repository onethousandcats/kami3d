import { Point } from "./point";
import { Sphere } from "./sphere"

test("sphere_cotr_isUnique", () => {
    let s1 = new Sphere();
    let s2 = new Sphere();

    expect(s1.id).not.toEqual(s2.id);
})

test("sphere_cotr_startsAtOrigin", () => {
    let s1 = new Sphere();
    let origin = new Point(0, 0, 0);

    expect(s1.position).toEqual(origin);
});