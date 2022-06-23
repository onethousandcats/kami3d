import { ITuple, Tuple } from "../geometry/tuple";

interface IMatrix {
    m: number[][];
    toTuple(): ITuple;
}

export class Matrix implements IMatrix {
    
    m: number[][];

    constructor();
    constructor(m: Array<Array<number>>);
    constructor(m?: Array<Array<number>>) {
        if (m == null) {
            this.m = Array(4);
            for (let i = 0; i < 4; i++) {
                this.m[i] = Array(4).fill(0);
            }
        }
        else {
            this.m = m;
        }
    }

    static create(m?: Array<Array<number>>): Matrix {
        var prototype = Object.create(Matrix.prototype);
        return prototype;
    }

    get columns(): number { return this.m[0].length }
    get rows(): number { return this.m.length }

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