import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.page.html',
  styleUrls: ['./timer.page.scss'],
})
export class TimerPage implements OnInit {
  percent = 0;
  radius = 100;
  outerStrokeWidth = 16;
  outerStrokeColor = '#8d6e63';
  innerStrokeWidth = 8;
  innerStrokeColor = '#e0f7fa';

  totalSeconds = 15; // 25 minutos
  secondsLeft = this.totalSeconds;
  minutes = Math.floor(this.totalSeconds / 60);
  seconds = this.totalSeconds % 60;
  running = false;
  interval:any;

  constructor() {}

  ngOnInit() {
    this.updateClock();
  }

  startTimer() {
    if (!this.running) {
      this.running = true;
      this.interval = setInterval(() => {
        if (this.secondsLeft > 0) {
          this.secondsLeft--;
          this.percent = ((this.totalSeconds - this.secondsLeft) / this.totalSeconds) * 100;
          this.updateClock();
        } else {
          this.pauseTimer();
        }
      }, 1000);
    }
  }

  pauseTimer() {
    if (this.running) {
      this.running = false;
      clearInterval(this.interval);
    }
  }

  resetTimer() {
    this.pauseTimer();
    this.secondsLeft = this.totalSeconds;
    this.percent = 0;
    this.updateClock();
  }

  updateClock() {
    this.minutes = Math.floor(this.secondsLeft / 60);
    this.seconds = this.secondsLeft % 60;
  }
}
