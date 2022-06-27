import { Object3d } from "./object";

export class Intersection {
    obj: Object3d;
    t: number;

    constructor(obj: Object3d, t: number) {
        this.obj = obj;
        this.t = t;
    }
}