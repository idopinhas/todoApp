import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.scss']
})
export class ClockComponent implements OnInit {
  hours: string;
  minutes: string;
  seconds: string;
  date: string;
  constructor() { }

  ngOnInit() {
    this.setCurrentTime();
    this.setDate();
    this.updateTime();
  }

  private setCurrentTime() {
    const time = new Date(Date.now());
    this.hours = this.leftPadZero(time.getHours());
    this.minutes = this.leftPadZero(time.getMinutes());
    this.seconds = this.leftPadZero(time.getSeconds());
  }

  private updateTime(): void {
    setInterval(() => {
      this.setCurrentTime();
    }, 1000);
  }

  private setDate(): void {
    const date = new Date(Date.now());
    this.date = date.getDate() + '/' + date.getMonth()  + '/' + date.getFullYear();
  }

  private leftPadZero(value: number): string {
    return value < 10 ? `0${value}` : value.toString();
  }

}
