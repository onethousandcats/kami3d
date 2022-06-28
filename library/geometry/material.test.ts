import { Color } from "./color";
import { Material } from "./material";

test("material_cotr_initialValues", () => {
    let m = new Material();

    expect(m.color).toEqual(new Color(1, 1, 1));
    expect(m.ambient).toBe(0.1);
    expect(m.diffuse).toBe(0.9);
    expect(m.specular).toBe(0.9);
    expect(m.shininess).toBe(200.0);
});