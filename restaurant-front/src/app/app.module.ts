import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { RoutingModule } from './routing/routing.module';

import { AppComponent } from './app.component';
import { PlatsModule } from './plats/plats.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, PlatsModule, HttpClientModule, RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
