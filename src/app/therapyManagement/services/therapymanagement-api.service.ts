import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {CitaEntity} from "../model/cita.entity";

@Injectable({
  providedIn: 'root'
})
export class TherapymanagementApiService {
  private baseUrl = 'https://my-json-server.typicode.com/BarbaraQP15/mindcare-therapyManagement'

  constructor(private http: HttpClient) { }

  getCitas(): Observable<any> {
    return this.http.get(`${this.baseUrl}/citas`);
  }
  getReuniones(): Observable<any> {
    return this.http.get(`${this.baseUrl}/reunionesPsicologo`);
  }
}
