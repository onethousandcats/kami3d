interface Number {
    toRadians: () => number;
    toDegrees: () => number;
}

Number.prototype.toRadians = function (): number {
    return (this / 180) * Math.PI;
}

Number.prototype.toDegrees = function (): number {
    return (this / Math.PI) * 180;
}