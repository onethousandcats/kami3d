import { ITuple, Tuple } from "./tuple";

export class Point extends Tuple {
    _plus(val: Tuple): Point {
        return super._plus(val) as Point;
    }
}
