interface ITuple {
    x: number;
    y: number;
    z: number;
    helloTest(): string;
}

class Tuple extends Array<number> implements ITuple {

    get x(): number { return this[0]; }   
    set x(val: number) { this[0] = val; }

    get y(): number { return this[1]; }
    set y(val: number) {  this[1] = val; }

    get z(): number { return this[2] };
    set z(val: number) { this[2] = val; }

    constructor (x: number = 0, y: number = 0, z: number = 0) {
        super(3);
        this.x = x;
        this.y = y;
        this.z = z;
    }

    helloTest(): string {
        return "test";
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

    static zero() {
        return new Tuple();
    }
}

export { ITuple, Tuple };