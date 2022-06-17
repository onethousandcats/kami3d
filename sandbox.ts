import { Color } from "./library/geometry/color";
import { Canvas } from "./library/visualization/canvas";
import { File } from "./library/io/file";

console.log('Running sandbox');

let canvas = new Canvas(1000, 800);
let color1 = new Color(1, 0, 0);

canvas.writePixel(2, 4, color1);

File.write("frame.ppm", canvas.toPPM());