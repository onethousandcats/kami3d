"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.File = void 0;
var fs_1 = require("fs");
var File = /** @class */ (function () {
    function File() {
    }
    File.write = function (fileName, data) {
        var writer = (0, fs_1.createWriteStream)(fileName);
        data.forEach(function (line) { return writer.write("\n".concat(line)); });
        writer.end();
    };
    return File;
}());
exports.File = File;
//# sourceMappingURL=file.js.map