import { CommonService } from './common.service';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MainComponent } from './main/main.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [CommonService],
  declarations: [MainComponent]
})
export class MainModule {
  public ngDoBootstrap() { }
}