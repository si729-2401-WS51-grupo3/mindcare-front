import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FinancialManagementApiService {
  private baseUrl = `${environment.serverBasePath}/transactions`;

  constructor(private http: HttpClient) { }

  createTransaction(transaction: any): Observable<any> {
    return this.http.post(`${this.baseUrl}`, transaction);
  }
}
