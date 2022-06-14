interface ITuple {
    x: number;
    y: number;
    z: number;

    plus(val: ITuple): ITuple;
    minus(val: ITuple): ITuple;
    times(scalar: number): ITuple;
    dividedBy(scalar: number): ITuple;
    magnitude() : number;
    normalize() : ITuple;
    negate() : ITuple;
    dot(val: ITuple): number;
    cross(val: ITuple): ITuple;
}

class Tuple implements ITuple {
    private vals: number[];

    get x(): number { return this.vals[0]; }   
    set x(val: number) { this.vals[0] = val; }

    get y(): number { return this.vals[1]; }
    set y(val: number) {  this.vals[1] = val; }

    get z(): number { return this.vals[2] };
    set z(val: number) { this.vals[2] = val; }

    constructor();
    constructor(vals: number[]);
    constructor(x: number, y: number, z: number);
    constructor (x?: number | number[], y?: number, z?: number) {
        if (x instanceof Array) {
            this.vals = x;
        }
        else if (typeof(x) === "number") {
            this.vals = [x, y, z];
        }
        else{
            this.vals = [0, 0, 0];
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

    times(scalar: number) {
        return new Tuple(this.vals.map(o => o * scalar));
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

        console.log(new Tuple(crossProduct));

        return new Tuple(crossProduct);
    }

    static zero() {
        return new Tuple();
    }
}

export { ITuple, Tuple };