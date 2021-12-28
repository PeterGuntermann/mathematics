import { Injectable } from "@angular/core";
import { NUMBERS_TO_SHOW } from "./constants";
import { IntegerNumber } from "./integer-number";

@Injectable({
    providedIn: "root",
})
export class PrimeService {
    primes: number[];

    constructor() {
        this.initPrimes(NUMBERS_TO_SHOW);
    }

    getNumberWithDecomposition(num): IntegerNumber {
        const result = this.calculatePrimeDecomposition(num);
        return new IntegerNumber(num, result);
    }

    calculatePrimeDecomposition(num): number[] {
        const result = [];

        if (this.primes.includes(num)) {
            return [num];
        }

        for (let prime of this.primes) {
            if (num % prime === 0) {
                return [prime, ...this.calculatePrimeDecomposition(num / prime)];
            }
        }

        return result;
    }

    initPrimes(max: number = NUMBERS_TO_SHOW) {
        this.primes = [];

        for (let candidate = 2; candidate < max; candidate++) {
            const hasDivisor = this.primes.some((prime) => candidate % prime === 0);
            if (hasDivisor) continue;
            this.primes.push(candidate);
        }
    }
}
