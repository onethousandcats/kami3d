interface ITuple {
    x: number;
    y: number;
    z: number;
    helloTest(): string;
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

    helloTest(): string {
        return "test";
    }

    _plus(val: Tuple) {
        let results =  this.vals.map(function(n: number, i: number) {
            return n + val.vals[i];
        });

        return new Tuple(results);
    }

    _minus(val: Tuple) {
        let results = this.vals.map(function(n: number, i: number) {
            return n - val[i];
        });

        return new Tuple(results);
    }

    _negate() {
        return Tuple.zero()._minus(this);
    }

    _times(scalar: number) {
        return new Tuple(this.vals.map(o => o * scalar));
    }

    static zero() {
        return new Tuple();
    }
}

export { ITuple, Tuple };