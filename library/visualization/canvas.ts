import { Color } from "../geometry/color";
import { Map } from "../math/helpers";

export class Canvas {
    width: number;
    height: number;

    pixels: Color[];

    readonly colorRange: number = 255;
    
    constructor(w: number, h: number) {
        this.width = w;
        this.height = h;

        this.pixels = new Array<Color>(w * h);
    }

    writePixel(x: number, y: number, c: Color) {
        this.pixels[this.getIndex(x, y)] = c;
    }

    pixelAt(x: number, y: number): Color {
        return this.pixels[this.getIndex(x, y)];
    }

    colorOf(x: number): number {
        return Map(x, 0, 1, 0, this.colorRange);
    }

    getIndex(x: number, y: number): number {
        return y * this.width + x;
    }

    toPPM(): Array<string> {
        let file = new Array<string>();
        file.push(`P3`);
        file.push(`${this.width} ${this.height}`);
        file.push(`${this.colorRange}`);

        file = file.concat(this.writePPMBody());

        return file;
    }

    private writePPMBody(): Array<string> {
        let body = new Array<string>();

        for (let y = 0; y < this.height; y++) {
            let row = new Array<string>();
            for (let x = 0; x < this.width; x++) {
                let pixel = this.pixelAt(x, y) ?? new Color();
                row.push(`${this.colorOf(pixel.red)} ${this.colorOf(pixel.green)} ${this.colorOf(pixel.blue)}`);
            }
            body.push(row.join(' '));
        }

        return body;
    }
}
