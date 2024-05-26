import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  private baseUrl = 'https://my-json-server.typicode.com/EliasYP/Datos-Getwork'

  constructor(private http: HttpClient) { }

  getPatient(): Observable<any> {
    return this.http.get(`${this.baseUrl}/information-patientfinance `);
  }
}
