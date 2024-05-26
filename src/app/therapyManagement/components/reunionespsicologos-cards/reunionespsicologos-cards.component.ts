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
  selector: 'app-reunionespsicologos-cards',
  standalone: true,
  imports: [MatCard, MatCardModule, NgForOf, MatDividerModule, MatInput, MatProgressBar, MatIcon],
  templateUrl: './reunionespsicologos-cards.component.html',
  styleUrl: './reunionespsicologos-cards.component.css'
})
export class ReunionespsicologosCardsComponent {
  @Input() reuniones: Array<CitaEntity> = [];

  constructor(private therapyManagementApiService: TherapymanagementApiService) {}
  ngOnInit(): void {
    this.therapyManagementApiService.getReuniones().subscribe((data: any) => {
      this.reuniones = data;
    });
  }
}
