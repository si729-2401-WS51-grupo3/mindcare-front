import {Component, OnInit} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {Psychologist} from "../../model/psychologist.entity";
import {PsychologistInfoApiService} from "../../services/psychologist-info-api.service";
import {NgForOf} from "@angular/common";
import {PatientNotesComponent} from "../../../patientNotes/components/patientNotes.component";
import {PatientDocComponent} from "../../../patientDoc/components/patientDoc.component";

@Component({
  selector: 'app-patient-card',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, NgForOf, PatientNotesComponent, PatientDocComponent],
  templateUrl: './patient-card.component.html',
  styleUrl: './patient-card.component.css'
})
export class PatientCardComponent implements OnInit {
  psychologists: Array<Psychologist> = [];

  constructor(private psychologistInfoApiService: PsychologistInfoApiService) {}

  ngOnInit(): void {
    this.psychologistInfoApiService.getPsychologist().subscribe((data: Array<Psychologist>) => {
      this.psychologists = data;
    });
  }
}
