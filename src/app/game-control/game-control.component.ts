import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() counterEmitter = new EventEmitter<number>();
  counter = 0;
  intervalRef: any;

  constructor() {}

  ngOnInit() {}

  startTheGame() {
    this.intervalRef = setInterval(() => {
      this.onCounterIncrement();
    }, 1000);
  }

  stopTheGame() {
    clearInterval(this.intervalRef);
    this.counter = 0;
  }

  private onCounterIncrement() {
    this.counter++;
    this.counterEmitter.emit(this.counter);
  }
}
