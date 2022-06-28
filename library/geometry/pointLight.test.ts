import { Color } from "./color";
import { Point } from "./point";
import { PointLight } from "./pointLight";

test("pointlight_cotr_hasIntensityPosition", () => {
    let i = new Color(1, 1, 1);
    let p = new Point(0, 0, 0);

    let l = new PointLight(i, p);

    expect(l.position).toBe(p);
    expect(l.intensity).toBe(i);
});


