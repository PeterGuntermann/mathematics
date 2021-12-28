import { Component, OnInit } from "@angular/core";
import { NUMBERS_TO_SHOW } from "./constants";
import { IntegerNumber } from "./integer-number";
import { PrimeService } from "./prime.service";

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
    numbers: IntegerNumber[] = [];

    constructor(private primeService: PrimeService) {}

    ngOnInit(): void {
        this.calculateNumbers();
    }

    private calculateNumbers() {
        for (let i = 2; i < NUMBERS_TO_SHOW; i++) {
            this.numbers.push(this.primeService.getNumberWithDecomposition(i));
        }
    }
}
