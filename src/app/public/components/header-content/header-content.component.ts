import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatTab, MatTabGroup, MatTabLabel} from "@angular/material/tabs";
import {PsychologistCalenderComponent} from "../../../appointmentManagement/psychologistCalender/components/psychologist-calender/psychologist-calender.component";
import {PsychologistCheckboxComponent} from "../../../appointmentManagement/psychologistCheckbox/components/psychologist-checkbox/psychologist-checkbox.component";
import {PatientCardComponent} from "../../../appointmentManagement/patientCard/components/patient-card/patient-card.component";
import {PatientCalenderComponent} from "../../../appointmentManagement/patientCard/components/patient-calender/patient-calender.component";

@Component({
  selector: 'app-header-content',
  standalone: true,
  imports: [RouterOutlet, MatTab, MatTabGroup, MatTabLabel, PsychologistCalenderComponent, PsychologistCheckboxComponent, PatientCardComponent, PatientCalenderComponent],
  templateUrl: './header-content.component.html',
  styleUrl: './header-content.component.css'
})
export class HeaderContentComponent {
  title = 'mindcare-front';
}
