"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var singleton_1 = require("./singleton");
test("singleton is a Singleton", function () {
    expect(singleton_1.default.getInstance()).toBe(singleton_1.default.getInstance());
});
//# sourceMappingURL=singleton.test.js.map