import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-patient-notes',
  templateUrl: './patientNotes.component.html',
  styleUrls: ['./patientNotes.component.css'],
  standalone: true,
  imports: [FormsModule]  // Import FormsModule here
})
export class PatientNotesComponent {
  notas: string[] = [];
  currentNote: string = '';

  guardarNota() {
    this.notas.push(this.currentNote);
    this.currentNote = '';
  }

  mostrarNota(index: number) {
    this.currentNote = this.notas[index];
  }
}
