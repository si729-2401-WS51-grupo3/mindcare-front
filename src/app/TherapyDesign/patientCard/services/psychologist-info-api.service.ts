import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PsychologistInfoApiService {
  private baseUrl = 'https://my-json-server.typicode.com/EliasYP/Datos-Getwork'

  constructor(private http: HttpClient) { }

  getPsychologist(): Observable<any> {
    return this.http.get(`${this.baseUrl}/information-patient`);
  }
}

