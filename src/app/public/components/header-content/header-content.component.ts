import { Component } from '@angular/core';
import {MatTab, MatTabGroup, MatTabLabel} from "@angular/material/tabs";
import { PsychologistCardsComponent} from "../../../searchAndMatch/components/psychologist-cards/psychologist-cards.component";
import {PatientsCardsComponent} from "../../../searchAndMatch/components/patients-cards/patients-cards.component";

@Component({
  selector: 'app-header-content',
  standalone: true,
    imports: [MatTab, MatTabGroup, MatTabLabel, PatientsCardsComponent, PsychologistCardsComponent],
  templateUrl: './header-content.component.html',
  styleUrl: './header-content.component.css'
})
export class HeaderContentComponent {

}
