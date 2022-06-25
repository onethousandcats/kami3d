import { Matrix } from "../math/matrix";
import { Tuple } from "./tuple";

export class Point extends Tuple {
    constructor();
    constructor(vals: number[]);
    constructor(x: number, y: number, z: number);
    constructor (x?: number | number[], y?: number, z?: number) {
        if (x instanceof Array) {
            super(x);
        }
        else if (typeof(x) === "number") {
            super([x, y, z, 1]);
        }
        else{
            super([0, 0, 0, 1]);
        }
    }
    
    plus(val: Tuple): Point {
        return super.plus(val) as Point;
    }

    minus(val: Tuple): Point {
        return super.minus(val) as Point;
    }

    negate(): Point {
        return Point.zero().minus(this);
    }

    static zero() {
        return new Point();
    }

    toMatrix(): Matrix {
        let m = [];
        this.vals.map(function(n: number, i: number) {
            m.push([n]);
        });

        m.push([1]);

        return new Matrix(m);
    }
}
