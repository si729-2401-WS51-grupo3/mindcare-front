import { Component } from '@angular/core';
import {PsychologistCalenderComponent} from "../../psychologistCalender/components/psychologist-calender/psychologist-calender.component";
import {PsychologistCheckboxComponent} from "../../psychologistCheckbox/components/psychologist-checkbox/psychologist-checkbox.component";

@Component({
  selector: 'app-psicologist-appointment-view',
  standalone: true,
  imports: [PsychologistCalenderComponent, PsychologistCheckboxComponent],
  templateUrl: './psicologist-appointment-view.component.html',
  styleUrl: './psicologist-appointment-view.component.css'
})
export class PsicologistAppointmentViewComponent {

}
