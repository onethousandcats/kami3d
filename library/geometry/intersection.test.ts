import { Intersection } from "./intersection";
import { IntersectionGroup } from "./intersectionGroup";
import { Point } from "./point";
import { Ray } from "./ray";
import { Sphere } from "./sphere";
import { Vector } from "./vector";

test("intersections_cotr_returnsCorrectProperties", () => {
    let s = new Sphere();
    let i = new Intersection(s, 3.5);

    expect(i.t).toEqual(3.5);
    expect(i.obj).toEqual(s);
});

test("intersections_aggregation_intersections", () => {
    let s = new Sphere();
    let i1 = new Intersection(s, 1);
    let i2 = new Intersection(s, 2);

    let ig = new IntersectionGroup([i1, i2]);

    expect(ig.intersections.length).toEqual(2);
    expect(ig.intersections[0].t).toEqual(1);
    expect(ig.intersections[1].t).toEqual(2);
});

test("intersections_functions_setObjectOnIntersection", () => {
    let r = new Ray(new Point(0, 0, -5), new Vector(0, 0, 1));
    let s = new Sphere();

    let xs = r.intersects(s);

    expect(xs.count).toEqual(2);
    expect(xs.intersections[0].obj).toEqual(s);
    expect(xs.intersections[1].obj).toEqual(s);
});

test("intersections_hit_allPositiveT", () => {
    let s = new Sphere();
    let i1 = new Intersection(s, 1);
    let i2 = new Intersection(s, 2);

    let xs = new IntersectionGroup([i1, i2]);

    expect(xs.hit()).toEqual(i1);
});

test("intersections_hit_someNegativeT", () => {
    let s = new Sphere();
    let i1 = new Intersection(s, -1);
    let i2 = new Intersection(s, 1);

    let xs = new IntersectionGroup([i1, i2]);

    expect(xs.hit()).toEqual(i2);
});

test("intersections_hit_allNegativeT", () => {
    let s = new Sphere();
    let i1 = new Intersection(s, -2);
    let i2 = new Intersection(s, -1);

    let xs = new IntersectionGroup([i1, i2]);

    expect(xs.hit()).toEqual(null);
});

test("intersections_hit_alwaysLowestNonnegative", () => {
    let s = new Sphere();
    let i1 = new Intersection(s, 5);
    let i2 = new Intersection(s, 7);
    let i3 = new Intersection(s, -3);
    let i4 = new Intersection(s, 2);

    let xs = new IntersectionGroup([i1, i2, i3, i4]);

    expect(xs.hit()).toEqual(i4);
});

test("intersections_add_putsInCorrectOrder", () => {
    let s = new Sphere();
    let i1 = new Intersection(s, 5);
    let i2 = new Intersection(s, 7);
    let i3 = new Intersection(s, -3);
    let i4 = new Intersection(s, 2);

    let xs = new IntersectionGroup([i1, i2, i3]);

    xs.add(i4);

    expect(xs.intersections[1]).toEqual(i4);
});

test("intersections_precompute_intersectionState", () => {
    let r = new Ray(new Point(0, 0, -5), new Vector(0, 0, 1));
    let s = new Sphere();
    let i = new Intersection(s, 4);

    let comps = i.prepareComputations(r);

    expect(comps.t).toBe(i.t);
    expect(comps.obj).toEqual(i.obj);
    expect(comps.point).toEqual(new Point(0, 0, -1));
    expect(comps.eyev).toEqual(new Vector(0, 0, -1));
    expect(comps.normalv).toEqual(new Vector(0, 0, -1));
});

test("intersections_precompute_hitOccursOutside", () => {
    let r = new Ray(new Point(0, 0, -5), new Vector(0, 0, 1));
    let s = new Sphere();
    let i = new Intersection(s, 4);

    let comps = i.prepareComputations(r);

    expect(comps.inside).toBeFalsy();
});

test("intersections_precompute_hitOccursInside", () => {
    let r = new Ray(new Point(0, 0, 0), new Vector(0, 0, 1));
    let s = new Sphere();
    let i = new Intersection(s, 1);

    let comps = i.prepareComputations(r);

    expect(comps.inside).toBeTruthy();
    expect(comps.point).toEqual(new Point(0, 0, 1));
    expect(comps.eyev).toEqual(new Vector(0, 0, -1));
    expect(comps.normalv).toEqual(new Vector(0, 0, -1));
});

test("intersections_shading_inside", () => {

});