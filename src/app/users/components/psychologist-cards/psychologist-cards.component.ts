import {Component, Input} from '@angular/core';
import {MatCard} from "@angular/material/card";
import {MatCardModule} from '@angular/material/card';
import {NgForOf} from "@angular/common";
import {PatientEntity} from "../../model/patient.entity";
import {MatDividerModule} from "@angular/material/divider";
import {MatInput} from "@angular/material/input";
import {SearchandmatchApiService} from "../../services/searchandmatch-api.service";

@Component({
  selector: 'app-psychologist-cards',
  standalone: true,
  imports: [MatCard, MatCardModule, NgForOf, MatDividerModule, MatInput],
  templateUrl: './psychologist-cards.component.html',
  styleUrl: './psychologist-cards.component.css'
})
export class PsychologistCardsComponent {
  @Input() psychologists: Array<PatientEntity> = [];
  filteredPsychologists: Array<PatientEntity> = [];

  constructor(private searchandmatchApiService: SearchandmatchApiService) {}
  ngOnInit(): void {
    this.searchandmatchApiService.getPsychologists().subscribe((data: any) => {
      this.psychologists = data;
      this.filteredPsychologists = [...this.psychologists];
    });
  }
  applyFilter(event:Event) {
    const filterValue = (event.target as HTMLInputElement).value.trim().toLowerCase();
    this.filteredPsychologists = this.psychologists.filter(patient =>
      patient.Name.toLowerCase().includes(filterValue) || patient.LastName.toLowerCase().includes(filterValue)
    );
  }
}
