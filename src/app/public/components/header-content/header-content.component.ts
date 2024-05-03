import { Component } from '@angular/core';
import {MatTab, MatTabGroup, MatTabLabel} from "@angular/material/tabs";
import {CitasCardsComponent} from "../../../therapyManagement/components/citas-cards/citas-cards.component";
import {ReunionesCardsComponent} from "../../../therapyManagement/components/reuniones-cards/reuniones-cards.component";
import {ReunionespsicologosCardsComponent} from "../../../therapyManagement/components/reunionespsicologos-cards/reunionespsicologos-cards.component";

@Component({
  selector: 'app-header-content',
  standalone: true,
  imports: [
    MatTab,
    MatTabGroup,
    MatTabLabel,
    CitasCardsComponent,
    ReunionesCardsComponent,
    ReunionespsicologosCardsComponent,
  ],
  templateUrl: './header-content.component.html',
  styleUrl: './header-content.component.css'
})
export class HeaderContentComponent {

}
