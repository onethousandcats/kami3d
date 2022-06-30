import { Intersection } from "./intersection";
import { Object3d } from "./object";

export class IntersectionGroup {
    intersections: Intersection[];

    get count(): number { return this.intersections.length; }

    get xs(): Intersection[] { return this.intersections;  }

    private sortByT = (a: Intersection, b: Intersection) => {
        return a.t > b.t ? 1 : -1;
    };

    constructor();
    constructor(intersections: Intersection[]);
    constructor(intersections?: Intersection[]) {
        this.intersections = intersections?.sort(this.sortByT) ?? [];
    }

    add(intersection: Intersection);
    add(t: number, obj: Object3d);
    add(t: number | Intersection, obj?: Object3d) { 
        this.pushSort(t instanceof Intersection ? t : new Intersection(obj, t));
    }

    hit(): Intersection {
        for(let i = 0; i < this.count; i++) {
            if (this.intersections[i].t > 0) {
                return this.intersections[i];
            }
        }

        return null;
    }

    sort() {
        this.xs.sort(this.sortByT);
    }

    combine(xs: IntersectionGroup) {
        this.intersections = [].concat(this.intersections, xs.intersections);
    }

    private pushSort(i: Intersection): number {
        this.intersections.push(i);
        this.sort();
        return this.count;
    }
}