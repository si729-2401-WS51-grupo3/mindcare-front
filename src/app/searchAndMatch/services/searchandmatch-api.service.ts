import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SearchandmatchApiService {
  private baseUrl = 'https://my-json-server.typicode.com/aksoonie/mindcare-db'

  constructor(private http: HttpClient) { }

  getPatients(): Observable<any> {
    return this.http.get(`${this.baseUrl}/patients`);
  }
  getPsychologists(): Observable<any> {
    return this.http.get(`${this.baseUrl}/psychologists`);
  }
}
