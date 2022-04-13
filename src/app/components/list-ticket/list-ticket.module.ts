import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ListTicketComponent} from "./list-ticket.component";
import {TicketTitleComponent} from "../ticket-title/ticket-title.component";
import {TagComponent} from "../tag/tag.component";
import {DeadlineComponent} from "../deadline/deadline.component";
import {TicketIconsetComponent} from "../ticket-iconset/ticket-iconset.component";


@NgModule({
  declarations: [
    ListTicketComponent,
    TicketTitleComponent,
    TagComponent,
    DeadlineComponent,
    TicketIconsetComponent
  ],
  exports: [ListTicketComponent],
  imports: [
    CommonModule,
  ]
})
export class ListTicketModule { }
