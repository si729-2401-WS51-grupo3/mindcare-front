import { Component } from '@angular/core';
import {MatTab, MatTabGroup, MatTabLabel} from "@angular/material/tabs";
import {PatientCardComponent} from "../../../TherapyDesign/patientCard/components/patient-card/patient-card.component";
import {PatientNotesComponent} from "../../../TherapyDesign/patientNotes/components/patientNotes.component";
import {PatientDocComponent} from "../../../TherapyDesign/patientDoc/components/patientDoc.component";


@Component({
  selector: 'app-header-content',
  standalone: true,
  imports: [
    MatTab,
    MatTabGroup,
    MatTabLabel,
    PatientCardComponent,
    PatientNotesComponent,
    PatientDocComponent,
  ],
  templateUrl: './header-content.component.html',
  styleUrl: './header-content.component.css'
})
export class HeaderContentComponent {

}
