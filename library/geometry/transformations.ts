import { Matrix } from "../math/matrix";
import { Point } from "./point";
import { Vector } from "./vector";

export class Transformations {
    static View(from: Point, to: Point, up: Vector) {
        let forward = to.minus(from).normalize();
        let upNorm = up.normalize();

        let left = forward.cross(upNorm);
        let trueUp = left.cross(forward);

        let orientation = Matrix.identity();

        for (let i = 0; i < 3; i++) {
            orientation.m[0][i] = left.vals[i];
            orientation.m[1][i] = trueUp.vals[i];
            orientation.m[2][i] = -forward.vals[i];
        }

        return orientation.times(Matrix.translate(-from.x, -from.y, -from.z));
    }

} 