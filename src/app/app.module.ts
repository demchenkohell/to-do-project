import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TagComponent } from './components/tag/tag.component';
import { TicketTitleComponent } from './components/ticket-title/ticket-title.component';
import { AddButtonComponent } from './components/add-button/add-button.component';
import { DeadlineComponent } from './components/deadline/deadline.component';
import { TicketIconsetComponent } from './components/ticket-iconset/ticket-iconset.component';

@NgModule({
  declarations: [
    AppComponent,
    TagComponent,
    TicketTitleComponent,
    AddButtonComponent,
    DeadlineComponent,
    TicketIconsetComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
