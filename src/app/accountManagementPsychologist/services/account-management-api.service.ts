import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AccountManagementApiService {
  private baseUrl = environment.serverBasePath;

  constructor(private http: HttpClient) { }

  getInfo(): Observable<any> {
    return this.http.get(`${this.baseUrl}/informacion_psicologo`);
  }
  updatePsychologist(psychologist: any):Observable<any> {
    return this.http.put(`${this.baseUrl}/informacion_psicologo/${psychologist.id}`, psychologist);
  }
}
