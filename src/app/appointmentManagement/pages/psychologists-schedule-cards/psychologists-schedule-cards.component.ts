import {Component, Input, OnInit} from '@angular/core';
import {AppointmentEntity} from "../../model/appointment.entity";
import {AppointmentManagementApiService} from "../../services/appointment-management-api.service";
import {PsychologistApiService} from "../../../accountManagementPsychologist/services/account-management-api.service";
import {MatCard, MatCardContent, MatCardHeader, MatCardTitle} from "@angular/material/card";
import {MatDivider} from "@angular/material/divider";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-psychologists-schedule-cards',
  standalone: true,
  imports: [
    MatCard,
    MatCardContent,
    MatCardHeader,
    MatCardTitle,
    MatDivider,
    NgForOf
  ],
  templateUrl: './psychologists-schedule-cards.component.html',
  styleUrl: './psychologists-schedule-cards.component.css'
})
export class PsychologistsScheduleCardsComponent implements OnInit{
  @Input() appointments: Array<AppointmentEntity> = [];
  psychologists:any[]=[];
  //filteredAppointments: Array<AppointmentEntity> = [];
  constructor(private appointmentManagementApiService: AppointmentManagementApiService, private psychologistService: PsychologistApiService) {}

  ngOnInit(): void {
    this.appointmentManagementApiService.getAppointments().subscribe((data: any) => {
      this.appointments = data;
      this.appointments.forEach(appointment => {
        console.log(appointment.patientId);
        this.psychologistService.getPsychologistById(appointment.psychologistId).subscribe((psychologist: any) => {
          this.psychologists[appointment.id] = psychologist;
        });
      });
    });
  }
}
