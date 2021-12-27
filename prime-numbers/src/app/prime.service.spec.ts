import { TestBed } from "@angular/core/testing";
import { PrimeService } from "./prime.service";

describe("PrimeService", () => {
    beforeEach(() => TestBed.configureTestingModule({}));

    it("should be created", () => {
        const service: PrimeService = TestBed.get(PrimeService);
        expect(service).toBeTruthy();
    });

    describe("calculatePrimeDecomposition", () => {
        it("should decompose 3", () => {});

        it("should decompose 4", () => {});

        it("should decompose 6", () => {});

        it("should decompose 12", () => {});

        it("should decompose 420", () => {});
    });
});
