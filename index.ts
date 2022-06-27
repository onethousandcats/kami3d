import { Color } from "./library/geometry/color";
import { Point } from "./library/geometry/point";
import { Ray } from "./library/geometry/ray";
import { Sphere } from "./library/geometry/sphere";
import { Canvas } from "./library/visualization/canvas";

let app = document.getElementById("app");
let htmlCanvas = <HTMLCanvasElement> document.getElementById("kami-canvas");

let ctx = htmlCanvas.getContext('2d');

let width = htmlCanvas.width;
let height = htmlCanvas.height;

let canvas = new Canvas(width, height);
let color1 = new Color(1, 0.5, 0);

canvas.writeAllPixels(color1);

//make sphere silhouette
let rayOrigin = new Point(0, 0, -5);
let wallZ = 10;
let wallSize = 7;

let pixelSize = wallSize / width;
let middle = wallSize / 2;

let pixelSizeH = wallSize / height;

let color2 = new Color(0, 0, 1);
let sphere = new Sphere();

for (let y = 0; y < height - 1; y++) {
    let worldY = middle - pixelSize * y;
    for (let x = 0; x < width - 1; x++) {
        let worldX = -middle + pixelSize * x;
        let position = new Point(worldX, worldY, wallZ);

        let r = new Ray(rayOrigin, (position.minus(rayOrigin)).normalize());
        let xs = sphere.intersect(r);

        if (xs.hit() != null) {
            canvas.writePixel(x, y, color2);
        }
    } 
}

let pixels = canvas.getPixels();

let imageData = ctx.createImageData(width, height);

let data = imageData.data;

for (let i = 0; i < data.length; i += 4) {
    let idx = i / 4;

    let pixel = pixels[idx];

    if (pixel != null) {
        data[i + 0] = pixel.red; // red
        data[i + 1] = pixel.green; // green
        data[i + 2] = pixel.blue; // blue
        data[i + 3] = 255; // alpha
    }
}

ctx.putImageData(imageData, 0, 0);

