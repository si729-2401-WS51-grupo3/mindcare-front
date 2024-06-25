import {Component, OnInit} from '@angular/core';
import { FormsModule } from '@angular/forms';
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-patient-notes',
  templateUrl: 'patientNotes.component.html',
  styleUrls: ['patientNotes.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class PatientNotesComponent implements OnInit{
  notes: string[] = [];
  currentNote: string = '';

  guardarNota() {
    this.notes.push(this.currentNote);
    this.currentNote = '';
  }

  mostrarNota(index: number) {
    this.currentNote = this.notes[index];
  }

  ngOnInit(): void {
  }
}
