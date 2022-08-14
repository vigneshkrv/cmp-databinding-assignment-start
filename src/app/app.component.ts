import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  receivedNumber: number[] = [];

  isNumberEven: boolean;

  onNumberFired(firedNumber) {
    // console.log(firedNumber);
    this.receivedNumber.push(firedNumber);
  }

  numberOddEven(number) {
    return number % 2 === 0 ? true : false;
  }
}
