import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  private baseUrl = environment.serverBasePath;

  constructor(private http: HttpClient) {
  }

  getPatients(): Observable<any> {
    return this.http.get(`${this.baseUrl}/patients`);
  }
}
