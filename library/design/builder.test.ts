import { ModelBuilder, User } from "./builder";
import { IWebsiteBuilder, PremiumWebsiteBuilder } from "./builder.old";

let wb: IWebsiteBuilder;

beforeEach(() => {
    wb = new PremiumWebsiteBuilder();
});

test("builder_website_buildsPremiumSiteWithCorrectProperties", () => {
    const website = wb
        .setName("example")
        .setHost("localhost")
        .setPort(3000)
        .build();

    expect(website.isPremium).toBeTruthy();
    expect(website.name).toBe("example");
    expect(website.host).toBe("localhost");
    expect(website.port).toBe(3000);
});

test("builder_website_stepOrderUnimportant", () => {
    const website = wb
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

test("builder_generic_buildsUser", () => {
    const user = ModelBuilder<User>()
        .id(1)
        .name("sen")
        .email("sen@ga.net")
        .build();

    expect(user.name).toBe("sen");
});