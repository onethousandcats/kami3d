import { Tuple } from "../geometry/tuple";
import { Matrix } from "./matrix";

test ("matrix_cotr_createsEmpty4x4", () => {
    let matrix = new Matrix();
    
    expect(matrix.m[0][0]).toEqual(0);
});

test("matrix_inspection_matches", () => {
    let matrix = new Matrix(
        [[1, 2, 3, 4],
         [5.5, 6.5, 7.5, 8.5],
         [9, 10, 11 , 12],
         [13.5, 14.5, 15.5, 16.5]]);

    expect(matrix.m[0][0]).toEqual(1);
    expect(matrix.m[3][2]).toEqual(15.5);
});

test("matrix_equality_matches", () => {
    let matrix1 = new Matrix(
    [[1, 2, 3, 4],
    [1, 2, 3, 4],
    [1, 2, 3, 4],
    [1, 2, 3, 4]]);

    let matrix2 = new Matrix(
    [[1, 2, 3, 4],
    [1, 2, 3, 4],
    [1, 2, 3, 4],
    [1, 2, 3, 4]]);

    expect(matrix1).toEqual(matrix2);
});

test("matrix_equality_matches", () => {
    let matrix1 = new Matrix(
    [[1, 2, 3, 4],
    [1, 2, 3, 4],
    [1, 2, 3, 4],
    [1, 2, 3, 4]]);

    let matrix2 = new Matrix(
    [[1, 2, 3, 4],
    [1, 2, 3, 5],
    [1, 3, 4, 4],
    [1, 2, 3, 4]]);

    expect(matrix1).not.toEqual(matrix2);
});

test("matrix_functions_multiply", () => {
    let m1 = new Matrix(
    [[1, 2, 3, 4],
    [1, 2, 3, 4],
    [1, 2, 3, 4],
    [1, 2, 3, 4]]);

    let m2 = new Matrix(
    [[1, 2, 3, 4],
    [1, 2, 3, 4],
    [1, 2, 3, 4],
    [1, 2, 3, 4]]);

    let answer = new Matrix(
    [[10, 20, 30, 40],
    [10, 20, 30, 40],
    [10, 20, 30, 40],
    [10, 20, 30, 40]]);

    expect(m1.times(m2)).toEqual(answer);
});

test("matrix_functions_multiplyByTuple", () => {
    let matrix = new Matrix(
    [[1, 2, 3, 4],
    [2, 4, 4, 2],
    [8, 6, 4, 1],
    [0, 0, 0, 1]]);

    let tuple = new Tuple([1, 2, 3, 1]);

    let answer = new Tuple([18, 24, 33, 1]);

    expect(matrix.times(tuple)).toEqual(answer);
});

test("matrix_identity_returnsCorrectMatrix", () => {
    let im = Matrix.identity();

    let answer = new Matrix(
        [[1, 0, 0, 0],
        [0, 1, 0, 0],
        [0, 0, 1, 0],
        [0, 0, 0, 1]]);

    expect(im).toEqual(answer);
});

test("matrix_functions_multiplyByIdentity", () => {
    let matrix = new Matrix(
    [[1, 2, 3, 4],
    [2, 4, 4, 2],
    [8, 6, 4, 1],
    [0, 0, 0, 1]]);

    let identity = Matrix.identity();

    expect(matrix.times(identity)).toEqual(matrix);
});