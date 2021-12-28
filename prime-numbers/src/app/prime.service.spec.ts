import { TestBed } from "@angular/core/testing";
import { PrimeService } from "./prime.service";

describe("PrimeService", () => {
    let service: PrimeService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.get(PrimeService);
    });

    it("should be created", () => {
        expect(service).toBeTruthy();
    });

    describe("initPrimes", () => {
        it("should calculate correct prime numbers", () => {
            service.initPrimes(30);
            expect(service.primes).toEqual([2, 3, 5, 7, 11, 13, 17, 19, 23, 29]);
        });
    });

    describe("calculatePrimeDecomposition", () => {
        it("should decompose primes", () => {
            expect(service.calculatePrimeDecomposition(2)).toEqual([2]);
            expect(service.calculatePrimeDecomposition(3)).toEqual([3]);
            expect(service.calculatePrimeDecomposition(5)).toEqual([5]);
            expect(service.calculatePrimeDecomposition(7)).toEqual([7]);
            expect(service.calculatePrimeDecomposition(11)).toEqual([11]);
        });

        it("should decompose into two prime factors", () => {
            expect(service.calculatePrimeDecomposition(4)).toEqual([2, 2]);
            expect(service.calculatePrimeDecomposition(6)).toEqual([2, 3]);
            expect(service.calculatePrimeDecomposition(9)).toEqual([3, 3]);
        });

        it("should decompose into several prime factors", () => {
            expect(service.calculatePrimeDecomposition(12)).toEqual([2, 2, 3]);
            expect(service.calculatePrimeDecomposition(16)).toEqual([2, 2, 2, 2]);
            expect(service.calculatePrimeDecomposition(90)).toEqual([2, 3, 3, 5]);
            expect(service.calculatePrimeDecomposition(420)).toEqual([2, 2, 3, 5, 7]);
        });
    });
});
