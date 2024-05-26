import {Component, OnInit} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {PatientService} from "../services/patient.service";
import {Patient} from "../model/patient.entity";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-patient-finance',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, NgForOf],
  templateUrl: './patientFinance.component.html',
  styleUrl: './patientFinance.component.css'
})
export class PatientFinanceComponent implements OnInit{
  patients: Array<Patient> = [];

  constructor(private patientInfoApiService: PatientService) {}

  ngOnInit(): void {
    this.patientInfoApiService.getPatient().subscribe((data: Array<Patient>) => {
      this.patients = data;
    });
  }
}
