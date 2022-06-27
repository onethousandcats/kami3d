"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var color_1 = require("./library/geometry/color");
var point_1 = require("./library/geometry/point");
var ray_1 = require("./library/geometry/ray");
var sphere_1 = require("./library/geometry/sphere");
var canvas_1 = require("./library/visualization/canvas");
var app = document.getElementById("app");
var htmlCanvas = document.getElementById("kami-canvas");
var ctx = htmlCanvas.getContext('2d');
var width = htmlCanvas.width;
var height = htmlCanvas.height;
var canvas = new canvas_1.Canvas(width, height);
var color1 = new color_1.Color(1, 0.5, 0);
canvas.writeAllPixels(color1);
//make sphere silhouette
var rayOrigin = new point_1.Point(0, 0, -5);
var wallZ = 10;
var wallSize = 7;
var pixelSize = wallSize / width;
var middle = wallSize / 2;
var pixelSizeH = wallSize / height;
var color2 = new color_1.Color(0, 0, 1);
var sphere = new sphere_1.Sphere();
for (var y = 0; y < height - 1; y++) {
    var worldY = middle - pixelSize * y;
    for (var x = 0; x < width - 1; x++) {
        var worldX = -middle + pixelSize * x;
        var position = new point_1.Point(worldX, worldY, wallZ);
        var r = new ray_1.Ray(rayOrigin, (position.minus(rayOrigin)).normalize());
        var xs = sphere.intersect(r);
        if (xs.hit() != null) {
            canvas.writePixel(x, y, color2);
        }
    }
}
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