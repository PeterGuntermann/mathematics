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
        this.numbers.push(this.primeService.getNumberWithDecomposition(2));
        this.numbers.push(this.primeService.getNumberWithDecomposition(3));
        this.numbers.push(this.primeService.getNumberWithDecomposition(4));
        this.numbers.push(this.primeService.getNumberWithDecomposition(5));
        this.numbers.push(this.primeService.getNumberWithDecomposition(6));
        this.numbers.push(this.primeService.getNumberWithDecomposition(7));
    }
}
