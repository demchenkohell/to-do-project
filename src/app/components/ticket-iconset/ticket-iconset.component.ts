import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'ticket-iconset',
  templateUrl: './ticket-iconset.component.html',
  styleUrls: ['./ticket-iconset.component.scss']
})
export class TicketIconsetComponent implements OnInit {
  @Input() isInListMode = false;
  @Input() isOpenedTaskMode = false;
  @Output() actionEvent = new EventEmitter<string>();

  public iconArray = [
    {value: 'delete', icon: 'icon-recycle-bin', display: true},
    {value: 'edit', icon: 'icon-edit', display: true},
    {value: 'open', icon: 'icon-upper-right-arrow', display: false}
  ]

  constructor() { }

  ngOnInit(): void {
    this.setData();
  }

  private setData(): void {
    this.isInListMode ? this.iconArray[2].display = true : null;
  }

  public emitEvent(event: string): void {
    this.actionEvent.emit(event);
  }

}
