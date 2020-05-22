import { Component, OnInit, Input, OnChanges, OnDestroy } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})

export class TimerComponent implements OnChanges{
  @Input('date') date;
  now;
  target;
  diffDuration;
  years;
  months;
  days;
  hours;
  minutes;
  seconds;

  ngOnChanges() { 
    this.target = moment(this.date, 'YYYY/MM/DD HH:mm:ss');
    setInterval(() => {
      this.now = moment();
      this.diffDuration = moment.duration(this.target.diff(this.now));
      this.days = this.diffDuration.days();
      this.months =  this.diffDuration.months();
      this.years =  this.diffDuration.years();
      this.hours =  this.diffDuration.hours();
      this.minutes =  this.diffDuration.minutes();
      this.seconds =  this.diffDuration.seconds();
    }, 1000)
  }
}
