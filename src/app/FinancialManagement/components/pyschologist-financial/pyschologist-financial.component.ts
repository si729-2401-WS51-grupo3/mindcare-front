import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { PsychologistApiService } from '../../../accountManagementPsychologist/services/account-management-api.service';
import { PatientService } from '../../../accountManagement/services/patient.service';
import { AuthService } from '../../../appointmentManagement/components/AuthService/authentication.service-SIMULATION';
import { FinancialManagementApiService } from '../../services/financial-management-api.service';
import { FormsModule } from '@angular/forms';
import { MatCard, MatCardContent, MatCardHeader, MatCardTitle, MatCardSubtitle } from '@angular/material/card';
import {MatButton} from "@angular/material/button";
import {MatDivider} from "@angular/material/divider";

@Component({
  selector: 'app-pyschologist-financial',
  standalone: true,
  imports: [
    FormsModule,
    MatCard,
    MatCardHeader,
    MatCardContent,
    MatCardTitle,
    MatCardSubtitle,
    MatButton,
    MatDivider
  ],
  templateUrl: './pyschologist-financial.component.html',
  styleUrls: ['./pyschologist-financial.component.css']
})
export class PyschologistFinancialComponent implements OnInit {
  reservation: any;
  amount: number = 90;
  patientName: string = '';
  psychologistName: string = '';

  constructor(
    private route: ActivatedRoute,
    private psychologistService: PsychologistApiService,
    private patientService: PatientService,
    private http: HttpClient,
    private authService: AuthService,
    private router: Router,
    private transactionService: FinancialManagementApiService
  ) { }

  onCancel(): void {
    this.router.navigate(['/psychologist/patients']);
  }

  ngOnInit(): void {
    this.reservation = history.state.reservation;
    this.loadPatientName();
    this.loadPsychologistName();
  }

  loadPatientName(): void {
    const patientId = this.reservation.patientId;
    this.patientService.getPatientById(patientId).subscribe(patient => {
      this.patientName = `${patient.name} ${patient.lastName}`;
    });
  }

  loadPsychologistName(): void {
    const psychologistId = this.reservation.psychologistId;
    this.psychologistService.getPsychologistById(psychologistId).subscribe(psychologist => {
      this.psychologistName = `${psychologist.name} ${psychologist.lastName}`;
    });
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
