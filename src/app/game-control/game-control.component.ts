import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-game-control",
  templateUrl: "./game-control.component.html",
  styleUrls: ["./game-control.component.css"],
})
export class GameControlComponent implements OnInit {
  @Output("firedNumber") interval = new EventEmitter<number>();
  eventValue: number = 0;
  eventInterval: any;
  constructor() {}

  ngOnInit(): void {}

  onClickStart() {
    this.eventInterval = setInterval(() => {
      this.eventValue += 1;
      this.interval.emit(this.eventValue);
    }, 1000);
  }
  onClickStop() {
    clearInterval(this.eventInterval);
    this.eventValue = 0;
  }
}
