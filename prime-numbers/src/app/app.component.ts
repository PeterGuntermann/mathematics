import { Component, OnInit } from "@angular/core";
import { IntegerNumber } from "./integer-number";

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
    primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29];
    numbers: IntegerNumber[] = [];

    ngOnInit(): void {
        this.calculateNumbers();
    }

    private calculateNumbers() {
        // TODO: 27.12.2021 Calculate decomposition in a service
        this.numbers.push(new IntegerNumber(2, [2]));
        this.numbers.push(new IntegerNumber(3, [3]));
        this.numbers.push(new IntegerNumber(4, [2, 2]));
    }
}
