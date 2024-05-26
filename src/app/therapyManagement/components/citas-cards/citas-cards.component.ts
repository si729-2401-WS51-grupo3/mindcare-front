import {Component, Input} from '@angular/core';
import {MatCard, MatCardModule} from "@angular/material/card";
import {NgForOf} from "@angular/common";
import {MatDividerModule} from "@angular/material/divider";
import {MatInput} from "@angular/material/input";
import {CitaEntity} from "../../model/cita.entity";
import {TherapymanagementApiService} from "../../services/therapymanagement-api.service";
import {MatProgressBar} from "@angular/material/progress-bar";

@Component({
  selector: 'app-citas-cards',
  standalone: true,
  imports: [MatCard, MatCardModule, NgForOf, MatDividerModule, MatInput, MatProgressBar],
  templateUrl: './citas-cards.component.html',
  styleUrl: './citas-cards.component.css'
})
export class CitasCardsComponent {
  @Input() citas: Array<CitaEntity> = [];
  filteredCitas: Array<CitaEntity> = [];

  constructor(private therapyManagementApiService: TherapymanagementApiService) {}
  ngOnInit(): void {
    this.therapyManagementApiService.getCitas().subscribe((data: any) => {
      this.citas = data;
      this.filteredCitas = [...this.citas];
    });
  }
}
