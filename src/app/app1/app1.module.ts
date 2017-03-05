import { CommonService } from './../main/common.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { App1Component } from './app1.component';

@NgModule({
  declarations: [
    App1Component
  ],
  imports: [
    BrowserModule
  ],

  providers: [CommonService],
  bootstrap: [App1Component]
})
export class App1Module { }
