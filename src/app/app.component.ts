import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {PatientsCardsComponent} from "./users/components/patients-cards/patients-cards.component";
import {MatTab, MatTabGroup, MatTabLabel} from "@angular/material/tabs";
import {PsychologistCardsComponent} from "./users/components/psychologist-cards/psychologist-cards.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PatientsCardsComponent, MatTab, MatTabGroup, MatTabLabel, PsychologistCardsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'mindcare-front';
}
