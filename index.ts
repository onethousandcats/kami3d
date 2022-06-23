import { Color } from "./library/geometry/color";
import { Canvas } from "./library/visualization/canvas";

let app = document.getElementById("app");
let htmlCanvas = <HTMLCanvasElement> document.getElementById("kami-canvas");

let ctx = htmlCanvas.getContext('2d');

let width = htmlCanvas.width;
let height = htmlCanvas.height;

console.log(height);

let canvas = new Canvas(width, height);
let color1 = new Color(1, 0, 0);

canvas.writeAllPixels(color1);

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

