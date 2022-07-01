interface Number {
    toRadians: () => number;
    toDegrees: () => number;
    toHundredths: () => number;
}

Number.prototype.toRadians = function (): number {
    return (this / 180) * Math.PI;
}

Number.prototype.toDegrees = function (): number {
    return (this / Math.PI) * 180;
}

Number.prototype.toHundredths = function (): number {
    return Math.round(this * 100) / 100;
}