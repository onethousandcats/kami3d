import { Color } from "./color";

test("color_constructor_createsAColor", () => {
    let color = new Color(1.5, 6.2, 2.8);
    expect(color.red).toEqual(1.5);
});

test("color_operations_add", () => {
    let color = new Color(1.5, 6.2, 2.8);
    let color2 = new Color(1, 2, 3);
    let color3 = color.plus(color2);

    expect(color3).toEqual(new Color(2.5, 8.2, 5.8));
    expect(color3.red).toEqual(2.5);
});

test("color_operations_multiply", () => {
    let color = new Color(1.5, 6.2, 2);
    let color2 = new Color(1, 2, 3);
    let color3 = color.times(color2);

    expect(color3).toEqual(new Color(1.5, 12.4, 6));
    expect(color3.green).toEqual(12.4);
});