function Map(val: number, minIn: number, maxIn: number, minOut: number, maxOut: number): number {
    let fit = (val - minIn) * (maxOut - minOut) / (maxIn - minIn) + minOut;

    fit = Math.min(maxOut, fit);
    fit = Math.max(minOut, fit);

    fit = Math.round(fit);

    return fit;
}

type Axes = "x" | "y" | "z";

export { Map, Axes };