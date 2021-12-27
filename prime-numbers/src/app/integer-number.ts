export class IntegerNumber {
    constructor(public value: number, public primeDecomposition: number[] = []) {}

    printPrimeDecomposition(): string {
        if (this.primeDecomposition.length < 1) {
            return "";
        }

        return this.primeDecomposition.map((prime) => `${prime}`).join(" * ");
    }
}
