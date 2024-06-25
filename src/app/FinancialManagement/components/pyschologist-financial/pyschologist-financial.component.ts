import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { PsychologistApiService } from '../../../accountManagementPsychologist/services/account-management-api.service';
import { PatientService } from '../../../accountManagement/services/patient.service';
import { AuthService } from '../../../appointmentManagement/components/AuthService/authentication.service-SIMULATION';
import {FinancialManagementApiService} from "../../services/financial-management-api.service"; // Adjust the import path

@Component({
  selector: 'app-pyschologist-financial',
  standalone: true,
  imports: [],
  templateUrl: './pyschologist-financial.component.html',
  styleUrls: ['./pyschologist-financial.component.css']
})
export class PyschologistFinancialComponent implements OnInit {
  reservation: any;
  amount: number = 0;

  constructor(
    private route: ActivatedRoute,
    private psychologistService: PsychologistApiService,
    private patientService: PatientService,
    private http: HttpClient,
    private authService: AuthService,
    private router: Router,
    private transactionService: FinancialManagementApiService // Inject the TransactionService
  ) { }

  ngOnInit(): void {
    this.reservation = history.state.reservation;
  }

  pay(): void {
    const transaction = {
      id: this.generateTransactionId(),
      patientId: this.reservation.patientId,
      psychologistId: this.reservation.psychologistId,
      reservationId: this.reservation.id,
      amount: this.amount
    };

    this.transactionService.createTransaction(transaction).subscribe(
      () => {
        console.log('Transaction added successfully');
      },
      error => {
        console.error('Error adding transaction', error);
      }
    );
  }

  private generateTransactionId(): number {
    return Math.floor(Math.random() * 1000000);
  }
}
