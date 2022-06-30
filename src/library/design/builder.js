"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModelBuilder = void 0;
function ModelBuilder() {
    var built = {};
    var builder = new Proxy({}, {
        get: function (target, prop) {
            if ("build" === prop) {
                return function () { return built; };
            }
            return function (x) {
                built[prop.toString()] = x;
                return builder;
            };
        },
    });
    return builder;
}
exports.ModelBuilder = ModelBuilder;
//# sourceMappingURL=builder.js.map