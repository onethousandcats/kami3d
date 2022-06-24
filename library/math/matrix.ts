import { ITuple, Tuple } from "../geometry/tuple";

interface IMatrix {
    m: number[][];
    toTuple(): ITuple;
}

export class Matrix implements IMatrix {
    
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

    get inverse(): Matrix {
        if (!this.invertible) {
            throw new Error("Not invertible");
        }

        let m2 = new Matrix(this.size);

        for (let row = 0; row < this.size; row++) {
            for (let col = 0; col < this.size; col++) {
                let c = this.cofactor(row, col);
                m2.m[col][row] = c / this.determinant();
            }
        }

        return m2;
    }

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

    static identity() {
        let m = new Matrix();

        for (let i = 0; i < m.columns; i++) {
            m.m[i][i] = 1;
        }

        return m;
    }

}