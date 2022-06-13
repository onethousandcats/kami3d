"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var child_1 = require("./child");
test("child_methods_callsItself", function () {
    var c = new child_1.child();
    expect(c.doesChildThing()).toEqual('child');
});
test("child_methods_callsParent", function () {
    var c = new child_1.child();
    expect(c.sayHello()).toEqual('howdy');
});
//# sourceMappingURL=child.test.js.map