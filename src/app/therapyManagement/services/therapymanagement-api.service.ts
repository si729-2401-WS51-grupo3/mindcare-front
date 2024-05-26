import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class TherapymanagementApiService {
  private baseUrl = environment.serverBasePath;

  constructor(private http: HttpClient) { }

  getCitas(): Observable<any> {
    return this.http.get(`${this.baseUrl}/citas`);
  }
  getReuniones(): Observable<any> {
    return this.http.get(`${this.baseUrl}/reunionesPsicologo`);
  }
}
