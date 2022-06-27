import {v4 as uuidv4} from 'uuid';
import { Matrix } from '../math/matrix';
import { IntersectionGroup } from './intersectionGroup';
import { Point } from './point';
import { Ray } from './ray';
import { Vector } from './vector';

export abstract class Object3d {
    id: string;
    position: Point;

    constructor() {
        this.id = uuidv4();
        this.position = new Point();
        this.transform = Matrix.identity();
    }

    transform: Matrix;

    intersect(r: Ray): IntersectionGroup {
        let transformedRay = r.transform(this.transform.inverse());
        return transformedRay.intersects(this);
    }

    abstract normalAt(p: Point): Vector;

}