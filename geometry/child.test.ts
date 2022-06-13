import { Child } from "./child";

test("child_methods_callsItself", () => {
    var c = new Child();
    
    expect(c.doesChildThing()).toEqual('child');
});

test("child_methods_callsParent", () => {
    var c = new Child();
    
    expect(c.sayHello()).toEqual('howdy');
});