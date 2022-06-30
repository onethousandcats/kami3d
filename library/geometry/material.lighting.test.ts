import { Color } from "./color";
import { Material } from "./material";
import { Point } from "./point";
import { PointLight } from "./pointLight";
import { Vector } from "./vector";

let m: Material, p: Point;

beforeEach(() => {
    m = new Material();
    p = new Point();
});

test("material_lighting_eyeBetweenLightandSurface", () => {
    let eyev = new Vector(0, 0, -1);
    let normalv = new Vector(0, 0, -1);

    let light = new PointLight(new Color(1, 1, 1), new Point(0, 0, -10));

    let result = m.lighting(light, p, eyev, normalv);

    expect(result).toEqual(new Color(1.9, 1.9, 1.9));
});

test("material_lighting_eyeBetweenLightandSurfaceOffset45", () => {
    let eyev = new Vector(0, Math.sqrt(2) / 2, -Math.sqrt(2) / 2);
    let normalv = new Vector(0, 0, -1);

    let light = new PointLight(new Color(1, 1, 1), new Point(0, 0, -10));

    let result = m.lighting(light, p, eyev, normalv);

    expect(result).toEqual(new Color(1.0, 1.0, 1.0));
});

test("material_lighting_pathOfReflectionVector", () => {
    let eyev = new Vector(0, -Math.sqrt(2) / 2, -Math.sqrt(2) / 2);
    let normalv = new Vector(0, 0, -1);

    let light = new PointLight(new Color(1, 1, 1), new Point(0, 10, -10));

    let result = m.lighting(light, p, eyev, normalv);

    expect(result.x).toBeCloseTo(1.6364);
    expect(result.y).toBeCloseTo(1.6364);
    expect(result.z).toBeCloseTo(1.6364);
});

test("material_lighting_eyeOppositeSurfaceOffset45", () => {
    let eyev = new Vector(0, 0, -1);
    let normalv = new Vector(0, 0, -1);

    let light = new PointLight(new Color(1, 1, 1), new Point(0, 10, -10));

    let result = m.lighting(light, p, eyev, normalv);

    expect(result.x).toBeCloseTo(0.7364);
    expect(result.y).toBeCloseTo(0.7364);
    expect(result.z).toBeCloseTo(0.7364);
});

test("material_lighting_behindTheSurface", () => {
    let eyev = new Vector(0, 0, -1);
    let normalv = new Vector(0, 0, -1);

    let light = new PointLight(new Color(1, 1, 1), new Point(0, 0, 10));

    let result = m.lighting(light, p, eyev, normalv);

    expect(result.x).toBeCloseTo(0.1);
    expect(result.y).toBeCloseTo(0.1);
    expect(result.z).toBeCloseTo(0.1);
});