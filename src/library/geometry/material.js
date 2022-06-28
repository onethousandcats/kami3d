"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Material = void 0;
var color_1 = require("./color");
var Material = /** @class */ (function () {
    function Material() {
        this.color = new color_1.Color(1, 1, 1);
        this.ambient = 0.1;
        this.diffuse = 0.9;
        this.specular = 0.9;
        this.shininess = 200.0;
    }
    Material.prototype.lighting = function (light, p, eyev, normalv) {
        var effectiveColor = this.color.times(light.intensity);
        var lightv = light.position.minus(p).normalize();
        var ambient = effectiveColor.times(this.ambient);
        var lightDotNormal = lightv.dot(normalv);
        var diffuse, specular;
        if (lightDotNormal < 0) {
            diffuse = color_1.Color.black();
            specular = color_1.Color.black();
        }
        else {
            diffuse = effectiveColor.times(this.diffuse).times(lightDotNormal);
            var reflectv = lightv.negate().reflect(normalv);
            var reflectDotEye = reflectv.dot(eyev);
            if (reflectDotEye <= 0) {
                specular = color_1.Color.black();
            }
            else {
                var factor = Math.pow(reflectDotEye, this.shininess);
                specular = light.intensity.times(this.specular).times(factor);
            }
        }
        return ambient.plus(diffuse).plus(specular);
    };
    return Material;
}());
exports.Material = Material;
//# sourceMappingURL=material.js.map