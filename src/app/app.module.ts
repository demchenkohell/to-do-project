import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TagComponent } from './components/tag/tag.component';
import { TicketTitleComponent } from './components/ticket-title/ticket-title.component';
import { AddButtonComponent } from './components/add-button/add-button.component';
import { DeadlineComponent } from './components/deadline/deadline.component';
import { TicketIconsetComponent } from './components/ticket-iconset/ticket-iconset.component';
import { ListTicketComponent } from './components/list-ticket/list-ticket.component';
import {ListTicketModule} from "./components/list-ticket/list-ticket.module";
import { WeekTabComponent } from './components/week-tab/week-tab.component';
import { ModalComponent } from './components/modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    AddButtonComponent,
    WeekTabComponent,
    ModalComponent,
  ],
  imports: [
    BrowserModule,
    ListTicketModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
