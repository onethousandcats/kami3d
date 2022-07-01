import { Matrix } from "../math/matrix";
import '../math/number.extensions';

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
}
