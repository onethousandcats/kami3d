"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var builder_1 = require("./builder");
var builder_old_1 = require("./builder.old");
var wb;
beforeEach(function () {
    wb = new builder_old_1.PremiumWebsiteBuilder();
});
test("builder_website_buildsPremiumSiteWithCorrectProperties", function () {
    var website = wb
        .setName("example")
        .setHost("localhost")
        .setPort(3000)
        .build();
    expect(website.isPremium).toBeTruthy();
    expect(website.name).toBe("example");
    expect(website.host).toBe("localhost");
    expect(website.port).toBe(3000);
});
test("builder_website_stepOrderUnimportant", function () {
    var website = wb
        .setPort(3000)
        .setName("example2")
        .setIsPremium(false)
        .setHost("localhost")
        .build();
    expect(website.isPremium).toBeFalsy();
    expect(website.name).toBe("example2");
    expect(website.host).toBe("localhost");
    expect(website.port).toBe(3000);
});
test("builder_generic_buildsUser", function () {
    var user = (0, builder_1.ModelBuilder)()
        .id(1)
        .name("sen")
        .email("sen@ga.net")
        .build();
    expect(user.name).toBe("sen");
});
//# sourceMappingURL=builder.test.js.map