import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AppointmentManagementApiService {
  private baseUrl = environment.serverBasePath;

  constructor(private http: HttpClient) { }

  getAppointments(): Observable<any> {
    return this.http.get(`${this.baseUrl}/all-appointments`);
  }
  getSchedule(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/schedule/${id}`);
  }
  createReservation(reservation: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/reservations`, reservation);
  }
}
