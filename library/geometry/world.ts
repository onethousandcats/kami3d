import { Matrix } from "../math/matrix";
import { Color } from "./color";
import { Intersection } from "./intersection";
import { IntersectionGroup } from "./intersectionGroup";
import { Object3d } from "./object";
import { Point } from "./point";
import { PointLight } from "./pointLight";
import { Ray } from "./ray";
import { Sphere } from "./sphere";

var _ = require('lodash');

export class World {
    objects: Object3d[];
    lightSource: PointLight;

    constructor() {
        this.objects = [];
        this.lightSource = null;
    }

    static Default() {
        let w = new World();

        const light = new PointLight(new Color(1, 1, 1), new Point(-10, 10, -10));

        let s1 = new Sphere();
        s1.material.color = new Color(0.8, 1.0, 0.6);
        s1.material.diffuse = 0.7;
        s1.material.specular = 0.2;
    
        let s2 = new Sphere();
        s2.transform = Matrix.scale(0.5, 0.5, 0.5);

        w.lightSource = light;
        w.objects.push(s1);
        w.objects.push(s2);

        return w;
    }

    intersect(ray: Ray): IntersectionGroup {
        let xs = new IntersectionGroup();

        for(let obj of this.objects) {
            xs.combine(obj.intersect(ray));
        }
        xs.sort();

        return xs;
    }

    contains(obj: Object3d): boolean {
        return this.objects.some(o => this.shallowEqual(o, obj));
    }

    private shallowEqual(obj1: any, obj2: any) {
        const keys1 = Object.keys(obj1);
        const keys2 = Object.keys(obj2);

        if (keys1.length !== keys2.length) {
            return false;
        }

        for (let key of keys1) {
            if (key != "id" && _.isEqual(obj1[key], obj2[2])) {
                return false;
            }
        }

        return true;
    }
}
