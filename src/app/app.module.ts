import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { BannersListComponent } from './banners-list/banners-list.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import { StoreModule } from '@ngrx/store'

@NgModule({
  declarations: [
    AppComponent,
    BannersListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatPaginatorModule,
    HttpClientModule,
    StoreModule.forRoot({})
  ],
  providers: [],

  bootstrap: [AppComponent]
})
export class AppModule { }
