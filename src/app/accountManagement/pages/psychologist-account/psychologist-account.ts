import { Component, OnInit } from '@angular/core';
import { AccountManagementApiService } from '../../services/account-management-api.service';
import { Psicologo } from '../../model/psicologo.entity';
import { MatDivider } from '@angular/material/divider';
import { NgIf } from '@angular/common';
import { MatCard } from '@angular/material/card';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-psychologist-account',
  standalone: true,
  imports: [
    MatDivider,
    NgIf,
    MatCard,
    FormsModule
  ],
  templateUrl: './psychologist-account.html',
  styleUrls: ['./psychologist-account.css']
})
export class PsychologistAccount implements OnInit {
  psychologists: Psicologo | null = null;
  originalPsychologists: Psicologo | null = null;  // Almacena los datos originales

  constructor(private psychologistService: AccountManagementApiService) {}

  ngOnInit(): void {
    this.psychologistService.getInfo().subscribe(psychologists => {
      if (psychologists.length > 0) {
        this.psychologists = psychologists[0];
        this.originalPsychologists = { ...psychologists[0] };  // Guarda los datos originales
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
  }

  saveEdit(field: string): void {
    this.toggleEdit(field);
    if (!this.editEmail && !this.editPhone && this.psychologists) {
      this.psychologistService.updatePsychologist(this.psychologists).subscribe({
        next: (updatePsychologist) => {
          console.log('Psychologist updated successfully', updatePsychologist);
          this.psychologists = updatePsychologist;
          this.originalPsychologists = { ...updatePsychologist };  // Actualiza los datos originales
        },
        error: (error) => {
          console.error('Error updating patient', error);
        }
      });
    }
  }

  cancelEdit(field: string): void {
    if (this.originalPsychologists && this.psychologists) {
      this.psychologists.email = this.originalPsychologists.email;
      this.psychologists.phone = this.originalPsychologists.phone;
    }
    this.toggleEdit(field);
  }
}
