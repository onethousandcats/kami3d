import { Color } from "./color";
import { Point } from "./point";
import { PointLight } from "./pointLight";
import { Vector } from "./vector";

export class Material {
    color: Color;

    ambient: number;
    diffuse: number;
    specular: number;
    shininess: number;

    constructor() {
        this.color = new Color(1, 1, 1);
        this.ambient = 0.1;
        this.diffuse = 0.9;
        this.specular = 0.9;
        this.shininess = 200.0;
    }

    lighting(light: PointLight, p: Point, eyev: Vector, normalv: Vector): Color {
        let effectiveColor = this.color.times(light.intensity);

        let lightv = light.position.minus(p).normalize();

        let ambient = effectiveColor.times(this.ambient);

        let lightDotNormal = lightv.dot(normalv);

        let diffuse: Color, specular: Color;

        if (lightDotNormal < 0) {
            diffuse = Color.black();
            specular = Color.black();
        } else {
            diffuse = effectiveColor.times(this.diffuse).times(lightDotNormal);

            let reflectv = lightv.negate().reflect(normalv);
            let reflectDotEye = reflectv.dot(eyev);

            if (reflectDotEye <= 0) {
                specular = Color.black();
            } else {
                let factor = Math.pow(reflectDotEye, this.shininess);
                specular = light.intensity.times(this.specular).times(factor);
            }
        }

        return ambient.plus(diffuse).plus(specular);
    }
}