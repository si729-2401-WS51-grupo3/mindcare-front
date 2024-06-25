import {Component, Input, OnInit} from '@angular/core';
import {MatCard, MatCardModule} from "@angular/material/card";
import {NgForOf} from "@angular/common";
import {MatDividerModule} from "@angular/material/divider";
import {MatInput} from "@angular/material/input";
import {AppointmentEntity} from "../../model/appointment.entity";
import {AppointmentManagementApiService} from "../../services/appointment-management-api.service";
import {PatientService} from "../../../accountManagement/services/patient.service";

@Component({
  selector: 'app-appointments-cards',
  standalone: true,
  imports: [MatCard, MatCardModule, NgForOf, MatDividerModule, MatInput],
  templateUrl: './appointments-cards.component.html',
  styleUrl: './appointments-cards.component.css'
})
export class AppointmentsCardsComponent implements OnInit {
  @Input() appointments: Array<AppointmentEntity> = [];
  patients:any[]=[];
  //filteredAppointments: Array<AppointmentEntity> = [];
  constructor(private appointmentManagementApiService: AppointmentManagementApiService, private patientService: PatientService) {}

  ngOnInit(): void {
    this.appointmentManagementApiService.getAppointments().subscribe((data: any) => {
      this.appointments = data;
      this.appointments.forEach(appointment => {
        console.log(appointment.patientId);
        this.patientService.getPatientById(appointment.patientId).subscribe((patient: any) => {
          this.patients[appointment.id] = patient;
        });
      });
    });
  }
}
