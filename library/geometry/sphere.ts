import { Object3d } from "./object";
import { Point } from "./point";
import { Vector } from "./vector";

export class Sphere extends Object3d{
    normalAt(p: Point): Vector {
        let objectPoint = this.transform.inverse().times(p);
        let objectNormal = objectPoint.minus(new Point());

        p = this.transform.inverse().transpose().times(objectNormal);
        p.w = 0;

        return p.normalize() as Vector;
    }
}