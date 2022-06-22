"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Map = void 0;
function Map(val, minIn, maxIn, minOut, maxOut) {
    var fit = (val - minIn) * (maxOut - minOut) / (maxIn - minIn) + minOut;
    fit = Math.min(maxOut, fit);
    fit = Math.max(minOut, fit);
    fit = Math.round(fit);
    return fit;
}
exports.Map = Map;
//# sourceMappingURL=helpers.js.map