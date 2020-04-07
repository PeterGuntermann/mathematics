export class Interval {
    constructor(start = 0, end = 1) {
        this.start = start;
        this.end = end;
    }

    asArray(numPoints) {
        const interval = [];
        for (let i = 0; i < numPoints; ++i) {
            interval.push(i * this.size / (numPoints - 1));
        }
        return interval;
    }

    get size() {
        return this.end - this.start;
    }
}