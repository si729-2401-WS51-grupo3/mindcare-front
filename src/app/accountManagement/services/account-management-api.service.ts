import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AccountManagementApiService {
  private baseUrl = 'https://my-json-server.typicode.com/BarbaraQP15/mindcare-therapyManagement'

  constructor(private http: HttpClient) { }

  getInfo(): Observable<any> {
    return this.http.get(`${this.baseUrl}/informacion_psicologo`);
  }
}
