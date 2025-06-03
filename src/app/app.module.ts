import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { App } from './app';
import { Navbar } from './navbar/navbar';
import { Products } from './products/products';
import { Footer } from './footer/footer';

@NgModule({
  declarations: [
    App,
    Navbar,
    Products,
    Footer
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [App]
})
export class AppModule { }
