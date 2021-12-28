export class IntegerNumber {
    constructor(public value: number, public primeDecomposition: number[] = []) {}

    get isPrime(): boolean {
        return this.primeDecomposition.length === 1;
    }

    printPrimeDecomposition(): string {
        if (this.primeDecomposition.length < 1) {
            return "";
        }

        return this.primeDecomposition.map((prime) => `${prime}`).join(" ⋅ ");
    }
}
