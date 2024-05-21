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
          //Actualiza el objeto patients con la respuesta del servidor
          this.patients = updatedPatient;
        },
        error: (error) => {
          console.error('Error updating patient', error);
          //Manejar errores aquí, por ejemplo, mostrar un mensaje de error
        }
      });
    }
  }
  saveEdit(field: string): void {
    // Aquí iría la lógica para guardar los cambios en el servidor
    // Por ejemplo, podrías llamar a this.patientService.updatePatient(this.patients)
    this.toggleEdit(field); // Desactiva el modo de edición
  }

  cancelEdit(field: string): void {
    // Opcional: Restablecer el valor original si se ha modificado
    // Por ejemplo, podrías recargar los datos del paciente desde el servidor
    this.toggleEdit(field); // Desactiva el modo de edición
  }
}
