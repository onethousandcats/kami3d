import { Point } from "../geometry/point";
import { Tuple } from "../geometry/tuple";
import { Vector } from "../geometry/vector";
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

test("matrix_multiply_byTuple", () => {
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

test("matrix_functions_transpose", () => {
    let m = new Matrix(
        [[1, 2, 3, 4],
         [2, 4, 4, 2],
         [8, 6, 4, 1],
         [0, 0, 0, 1]]);

    let answer = new Matrix(
        [[1, 2, 8, 0],
         [2, 4, 6, 0],
         [3, 4, 4, 0],
         [4, 2, 1, 1]]);

    expect(m.transpose()).toEqual(answer);
});

test("matrix_functions_transposeIdentity", () => {
    let m = Matrix.identity();

    expect(m.transpose()).toEqual(m);
});

test("matrix_functions_determinant2x2", () => {
    let m = new Matrix(
        [[1, 5],
         [-3, 2]]);
    
    expect(m.determinant()).toEqual(17);
});

test("matrix_submatrix_returnsCorrectValues", () => {
    let m = new Matrix(
        [[1, 5, 0],
         [-3, 2, 7],
         [0, 6, -3]]);

    let expected = new Matrix(
        [[-3, 2],
         [0, 6]]);
    
    expect(m.submatrix(0, 2)).toEqual(expected);
});

test("matrix_submatrix_returnsCorrectValuesAgain", () => {
    let m = new Matrix(
        [[-6, 1, 1, 6],
         [-8, 5, 8, 6],
         [-1, 0, 8, 2],
         [-7, 1, -1, 1]]);

    let expected = new Matrix(
        [[-6, 1, 6],
         [-8, 8, 6],
         [-7, -1, 1]]);
    
    expect(m.submatrix(2, 1)).toEqual(expected);
});

test("matrix_minor_3x3", () => {
    let m = new Matrix(
        [[3, 5, 0],
        [2, -1, -7],
        [6, -1, 5]]);

    let b = m.submatrix(1, 0);
    
    expect(b.determinant()).toEqual(25);
    expect(m.minor(1, 0)).toEqual(25);
});

test("matrix_cofactor_returnsCorrectSign", () => {
    let m = new Matrix(
        [[3, 5, 0],
        [2, -1, -7],
        [6, -1, 5]]);

    expect(m.minor(0, 0)).toEqual(-12);
    expect(m.cofactor(0, 0)).toEqual(-12);
    expect(m.minor(1, 0)).toEqual(25);
    expect(m.cofactor(1, 0)).toEqual(-25);
});

test("matrix_determinant_3x3", () => {
    let m = new Matrix(
        [[1, 2, 6],
        [-5, 8, -4],
        [2, 6, 4]]);

    expect(m.cofactor(0, 0)).toEqual(56);
    expect(m.cofactor(0, 1)).toEqual(12);
    expect(m.cofactor(0, 2)).toEqual(-46);
    expect(m.determinant()).toEqual(-196);
});

test("matrix_determinant_4x4", () => {
    let m = new Matrix(
        [[-2, -8, 3, 5],
        [-3, 1, 7, 3],
        [1, 2, -9, 6],
        [-6, 7, 7, -9]]);

    expect(m.cofactor(0, 0)).toEqual(690);
    expect(m.cofactor(0, 1)).toEqual(447);
    expect(m.cofactor(0, 2)).toEqual(210);
    expect(m.cofactor(0, 3)).toEqual(51);
    expect(m.determinant()).toEqual(-4071);
});

test("matrix_inversion_isInvertible", () => {
    let m = new Matrix(
        [[6, 4, 4, 4],
        [5, 5, 7, 6],
        [4, -9, 3, -7],
        [9, 1, 7, -6]]);

    expect(m.determinant()).toEqual(-2120);
    expect(m.invertible).toBeTruthy;
});

test("matrix_inversion_isInvertible", () => {
    let m = new Matrix(
        [[-4, 2, -2, -3],
        [9, 6, 2, 6],
        [0, -5, 1, -5],
        [0, 0, 0, 0]]);

    expect(m.determinant()).toEqual(0);
    expect(m.invertible).toBeFalsy;
});

test("matrix_inverse_computesCorrectly", () => {
    let m = new Matrix(
        [[-5, 2, 6, -8],
        [1, -5, 1, 8],
        [7, 7, -6, -7],
        [1, -3, 7, 4]]);

    let b = m.inverse();

    let result = new Matrix([
        [0.21804511278195488, 0.45112781954887216, 0.24060150375939848, -0.045112781954887216],
        [-0.8082706766917294, -1.4567669172932332, -0.44360902255639095, 0.5206766917293233],
        [-0.07894736842105263, -0.2236842105263158, -0.05263157894736842, 0.19736842105263158],
        [-0.5225563909774437, -0.8139097744360902, -0.3007518796992481, 0.30639097744360905]
    ]);

    expect(m.determinant()).toEqual(532);
    expect(m.cofactor(2, 3)).toEqual(-160);
    expect(b.m[3][2]).toEqual(-160/532);
    expect(m.cofactor(3, 2)).toEqual(105);
    expect(b.m[2][3]).toEqual(105/532);
    expect(b).toEqual(result);
});

test("matrix_inverse_productMultipliedByInverse", () => {
    let a = new Matrix([
        [3, -9, 7, 3],
        [3, -8, 2, -9],
        [-4, 4, 4, 1],
        [-6, 5, -1, 1]
    ]);

    let b = new Matrix([
        [8, 2, 2, 2],
        [3, -1, 7, 0],
        [7, 0, 5, 4],
        [6, -2, 0, 5]
    ]);

    let c = a.times(b);
    let inverse = b.inverse();

    expect(c.times(inverse).m[0][3]).toBeCloseTo(a.m[0][3]);
});

test("matrix_translation_multiplyByPoint", () => {
    let transform = Matrix.translation(5, -3, 2);
    let point = new Point(-3, 4, 5);

    let expected = new Point(2, 1, 7);

    expect(transform.times(point)).toEqual(expected);
});

test("matrix_translation_multiplyByInverseMovesBackwards", () => {
    let transform = Matrix.translation(5, -3, 2);
    let inv = transform.inverse();

    let point = new Point(-3, 4, 5);

    let expected = new Point(-8, 7, 3);

    expect(inv.times(point)).toEqual(expected);
});

test("matrix_translation_doesNotAffectVectors", () => {
    let transform = Matrix.translation(5, -3, 2);
    let vector = new Vector(-3, 4, 5);

    expect(transform.times(vector)).toEqual(vector);
});