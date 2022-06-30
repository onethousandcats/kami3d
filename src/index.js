"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var color_1 = require("./library/geometry/color");
var point_1 = require("./library/geometry/point");
var pointLight_1 = require("./library/geometry/pointLight");
var ray_1 = require("./library/geometry/ray");
var sphere_1 = require("./library/geometry/sphere");
var canvas_1 = require("./library/visualization/canvas");
var app = document.getElementById("app");
var htmlCanvas = document.getElementById("kami-canvas");
var ctx = htmlCanvas.getContext('2d');
var width = htmlCanvas.width;
var height = htmlCanvas.height;
var canvas = new canvas_1.Canvas(width, height);
//make sphere silhouette
var rayOrigin = new point_1.Point(0, 0, -5);
var wallZ = 10;
var wallSize = 7;
var pixelSize = wallSize / width;
var middle = wallSize / 2;
var pixelSizeH = wallSize / height;
var sphere = new sphere_1.Sphere();
sphere.material.color = new color_1.Color(1, 0.2, 1);
var lightPosition = new point_1.Point(-10, -10, -10);
var lightColor = new color_1.Color(1, 1, 1);
var light = new pointLight_1.PointLight(lightColor, lightPosition);
for (var y = 0; y < height - 1; y++) {
    var worldY = middle - pixelSize * y;
    for (var x = 0; x < width - 1; x++) {
        var worldX = -middle + pixelSize * x;
        var position = new point_1.Point(worldX, worldY, wallZ);
        var r = new ray_1.Ray(rayOrigin, (position.minus(rayOrigin)).normalize());
        var xs = sphere.intersect(r);
        var hit = xs.hit();
        if (hit != null) {
            var p = r.position(hit.t);
            var n = hit.obj.normalAt(p);
            var eye = r.direction.negate();
            var color = hit.obj.material.lighting(light, p, eye, n);
            canvas.writePixel(x, y, color);
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