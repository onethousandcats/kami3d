import { Point } from "./point";
import { Vector } from "./vector";

export class Ray {
    origin: Point;
    direction: Vector;

    constructor(origin: Point, direction: Vector) {
        this.origin = origin;
        this.direction = direction;
    }
    
}