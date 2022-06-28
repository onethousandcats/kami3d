import { Druid, IClassPrototype, Ranger } from "./prototype";

test("prototype_creates_druid", () => {
    const d = new Druid("Sage");

    expect(d.clone()).toBeInstanceOf(Druid);
    expect(JSON.stringify(d.clone())).toBe(
        '{"name":"Unknown","spells":[],"health":100}'
    );
});

test("prototype_creates_ranger", () => {
    const r = new Ranger("Sybil");

    expect(r.clone()).toBeInstanceOf(Ranger);
    expect(JSON.stringify(r.clone())).toBe(
        '{"name":"Sybil","weapon":"Bare Hands","health":150}'
    );
});