import { Matrix } from "../math/matrix";
import { IntersectionGroup } from "./intersectionGroup";
import { Point } from "./point";
import { Ray } from "./ray";
import { Sphere } from "./sphere"
import { Vector } from "./vector";

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

test("sphere_transform_default", () => {
    let s = new Sphere();
    
    expect(s.transform).toEqual(Matrix.identity());
});

test("sphere_transform_changed", () => {
    let s = new Sphere();
    let t = Matrix.translate(2, 3, 4);

    s.transform = t;
    
    expect(s.transform).toEqual(t);
});

test("sphere_scaled_intersectWithRay", () => {
    let r = new Ray(new Point(0, 0, -5), new Vector(0, 0, 1));
    let s = new Sphere();

    s.transform = Matrix.scale(2, 2, 2);
    let xs = s.intersect(r);

    expect(xs.count).toEqual(2);
    expect(xs.xs[0].t).toEqual(3);
    expect(xs.xs[1].t).toEqual(7);
});

test("sphere_translated_intersectWithRay", () => {
    let r = new Ray(new Point(0, 0, -5), new Vector(0, 0, 1));
    let s = new Sphere();

    s.transform = Matrix.translate(5, 0, 0);
    let xs = s.intersect(r);

    expect(xs.count).toEqual(0);
});

test("sphere_normal_xAxis", () => {
    let s = new Sphere();

    expect(s.normalAt(new Point(1, 0, 0))).toEqual(new Vector(1, 0, 0));
});

test("sphere_normal_yAxis", () => {
    let s = new Sphere();

    expect(s.normalAt(new Point(0, 1, 0))).toEqual(new Vector(0, 1, 0));
});

test("sphere_normal_zAxis", () => {
    let s = new Sphere();

    expect(s.normalAt(new Point(0, 0, 1))).toEqual(new Vector(0, 0, 1));
});

test("sphere_normal_nonAxialPoint", () => {
    let s = new Sphere();
    let sq3by3 = Math.sqrt(3)/3;

    expect(s.normalAt(new Point(sq3by3, sq3by3, sq3by3))).toEqual(new Vector(sq3by3, sq3by3, sq3by3));
});

test("sphere_normal_isNormalized", () => {
    let s = new Sphere();
    let sq3by3 = Math.sqrt(3)/3;

    let n = s.normalAt(new Point(sq3by3, sq3by3, sq3by3));

    expect(n).toEqual(n.normalize());
});