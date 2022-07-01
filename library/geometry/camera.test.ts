import { Matrix } from "../math/matrix";
import { Camera } from "./camera";
import { Point } from "./point";
import { Vector } from "./vector";

test("camera_cotr_construction", () => {
    const h = 160;
    const v = 120;
    const fov = Math.PI/2;

    let c = new Camera(h, v, fov);

    expect(c.hsize).toBe(160);
    expect(c.vsize).toBe(120);
    expect(c.fieldOfView).toBe(Math.PI/2);
    expect(c.tranform).toEqual(Matrix.identity());
})

test("camera_setup_horizontalPixelSize", () => {
    let c = new Camera(200, 125, Math.PI/2);

    expect(c.pixelSize).toBe(0.01);
});

test("camera_setup_verticalPixelSize", () => {
    let c = new Camera(125, 200, Math.PI/2);

    expect(c.pixelSize).toBe(0.01);
});

test("camera_rays_throughCenterOfCanvas", () => {
    let c = new Camera(201, 101, Math.PI/2);
    let r = c.rayAt(100, 50);

    expect(r.origin).toEqual(new Point());
    expect(r.direction).toEqual(new Vector(0, 0, -1));
});

test("camera_rays_throughCornerOfCanvas", () => {
    let c = new Camera(201, 101, Math.PI/2);
    let r = c.rayAt(0, 0);

    expect(r.origin).toEqual(new Point());
    expect(r.direction).toEqual(new Vector(0, 0, -1));
});

test("camera_rays_afterTransform", () => {
    let c = new Camera(201, 101, Math.PI/2);
    let r = c.rayAt(100, 50);

    expect(r.origin).toEqual(new Point(0, 2, -5));
    expect(r.direction).toEqual(new Vector(Math.sqrt(2)/2, 0, -Math.sqrt(2)/2));
});