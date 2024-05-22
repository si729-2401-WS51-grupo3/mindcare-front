import {Component, Input, OnInit} from '@angular/core';
import {PsicologoEntity} from "../../model/psicologo.entity";
import {AccountManagementApiService} from "../../services/account-management-api.service";
import {MatCard, MatCardModule} from "@angular/material/card";
import {NgForOf, NgIf} from "@angular/common";
import {MatDividerModule} from "@angular/material/divider";
import {MatFormField, MatInput} from "@angular/material/input";
import {MatProgressBar} from "@angular/material/progress-bar";
import {MatIcon} from "@angular/material/icon";
import {MatDatepicker, MatDatepickerInput, MatDatepickerToggle} from "@angular/material/datepicker";
import {MatIconButton} from "@angular/material/button";

@Component({
  selector: 'app-psicologo-cards',
  standalone: true,
  imports: [MatCard, MatCardModule, NgForOf, MatDividerModule, MatInput, MatProgressBar, MatFormField, MatIcon, MatDatepickerToggle, MatDatepicker, MatIconButton, MatDatepickerInput, NgIf],
  templateUrl: './psicologo-cards.component.html',
  styleUrl: './psicologo-cards.component.css'
})
export class PsicologoCardsComponent {
  @Input() psicologos: Array<PsicologoEntity>=[];

  constructor(private accountManagementApiService: AccountManagementApiService) {}

  ngOnInit(): void {
    this.accountManagementApiService.getInfo().subscribe((data: any) => {
      this.psicologos = data;
    });
  }
}
