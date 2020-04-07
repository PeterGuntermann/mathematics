import { Interval } from "./interval";

describe("Interval", () => {
    test("should initialize as the unit interval by default", () => {
        const interval = new Interval();

        expect(interval.start).toEqual(0);
        expect(interval.end).toEqual(1);
        expect(interval.size).toEqual(1);
    });

    test("should initialize with given start and end values", () => {
        const interval = new Interval(3.2, 7.4);

        expect(interval.start).toEqual(3.2);
        expect(interval.end).toEqual(7.4);
        expect(interval.size).toEqual(4.2);
    });

    test("should be represented as array correctly", () => {
        const interval = new Interval(0, 5);
        const numPoints = 6;

        const intervalAsArray = interval.asArray(numPoints);

        expect(intervalAsArray).toEqual([0, 1, 2, 3, 4, 5]);
    });
});