import { Injectable } from "@angular/core";
import { IntegerNumber } from "./integer-number";

@Injectable({
    providedIn: "root",
})
export class PrimeService {
    // TODO: 27.12.2021 Calculate primes in a dynamic and smoart way ;)
    primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29];

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
}
