import { Matrix } from "../math/matrix";
import { IntersectionGroup } from "./intersectionGroup";
import { Object3d } from "./object";
import { Point } from "./point";
import { Vector } from "./vector";

export class Ray {
    origin: Point;
    direction: Vector;

    constructor(origin: Point, direction: Vector) {
        this.origin = origin;
        this.direction = direction;
    }

    position(t: number): Point {
        return this.origin.plus(this.direction.times(t));
    }
    
    intersects(object: Object3d): IntersectionGroup {
        let intersections = new IntersectionGroup();

        let oToRay = this.origin.minus(object.position);

        let a = this.direction.dot(this.direction);
        let b = 2 * this.direction.dot(oToRay);
        let c = oToRay.dot(oToRay) - 1;

        let d = this.discriminant(a, b, c);

        if (d < 0) {
            return intersections;
        }

        let t1 = (-b - Math.sqrt(d)) / (2 * a);
        let t2 = (-b + Math.sqrt(d)) / (2 * a);

        intersections.add(t1, object);
        intersections.add(t2, object);

        return intersections;
    }

    discriminant(a: number, b: number, c: number): number {
        return Math.pow(b, 2) - 4 * a * c;
    }

    transform(m: Matrix): Ray {
        let d = m.times(this.direction) as Vector;
        let o = m.times(this.origin);

        return new Ray(o, d);
    }
}