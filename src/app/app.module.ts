import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BusComponent } from './bus/bus.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './/app-routing.module';
import { BookingComponent } from './booking/booking.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { TuiRepeatTimesModule } from "@taiga-ui/cdk";


@NgModule({
  declarations: [
    AppComponent,
    BusComponent,
    BookingComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    TuiRepeatTimesModule
  ],
  
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
