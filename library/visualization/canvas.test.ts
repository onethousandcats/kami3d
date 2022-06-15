import { Color } from "../geometry/color";
import { Canvas } from "./canvas";

const canvas = new Canvas(10, 20);

test("canvas_init_allPixelsBlack", () => {
    let empty = new Color(0, 0, 0);

    canvas.pixels.forEach(p => {
        expect(p).toEqual(empty);
    });

    expect(canvas.width).toEqual(10);
    expect(canvas.height).toEqual(20);
});

test("canvas_pixels_write", () => {
    let red = new Color(1, 0, 0);
    canvas.writePixel(2, 3, red);

    expect(canvas.pixelAt(2, 3)).toEqual(red);
});

test("canvas_ppm_writeHeader", () => {
    let ppm = canvas.toPPM();

    const header = new Array<string>();
    header.push(`P3`);
    header.push(`10 20`);
    header.push(`255`);

    expect(ppm.slice(0, 3)).toEqual(header);
});

test("canvas_ppm_writeBody", () => {
    let c = new Canvas(5, 3);
    let c1 = new Color(1.5, 0, 0);
    let c2 = new Color(0, 0.5, 0);
    let c3 = new Color(-0.5, 0, 1);

    c.writePixel(0, 0, c1);
    c.writePixel(2, 1, c2);
    c.writePixel(4, 2, c3);

    let ppm = c.toPPM();

    const body = new Array<string>();
    body.push(`255 0 0 0 0 0 0 0 0 0 0 0 0 0 0`);
    body.push(`0 0 0 0 0 0 0 128 0 0 0 0 0 0 0`);
    body.push(`0 0 0 0 0 0 0 0 0 0 0 0 0 0 255`);

    expect(ppm.slice(3, 6)).toEqual(body);
});

