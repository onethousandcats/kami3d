"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var color_1 = require("../geometry/color");
var canvas_1 = require("./canvas");
var canvas = new canvas_1.Canvas(10, 20);
test("canvas_init_allPixelsBlack", function () {
    var empty = new color_1.Color(0, 0, 0);
    canvas.pixels.forEach(function (p) {
        expect(p).toEqual(empty);
    });
    expect(canvas.width).toEqual(10);
    expect(canvas.height).toEqual(20);
});
test("canvas_pixels_write", function () {
    var red = new color_1.Color(1, 0, 0);
    canvas.writePixel(2, 3, red);
    expect(canvas.pixelAt(2, 3)).toEqual(red);
});
test("canvas_ppm_writeHeader", function () {
    var ppm = canvas.toPPM();
    var header = new Array();
    header.push("P3");
    header.push("10 20");
    header.push("255");
    expect(ppm.slice(0, 3)).toEqual(header);
});
test("canvas_ppm_writeBody", function () {
    var c = new canvas_1.Canvas(5, 3);
    var c1 = new color_1.Color(1.5, 0, 0);
    var c2 = new color_1.Color(0, 0.5, 0);
    var c3 = new color_1.Color(-0.5, 0, 1);
    c.writePixel(0, 0, c1);
    c.writePixel(2, 1, c2);
    c.writePixel(4, 2, c3);
    var ppm = c.toPPM();
    var body = new Array();
    body.push("255 0 0 0 0 0 0 0 0 0 0 0 0 0 0");
    body.push("0 0 0 0 0 0 0 128 0 0 0 0 0 0 0");
    body.push("0 0 0 0 0 0 0 0 0 0 0 0 0 0 255");
    expect(ppm.slice(3, 6)).toEqual(body);
});
test("canvas_ppm_lineLengthDoesNotExceed70", function () {
    var c = new canvas_1.Canvas(10, 2);
    c.writeAllPixels(new color_1.Color(1, 0.8, 0.6));
    var ppm = c.toPPM();
    var testLines = new Array();
    testLines.push("255 204 153 255 204 153 255 204 153 255 204 153 255 204 153 255 204");
    testLines.push("153 255 204 153 255 204 153 255 204 153 255 204 153");
    testLines.push("255 204 153 255 204 153 255 204 153 255 204 153 255 204 153 255 204");
    testLines.push("153 255 204 153 255 204 153 255 204 153 255 204 153");
    expect(ppm.slice(3, 6)).toEqual;
});
//# sourceMappingURL=canvas.test.js.map