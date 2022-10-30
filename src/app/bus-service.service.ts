import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import  {Observable } from "rxjs"
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})


export class BusServiceService {

  constructor(private http:HttpClient) { }

  getBus():Observable<any>{
    return this.http.get(`${environment.baseUrl}api/buslist/`)
  }

  create(data: { seat: string; status: number; }){
    return this.http.post(`${environment.baseUrl}bus/booking/`,data)
  }

  getSeatData():Observable<any>{
    return this.http.get(`${environment.baseUrl}bus/booking/`)
  }

  

}
