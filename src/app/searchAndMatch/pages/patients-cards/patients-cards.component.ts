import {Component, Input} from '@angular/core';
import {MatCard, MatCardHeader, MatCardModule} from "@angular/material/card";
import {MatDivider, MatDividerModule} from "@angular/material/divider";
import {Patient} from "../../model/patient.entity";
import {SearchandmatchApiService} from "../../services/searchandmatch-api.service";
import {NgForOf} from "@angular/common";
import {MatInput} from "@angular/material/input";

@Component({
  selector: 'app-patients-cards',
  standalone: true,
  imports: [MatCard, MatCardModule, NgForOf, MatDividerModule, MatInput],
  templateUrl: './patients-cards.component.html',
  styleUrl: './patients-cards.component.css'
})
export class PatientsCardsComponent {
  @Input() pacientes: Array<Patient> = [];
  filteredPacientes: Array<Patient> = [];

  constructor(private searchandmatchApiService: SearchandmatchApiService) {}
  ngOnInit(): void {
    this.searchandmatchApiService.getPatients().subscribe((data: any) => {
      this.pacientes = data;
      this.filteredPacientes = [...this.pacientes];
    });
  }
  applyFilter(event:Event) {
    const filterValue = (event.target as HTMLInputElement).value.trim().toLowerCase();
    this.filteredPacientes = this.pacientes.filter(patient =>
      patient.name.toLowerCase().includes(filterValue) || patient.lastName.toLowerCase().includes(filterValue)
    );
  }
}
