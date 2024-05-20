import { Component } from '@angular/core';
import {MatCard, MatCardHeader} from "@angular/material/card";
import {MatDivider} from "@angular/material/divider";
import {MatInput} from "@angular/material/input";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-patient-account',
  standalone: true,
  imports: [
    MatCard,
    MatCardHeader,
    MatDivider,
    MatInput,
    NgForOf
  ],
  templateUrl: './patient-account.html',
  styleUrl: './patient-account.css'
})
export class PatientAccount {

}
