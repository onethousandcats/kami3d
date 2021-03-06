import { Matrix } from "../math/matrix";
import { Color } from "./color";
import { Intersection } from "./intersection";
import { Point } from "./point";
import { PointLight } from "./pointLight";
import { Ray } from "./ray";
import { Sphere } from "./sphere";
import { Vector } from "./vector";
import { World } from "./world";

test("world_cotr_isEmpty", () => {
    const w = new World();

    expect(w.objects.length).toBe(0);
    expect(w.lightSource).toBe(null);
});

test("world_default_isDefaultWorld", () => {
    const light = new PointLight(new Color(1, 1, 1), new Point(-10, 10, -10));

    let s1 = new Sphere();
    s1.material.color = new Color(0.8, 1.0, 0.6);
    s1.material.diffuse = 0.7;
    s1.material.specular = 0.2;

    let s2 = new Sphere();
    s2.transform = Matrix.scale(0.5, 0.5, 0.5);

    let w = World.Default();

    expect(w.lightSource).toEqual(light);
    expect(w.contains(s1)).toBeTruthy();  
    expect(w.contains(s2)).toBeTruthy();
});

test("world_intersect_withRay", () => {
    let w = World.Default();
    let r = new Ray(new Point(0, 0, -5), new Vector(0, 0, 1));

    let xs = w.intersect(r);

    expect(xs.count).toBe(4);
    expect(xs.xs[0].t).toBe(4);
    expect(xs.xs[1].t).toBe(4.5);
    expect(xs.xs[2].t).toBe(5.5);
    expect(xs.xs[3].t).toBe(6);
});

test("world_intersection_shading", () => {
    let w = World.Default();
    let r = new Ray(new Point(0, 0, -5), new Vector(0, 0, 1));

    let shape = w.objects[0];
    let i = new Intersection(shape, 4);

    let comps = i.prepareComputations(r);
    let c = w.shadeHit(comps);

    expect(c).toEqual(new Color(0.38066119308103435, 0.47582649135129296, 0.28549589481077575));    
});

test("world_intersection_shading", () => {
    let w = World.Default();
    w.lightSource = new PointLight(new Color(1, 1, 1), new Point(0, 0.25, 0));
    let r = new Ray(new Point(0, 0, 0), new Vector(0, 0, 1));

    let shape = w.objects[1];
    let i = new Intersection(shape, 0.5);

    let comps = i.prepareComputations(r);
    let c = w.shadeHit(comps);

    expect(c).toEqual(new Color(0.9049844720832575, 0.9049844720832575, 0.9049844720832575));    
});

test("world_color_rayMisses", () => {
    let w = World.Default();
    let r = Ray.startingAt(0, 0, -5)
        .withDirectionOf(0, 1, 0);

    let c = w.colorAt(r);

    expect(c).toEqual(Color.black());
});

test("world_color_rayHits", () => {
    let w = World.Default();
    let r = Ray.startingAt(0, 0, -5)
        .withDirectionOf(0, 0, 1);

    let c = w.colorAt(r);

    expect(c).toEqual(new Color(0.38066119308103435, 0.47582649135129296, 0.28549589481077575));
});

test("world_color_intersectionBehindRay", () => {
    let w = World.Default();
    
    let outer = w.objects[0];
    outer.material.ambient = 1;
    
    let inner = w.objects[1]
    inner.material.ambient = 1;
    
    let r = Ray.startingAt(0, 0, 0.75)
        .withDirectionOf(0, 0, -1);
    let c = w.colorAt(r);

    expect(c).toEqual(inner.material.color);
});

