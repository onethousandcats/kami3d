import './number.extensions';

test("math_helpers_degreesToRadians", () => {
    let degrees = 180;
    let radians = Math.PI;

    expect(degrees.toRadians()).toEqual(radians);
});

test("math_helpers_degreesToRadians", () => {
    let degrees = 90;
    let radians = Math.PI / 2;

    expect(degrees.toRadians()).toEqual(radians);
});

test("math_helpers_radiansToDegrees", () => {
    let radians = Math.PI;
    let degrees = 180;

    expect(radians.toDegrees()).toEqual(degrees);
});

test("math_helpers_radiansToDegrees", () => {
    let radians = 2 * Math.PI;
    let degrees = 360;

    expect(radians.toDegrees()).toEqual(degrees);
});