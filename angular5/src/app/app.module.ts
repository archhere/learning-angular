import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MarvelherosComponent } from './marvelheros/marvelheros.component';

@NgModule({
  declarations: [
    AppComponent,
    MarvelherosComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
