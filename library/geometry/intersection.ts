import { Computation } from "./computation";
import { Object3d } from "./object";
import { Ray } from "./ray";

export class Intersection {
    obj: Object3d;
    t: number;

    constructor(obj: Object3d, t: number) {
        this.obj = obj;
        this.t = t;
    }

    prepareComputations(r: Ray): Computation {
        const p = r.position(this.t);

        const eyev = r.direction.negate();
        let normalv = this.obj.normalAt(p);

        let inside = false;

        if (normalv.dot(eyev) < 0) {
            inside = true;
            normalv = normalv.negate();
        }

        let comps: Computation = {
             t: this.t,
             obj: this.obj,
             point: p,
             eyev: eyev,
             normalv: normalv,
             inside: inside,
        };

        return comps;
    }
}