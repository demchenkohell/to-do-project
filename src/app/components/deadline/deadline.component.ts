import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'deadline',
  templateUrl: './deadline.component.html',
  styleUrls: ['./deadline.component.scss']
})
export class DeadlineComponent implements OnInit {
  @Input() date = new Date();

  constructor() { }

  ngOnInit(): void {

  }

}
