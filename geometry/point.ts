import { ITuple, Tuple } from "./tuple";

export class Point extends Tuple {
    _plus(val: Tuple): Point {
        return super._plus(val) as Point;
    }

    _minus(val: Tuple): Point {
        return super._minus(val) as Point;
    }

    _negate(): Point {
        return super._negate() as Point;
    }
}
