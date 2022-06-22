"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var color_1 = require("./color");
test("color_constructor_createsAColor", function () {
    var color = new color_1.Color(1.5, 6.2, 2.8);
    expect(color.red).toEqual(1.5);
});
test("color_operations_add", function () {
    var color = new color_1.Color(1.5, 6.2, 2.8);
    var color2 = new color_1.Color(1, 2, 3);
    var color3 = color.plus(color2);
    expect(color3).toEqual(new color_1.Color(2.5, 8.2, 5.8));
    expect(color3.red).toEqual(2.5);
});
test("color_operations_multiply", function () {
    var color = new color_1.Color(1.5, 6.2, 2);
    var color2 = new color_1.Color(1, 2, 3);
    var color3 = color.times(color2);
    expect(color3).toEqual(new color_1.Color(1.5, 12.4, 6));
    expect(color3.green).toEqual(12.4);
});
//# sourceMappingURL=color.test.js.map