import { Object3d } from "./object";
import { Point } from "./point";
import { Vector } from "./vector";

export class Sphere extends Object3d{
    normalAt(p: Point): Vector {
        return p.minus(new Point()).normalize();
    }
}