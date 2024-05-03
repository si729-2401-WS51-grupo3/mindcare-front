import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-patient-doc',
  templateUrl: './patientDoc.component.html',
  standalone: true,
  styleUrls: ['./patientDoc.component.css'],
  imports: [FormsModule]
})
export class PatientDocComponent {
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
