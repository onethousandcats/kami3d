"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var point_1 = require("../geometry/point");
var tuple_1 = require("../geometry/tuple");
var vector_1 = require("../geometry/vector");
var matrix_1 = require("./matrix");
test("matrix_cotr_createsEmpty4x4", function () {
    var matrix = new matrix_1.Matrix();
    expect(matrix.m[0][0]).toEqual(0);
});
test("matrix_inspection_matches", function () {
    var matrix = new matrix_1.Matrix([[1, 2, 3, 4],
        [5.5, 6.5, 7.5, 8.5],
        [9, 10, 11, 12],
        [13.5, 14.5, 15.5, 16.5]]);
    expect(matrix.m[0][0]).toEqual(1);
    expect(matrix.m[3][2]).toEqual(15.5);
});
test("matrix_equality_matches", function () {
    var matrix1 = new matrix_1.Matrix([[1, 2, 3, 4],
        [1, 2, 3, 4],
        [1, 2, 3, 4],
        [1, 2, 3, 4]]);
    var matrix2 = new matrix_1.Matrix([[1, 2, 3, 4],
        [1, 2, 3, 4],
        [1, 2, 3, 4],
        [1, 2, 3, 4]]);
    expect(matrix1).toEqual(matrix2);
});
test("matrix_equality_matches", function () {
    var matrix1 = new matrix_1.Matrix([[1, 2, 3, 4],
        [1, 2, 3, 4],
        [1, 2, 3, 4],
        [1, 2, 3, 4]]);
    var matrix2 = new matrix_1.Matrix([[1, 2, 3, 4],
        [1, 2, 3, 5],
        [1, 3, 4, 4],
        [1, 2, 3, 4]]);
    expect(matrix1).not.toEqual(matrix2);
});
test("matrix_functions_multiply", function () {
    var m1 = new matrix_1.Matrix([[1, 2, 3, 4],
        [1, 2, 3, 4],
        [1, 2, 3, 4],
        [1, 2, 3, 4]]);
    var m2 = new matrix_1.Matrix([[1, 2, 3, 4],
        [1, 2, 3, 4],
        [1, 2, 3, 4],
        [1, 2, 3, 4]]);
    var answer = new matrix_1.Matrix([[10, 20, 30, 40],
        [10, 20, 30, 40],
        [10, 20, 30, 40],
        [10, 20, 30, 40]]);
    expect(m1.times(m2)).toEqual(answer);
});
test("matrix_multiply_byTuple", function () {
    var matrix = new matrix_1.Matrix([[1, 2, 3, 4],
        [2, 4, 4, 2],
        [8, 6, 4, 1],
        [0, 0, 0, 1]]);
    var tuple = new tuple_1.Tuple([1, 2, 3, 1]);
    var answer = new tuple_1.Tuple([18, 24, 33, 1]);
    expect(matrix.times(tuple)).toEqual(answer);
});
test("matrix_identity_returnsCorrectMatrix", function () {
    var im = matrix_1.Matrix.identity();
    var answer = new matrix_1.Matrix([[1, 0, 0, 0],
        [0, 1, 0, 0],
        [0, 0, 1, 0],
        [0, 0, 0, 1]]);
    expect(im).toEqual(answer);
});
test("matrix_functions_multiplyByIdentity", function () {
    var matrix = new matrix_1.Matrix([[1, 2, 3, 4],
        [2, 4, 4, 2],
        [8, 6, 4, 1],
        [0, 0, 0, 1]]);
    var identity = matrix_1.Matrix.identity();
    expect(matrix.times(identity)).toEqual(matrix);
});
test("matrix_functions_transpose", function () {
    var m = new matrix_1.Matrix([[1, 2, 3, 4],
        [2, 4, 4, 2],
        [8, 6, 4, 1],
        [0, 0, 0, 1]]);
    var answer = new matrix_1.Matrix([[1, 2, 8, 0],
        [2, 4, 6, 0],
        [3, 4, 4, 0],
        [4, 2, 1, 1]]);
    expect(m.transpose()).toEqual(answer);
});
test("matrix_functions_transposeIdentity", function () {
    var m = matrix_1.Matrix.identity();
    expect(m.transpose()).toEqual(m);
});
test("matrix_functions_determinant2x2", function () {
    var m = new matrix_1.Matrix([[1, 5],
        [-3, 2]]);
    expect(m.determinant()).toEqual(17);
});
test("matrix_submatrix_returnsCorrectValues", function () {
    var m = new matrix_1.Matrix([[1, 5, 0],
        [-3, 2, 7],
        [0, 6, -3]]);
    var expected = new matrix_1.Matrix([[-3, 2],
        [0, 6]]);
    expect(m.submatrix(0, 2)).toEqual(expected);
});
test("matrix_submatrix_returnsCorrectValuesAgain", function () {
    var m = new matrix_1.Matrix([[-6, 1, 1, 6],
        [-8, 5, 8, 6],
        [-1, 0, 8, 2],
        [-7, 1, -1, 1]]);
    var expected = new matrix_1.Matrix([[-6, 1, 6],
        [-8, 8, 6],
        [-7, -1, 1]]);
    expect(m.submatrix(2, 1)).toEqual(expected);
});
test("matrix_minor_3x3", function () {
    var m = new matrix_1.Matrix([[3, 5, 0],
        [2, -1, -7],
        [6, -1, 5]]);
    var b = m.submatrix(1, 0);
    expect(b.determinant()).toEqual(25);
    expect(m.minor(1, 0)).toEqual(25);
});
test("matrix_cofactor_returnsCorrectSign", function () {
    var m = new matrix_1.Matrix([[3, 5, 0],
        [2, -1, -7],
        [6, -1, 5]]);
    expect(m.minor(0, 0)).toEqual(-12);
    expect(m.cofactor(0, 0)).toEqual(-12);
    expect(m.minor(1, 0)).toEqual(25);
    expect(m.cofactor(1, 0)).toEqual(-25);
});
test("matrix_determinant_3x3", function () {
    var m = new matrix_1.Matrix([[1, 2, 6],
        [-5, 8, -4],
        [2, 6, 4]]);
    expect(m.cofactor(0, 0)).toEqual(56);
    expect(m.cofactor(0, 1)).toEqual(12);
    expect(m.cofactor(0, 2)).toEqual(-46);
    expect(m.determinant()).toEqual(-196);
});
test("matrix_determinant_4x4", function () {
    var m = new matrix_1.Matrix([[-2, -8, 3, 5],
        [-3, 1, 7, 3],
        [1, 2, -9, 6],
        [-6, 7, 7, -9]]);
    expect(m.cofactor(0, 0)).toEqual(690);
    expect(m.cofactor(0, 1)).toEqual(447);
    expect(m.cofactor(0, 2)).toEqual(210);
    expect(m.cofactor(0, 3)).toEqual(51);
    expect(m.determinant()).toEqual(-4071);
});
test("matrix_inversion_isInvertible", function () {
    var m = new matrix_1.Matrix([[6, 4, 4, 4],
        [5, 5, 7, 6],
        [4, -9, 3, -7],
        [9, 1, 7, -6]]);
    expect(m.determinant()).toEqual(-2120);
    expect(m.invertible).toBeTruthy;
});
test("matrix_inversion_isInvertible", function () {
    var m = new matrix_1.Matrix([[-4, 2, -2, -3],
        [9, 6, 2, 6],
        [0, -5, 1, -5],
        [0, 0, 0, 0]]);
    expect(m.determinant()).toEqual(0);
    expect(m.invertible).toBeFalsy;
});
test("matrix_inverse_computesCorrectly", function () {
    var m = new matrix_1.Matrix([[-5, 2, 6, -8],
        [1, -5, 1, 8],
        [7, 7, -6, -7],
        [1, -3, 7, 4]]);
    var b = m.inverse();
    var result = new matrix_1.Matrix([
        [0.21804511278195488, 0.45112781954887216, 0.24060150375939848, -0.045112781954887216],
        [-0.8082706766917294, -1.4567669172932332, -0.44360902255639095, 0.5206766917293233],
        [-0.07894736842105263, -0.2236842105263158, -0.05263157894736842, 0.19736842105263158],
        [-0.5225563909774437, -0.8139097744360902, -0.3007518796992481, 0.30639097744360905]
    ]);
    expect(m.determinant()).toEqual(532);
    expect(m.cofactor(2, 3)).toEqual(-160);
    expect(b.m[3][2]).toEqual(-160 / 532);
    expect(m.cofactor(3, 2)).toEqual(105);
    expect(b.m[2][3]).toEqual(105 / 532);
    expect(b).toEqual(result);
});
test("matrix_inverse_productMultipliedByInverse", function () {
    var a = new matrix_1.Matrix([
        [3, -9, 7, 3],
        [3, -8, 2, -9],
        [-4, 4, 4, 1],
        [-6, 5, -1, 1]
    ]);
    var b = new matrix_1.Matrix([
        [8, 2, 2, 2],
        [3, -1, 7, 0],
        [7, 0, 5, 4],
        [6, -2, 0, 5]
    ]);
    var c = a.times(b);
    var inverse = b.inverse();
    expect(c.times(inverse).m[0][3]).toBeCloseTo(a.m[0][3]);
});
test("matrix_translation_multiplyByPoint", function () {
    var transform = matrix_1.Matrix.translate(5, -3, 2);
    var point = new point_1.Point(-3, 4, 5);
    var expected = new point_1.Point(2, 1, 7);
    expect(transform.times(point)).toEqual(expected);
});
test("matrix_translation_multiplyByInverseMovesBackwards", function () {
    var transform = matrix_1.Matrix.translate(5, -3, 2);
    var inv = transform.inverse();
    var point = new point_1.Point(-3, 4, 5);
    var expected = new point_1.Point(-8, 7, 3);
    expect(inv.times(point)).toEqual(expected);
});
test("matrix_translation_doesNotAffectVectors", function () {
    var transform = matrix_1.Matrix.translate(5, -3, 2);
    var vector = new vector_1.Vector(-3, 4, 5);
    expect(transform.times(vector)).toEqual(vector);
});
test("matrix_scaling_matrixToPoint", function () {
    var transform = matrix_1.Matrix.scale(2, 3, 4);
    var p = new point_1.Point(-4, 6, 8);
    var expected = new point_1.Point(-8, 18, 32);
    expect(transform.times(p)).toEqual(expected);
});
test("matrix_scaling_matrixToVector", function () {
    var transform = matrix_1.Matrix.scale(2, 3, 4);
    var v = new vector_1.Vector(-4, 6, 8);
    var expected = new vector_1.Vector(-8, 18, 32);
    expect(transform.times(v)).toEqual(expected);
});
test("matrix_scaling_inverse", function () {
    var transform = matrix_1.Matrix.scale(2, 3, 4);
    var inv = transform.inverse();
    var v = new vector_1.Vector(-4, 6, 8);
    var expected = new vector_1.Vector(-2, 2, 2);
    expect(inv.times(v)).toEqual(expected);
});
test("matrix_scaling_reflection", function () {
    var transform = matrix_1.Matrix.scale(-1, 1, 1);
    var p = new point_1.Point(2, 3, 4);
    var expected = new point_1.Point(-2, 3, 4);
    expect(transform.times(p)).toEqual(expected);
});
test("matrix_rotation_aroundX", function () {
    var p = new point_1.Point(0, 1, 0);
    var halfQuarter = matrix_1.Matrix.rotation_x(Math.PI / 4);
    var fullQuarter = matrix_1.Matrix.rotation_x(Math.PI / 2);
    var expectQuarter = new point_1.Point(0, Math.sqrt(2) / 2, Math.sqrt(2) / 2);
    var expectFull = new point_1.Point(0, 0, 1);
    expect(halfQuarter.times(p).x).toBeCloseTo(expectQuarter.x);
    expect(halfQuarter.times(p).y).toBeCloseTo(expectQuarter.y);
    expect(halfQuarter.times(p).z).toBeCloseTo(expectQuarter.z);
    expect(fullQuarter.times(p).x).toBeCloseTo(expectFull.x);
    expect(fullQuarter.times(p).y).toBeCloseTo(expectFull.y);
    expect(fullQuarter.times(p).z).toBeCloseTo(expectFull.z);
});
test("matrix_rotation_aroundXinverse", function () {
    var p = new point_1.Point(0, 1, 0);
    var halfQuarter = matrix_1.Matrix.rotation_x(Math.PI / 4);
    var inv = halfQuarter.inverse();
    var expectQuarter = new point_1.Point(0, Math.sqrt(2) / 2, -Math.sqrt(2) / 2);
    expect(inv.times(p).x).toBeCloseTo(expectQuarter.x);
    expect(inv.times(p).y).toBeCloseTo(expectQuarter.y);
    expect(inv.times(p).z).toBeCloseTo(expectQuarter.z);
});
test("matrix_rotation_aroundY", function () {
    var p = new point_1.Point(0, 0, 1);
    var halfQuarter = matrix_1.Matrix.rotation_y(Math.PI / 4);
    var fullQuarter = matrix_1.Matrix.rotation_y(Math.PI / 2);
    var expectQuarter = new point_1.Point(Math.sqrt(2) / 2, 0, Math.sqrt(2) / 2);
    var expectFull = new point_1.Point(1, 0, 0);
    expect(halfQuarter.times(p).x).toBeCloseTo(expectQuarter.x);
    expect(halfQuarter.times(p).y).toBeCloseTo(expectQuarter.y);
    expect(halfQuarter.times(p).z).toBeCloseTo(expectQuarter.z);
    expect(fullQuarter.times(p).x).toBeCloseTo(expectFull.x);
    expect(fullQuarter.times(p).y).toBeCloseTo(expectFull.y);
    expect(fullQuarter.times(p).z).toBeCloseTo(expectFull.z);
});
test("matrix_rotation_aroundZ", function () {
    var p = new point_1.Point(0, 1, 0);
    var halfQuarter = matrix_1.Matrix.rotation_z(Math.PI / 4);
    var fullQuarter = matrix_1.Matrix.rotation_z(Math.PI / 2);
    var expectQuarter = new point_1.Point(-Math.sqrt(2) / 2, Math.sqrt(2) / 2, 0);
    var expectFull = new point_1.Point(-1, 0, 0);
    expect(halfQuarter.times(p).x).toBeCloseTo(expectQuarter.x);
    expect(halfQuarter.times(p).y).toBeCloseTo(expectQuarter.y);
    expect(halfQuarter.times(p).z).toBeCloseTo(expectQuarter.z);
    expect(fullQuarter.times(p).x).toBeCloseTo(expectFull.x);
    expect(fullQuarter.times(p).y).toBeCloseTo(expectFull.y);
    expect(fullQuarter.times(p).z).toBeCloseTo(expectFull.z);
});
test("matrix_shearing_xInProportionToY", function () {
    var transform = matrix_1.Matrix.shear(1, 0, 0, 0, 0, 0);
    var p = new point_1.Point(2, 3, 4);
    var expected = new point_1.Point(5, 3, 4);
    expect(transform.times(p)).toEqual(expected);
});
test("matrix_shearing_xInProportionToZ", function () {
    var transform = matrix_1.Matrix.shear(0, 1, 0, 0, 0, 0);
    var p = new point_1.Point(2, 3, 4);
    var expected = new point_1.Point(6, 3, 4);
    expect(transform.times(p)).toEqual(expected);
});
test("matrix_shearing_yInProportionToX", function () {
    var transform = matrix_1.Matrix.shear(0, 0, 1, 0, 0, 0);
    var p = new point_1.Point(2, 3, 4);
    var expected = new point_1.Point(2, 5, 4);
    expect(transform.times(p)).toEqual(expected);
});
test("matrix_shearing_yInProportionToZ", function () {
    var transform = matrix_1.Matrix.shear(0, 0, 0, 1, 0, 0);
    var p = new point_1.Point(2, 3, 4);
    var expected = new point_1.Point(2, 7, 4);
    expect(transform.times(p)).toEqual(expected);
});
test("matrix_shearing_zInProportionToX", function () {
    var transform = matrix_1.Matrix.shear(0, 0, 0, 0, 1, 0);
    var p = new point_1.Point(2, 3, 4);
    var expected = new point_1.Point(2, 3, 6);
    expect(transform.times(p)).toEqual(expected);
});
test("matrix_shearing_zInProportionToY", function () {
    var transform = matrix_1.Matrix.shear(0, 0, 0, 0, 0, 1);
    var p = new point_1.Point(2, 3, 4);
    var expected = new point_1.Point(2, 3, 7);
    expect(transform.times(p)).toEqual(expected);
});
test("matrix_identity_getIdentityReturnsItself", function () {
    var m = new matrix_1.Matrix();
    var id = m.getIdentity();
    expect(m).toEqual(id);
});
test("matrix_chaining_individualInSequence", function () {
    var p = new point_1.Point(1, 0, 1);
    var a = matrix_1.Matrix.rotation_x(Math.PI / 2);
    var b = matrix_1.Matrix.scale(5, 5, 5);
    var c = matrix_1.Matrix.translate(10, 5, 7);
    var pRotated = a.times(p);
    var p2 = new point_1.Point(1, -1, 0);
    pRotated.vals.forEach(function (n, i) {
        expect(n).toBeCloseTo(p2.vals[i]);
    });
    var p2Scaled = b.times(p2);
    var p3 = new point_1.Point(5, -5, 0);
    p2Scaled.vals.forEach(function (n, i) {
        expect(n).toBeCloseTo(p3.vals[i]);
    });
    var p4 = new point_1.Point(15, 0, 7);
    expect(c.times(p3)).toEqual(p4);
});
test("matrix_chaining_chainedInReverse", function () {
    var p = new point_1.Point(1, 0, 1);
    var a = matrix_1.Matrix.rotation_x(Math.PI / 2);
    var b = matrix_1.Matrix.scale(5, 5, 5);
    var c = matrix_1.Matrix.translate(10, 5, 7);
    var t = c.times(b.times(a));
    var result = t.times(p);
    var expected = new point_1.Point(15, 0, 7);
    expect(result).toEqual(expected);
});
test("matrix_chaining_fluentAPI", function () {
    var transform = matrix_1.Matrix.identity()
        .rotate("x", Math.PI / 2)
        .scale(5, 5, 5)
        .translate(10, 5, 7);
    var p = new point_1.Point(1, 0, 1);
    var result = transform.times(p);
    var expected = new point_1.Point(15, 0, 7);
    expect(result).toEqual(expected);
});
test("matrix_chaining_rotationsWork", function () {
    var a = matrix_1.Matrix.rotation_x(Math.PI / 2);
    var b = matrix_1.Matrix.identity()
        .rotate("x", Math.PI / 2);
    expect(a).toEqual(b);
});
//# sourceMappingURL=matrix.test.js.map