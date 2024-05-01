import {Component, Input} from '@angular/core';
import {MatCard} from "@angular/material/card";
import {MatCardModule} from '@angular/material/card';
import {NgForOf} from "@angular/common";
import {PatientsApiService} from "../../services/patients-api.service";
import {PatientEntity} from "../../model/patient.entity";
import {MatDividerModule} from "@angular/material/divider";
import {MatInput} from "@angular/material/input";


  @Component({
    selector: 'app-patients-cards',
    standalone: true,
    imports: [MatCard, MatCardModule, NgForOf, MatDividerModule, MatInput],
    templateUrl: './patients-cards.component.html',
    styleUrl: './patients-cards.component.css'
  })
  export class PatientsCardsComponent {
    @Input() pacientes: Array<PatientEntity> = [];
    filteredPacientes: Array<PatientEntity> = [];

    constructor(private patientsApiService: PatientsApiService) {}
    ngOnInit(): void {
      this.patientsApiService.getPatients().subscribe((data: any) => {
        this.pacientes = data;
        this.filteredPacientes = [...this.pacientes];
      });
    }
   applyFilter(event:Event) {
      const filterValue = (event.target as HTMLInputElement).value.trim().toLowerCase();
      this.filteredPacientes = this.pacientes.filter(patient =>
        patient.Name.toLowerCase().includes(filterValue) || patient.LastName.toLowerCase().includes(filterValue)
      );
    }

    protected readonly PatientEntity = PatientEntity;

  }
