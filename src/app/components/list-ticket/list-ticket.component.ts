import {Component, Input, OnInit} from '@angular/core';
import {ticketsMock} from "../../mock-data/ticket-mock";

@Component({
  selector: 'list-ticket',
  templateUrl: './list-ticket.component.html',
  styleUrls: ['./list-ticket.component.scss']
})
export class ListTicketComponent implements OnInit {
  @Input() isListView = false;

  public ticket = ticketsMock[0];

  colors = [
    'red',
    'green',
    'blue',
    'orange',
    'violet'
  ]

  constructor() { }

  ngOnInit(): void {
  }

  func(action: string) {
    console.log(action);
  }

}
