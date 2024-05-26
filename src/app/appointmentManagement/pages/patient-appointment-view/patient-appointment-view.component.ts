import { Component } from '@angular/core';
import {PatientCardComponent} from "../../patientCard/components/patient-card/patient-card.component";
import {PatientCalenderComponent} from "../../patientCard/components/patient-calender/patient-calender.component";

@Component({
  selector: 'app-patient-appointment-view',
  standalone: true,
  imports: [PatientCardComponent, PatientCalenderComponent],
  templateUrl: './patient-appointment-view.component.html',
  styleUrl: './patient-appointment-view.component.css'
})
export class PatientAppointmentViewComponent {

}
