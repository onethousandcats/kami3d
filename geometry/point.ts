import { ITuple, Tuple } from "./tuple";

export class Point extends Tuple {
    plus(val: Tuple): Point {
        return super.plus(val) as Point;
    }

    minus(val: Tuple): Point {
        return super.minus(val) as Point;
    }

    negate(): Point {
        return super.negate() as Point;
    }
}
