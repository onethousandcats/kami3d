import { Matrix } from "../math/matrix";
import { Tuple } from "./tuple";

export class Vector extends Tuple {
    constructor();
    constructor(vals: number[]);
    constructor(x: number, y: number, z: number);
    constructor (x?: number | number[], y?: number, z?: number) {
        if (x instanceof Array) {
            super(x);
        }
        else if (typeof(x) === "number") {
            super([x, y, z, 0]);
        }
        else{
            super([0, 0, 0, 0]);
        }
    }

    plus(val: Tuple): Vector {
        return super.plus(val) as Vector;
    }

    minus(val: Tuple): Vector {
        return super.minus(val) as Vector;
    }

    negate(): Vector {
        return super.negate() as Vector;
    }

    toMatrix(): Matrix {
        let m = [];
        this.vals.map(function(n: number, i: number) {
            m.push([n]);
        });

        m.push([0]);

        return new Matrix(m);
    }
}
