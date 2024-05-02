import { Component } from '@angular/core';
import {MatTab, MatTabGroup, MatTabLabel} from "@angular/material/tabs";
import {PatientsCardsComponent} from "../../../users/components/patients-cards/patients-cards.component";
import {PsychologistCardsComponent} from "../../../users/components/psychologist-cards/psychologist-cards.component";

@Component({
  selector: 'app-header-content',
  standalone: true,
    imports: [
        MatTab,
        MatTabGroup,
        MatTabLabel,
        PatientsCardsComponent,
        PsychologistCardsComponent
    ],
  templateUrl: './header-content.component.html',
  styleUrl: './header-content.component.css'
})
export class HeaderContentComponent {

}
