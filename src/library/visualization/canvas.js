"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Canvas = void 0;
var color_1 = require("../geometry/color");
var helpers_1 = require("../math/helpers");
var Canvas = /** @class */ (function () {
    function Canvas(w, h) {
        this.colorRange = 255;
        this.width = w;
        this.height = h;
        this.pixels = new Array(w * h);
    }
    Canvas.prototype.writePixel = function (x, y, c) {
        this.pixels[this.getIndex(x, y)] = c;
    };
    Canvas.prototype.writeAllPixels = function (c) {
        for (var i = 0; i < this.pixels.length; i++) {
            this.pixels[i] = c;
        }
    };
    Canvas.prototype.getPixels = function () {
        var _this = this;
        return this.pixels.map(function (pixel) { return new color_1.Color(_this.colorOf(pixel.red), _this.colorOf(pixel.green), _this.colorOf(pixel.blue)); });
    };
    Canvas.prototype.pixelAt = function (x, y) {
        return this.pixels[this.getIndex(x, y)];
    };
    Canvas.prototype.colorOf = function (x) {
        return (0, helpers_1.Map)(x, 0, 1, 0, this.colorRange);
    };
    Canvas.prototype.getIndex = function (x, y) {
        return y * this.width + x;
    };
    Canvas.prototype.toPPM = function () {
        var file = new Array();
        file.push("P3");
        file.push("".concat(this.width, " ").concat(this.height));
        file.push("".concat(this.colorRange));
        file = file.concat(this.writePPMBody());
        return file;
    };
    Canvas.prototype.writePPMBody = function () {
        var _a;
        var body = new Array();
        for (var y = 0; y < this.height; y++) {
            var row = new Array();
            for (var x = 0; x < this.width; x++) {
                var pixel = (_a = this.pixelAt(x, y)) !== null && _a !== void 0 ? _a : new color_1.Color();
                row.push(pixel);
            }
            var lines = this.splitIntoRowsForLengthRequirement(row);
            body = body.concat(lines);
        }
        return body;
    };
    Canvas.prototype.splitIntoRowsForLengthRequirement = function (items) {
        var _this = this;
        var result = new Array();
        var row = "";
        items.forEach(function (item) {
            for (var i = 0; i < 3; i++) {
                var next = "".concat(_this.colorOf(item.vals[i]), " ");
                if (row.length + next.length > 71) {
                    // start new row
                    result.push(row.trim());
                    row = "";
                }
                row += next;
            }
        });
        result.push(row.trim());
        return result;
    };
    return Canvas;
}());
exports.Canvas = Canvas;
//# sourceMappingURL=canvas.js.map