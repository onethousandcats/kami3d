import { ITuple, Tuple } from "./tuple";

export class Color extends Tuple {
    get red(): number { return this.x; }
    set red(val: number) { this.x = val; }
    get green(): number { return this.y; }
    set green(val: number) { this.y = val; }
    get blue(): number { return this.z; }
    set blue(val: number) { this.z = val; }

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
