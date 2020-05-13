import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Child1Component } from './child1/child1.component';
import { NumberService } from './number.service';
import { StringService } from './string.service';

@NgModule({
  declarations: [
    AppComponent,
    Child1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [NumberService, StringService],
  bootstrap: [AppComponent]
})
export class AppModule { }
