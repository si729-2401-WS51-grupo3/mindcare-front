import {Component, inject, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {PsychologistApiService} from "../../../accountManagementPsychologist/services/account-management-api.service";
import {MatDivider} from "@angular/material/divider";
import {MatCard, MatCardContent, MatCardHeader, MatCardTitle} from "@angular/material/card";
import {NgForOf, NgIf, NgOptimizedImage} from "@angular/common";
import {ScheduleEntity} from "../../model/schedule.entity";
import {AppointmentManagementApiService} from "../../services/appointment-management-api.service";
import {MatButton} from "@angular/material/button";
import {MatDialog} from "@angular/material/dialog";
import {DialogAnimationsExampleDialog} from "../dialog-data/dialog-data.component";
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import {PatientService} from "../../../accountManagement/services/patient.service";
import {AuthService} from "../AuthService/authentication.service-SIMULATION";

class AppointmentApiService {
}

@Component({
  selector: 'app-psychologists-schedule',
  standalone: true,
  imports: [
    MatDivider,
    MatCard,
    MatCardContent,
    MatCardHeader,
    MatCardTitle,
    NgForOf,
    NgIf,
    MatButton,
    NgOptimizedImage
  ],
  templateUrl: './psychologists-schedule.component.html',
  styleUrl: './psychologists-schedule.component.css'
})
export class PsychologistsScheduleComponent implements OnInit{
  psychologist: any;
  patient:any;
  schedule: ScheduleEntity = new ScheduleEntity();
  started_hour: number = 0;
  finished_hour: number = 0;
  timeIntervals: string[] = [];
  selectedInterval: string = '';
  private snackBar: MatSnackBar;
  private http: HttpClient;

  constructor(
    private route: ActivatedRoute,
    private psychologistService: PsychologistApiService,
    private patientService: PatientService,
    private appointmentManagementApiService: AppointmentManagementApiService,
    public dialog: MatDialog, snackBar: MatSnackBar,
    http: HttpClient,
    private router: Router, // Add Router here
  private authService: AuthService)
  {
    this.snackBar = snackBar;
    this.http = http;
  }
  onIntervalClick(interval: string): void {
    this.selectedInterval = interval;
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogAnimationsExampleDialog);
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.postReservation(this.selectedInterval);
        console.log(this.selectedInterval)
      }
    });
  }

  postReservation(interval: string): void {// Check the values of patient and psychologist
    const reservation = {
      scheduleId: this.psychologist.scheduleId,
      patientId: this.patient.id,
      psychologistId: this.psychologist.id,
      reservationHour: parseInt(interval.split('-')[0].trim().split(':')[0]),
      reservationDate: new Date().toISOString().split('T')[0]
    };

    this.appointmentManagementApiService.createReservation(reservation).subscribe(
      (reservationResponse) => {
        this.snackBar.open('Reservado con éxito 🧑‍⚕️✅✅', '', {
          duration: 2000,
          panelClass: ['snackbar-success']
        });
        // Navigate to financial component with reservation details
        this.router.navigate(['/financial'], { state: { reservation: reservationResponse } });
      },
      error => {
        console.error(error);
      }
    );  }
  ngOnInit(): void {
    const psychologistId = this.route.snapshot.paramMap.get('id');
    if (psychologistId !== null) {
      const id = Number(psychologistId);
      this.psychologistService.getPsychologistById(id).subscribe((psychologist: any) => {
        this.psychologist = psychologist;
        this.appointmentManagementApiService.getSchedule(psychologist.scheduleId).subscribe((schedule: ScheduleEntity) => {
          this.schedule = schedule;
          this.started_hour = schedule.startedHour;
          this.finished_hour = schedule.finishedHour;
          this.timeIntervals = generateTimeIntervals(this.started_hour,this.finished_hour);
        });
      });

      const patientId = this.authService.getCurrentUserId();
      this.patientService.getPatientById(patientId).subscribe((patient: any) => {
        this.patient = patient;
      });
    }
  }
}

function generateTimeIntervals(startHour: number, endHour: number): string[] {
  let intervals: string[] = [];

  for(let hour = startHour; hour < endHour; hour++) {
    let interval = `${pad(hour)}:00 - ${pad(hour + 1)}:00`;
    intervals.push(interval);
  }

  return intervals;
}
function pad(num: number): string {
  return num < 10 ? `0${num}` : `${num}`;
}
