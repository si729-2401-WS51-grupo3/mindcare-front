import { Routes } from '@angular/router';
import {PsicologistAppointmentViewComponent} from './appointmentManagement/pages/psicologist-appointment-view/psicologist-appointment-view.component';
import {PageNotFoundComponent} from "./public/pages/page-not-found/page-not-found.component";
import {PatientAppointmentViewComponent} from "./appointmentManagement/pages/patient-appointment-view/patient-appointment-view.component";

export const routes: Routes = [
  //parte de patients
  { path: 'psychologist/patients', component: PsicologistAppointmentViewComponent},
  { path: 'psychologist/calendar', component: PsicologistAppointmentViewComponent},
  { path: 'psychologist/meetings', component: PsicologistAppointmentViewComponent},
  { path: 'psychologist/settings', component: PsicologistAppointmentViewComponent},
  //parte de psychologists
  { path: 'patient/psychologists', component:  PatientAppointmentViewComponent},
  { path: 'patient/calendar', component:  PatientAppointmentViewComponent},
  { path: 'patient/meetings', component:  PatientAppointmentViewComponent},
  { path: 'patient/notes', component:  PatientAppointmentViewComponent},
  { path: 'patient/settings', component:  PatientAppointmentViewComponent},
  { path: '', redirectTo: 'psychologist/patients', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];
