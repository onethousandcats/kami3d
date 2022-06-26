import {v4 as uuidv4} from 'uuid';
import { Point } from './point';

export abstract class Object3d {
    id: string;
    position: Point;

    constructor() {
        this.id = uuidv4();
        this.position = new Point();
    }
}