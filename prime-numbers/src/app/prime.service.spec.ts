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

    describe("calculatePrimeDecomposition", () => {
        it("should decompose 3", () => {});

        it("should decompose 4", () => {});

        it("should decompose 6", () => {});

        it("should decompose 12", () => {});

        it("should decompose 420", () => {});
    });
});
