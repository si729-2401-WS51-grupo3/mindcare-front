import {Component, Input} from '@angular/core';
import {MatCard, MatCardModule} from "@angular/material/card";
import {NgForOf} from "@angular/common";
import {MatDividerModule} from "@angular/material/divider";
import {MatInput} from "@angular/material/input";
import {CitaEntity} from "../../model/cita.entity";
import {TherapymanagementApiService} from "../../services/therapymanagement-api.service";
import {MatProgressBar} from "@angular/material/progress-bar";
import {MatIcon} from "@angular/material/icon";

@Component({
  selector: 'app-reuniones-cards',
  standalone: true,
  imports: [MatCard, MatCardModule, NgForOf, MatDividerModule, MatInput, MatProgressBar, MatIcon],
  templateUrl: './reuniones-cards.component.html',
  styleUrl: './reuniones-cards.component.css'
})
export class ReunionesCardsComponent {
  @Input() citas: Array<CitaEntity> = [];

  constructor(private therapyManagementApiService: TherapymanagementApiService) {}
  ngOnInit(): void {
    this.therapyManagementApiService.getCitas().subscribe((data: any) => {
      this.citas = data;
    });
  }
}
