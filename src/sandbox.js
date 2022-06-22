"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var color_1 = require("./library/geometry/color");
var canvas_1 = require("./library/visualization/canvas");
var file_1 = require("./library/io/file");
console.log('Running sandbox');
var canvas = new canvas_1.Canvas(1000, 800);
var color1 = new color_1.Color(1, 0, 0);
canvas.writePixel(2, 4, color1);
file_1.File.write("frame.ppm", canvas.toPPM());
//# sourceMappingURL=sandbox.js.map