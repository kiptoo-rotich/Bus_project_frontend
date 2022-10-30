import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BookingComponent } from './booking/booking.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { BusComponent } from './bus/bus.component';
const routes: Routes=[
  {
    path: "booking/:id/:source/:destination",
    component: BookingComponent
  },
  {
    path: "",
    component: BusComponent
  },
  {
    path:'**',
    component: NotFoundComponent
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule],
  declarations: []
})
export class AppRoutingModule { }
