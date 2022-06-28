"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var color_1 = require("./color");
var material_1 = require("./material");
test("material_cotr_initialValues", function () {
    var m = new material_1.Material();
    expect(m.color).toEqual(new color_1.Color(1, 1, 1));
    expect(m.ambient).toBe(0.1);
    expect(m.diffuse).toBe(0.9);
    expect(m.specular).toBe(0.9);
    expect(m.shininess).toBe(200.0);
});
//# sourceMappingURL=material.test.js.map