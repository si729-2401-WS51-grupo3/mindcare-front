import { Component } from '@angular/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatCardModule} from '@angular/material/card';
import {provideNativeDateAdapter} from '@angular/material/core';

@Component({
  selector: 'app-psychologist-calender',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [MatCardModule, MatDatepickerModule],
  templateUrl: './psychologist-calender.component.html',
  styleUrl: './psychologist-calender.component.css'
})
export class PsychologistCalenderComponent {
  selected: Date | null;

  constructor() {
    this.selected = null; // Aquí inicializamos selected con null
  }
}
