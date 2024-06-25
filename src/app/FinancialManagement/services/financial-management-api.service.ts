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

  getTransactions(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  getTransactionById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createTransaction(transaction: any): Observable<any> {
    return this.http.post(`${this.baseUrl}`, transaction);
  }

  updateTransaction(id: number, transaction: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, transaction);
  }

  deleteTransaction(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
