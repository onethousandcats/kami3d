import { Matrix } from "../math/matrix";

interface ITuple {
    x: number;
    y: number;
    z: number;
    w: number;

    vals: number[];

    plus(val: ITuple): ITuple;
    minus(val: ITuple): ITuple;
    times(scalar: number): ITuple;
    times(val: ITuple): ITuple;
    dividedBy(scalar: number): ITuple;
    magnitude() : number;
    normalize() : ITuple;
    negate() : ITuple;
    dot(val: ITuple): number;
    cross(val: ITuple): ITuple;
    reflect(val: ITuple): ITuple;
    toMatrix() : Matrix;

    isPoint: boolean;
    isVector: boolean;
}

class Tuple implements ITuple {
    vals: number[];

    get x(): number { return this.vals[0]; }   
    set x(val: number) { this.vals[0] = val; }

    get y(): number { return this.vals[1]; }
    set y(val: number) {  this.vals[1] = val; }

    get z(): number { return this.vals[2] };
    set z(val: number) { this.vals[2] = val; }

    get w(): number { return this.vals[3] };
    set w(val: number) { this.vals[3] = val; }

    get isPoint(): boolean { return this.w == 1 }
    get isVector(): boolean { return this.w == 0 }

    constructor();
    constructor(vals: number[]);
    constructor(x: number, y: number, z: number);
    constructor(x: number, y: number, z: number, w: number);
    constructor (x?: number | number[], y?: number, z?: number, w?: number) {
        if (x instanceof Array) {
            this.vals = x;
        }
        else if (typeof(x) === "number") {
            this.vals = [x, y, z, w ?? 0];
        }
        else{
            this.vals = [0, 0, 0, w ?? 0];
        }
    }

    plus(val: Tuple) {
        let results =  this.vals.map(function(n: number, i: number) {
            return n + val.vals[i];
        });

        return new Tuple(results);
    }

    minus(val: Tuple) {
        let results = this.vals.map(function(n: number, i: number) {
            return n - val.vals[i];
        });

        return new Tuple(results);
    }

    negate() {
        return Tuple.zero().minus(this);
    }

    times(val: number | Tuple): Tuple {
        if (val instanceof Tuple) {
            let results = this.vals.map(function(n: number, i: number) {
                return n * val.vals[i];
            });

            return new Tuple(results);
        }
        return new Tuple(this.vals.map(o => o * val));
    }

    dividedBy(scalar: number) {
        return new Tuple(this.vals.map(o => o / scalar));
    }

    magnitude(): number {
        let sumOfCoordinates = this.vals.map(o => o * o)
            .reduce((sum, current) => sum + current);

        return Math.sqrt(sumOfCoordinates);
    }

    normalize(): Tuple {
        var magnitude = this.magnitude();
        return new Tuple(this.vals.map(o => o / magnitude));
    }

    dot(val: Tuple): number {
        return this.vals.map(function(n: number, i: number) {
            return n * val.vals[i];
        }).reduce((sum, current) => sum + current);
    }

    cross(val: Tuple): ITuple {
        var crossProduct = [0, 1, 2].map(i => {
            var j = (i + 1) % 3;
            var k = (j + 1) % 3;
            return this.vals[j] * val.vals[k] - this.vals[k] * val.vals[j];
        });

        crossProduct.push(0);

        return new Tuple(crossProduct);
    }

    toHundredth(): Tuple {
        return new Tuple(this.x.toHundredths(), this.y.toHundredths(), this.z.toHundredths());
    }

    reflect(normal: Tuple): Tuple {
        return this.minus(normal.times(2).times(this.dot(normal)));
    }

    toMatrix(): Matrix {
        let m = [];
        this.vals.map(function(n: number, i: number) {
            m.push([n]);
        });

        return new Matrix(m);
    }

    static zero() {
        return new Tuple();
    }
}

export { ITuple, Tuple };