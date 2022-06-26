import { Point } from "./point";
import { Tuple } from "./tuple";
import { Vector } from "./vector";

export class Tuples {
    static convertTupleToType(tuple: Tuple) {

        if (tuple.isVector) {
            return new Vector(tuple.vals);
        }

        if (tuple.isPoint) {
            return new Point(tuple.vals);
        }

        return tuple;
    }
}