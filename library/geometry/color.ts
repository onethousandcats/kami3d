import { Tuple } from "./tuple";

export class Color extends Tuple {
    get red(): number { return this.x; }
    set red(val: number) { this.x = val; }
    get green(): number { return this.y; }
    set green(val: number) { this.y = val; }
    get blue(): number { return this.z; }
    set blue(val: number) { this.z = val; }
    get alpha(): number { return this.w; }
    set alpha(val: number) { this.w = val; }

    constructor();
    constructor(vals: number[]);
    constructor(r: number, g: number, b: number);
    constructor (r?: number | number[], g?: number, b?: number, a?: number) {
        if (r instanceof Array) {
            super(r);
        }
        else if (typeof(r) === "number") {
            super([r, g, b, a ?? 0]);
        }
        else{
            super([0, 0, 0, a ?? 0]);
        }
    }

    plus(val: Tuple): Color {
        return new Color(super.plus(val).vals);
    }

    minus(val: Tuple): Color {
        return new Color(super.minus(val).vals);
    }

    times(val: number | Tuple): Color {
        return new Color(super.times(val).vals);
    }
}
