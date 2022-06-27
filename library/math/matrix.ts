import { ITuple, Tuple } from "../geometry/tuple";
import { Vector } from "../geometry/vector";
import { Axes } from "./helpers";

interface IMatrix {
    m: number[][];
    toTuple(): ITuple;
}

class Matrix implements IMatrix {
    
    m: number[][];

    constructor();
    constructor(size: number);
    constructor(m: Array<Array<number>>);
    constructor(m?: Array<Array<number>> | number) {
        if (Array.isArray(m)) {
            this.m = m;
        } else {
            let size = m ?? 4;
            this.m = Array(size);
            for (let i = 0; i < size; i++) {
                this.m[i] = Array(size).fill(0);
            }
        }
    }

    static create(m?: Array<Array<number>>): Matrix {
        var prototype = Object.create(Matrix.prototype);
        return prototype;
    }

    get columns(): number { return this.m[0].length; }
    get rows(): number { return this.m.length; }

    get size(): number { return this.columns; }

    get invertible(): boolean { return this.determinant() != 0 }

    times(val: Tuple): Tuple;
    times(val: Matrix): Matrix;
    times(val: Matrix | Tuple): Matrix | Tuple {
        let matrix = val instanceof Tuple ? val.toMatrix() : val;

        let result = new Matrix();

        for (let i = 0; i < this.columns; i++) {
            for (let j = 0; j < this.rows; j++) {
                let r = this.m[j].map(function(n: number, idx: number) {
                    return n * matrix.m[idx][i];
                });

                let sum = r.reduce((a: number, c: number) => {
                    return a + c;
                }, 0);

                result.m[j][i] = sum;
            }
        }

        return val instanceof Tuple ? result.toTuple() : result;
    }

    transpose(): Matrix {
        let transpose = new Matrix();

        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.columns; j++) {
                transpose.m[i][j] = this.m[j][i];
            }
        }

        return transpose;
    }

    inverse(): Matrix {
        if (!this.invertible) {
            return new Matrix();
        }

        let m2 = new Matrix(this.size);

        for (let row = 0; row < this.size; row++) {
            for (let col = 0; col < this.size; col++) {
                let c = this.cofactor(row, col);
                m2.m[col][row] = (c / this.determinant());
            }
        }

        return m2;
    }

    determinant(): number {
        let det = 0;

        if (this.size == 2) {
            det = this.m[0][0] * this.m[1][1] - this.m[0][1] * this.m[1][0];
        } else {
            for(let i = 0; i < this.size; i++) {
                det += this.m[0][i] * this.cofactor(0, i);
            }
        }

        return det;
    }

    clone(): number[][] {
        return this.m.map(o => [...o]);
    }

    submatrix(row: number, column: number): Matrix {
        let copy = this.clone();

        let arr = copy.map(function (val: number[]) {
            val.splice(column, 1);
            return val;
        });

        arr.splice(row, 1);

        return new Matrix(arr);
    }

    minor(row: number, column: number): number {
        return this.submatrix(row, column).determinant();
    }

    cofactor(row: number, column: number): number {
        let minor = this.minor(row, column);

        return (row + column) % 2 == 0 ? minor : -minor;
    }

    toTuple(): ITuple {
        let t = [];

        for (let i = 0; i < 4; i++) {
            t.push(this.m[i][0]);
        }

        return new Tuple(t);
    }

    toVector(): Vector {
        return this.toTuple() as Vector;
    }

    getIdentity(): Matrix {
        return Matrix.identity().times(this);
    }

    rotate(axis: Axes, radians: number): Matrix {
        return Matrix.rotate(axis, radians).times(this);
    }

    static rotate(axis: Axes, radians: number): Matrix {
        let identity = Matrix.identity();

        switch (axis) {
            case "x":
                return Matrix.rotation_x(radians).times(identity);
            case "y":
                return Matrix.rotation_y(radians).times(identity);
            case "z":
                return Matrix.rotation_z(radians).times(identity);
        }
    }

    scale(x: number, y: number, z: number): Matrix {
        return Matrix.scale(x, y, z).times(this);
    }

    shear(xY: number, xZ: number, yX: number, yZ: number, zX: number, zY: number): Matrix {
        return Matrix.shear(xY, xZ, yX, yZ, zX, zY).times(this);
    }

    translate(x: number, y: number, z: number): Matrix {
        return Matrix.translate(x, y, z).times(this);
    }

    static identity() {
        let m = new Matrix();

        for (let i = 0; i < m.columns; i++) {
            m.m[i][i] = 1;
        }

        return m;
    }

    static translate(x: number, y: number, z: number): Matrix {
        let identity = Matrix.identity();

        identity.m[0][3] = x;
        identity.m[1][3] = y;
        identity.m[2][3] = z;

        return identity;
    }

    static scale(x: number, y: number, z: number): Matrix {
        let identity = Matrix.identity();

        identity.m[0][0] = x;
        identity.m[1][1] = y;
        identity.m[2][2] = z;

        return identity;
    }

    static rotation_x(radians: number): Matrix {
        let identity = Matrix.identity();

        identity.m[1][1] = Math.cos(radians);
        identity.m[1][2] = -Math.sin(radians);
        identity.m[2][1] = Math.sin(radians);
        identity.m[2][2] = Math.cos(radians);

        return identity;
    }

    static rotation_y(radians: number): Matrix {
        let identity = Matrix.identity();

        identity.m[0][0] = Math.cos(radians);
        identity.m[2][0] = -Math.sin(radians);
        identity.m[0][2] = Math.sin(radians);
        identity.m[2][2] = Math.cos(radians);

        return identity;
    }

    static rotation_z(radians: number): Matrix {
        let identity = Matrix.identity();

        identity.m[0][0] = Math.cos(radians);
        identity.m[0][1] = -Math.sin(radians);
        identity.m[1][0] = Math.sin(radians);
        identity.m[1][1] = Math.cos(radians);

        return identity;
    }

    static shear(xY: number, xZ: number, yX: number, yZ: number, zX: number, zY: number): Matrix {
        let identity = Matrix.identity();

        identity.m[0][1] = xY;
        identity.m[0][2] = xZ;
        identity.m[1][0] = yX;
        identity.m[1][2] = yZ;
        identity.m[2][0] = zX;
        identity.m[2][1] = zY;

        return identity;
    }
}

export { IMatrix, Matrix };