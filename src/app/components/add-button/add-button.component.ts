import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'add-button',
  templateUrl: './add-button.component.html',
  styleUrls: ['./add-button.component.scss']
})
export class AddButtonComponent implements OnInit {
  @Output() newTicketEvent = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  public addNewItem(): void {
    this.newTicketEvent.emit();
  }

}
