import { Matrix } from "../math/matrix";
import { Camera } from "./camera";

test("camera_cotr_construction", () => {
    const h = 160;
    const v = 120;
    const fov = Math.PI / 2;

    let c = new Camera(h, v, fov);

    expect(c.hsize).toBe(160);
    expect(c.vsize).toBe(120);
    expect(c.fieldOfView).toBe(Math.PI / 2);
    expect(c.tranform).toEqual(Matrix.identity());
})

test("camera_setup_horizontalPixelSize", () => {
    let c = new Camera(200, 125, Math.PI / 2);

    expect(c.pixelSize).toBe(0.01);
});

test("camera_setup_verticalPixelSize", () => {
    let c = new Camera(125, 200, Math.PI / 2);

    expect(c.pixelSize).toBe(0.01);
});