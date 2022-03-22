import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'ticket-title',
  templateUrl: './ticket-title.component.html',
  styleUrls: ['./ticket-title.component.scss']
})
export class TicketTitleComponent implements OnInit {
  @Input() title: string = '';
  @Input() isDone: boolean = false;

  public icon = '';

  constructor() { }

  ngOnInit(): void {
    this.setIcon();
  }

  private setIcon(): void {
    this.icon = this.isDone ? 'icon-approve' : 'icon-circle';
  }

  public changeTicketTitle(): void{
    this.isDone = !this.isDone;
    this.setIcon();
  }
}
