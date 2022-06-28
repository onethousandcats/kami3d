import { Color } from "./color";
import { Point } from "./point";

export class PointLight {
    intensity: Color;
    position: Point;

    constructor(intesity: Color, position: Point) {
        this.intensity = intesity;
        this.position = position;
    }
}
