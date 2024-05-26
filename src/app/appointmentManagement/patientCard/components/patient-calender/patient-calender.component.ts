import { Component } from '@angular/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatCardModule} from '@angular/material/card';
import {provideNativeDateAdapter} from '@angular/material/core';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-patient-calender',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [MatCardModule, MatDatepickerModule, MatButtonModule, MatTooltipModule, MatIconModule],
  templateUrl: './patient-calender.component.html',
  styleUrl: './patient-calender.component.css'
})
export class PatientCalenderComponent {
  selected: Date | null;

  constructor() {
    this.selected = null; // Aquí inicializamos selected con null
  }
}
