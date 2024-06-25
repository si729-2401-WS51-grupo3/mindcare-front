import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {PsychologistApiService} from "../../../accountManagementPsychologist/services/account-management-api.service";
import {MatDivider} from "@angular/material/divider";
import {MatCard, MatCardContent, MatCardHeader, MatCardTitle} from "@angular/material/card";
import {NgForOf, NgIf, NgOptimizedImage} from "@angular/common";
import {ScheduleEntity} from "../../model/schedule.entity";
import {AppointmentManagementApiService} from "../../services/appointment-management-api.service";
import {MatButton} from "@angular/material/button";

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
  schedule: ScheduleEntity = new ScheduleEntity();
  started_hour: number = 0;
  finished_hour: number = 0;
  timeIntervals: string[] = [];

  constructor(
    private route: ActivatedRoute,
    private psychologistService: PsychologistApiService,
    private appointmentManagementApiService: AppointmentManagementApiService
  )
  {
  }

  ngOnInit(): void {
    const psychologistId = this.route.snapshot.paramMap.get('id');
    if (psychologistId !== null) {
      const id = Number(psychologistId);
      this.psychologistService.getPsychologistById(id).subscribe((psychologist: any) => {
        this.psychologist = psychologist;
        this.appointmentManagementApiService.getSchedule(psychologist.scheduleId).subscribe((schedule: ScheduleEntity) => {
          this.schedule = schedule;
          this.started_hour = schedule.startedHour; // Update here
          this.finished_hour = schedule.finishedHour; // Update here
          console.log(this.started_hour,this.finished_hour);
          this.timeIntervals = generateTimeIntervals(this.started_hour,this.finished_hour); // Update here
        });
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
