import { Routes } from '@angular/router';
import {PsicologistAppointmentViewComponent} from './appointmentManagement/pages/psicologist-appointment-view/psicologist-appointment-view.component';
import {PageNotFoundComponent} from "./public/pages/page-not-found/page-not-found.component";
import {PatientAppointmentViewComponent} from "./appointmentManagement/pages/patient-appointment-view/patient-appointment-view.component";
import {PatientsCardsComponent} from "./searchAndMatch/pages/patients-cards/patients-cards.component";
import {PsychologistCardsComponent} from "./searchAndMatch/pages/psychologist-cards/psychologist-cards.component";
import {PatientAccount} from "./accountManagement/pages/patient-account/patient-account";
import {ReunionesCardsComponent} from "./therapyManagement/components/reuniones-cards/reuniones-cards.component";
import {
  ReunionespsicologosCardsComponent
} from "./therapyManagement/components/reunionespsicologos-cards/reunionespsicologos-cards.component";
import {PatientCardComponent} from "./TherapyDesign/patientCard/components/patient-card/patient-card.component";

export const routes: Routes = [
  //parte de psychologists
  { path: 'psychologist/patients', component: PatientsCardsComponent},
  { path: 'psychologist/calendar', component: PsicologistAppointmentViewComponent},
  { path: 'psychologist/meetings', component: ReunionespsicologosCardsComponent},
  { path: 'psychologist/settings', component: PsicologistAppointmentViewComponent},
  //parte de patients
  { path: 'patient/psychologists', component:  PsychologistCardsComponent},
  { path: 'patient/calendar', component:  PatientAppointmentViewComponent},
  { path: 'patient/meetings', component:  ReunionesCardsComponent},
  { path: 'patient/notes', component:  PatientCardComponent},
  { path: 'patient/settings', component:  PatientAccount},
  { path: '', redirectTo: 'psychologist/patients', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];
