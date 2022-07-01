import { Matrix } from "../math/matrix";
import '../math/number.extensions';
import { Point } from "./point";
import { Ray } from "./ray";

export class Camera {
    hsize: number;
    vsize: number;
    fieldOfView: number;
    tranform: Matrix;

    private halfWidth: number;
    private halfHeight: number;

    constructor(hsize: number, vsize: number, fieldOfView: number) {
        this.hsize = hsize;
        this.vsize = vsize;
        this.fieldOfView = fieldOfView;
        this.tranform = Matrix.identity();
    }

    get pixelSize(): number {
        const halfView = Math.tan(this.fieldOfView / 2);
        const aspect = this.hsize / this.vsize;

        if (aspect >= 1) {
            this.halfWidth = halfView;
            this.halfHeight = halfView / aspect;
        } else {
            this.halfWidth = halfView * aspect;
            this.halfHeight = halfView;
        }

        return ((this.halfWidth * 2) / this.hsize).toHundredths();
    }

    rayAt(x: number, y: number): Ray {
        let ps = this.pixelSize;

        let xOffset = (x + 0.5) * ps;
        let yOffset = (y + 0.5) * ps;

        let worldX = this.halfWidth - xOffset;
        let worldY = this.halfHeight - yOffset;

        let pixel = this.tranform.inverse().times(new Point(worldX, worldY, -1));
        let origin = this.tranform.inverse().times(new Point());

        let direction = pixel.minus(origin).normalize();

        return new Ray(origin, direction);
    }
}
