import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'week-tab',
  templateUrl: './week-tab.component.html',
  styleUrls: ['./week-tab.component.scss']
})
export class WeekTabComponent implements OnInit {
  @Output() selectedDayEvent = new EventEmitter<string>();
  private selectedDayNumber = 0;

  public weekSet: {value: string, code: string, number: number, active: boolean}[] = [
    {value: 'm', code: 'Mon', number: 0, active: false},
    {value: 't', code: 'Tue', number: 1, active: false},
    {value: 'w', code: 'Wed', number: 2, active: false},
    {value: 't', code: 'Thu', number: 3, active: false},
    {value: 'f', code: 'Fri', number: 4, active: false},
    {value: 's', code: 'Sat', number: 5, active: false},
    {value: 's', code: 'Sun', number: 6, active: false}
  ];
  public newWeekSet: {value: string, code: string, number: number, active: boolean}[] = [];
  pipe = new DatePipe('en-US');

  constructor() { }

  ngOnInit(): void {
    this.initData();
  }

  private initData(): void {
    const todayDate = this.pipe.transform(Date.now(), 'EE');
    const index = this.weekSet.find(item => item.code === todayDate)?.number || 0;
    if (index > 0) {
      this.newWeekSet = this.weekSet.slice(index, 7);
    }
    for (let i = 0; i < index; i++) {
      this.newWeekSet.push(this.weekSet[i]);
    }
    this.newWeekSet[0].active = true;
  }

  public selectDay(value: {value: string, code: string, number: number, active: boolean}) {
    this.selectedDayNumber = value.number;
    this.selectedDayEvent.emit(value.code);
  }
}
