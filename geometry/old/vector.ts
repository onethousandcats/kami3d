import { Tuple } from './tuple';

export class Vector extends Tuple {
    constructor(x: number = 0, y: number = 0, z: number = 0) {
        super(x, y, z);
    }
}