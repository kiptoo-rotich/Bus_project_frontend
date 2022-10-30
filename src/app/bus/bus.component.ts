import { Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BusServiceService } from '../bus-service.service';

@Component({
  selector: 'app-bus',
  templateUrl: './bus.component.html',
  styleUrls: ['./bus.component.css']
})

export class BusComponent implements OnInit {
  formGroup!: FormGroup;

  bus:any;
  result:any;
  mybus:any;

  constructor(
    private busService:BusServiceService
  ) { }


  ngOnInit() {
    this.buses()
    this.formGroup=new FormGroup({
      departure: new FormControl("",[Validators.required]),
      destination: new FormControl("", Validators.required)
    })
  }

  searchMyBus(){
    let departure = this.formGroup.value.departure.toLowerCase();
    let destination = this.formGroup.value.destination.toLowerCase();

    this.mybus = this.bus.filter((obj: { source: string; destination: string; }) => obj.source.toLowerCase() == departure && obj.destination.toLowerCase()==destination)
  }
  
  buses(){
    this.busService.getBus().subscribe((list)=>{
      if (list){
        this.bus=JSON.parse(JSON.stringify(list));
      }
    })
  }


}
