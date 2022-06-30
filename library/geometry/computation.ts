import { Object3d } from "./object";
import { Point } from "./point";
import { Vector } from "./vector";

export type  Computation = {
    t: number;
    obj: Object3d;
    point: Point;
    eyev: Vector;
    normalv: Vector;
    inside: boolean;
}