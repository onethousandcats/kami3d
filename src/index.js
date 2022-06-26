"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var color_1 = require("./library/geometry/color");
var point_1 = require("./library/geometry/point");
var matrix_1 = require("./library/math/matrix");
var canvas_1 = require("./library/visualization/canvas");
var app = document.getElementById("app");
var htmlCanvas = document.getElementById("kami-canvas");
var ctx = htmlCanvas.getContext('2d');
var width = htmlCanvas.width;
var height = htmlCanvas.height;
var canvas = new canvas_1.Canvas(width, height);
var color1 = new color_1.Color(1, 0.5, 0);
canvas.writeAllPixels(color1);
//make clock
var p12 = new point_1.Point();
var translate = matrix_1.Matrix.translate(width / 2, height / 2, 0);
translate.times(p12);
canvas.writePixel(p12.x, p12.y, color_1.Color.black());
var pixels = canvas.getPixels();
var imageData = ctx.createImageData(width, height);
var data = imageData.data;
for (var i = 0; i < data.length; i += 4) {
    var idx = i / 4;
    var pixel = pixels[idx];
    if (pixel != null) {
        data[i + 0] = pixel.red; // red
        data[i + 1] = pixel.green; // green
        data[i + 2] = pixel.blue; // blue
        data[i + 3] = 255; // alpha
    }
}
ctx.putImageData(imageData, 0, 0);
//# sourceMappingURL=index.js.map