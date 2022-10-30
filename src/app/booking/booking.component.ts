import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BusServiceService } from '../bus-service.service';
import { HttpClient } from "@angular/common/http";
import { concat, Observable } from "rxjs"
import { environment } from 'src/environments/environment';
import axios from 'axios';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  val: string = '';
  id!: number;
  bus:any = [];
  busid = this.route.snapshot.params['id'];
  public isPressed = false;
  fare = ""
  capacity = ""
  totalAmount = 0
  numberOfSeats = 0
  submitted = false;
  pay = false
  booked_seats: any = [];

  seats: any = [];

  constructor(private route: ActivatedRoute, private busService: BusServiceService, private http: HttpClient) {
  }

  message = "Select a different seat"

  // Get the number of seat the passenger picks
  getSeatNumber(event: any) {
    let value = parseInt(event.target.innerText);
    this.bookedSeats()
    if (value) {
      if (this.booked_seats.indexOf(value) === -1) {
        this.seats.push(value)
      } else {
        alert("Seat No. " + value + " booked.")
      }
    } else {
      alert(this.message)
    }
  }

  payment() {
    this.pay = true
  }

  //  Get the list of booked seats
  bookedSeats() {
    this.busService.getSeatData().subscribe((data) => {
      for (let i = 0; i < data.length; i++) {
        let list = parseInt(data[i].seat);
        this.booked_seats.push(list)
      }

    })
  }

  //  Get seat number and save to database as booked
  seat_Reservation() {
    const data = {
      seat: this.seats.toString(),
      status: 2,
    };

    this.busService.create(data)
      .subscribe(
        response => {
          this.bookedSeats()
          this.totalAmount = this.numberOfSeats * parseInt(this.fare)
          this.submitted = true;
        }
      )
  }

  // If the user has selected atleast one seat, make reservation
  saveBooking() {
    this.numberOfSeats = this.seats.length
    if (this.numberOfSeats > 0) {
      this.seat_Reservation()
    } else {
      alert("Select seat first!")
    }
  }

  //  Getting details of the current bus the user is interested in
  busDetails() {
    this.getSingleBus().subscribe((bus) => {
      if (bus) {
        this.bus = bus;
        this.fare = bus.fare
        this.capacity = bus.seats
      } else {
        console.log("No bus")
      }
    })
  }


  getSingleBus(): Observable<any> {
    return this.http.get(`${environment.baseUrl}api/bus/${this.busid}`)
  }


  ngOnInit() {
    this.busDetails()
  }

}
