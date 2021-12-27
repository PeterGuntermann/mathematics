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

    // TODO: 27.12.2021 Implement with TDD
    calculatePrimeDecomposition(num): number[] {
        const result = [];

        if (this.primes.includes(num)) {
            return [num];
        }

        // TODO: 27.12.2021 Calculate decomposition for non-primes (recursively)
        return result;
    }
}
