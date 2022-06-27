import { Matrix } from "../math/matrix";
import { Point } from "./point"
import { Ray } from "./ray";
import { Sphere } from "./sphere";
import { Vector } from "./vector";

test("rays_function_createAndQuery", () => {
    let origin = new Point(1, 2, 3);
    let direction = new Vector(4, 5, 6);
    
    let r = new Ray(origin, direction);

    expect(r.origin).toEqual(origin);
    expect(r.direction).toEqual(direction);
})

test("rays_position_computePointFromADistance", () => {
    let r = new Ray(new Point(2, 3, 4), new Vector(1, 0, 0));

    expect(r.position(0)).toEqual(new Point(2, 3, 4));
    expect(r.position(1)).toEqual(new Point(3, 3, 4));
    expect(r.position(-1)).toEqual(new Point(1, 3, 4));
    expect(r.position(2.5)).toEqual(new Point(4.5, 3, 4));
});

test("rays_intersect_sphereAtTwoPoints", () => {
    let p = new Point(0, 0, -5)
    let v = new Vector(0, 0, 1);

    let r = new Ray(p, v);

    let s = new Sphere();

    let xs = r.intersects(s);

    expect(xs.count).toEqual(2);
    expect(xs.intersections[0].t).toEqual(4.0);
    expect(xs.intersections[1].t).toEqual(6.0);
});

test("rays_intersect_sphereAtTangent", () => {
    let p = new Point(0, 1, -5)
    let v = new Vector(0, 0, 1);

    let r = new Ray(p, v);

    let s = new Sphere();

    let xs = r.intersects(s);

    expect(xs.count).toEqual(2);
    expect(xs.intersections[0].t).toEqual(5.0);
    expect(xs.intersections[1].t).toEqual(5.0);
});

test("rays_intersect_nothing", () => {
    let p = new Point(0, 2, -5)
    let v = new Vector(0, 0, 1);

    let r = new Ray(p, v);

    let s = new Sphere();

    let xs = r.intersects(s);

    expect(xs.count).toEqual(0);
});

test("rays_intersect_insideSphere", () => {
    let p = new Point(0, 0, 0)
    let v = new Vector(0, 0, 1);

    let r = new Ray(p, v);

    let s = new Sphere();

    let xs = r.intersects(s);

    expect(xs.count).toEqual(2);
    expect(xs.intersections[0].t).toEqual(-1.0);
    expect(xs.intersections[1].t).toEqual(1.0);
});

test("rays_intersect_inFrontOfSphere", () => {
    let p = new Point(0, 0, 5)
    let v = new Vector(0, 0, 1);

    let r = new Ray(p, v);

    let s = new Sphere();

    let xs = r.intersects(s);

    expect(xs.count).toEqual(2);
    expect(xs.intersections[0].t).toEqual(-6.0);
    expect(xs.intersections[1].t).toEqual(-4.0);
});

test("rays_transform_translate", () => {
    let r = new Ray(new Point(1, 2, 3), new Vector(0, 1, 0));
    let m = Matrix.translate(3, 4, 5);

    let r2 = r.transform(m);

    expect(r2.origin).toEqual(new Point(4, 6, 8));
    expect(r2.direction).toEqual(new Vector(0, 1, 0));
});

test("rays_transform_scale", () => {
    let r = new Ray(new Point(1, 2, 3), new Vector(0, 1, 0));
    let m = Matrix.scale(2, 3, 4);

    let r2 = r.transform(m);

    expect(r2.origin).toEqual(new Point(2, 6, 12));
    expect(r2.direction).toEqual(new Vector(0, 3, 0));
});