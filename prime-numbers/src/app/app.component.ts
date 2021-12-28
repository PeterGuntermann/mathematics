import { Component, OnInit } from "@angular/core";
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
        for (let i = 2; i < 100; i++) {
            this.numbers.push(this.primeService.getNumberWithDecomposition(i));
        }
    }
}
