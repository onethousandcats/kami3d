import { Tuple } from './tuple';
import { Vector } from './vector';

export class Point extends Tuple {
    getVectorBetween(point: Point) {
        return this._minus(point) as Vector;
    }
}