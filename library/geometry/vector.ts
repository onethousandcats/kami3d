import { ITuple, Tuple } from "./tuple";

export class Vector extends Tuple {
    plus(val: Tuple): Vector {
        return super.plus(val) as Vector;
    }

    minus(val: Tuple): Vector {
        return super.minus(val) as Vector;
    }

    negate(): Vector {
        return super.negate() as Vector;
    }
}
