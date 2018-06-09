import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {TimerComponent} from './timer/timer.component'

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent, TimerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
