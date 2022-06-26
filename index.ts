import { Color } from "./library/geometry/color";
import { Point } from "./library/geometry/point";
import { Matrix } from "./library/math/matrix";
import { Canvas } from "./library/visualization/canvas";

let app = document.getElementById("app");
let htmlCanvas = <HTMLCanvasElement> document.getElementById("kami-canvas");

let ctx = htmlCanvas.getContext('2d');

let width = htmlCanvas.width;
let height = htmlCanvas.height;

let canvas = new Canvas(width, height);
let color1 = new Color(1, 0.5, 0);

canvas.writeAllPixels(color1);

//make clock

let p12 = new Point();

let translate = Matrix.translate(width / 2, height / 2, 0);

translate.times(p12);

canvas.writePixel(p12.x, p12.y, Color.black());

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

