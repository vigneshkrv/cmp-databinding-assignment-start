import { Component, Input, OnInit, EventEmitter } from "@angular/core";

@Component({
  selector: "app-even",
  templateUrl: "./even.component.html",
  styleUrls: ["./even.component.css"],
})
export class EvenComponent implements OnInit {
  @Input("evenNumber") evenNumber: number;
  constructor() {}

  ngOnInit(): void {}
}
