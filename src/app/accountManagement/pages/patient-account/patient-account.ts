import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientService } from '../../services/patient.service';
import {MatCardModule} from "@angular/material/card";
import {MatDividerModule} from "@angular/material/divider";
import {Patient} from "../../model/patient.entity";
import {FormsModule} from "@angular/forms";
import {MatIcon} from "@angular/material/icon";

@Component({
  selector: 'app-patient-account',
  standalone: true,
  imports: [CommonModule, FormsModule, MatCardModule, MatDividerModule, MatIcon],
  templateUrl: './patient-account.html',
  styleUrls: ['./patient-account.css']
})
export class PatientAccount implements OnInit {
  patients: Patient | null = null;

  constructor(private patientService: PatientService) { }

  ngOnInit(): void {
    this.patientService.getPatients().subscribe(patients => {
      if (patients.length > 0) {
        this.patients = patients[0];
      }
    });
  }

  editEmail: boolean = false;
  editPhone: boolean = false;

  toggleEdit(field: string): void {
    if (field === 'email') {
      this.editEmail = !this.editEmail;
    } else if (field === 'phone') {
      this.editPhone = !this.editPhone;
    }
    //Si se termina de editar el campo, actualiza la información del paciente
    if (!this.editEmail && !this.editPhone && this.patients) {
      this.patientService.updatePatient(this.patients).subscribe({
        next: (updatedPatient) => {
          console.log('Patient updated successfully', updatedPatient);
          this.patients = updatedPatient;
        },
        error: (error) => {
          console.error('Error updating patient', error);
        }
      });
    }
  }
  saveEdit(field: string): void {
    this.toggleEdit(field);
  }

  cancelEdit(field: string): void {
    this.toggleEdit(field);
  }
}
