import { Point } from "./point"
import { Ray } from "./ray";
import { Vector } from "./vector";

test("rays_function_createAndQuery", () => {
    let origin = new Point(1, 2, 3);
    let direction = new Vector(4, 5, 6);
    
    let r = new Ray(origin, direction);

    expect(r.origin).toEqual(origin);
    expect(r.direction).toEqual(direction);
})