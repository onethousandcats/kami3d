export abstract class Tuple extends Array<number> {
    static zero() {
        return this.constructor();
    }

    get x(): number { return this[0]; }   
    set x(val: number) { this[0] = val; }

    get y(): number { return this[1]; }
    set y(val: number) {  this[1] = val; }

    get z(): number { return this[2] };
    set z(val: number) { this[2] = val; }

    constructor(x: number = 0, y: number = 0, z: number = 0) {
        super(3);
        this[0] = x;
        this[1] = y;
        this[2] = z;
    }

    _plus(val: Tuple) {
        return this.map(function(n: number, i: number) {
            return n + val[i];
        });
    }

    _minus(val: Tuple) {
        return this.map(function(n: number, i: number) {
            return n - val[i];
        });
    }

    _negate() {
        return Tuple.zero()._minus(this);
    }

    _times(scalar: number) {
        return this.map(o => o * scalar);
    }
}