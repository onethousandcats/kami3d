import { ITuple, Tuple } from "./tuple";

export class Point extends Tuple {
    _plus(val: Tuple): Point {
        return super.plus(val) as Point;
    }

    _minus(val: Tuple): Point {
        return super.minus(val) as Point;
    }

    _negate(): Point {
        return super.negate() as Point;
    }
}
